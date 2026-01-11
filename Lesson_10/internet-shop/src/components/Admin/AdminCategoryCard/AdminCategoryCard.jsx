import { NavLink } from 'react-router-dom';
import styles from './AdminCategoryCard.module.scss';
import useDeleteCategory from '@hooks/categories/useDeleteCategory';

const AdminCategoryCard = ({ category }) => {
    const { _id: id, name } = category;
    const deleteCategoryMutation = useDeleteCategory();

    const handleOnDelete = () => {
        const isDelete = confirm('Ви точно хочете видалити категорію `' + name + '` ?');
        if (isDelete)
            deleteCategoryMutation.mutateAsync(id);
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardInfo}>
                <h3 className={styles.cardName}>{name}</h3>
                <p className={styles.cardDesc}>ID: {id}</p>
            </div>

            <div className={styles.cardActions}>
                <NavLink to = {`/admin/categories/edit/${id}`} className={styles.editButton}>Редагувати</NavLink>
                <button className={styles.deleteButton} onClick={handleOnDelete}>Видалити</button>
            </div>
        </div>
    );
}

export default AdminCategoryCard;