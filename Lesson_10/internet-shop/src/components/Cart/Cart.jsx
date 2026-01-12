import { useRef } from 'react';
import styles from './Cart.module.scss';
import { useCart } from '@contexts/CartContext';

const Cart = () => {
    const { cart, close } = useCart();
    const modalRef = useRef();

    const handleOnClick = (e) => {
        if (e.target == modalRef.current) {
            close();
        }
            
    };

    return (
        cart.active && (
            <div className={styles.modal} onClick={handleOnClick} ref={modalRef}>
                <div className={styles.cart}>
                    <div className={styles.header}>
                        <h2>Cart</h2>
                    </div>

                    <div className={styles.content}>

                    </div>
                </div>
            </div>
        )
    );
}

export default Cart;