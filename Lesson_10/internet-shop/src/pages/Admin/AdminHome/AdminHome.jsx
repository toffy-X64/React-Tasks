import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './AdminHome.module.scss';

import useProductsStatista from '@hooks/products/useProductsStatista';

import CategoryFilter from '@components/Catalog/CategoryFilter/CategoryFilter';
import AdminProductsGrid from '@components/Admin/AdminProductsGrid/AdminProductsGrid';
import Pagination from '@components/Pagination/Pagination';
import SearchProducts from '@components/SearchProducts/SearchProducts';
import LoaderComponent from '@components/Loader/LoaderComponent';

const AdminHome = () => {
    const { data, loading, error } = useProductsStatista();
    
    const [categoryId, setCategoryId] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchFilter, setSearchFilter] = useState('');

    if (loading)
        return <LoaderComponent />

    if (error)
        return <p>Помилка завантаження статистики</p>

    if (!data)
        return <p>Статистика пуста</p>

    const statistaBlocks = [
        {
            title: 'Всього',
            value: data.total
        },
        {
            title: 'В наявності',
            value: data.inStock
        },
        {
            title: 'Не в наявності',
            value: data.outOfStock
        },
        {
            title: 'Зі знижкою',
            value: data.withDiscount
        },
    ];

    return (
        <div className={styles.adminHome}>
            <NavLink className={styles.addNewProductButton} to='/admin/create/'>Додати новий товар</NavLink>

            <div className={styles.statista}>
                {statistaBlocks?.map((s, index) => (
                    <div
                        key = {index}
                        className={styles.statistaBlock}
                    >
                        <h3 className={styles.title}>{s.title}</h3>
                        <h3 className={styles.value}>{s.value}</h3>
                    </div>
                ))}
            </div>
            
            <SearchProducts
                setSearchFilter = {setSearchFilter}
                setPage={setPage}
            />
            <CategoryFilter
                activeCategory = {categoryId}
                setCategory = {setCategoryId}
                setPage = {setPage}
            />

            <AdminProductsGrid
                activeCategory = {categoryId}
                page = {page}
                setTotalPages = {setTotalPages}
                searchFilter = {searchFilter}
            />

            <Pagination
                page = {page}
                setPage = {setPage}
                totalPages = {totalPages}
            />
        </div>
    );
}

export default AdminHome;