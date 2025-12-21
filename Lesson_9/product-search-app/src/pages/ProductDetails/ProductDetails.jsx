import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import styles from './ProductDetails.module.scss';
import { useEffect, useState } from 'react';
import { productService } from '../../api/services/productService';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState(null);
    const [error, setError] = useState('');
    const [activeImage, setActiveImage] = useState('');

    useEffect(() => {
        const fetchProductInfo = async () => {
            try {
                setLoading(true);
                setError('');

                const data = await productService.getById(id);
                setProductData(data);
                setActiveImage(data.thumbnail || data.images?.[0]);
            } catch (err) {
                setProductData(null);
                setError('Not found');
            } finally {
                setLoading(false);
            }
        };

        fetchProductInfo();
    }, [id]);

    if (!loading && error) {
        return <Navigate to="/not-found" replace />;
    }

    return (
        <main>
            <div className="container">
                <button className={styles.button} onClick={e => navigate(-1)}>Back</button>
                <div className={styles.wrapper}>
                    {loading && <p>Loading...</p>}

                    {productData && (
                        <>
                            <div className={styles.gallery}>
                                <div className={styles.mainImage}>
                                    <img src={activeImage} alt={productData.title} />
                                </div>

                                <div className={styles.thumbnails}>
                                    {productData.images.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt=""
                                            className={
                                                activeImage === img ? styles.active : ''
                                            }
                                            onClick={() => setActiveImage(img)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className={styles.info}>
                                <h1>{productData.title}</h1>

                                <p className={styles.brand}>
                                    {productData.brand} · {productData.category}
                                </p>

                                <div className={styles.rating}>
                                    <div className={styles.stars}>
                                        {'★'.repeat(Math.round(productData.rating))}
                                        {'☆'.repeat(5 - Math.round(productData.rating))}
                                    </div>
                                    <span>{productData.rating}</span>
                                </div>

                                <p className={styles.description}>
                                    {productData.description}
                                </p>

                                <div className={styles.priceBlock}>
                                    <span className={styles.price}>
                                        ${productData.price}
                                    </span>
                                    <span className={styles.discount}>
                                        -{productData.discountPercentage}%
                                    </span>
                                </div>

                                <div className={styles.meta}>
                                    <p><b>Stock:</b> {productData.stock}</p>
                                    <p><b>SKU:</b> {productData.sku}</p>
                                    <p><b>Warranty:</b> {productData.warrantyInformation}</p>
                                    <p><b>Shipping:</b> {productData.shippingInformation}</p>
                                </div>

                                <button className={styles.button}>
                                    Add to cart
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
};

export default ProductDetails;