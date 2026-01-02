import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.logo}>SportStore</span>

                <div className={styles.links}>
                    <NavLink to = '/'>Каталог</NavLink>
                    <NavLink to = '/login'>Вхід</NavLink>
                    <NavLink to = '/register'>Реєстрація</NavLink>
                </div>

                <span className={styles.copy}>
                    © {new Date().getFullYear()} SportStore. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;