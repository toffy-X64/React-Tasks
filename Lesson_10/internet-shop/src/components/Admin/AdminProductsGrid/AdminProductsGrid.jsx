import styles from './AdminProductsGrid.module.scss';
import useProducts from '../../../hooks/products/useProducts';
import AdminProductCard from '../AdminProductCard/AdminProductCard';
import { useEffect } from 'react';

const AdminProductsGrid = ({ activeCategory, page, setTotalPages, searchFilter }) => {
    const { data, loading, error } = useProducts(activeCategory, page, searchFilter);

    useEffect(() => {
        if (data?.pagination?.pages)
            setTotalPages(data?.pagination?.pages);
    }, [data, setTotalPages]);

    if (loading)
        return <p>Завантаження...</p>

    if (error)
        return <p>Помилка завантаження товарів</p>

    if (!data.products.length)
        return <p>Товар не знайдено</p>

    return (
        <div className={styles.wrapper}>
            {data?.products?.map( p => (
                <AdminProductCard
                    key={p._id}
                    id = {p._id}
                    name = {p.name}
                    description = {p.description}
                    price = {p.price}
                    discount = {p.discount}
                    stock = {p.stock}
                    image = {p.image}
                    finalPrice = {p.finalPrice}
                    inStock = {p.inStock}
                />
            ) )}
        </div>
    );
}

export default AdminProductsGrid;