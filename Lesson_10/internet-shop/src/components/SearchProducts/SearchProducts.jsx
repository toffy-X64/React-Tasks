import { useEffect, useState } from 'react';
import styles from './SearchProducts.module.scss';
import useDebounce from '@hooks/useDebounce';

const SearchProducts = ({ setSearchFilter, setPage }) => {
    const [search, setSearch] = useState('');
    const debouncedValue = useDebounce(search, 500);

    useEffect(() => {
        if (!debouncedValue || !debouncedValue.trim())
            return;
        setSearchFilter(debouncedValue);
        setPage(1);
        
        return () => {
            setSearchFilter('');
        }
    }, [debouncedValue])

    return (
        <div className={styles.wrapper}>
            <input placeholder='Введіть ім`я або опис товару' value={search} onChange={e => setSearch(e.target.value)} />
        </div>
    );
}

export default SearchProducts;