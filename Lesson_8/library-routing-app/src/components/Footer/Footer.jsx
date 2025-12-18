import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.copy}>
                    © {new Date().getFullYear()} React App. All rights reserved.
                </p>

                <div className={styles.links}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/books">Catalog</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;