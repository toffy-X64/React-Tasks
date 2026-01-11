import styles from './AdminProductsGrid.module.scss';
import useProducts from '@hooks/products/useProducts';
import AdminProductCard from '@components/Admin/AdminProductCard/AdminProductCard';
import LoaderComponent from '@components/Loader/LoaderComponent';
import { useEffect } from 'react';

const AdminProductsGrid = ({ activeCategory, page, setTotalPages, searchFilter }) => {
    const { data, loading, error } = useProducts(activeCategory, page, searchFilter);

    useEffect(() => {
        if (data?.pagination?.pages)
            setTotalPages(data?.pagination?.pages);
    }, [data, setTotalPages]);

    if (loading)
        return <LoaderComponent />

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
                    image = {p.image}
                />
            ) )}
        </div>
    );
}

export default AdminProductsGrid;