import useCategories from '../../../hooks/categories/useCategories';
import styles from './CategoryFilter.module.scss';

import clsx from 'clsx';

const CategoryFilter = ({activeCategory, setCategory, setPage = null}) => {
    const {categories, loading, error} = useCategories();

    const resetPagination = () => {
        if (setPage)
            setPage(1);
    };

    if (loading) 
        return <p>Завантаження...</p>

    if (error || !categories.length)
        return <p>Сталася помилка при завантаженні категорій</p>

    return (
        <div className={styles.filter}>
            <div 
                key='all'
                className={clsx([
                    styles.category,
                    {
                        [styles.active]: activeCategory === null
                    }
                ])}
                onClick={() => {
                    setCategory(null)
                    resetPagination()
                }}
            >
                Всі категорії
            </div>

            {categories?.map(cat => (
                <div
                    key = {cat._id}
                    className={clsx([
                        styles.category,
                        {
                            [styles.active]: activeCategory == cat._id
                        }
                    ])}
                    onClick={() => {
                        setCategory(cat._id)
                        resetPagination()
                    }}
                >
                    {cat.name}
                </div>
            ))}
        </div>
    );
}

export default CategoryFilter;