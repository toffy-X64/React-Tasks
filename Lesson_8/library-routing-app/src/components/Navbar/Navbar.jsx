import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import clsx from 'clsx';

import { navRoutes } from '../../routes/routes';

const Navbar = ({currentUser, setCurrentUser, isAuthenticated}) => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>Бібліотека</h1>

            <div className={styles.links}>
                {navRoutes?.map(link => {
                    if (!link.label) 
                        return null;
                    if (link.protected && !isAuthenticated) 
                        return null;

                    return (
                        <NavLink
                            key={link.to}
                            className={({ isActive }) =>
                                clsx(styles.navLink, {
                                    [styles.active]: isActive,
                                })
                            }
                            to={link.to}
                        >
                            {link.label}
                        </NavLink>
                    );
                })}
            </div>
            
            <div className={styles.auth}>
                {!isAuthenticated && <Link to={'/login'} className={styles.loginBtn}>Login</Link>}
                {isAuthenticated && <div className={styles.userInfo}>
                    <p className={styles.username}>Привіт, {currentUser.login}</p>
                    <button className={styles.logoutBtn} onClick={e => setCurrentUser(null)}>Logout</button>
                </div>}
            </div>
        </nav>
    );
};

export default Navbar;