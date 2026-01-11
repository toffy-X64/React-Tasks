import { useState } from 'react';

import styles from './Catalog.module.scss';

import CategoryFilter from '@components/Catalog/CategoryFilter/CategoryFilter';
import ProductsGrid from '@components/Catalog/ProductsGrid/ProductsGrid';
import Pagination from '@components/Pagination/Pagination';
import SearchProducts from '@components/SearchProducts/SearchProducts';

const Catalog = () => {
    const [categoryId, setCategoryId] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchFilter, setSearchFilter] = useState('');

    return (
        <main className='page'>
            <div className="container">
                <h1>Каталог товарів</h1>
                <h4>Товари для вашого спорту</h4>

                <SearchProducts
                    setSearchFilter = {setSearchFilter}
                    setPage={setPage}
                />
                <CategoryFilter 
                    activeCategory = {categoryId}
                    setCategory = {setCategoryId}
                    setPage={setPage}
                />

                <ProductsGrid
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
        </main>
    );
}

export default Catalog;