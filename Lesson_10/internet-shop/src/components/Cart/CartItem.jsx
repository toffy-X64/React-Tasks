import useCart from '@hooks/useCart';
import styles from './Cart.module.scss';

const CartItem = ({ product, quantity }) => {
    const { id, image, name, finalPrice } = product;
    const { add, decrement } = useCart();

    const onPlus = () => {
        add(product);
    }

    const onMinus = () => {
        decrement(id, quantity);
    }

    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <img src={image} alt={name} />
            </div>

            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.unitPrice}>₴{finalPrice}</p>

                <div className={styles.controls}>
                    <button onClick={onMinus}>-</button>
                    <span>{quantity}</span>
                    <button onClick={onPlus}>+</button>
                </div>
            </div>

            <div className={styles.total}>
                ₴{finalPrice * quantity}
            </div>
        </div>
    );
};

export default CartItem;