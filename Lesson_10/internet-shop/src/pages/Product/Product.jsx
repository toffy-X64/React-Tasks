import styles from './Product.module.scss';

import { Navigate, useParams } from "react-router-dom";
import useProduct from '@hooks/products/useProduct';
import Loader from '@components/Loader/Loader';
import useCart from '@hooks/useCart';
import toast from 'react-hot-toast';

const Product = () => {
    const { id } = useParams();
    const { data: product, loading, error } = useProduct(id);
    const { add } = useCart();

    const handleOnClickAddToCart = (product) => {
        add(product);
        toast.success('Товар додано в кошик');
    };

    if (loading) return <Loader />;
    if (error || !product) return <Navigate to='/not-found' replace />;

    const {
        name,
        description,
        image,
        images,
        price,
        finalPrice,
        discount,
        inStock,
        stock
    } = product;

    return (
        <main className="page">
            <div className="container">
                <div className={styles.wrapper}>

                    <div className={styles.gallery}>
                        <img
                            src={image}
                            alt={name}
                            className={styles.mainImage}
                        />

                        {images?.length > 0 && (
                            <div className={styles.thumbs}>
                                {images.map((img, i) => (
                                    <img key={i} src={img} alt={name} />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={styles.info}>
                        <h1 className={styles.name}>{name}</h1>

                        <div className={styles.priceBlock}>
                            {discount > 0 && (
                                <span className={styles.oldPrice}>
                                    ${price}
                                </span>
                            )}
                            <span className={styles.price}>
                                ${finalPrice}
                            </span>

                            {discount > 0 && (
                                <span className={styles.discount}>
                                    -{discount}%
                                </span>
                            )}
                        </div>

                        <div className={styles.stock}>
                            {inStock ? (
                                <span className={styles.inStock}>
                                    В наявності ({stock})
                                </span>
                            ) : (
                                <span className={styles.outOfStock}>
                                    Немає в наявності
                                </span>
                            )}
                        </div>

                        <button
                            className={styles.addToCart}
                            disabled={!inStock}
                            onClick={() => handleOnClickAddToCart(product)}
                        >
                            Додати в кошик
                        </button>

                        <div className={styles.description}>
                            <h3>Опис</h3>
                            <p>{description}</p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Product;
