import toast from 'react-hot-toast';
import styles from './ProductCard.module.scss';

import useCart from '@hooks/useCart';

const ProductCard = ({ product }) => {
    const {id,
    name,
    description,
    price,
    discount,
    stock,
    image,
    finalPrice,
    inStock} = product;

    const { add } = useCart();

    const handleOnClickAddToCart = () => {
        add(product);
        toast.success('Товар додано в кошик');
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                {discount > 0 && (
                <span className={styles.discount}>-{discount}%</span>
                )}
            <img src={image} alt={name} />
        </div>

        <div className={styles.content}>
            <h3 className={styles.title}>{name}</h3>
            <p className={styles.description}>{description}</p>

            <div className={styles.priceBlock}>
                {discount > 0 && (
                    <span className={styles.oldPrice}>{price} ₴</span>
                )}
                <span className={styles.price}>{finalPrice} ₴</span>
            </div>

            <div className={styles.footer}>
                <span className={`${styles.stock} ${
                    inStock ? styles.inStock : styles.outOfStock
                }`}
            >
                    {inStock ? 'В наявності' : 'Немає в наявності'}
                </span>

                <button
                    className={styles.button}
                    disabled={!inStock}
                    onClick={handleOnClickAddToCart}
                >
                    В кошик
                </button>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;
