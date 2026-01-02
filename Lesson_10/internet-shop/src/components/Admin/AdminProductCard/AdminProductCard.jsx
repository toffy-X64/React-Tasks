import { NavLink } from 'react-router-dom';
import styles from './AdminProductCard.module.scss';
import useDeleteProduct from '../../../hooks/products/useDeleteProduct.js';

const AdminProductCard = ({ id, name, description, price, discount, stock, image, finalPrice, inStock }) => {
    const deleteProductMutation = useDeleteProduct();

    const handleOnDelete = () => {
        const isDelete = confirm('Ви точно хочете видалити `' + name + '` ?');
        if (isDelete)
            deleteProductMutation.mutateAsync(id);
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
                <img className={styles.cardImage} src={image} />
            </div>

            <div className={styles.cardInfo}>
                <h3 className={styles.cardName}>{name}</h3>
                <p className={styles.cardDesc}>{description}</p>
            </div>

            <div className={styles.cardActions}>
                <NavLink to = {`edit/${id}`} className={styles.editButton}>Редагувати</NavLink>
                <button className={styles.deleteButton} onClick={handleOnDelete}>Видалити</button>
            </div>
        </div>
    );
}

export default AdminProductCard;