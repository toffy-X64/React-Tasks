import styles from './Header.module.scss';
import { navRoutes } from '@components/RouterView/routes';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import useAuth from '@hooks/useAuth';
import useCart from '@hooks/useCart';

const Header = () => {
    const { isAuthenticated, user } = useAuth();
    const { open } = useCart();

    const handleOnCustomClick = (action) => {
        if (action == 'cart') {
            open();
        }
    };

    const canShow = (route) => {
        if (!route.protected)
            return true;

        if (route.protected.requireAuth && isAuthenticated)
            return true;

        if (route.protected.guestOnly && !isAuthenticated)
            return true;

        if (route.protected.requireAdmin && isAuthenticated && user?.role === "admin")
            return true;

        return false;
    };

    const renderRoute = (route, index) => {
        if (!canShow(route))
            return;

        if (route.custom)
            return (
                <p
                    key = {index}
                    className={styles.navLink}
                    onClick={e => handleOnCustomClick(route.custom)}
                >
                    {route.icon}
                    {route.title}
                </p>
            );
        
        return (
            <NavLink
                key={index}
                to = {route.link}
                className={ ( {isActive} ) => clsx(styles.navLink, {
                    [styles.active]: isActive
                }) }
            >
                {route.icon}
                {route.title}
            </NavLink>
        );
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1 className={styles.logo}>SportStore</h1>
                <nav className={styles.navLinks}>
                    {navRoutes?.map( (route, index) => (
                        renderRoute(route, index)
                    ) )}
                </nav>
            </div>
        </header>
    );
}

export default Header;