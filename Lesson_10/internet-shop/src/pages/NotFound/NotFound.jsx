import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className='page'>
            <div className='container'>
                <h1 className={styles.code}>404</h1>
                <p className={styles.text}>
                    Схоже, що ви перейшли за неіснуючим посиланням.
                </p>

                <Link to="/" className={styles.button}>
                    Повернутись на головну
                </Link>
            </div>
        </main>
    );
};

export default NotFound;