import styles from './Checkout.module.scss';

import useCart from '@hooks/useCart';

const OrderSummary = () => {
    const { items, calculateTotal } = useCart();
    const total = calculateTotal();
    

    return (
        <div className={styles.summary}>
            <h2>Ваше замолення</h2>

            <div className={styles.items}>
                {items?.map(({ product, quantity }) => (
                    <div className={styles.item}>
                        <div className={styles.image}>
                            <img src={product.image} alt={product.name} />
                        </div>

                        <div className={styles.info}>
                            <p className={styles.name}>{product.name}</p>
                            <p className={styles.unitPrice}>₴ {product.finalPrice} х {quantity}</p>
                        </div>

                        <div className={styles.total}>
                            ₴ {product.finalPrice * quantity}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.summaryTotal}>
                <h3>Всього:</h3>
                <span>₴ {total}</span>
            </div>

        </div>
    );
}

export default OrderSummary;