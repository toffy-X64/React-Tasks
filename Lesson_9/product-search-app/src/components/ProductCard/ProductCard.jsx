import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
    const {
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail
    } = product;

    const discountedPrice = Math.round(price - (price * discountPercentage) / 100);

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={thumbnail} alt={title} />
                {discountPercentage && (
                    <span className={styles.discount}>
                        -{discountPercentage}%
                    </span>
                )}
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.brand}>{brand} · {category}</p>

                <p className={styles.description}>{description}</p>

                <div className={styles.ratingStock}>
                    <span>⭐ {rating}</span>
                    <span className={stock > 0 ? styles.inStock : styles.outStock}>
                        {stock > 0 ? `In stock: ${stock}` : 'Out of stock'}
                    </span>
                </div>

                <div className={styles.priceBlock}>
                    <span className={styles.newPrice}>${discountedPrice}</span>
                    <span className={styles.oldPrice}>${price}</span>
                </div>

                <Link className={styles.button} to={`/details/${product.id}`}>
                    View
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;