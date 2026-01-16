import { NavLink } from 'react-router-dom';
import styles from './Checkout.module.scss';

const CheckoutSuccess = () => {
    return (
        <main className="page">
            <div className="container">
                <div className={styles.success}>
                    <div className={styles.icon}>✓</div>

                    <h1>Замовлення успішно створено</h1>
                    <p>
                        Дякуємо за покупку! Наш менеджер звʼяжеться з вами найближчим часом
                        для підтвердження деталей.
                    </p>

                    <div className={styles.actions}>
                        <NavLink to="/" className={styles.primary}>
                            Повернутись до каталогу
                        </NavLink>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CheckoutSuccess;