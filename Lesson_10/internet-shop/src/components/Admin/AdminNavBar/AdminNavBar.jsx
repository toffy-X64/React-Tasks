import { NavLink } from 'react-router-dom';
import styles from './AdminNavBar.module.scss';
import clsx from 'clsx';

import { UserStar, ChartColumnStacked, Box } from 'lucide-react';

const adminRoutes = [
    {
        link: '/admin/home',
        text: 'Головна',
        icon: <UserStar />
    },
    {
        link: '/admin/categories',
        text: 'Категорії',
        icon: <ChartColumnStacked />
    },
    {
        link: '/admin/orders',
        text: 'Замовлення',
        icon: <Box />
    }
];

const AdminNavBar = () => {
    return (
        <div className={styles.navbar}>
            {adminRoutes?.map(e => (
                <NavLink
                    key={e.link}
                    to={e.link}
                    className={ ( { isActive } ) => clsx(styles.link, {
                        [styles.active]: isActive
                    }) }
                >
                    {e.icon && e.icon}
                    {e.text}
                </NavLink>
            ))}
        </div>
    );
}

export default AdminNavBar;