import { useRef } from 'react';
import styles from './Cart.module.scss';

import useCart from "@hooks/useCart";
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '@store/cart/cartSelectors';

const CartModal = () => {
    const { isOpen, close, items, clear } = useCart();
    const total = useSelector( selectCartTotal );
    const modalRef = useRef();

    const handleOnAreaClick = (e) => {
        if (e.target == modalRef.current) {
            close();
        }
    };

    const onClear = () => {
        clear();
    };

    if (!isOpen)
        return null;

    return (
        <div className={styles.modal} onClick={handleOnAreaClick} ref={modalRef}>
            <div className={styles.cart}>
                <div className={styles.header}>
                    <h2>Кошик</h2>
                </div>

                { !items || items.length <= 0 && (
                    <div className={styles.empty}>
                        <h3>Кошик пустий, але ніколи не пізно це виправити:)</h3>
                    </div>
                ) }

                { items.length > 0 && (
                    <div className={styles.items}>
                        {items.map(e => (
                            <CartItem
                                key={e.product.id}
                                product={e.product}
                                quantity={e.quantity}
                            />
                        ))}
                    </div>
                ) }

                <div className={styles.footer}>
                    <div className={styles.total}>
                        <span>Total:</span>
                        <strong>${total}</strong>
                    </div>

                    <button
                        className={styles.checkout}
                        disabled={items.length === 0}
                    >
                        Перейти до замовлення
                    </button>

                    <button
                        className={styles.clear}
                        disabled={items.length === 0}
                        onClick={onClear}
                    >
                        Очистити кошик
                    </button>
                </div>

            </div>
        </div>
    );
}

export default CartModal;