import { useState } from 'react';
import styles from './ProductSearch.module.scss';
import ProductCard from '../../components/ProductCard/ProductCard';
import useProductsSearch from '../../hooks/useProductsSearch';

const ProductSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const {products, foundTotal, loading, error} = useProductsSearch(searchValue, 500);

    return (
        <main>
            <div className="container">
                <h1>Products search</h1>

                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />

                {!loading && searchValue && (
                    <h2>Total: {foundTotal}</h2>
                )}

                <div className={styles.products}>
                    {loading && <h2>Loading...</h2>}
                    {error && <h2 className={styles.error}>{error}</h2>}

                    {!loading && !products.length && searchValue && (
                        <h2>Not found</h2>
                    )}

                   {products?.map(elem => (
                        <ProductCard
                            key = {elem.id}
                            product={elem}
                        />
                   ))}
                </div>
            </div>
        </main>
    );
}

export default ProductSearch;