import { useEffect } from 'react';
import useProducts from '@hooks/products/useProducts';
import ProductCard from '@components/Catalog/ProductCard/ProductCard';
import styles from './ProductsGrid.module.scss';
import LoaderComponent from '@components/Loader/LoaderComponent';


const ProductsGrid = ({ activeCategory, page, setTotalPages, searchFilter }) => {
    const { data, loading, error } = useProducts(activeCategory, page, searchFilter);

    useEffect(() => {
        if (data?.pagination?.pages)
            setTotalPages(data?.pagination?.pages);
    }, [data, setTotalPages])

    if (loading) 
        return <LoaderComponent />

    if (error)
        return <p>Сталася помилка при завантаженні товарів</p>

    if (!data.products.length)
        return <p>Список пустий!</p>

    return (
        <div className={styles.wrapper}>
            {data.products?.map(p => (
                <ProductCard
                    key = {p._id}
                    product = {p}
                />
            ))}
        </div>
    );
}

export default ProductsGrid;