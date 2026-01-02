import styles from './Header.module.scss';
import { navRoutes } from '../RouterView/routes';
import { NavLink } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { isAuthenticated, user } = useAuth();

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

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1 className={styles.logo}>SportStore</h1>
                <nav className={styles.navLinks}>
                    {navRoutes?.map( (route, index) => (
                        canShow(route) 
                        &&
                        <NavLink
                            key = {index}
                            to={route.link}
                            className={styles.navLink}
                        >
                            {route.icon}
                            {route.title}
                        </NavLink>
                    ) )}
                </nav>
            </div>
        </header>
    );
}

export default Header;