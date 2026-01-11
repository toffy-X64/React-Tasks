import styles from './AdminCategories.module.scss';

import useCategories from '@hooks/categories/useCategories';

import LoaderComponent from '@components/Loader/LoaderComponent';
import AdminCategoryCard from '@components/Admin/AdminCategoryCard/AdminCategoryCard';
import { NavLink } from 'react-router-dom';

const AdminCategories = () => {
    const { categories, loading, error } = useCategories();

    if (loading) return <LoaderComponent />
    if (error) return <p>Помилка завантаження категорій</p>

    return (
        <div className={styles.adminWrapper}>
            <h1>Categories</h1>
            <NavLink className={styles.addNewCategoryButton} to='/admin/categories/create/'>Додати нову категорію</NavLink>

            {categories.length == 0 && <p>Категорій не знайдено!</p>}

            {categories.length > 0 && categories?.map(e => (
                <AdminCategoryCard
                    key = {e._id}
                    category = {e}
                />
            ))}
        </div>
    );
}

export default AdminCategories;