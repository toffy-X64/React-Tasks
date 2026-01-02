import { useEffect } from 'react';
import useProducts from '../../../hooks/products/useProducts';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsGrid.module.scss';


const ProductsGrid = ({ activeCategory, page, setTotalPages, searchFilter }) => {
    const { data, loading, error } = useProducts(activeCategory, page, searchFilter);

    useEffect(() => {
        if (data?.pagination?.pages)
            setTotalPages(data?.pagination?.pages);
    }, [data, setTotalPages])

    if (loading) 
        return <p>Завантаження...</p>

    if (error)
        return <p>Сталася помилка при завантаженні товарів</p>

    if (!data.products.length)
        return <p>Список пустий!</p>

    return (
        <div className={styles.wrapper}>
            {data.products?.map(p => (
                <ProductCard
                    key = {p._id}
                    name = {p.name}
                    description = {p.description}
                    price = {p.price}
                    discount = {p.discount}
                    stock = {p.stock}
                    image = {p.image}
                    finalPrice = {p.finalPrice}
                    inStock = {p.inStock}
                />
            ))}
        </div>
    );
}

export default ProductsGrid;