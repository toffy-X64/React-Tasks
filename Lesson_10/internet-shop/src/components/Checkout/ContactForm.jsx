import { useState } from 'react';
import styles from './Checkout.module.scss';

import useAuth from '@hooks/useAuth';
import useAddOrder from '@hooks/orders/useAddOrder';
import useCart from '@hooks/useCart';

import LoaderComponent from '@components/Loader/LoaderComponent';

const ContactForm = () => {
    const { isAuthenticated } = useAuth();
    const addOrderMutation = useAddOrder();
    const { items } = useCart();
    

    const [guestInfo, setGuestInfo] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: ''
    });

    const [details, setDetails] = useState({
        comment: ''
    });

    const onGuestInfoChange = (e) => {
        setGuestInfo(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        addOrderMutation.mutateAsync({
            comment: details.comment,
            guestInfo: guestInfo,
            items: items
        });
    };

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.section}>
                <h3>Контактні дані</h3>

                { !isAuthenticated && (
                    <div className={styles.field}>
                        <label htmlFor="fullName">Повне ім'я</label>
                        <input type = 'text' name='fullName' id='fullName' placeholder='Повне ім`я' value={guestInfo.fullName} onChange={onGuestInfoChange} required />
                    </div>
                ) }

                { !isAuthenticated && (
                    <div className={styles.field}>
                        <label htmlFor="email">Пошта</label>
                        <input type = 'email' name='email' id='email' placeholder='Пошта' value={guestInfo.email} onChange={onGuestInfoChange} required />
                    </div>
                ) }

                { !isAuthenticated && (
                    <div className={styles.field}>
                        <label htmlFor="phone">Номер телефону</label>
                        <input type='tel' name='phone' id='phone' placeholder='Номер телефону' value={guestInfo.phone} onChange={onGuestInfoChange} required />
                    </div>
                ) }

                { !isAuthenticated && (
                    <div className={styles.field}>
                        <label htmlFor="address">Адреса</label>
                        <input type = 'text' name='address' id='address' placeholder='Адреса' value={guestInfo.address} onChange={onGuestInfoChange} required />
                    </div>
                ) }
            
                <div className={styles.field}>
                    <label htmlFor="comment">Коментар (не обов'язково)</label>
                    <textarea id='comment' name='comment' value={details.comment} 
                    onChange={e => setDetails(prev => ({
                        ...prev,
                        comment: e.target.value
                    }))}>
                    </textarea>
                </div>

                <button type='submit' disabled={addOrderMutation.isPending}>
                    {addOrderMutation.isPending && <LoaderComponent size = {15} color = 'white' />}
                    Замовити
                </button>
            </div>
        </form>
    );
}

export default ContactForm;