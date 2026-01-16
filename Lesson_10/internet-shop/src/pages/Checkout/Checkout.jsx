import OrderSummary from '@components/Checkout/OrderSummary';
import styles from './Checkout.module.scss';
import useCart from '@hooks/useCart';
import { NavLink } from 'react-router-dom';
import ContactForm from '@components/Checkout/ContactForm';

const Checkout = () => {
    const { items } = useCart();

    return (
        <main className='page'>
            <div className="container">
                {!items || !items.length && (
                    <div className={styles.empty}>
                        <h1>Кошик пустий, але ніколи не пізно це виправити:)</h1>
                        <NavLink to='/'>Перейти у каталог</NavLink>
                    </div>
                )}

                {items.length >= 1 && (
                    <div className={styles.wrapper}>
                        <ContactForm />
                        <OrderSummary />
                    </div>
                )}
            </div>
        </main>
    );
}

export default Checkout;