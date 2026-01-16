import useOrders from '@hooks/orders/useOrders';
import styles from './AdminOrders.module.scss';

import LoaderComponent from '@components/Loader/LoaderComponent';
import useUpdateOrderStatus from '@hooks/orders/useUpdateOrderStatus';
import { useState } from 'react';

const AdminOrders = () => {
    const [filter, setFilter] = useState('all');
    const { orders, isLoading, isError } = useOrders(filter);
    const updateOrderStatusMutation = useUpdateOrderStatus();

    if (isLoading) return <LoaderComponent />
    if (isError) return <p>Помилка завантаження замовлень</p>

    const onStatusChange = (id, status) => {
        updateOrderStatusMutation.mutateAsync({id: id, status: status});
    };

    return (
        <div className={styles.adminWrapper}>
            <h1>Admin orders</h1>
            
            <div className={styles.filter}>
                <select className={`${styles.status} ${styles[filter]}`} value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value='all'>All</option>
                    <option value='new'>New</option>
                    <option value='confirmed'>Confirmed</option>
                    <option value='assembled'>Assembled</option>
                    <option value='shipped'>Shipped</option>
                    <option value='delivered'>Delivered</option>
                    <option value='cancelled'>Cancelled</option>
                </select>
            </div>

            <div className={styles.orders}>
                {orders.length == 0 && <p>Замовлень не знайдено!</p>}

                {orders.length >= 1 && orders.map(order => (
                    <div className={styles.order} key={order._id}>
                            <div className={styles.header}>
                                <div>
                                    <h2 className={styles.customer}>
                                        #{order._id.slice(-6)} • {new Date(order.createdAt).toLocaleString()}
                                    </h2>
                                    <p className={styles.meta}>
                                        Phone: {order.user?.phone || order.guestInfo?.phone}
                                    </p>
                                    <p className={styles.meta}>
                                        Email: {order.user?.email || order.guestInfo?.email}
                                    </p>
                                    <p className={styles.meta}>
                                        Address: {order.user?.address || order.guestInfo?.address}
                                    </p>
                                    <p className={styles.meta}>
                                        Name: {order.user?.fullName || order.guestInfo?.fullName}
                                    </p>
                                </div>

                                <select className={`${styles.status} ${styles[order.status]}`} value={order.status} onChange={e => onStatusChange(order._id, e.target.value)}>
                                    <option value='new'>New</option>
                                    <option value='confirmed'>Confirmed</option>
                                    <option value='assembled'>Assembled</option>
                                    <option value='shipped'>Shipped</option>
                                    <option value='delivered'>Delivered</option>
                                    <option value='cancelled'>Cancelled</option>
                                </select>
                            </div>

                            <div className={styles.items}>
                                {order.items.map((item, index) => (
                                    <div className={styles.item} key={index}>
                                        <span>{item.product.name}</span>
                                        <span>
                                            {item.quantity} × ${item.product.finalPrice}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.footer}>
                                <span className={styles.comment}>
                                    {order.comment || 'Без коментаря'}
                                </span>

                                <span className={styles.total}>
                                    ${order.totalAmount}
                                </span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    ); 
}

export default AdminOrders;