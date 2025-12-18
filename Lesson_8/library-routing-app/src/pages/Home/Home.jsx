import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
    const navigate = useNavigate();

    const handleOnViewCatalogClick = (e) => {
        navigate('/books');
    };

    return (
        <main>
            <div className="container">
                <div>
                    <h1 className={styles.title}>Ласкаво просимо до Бібліотеки!</h1>
                    <p className={styles['short-desc']}>Ваша персональна колекція української літератури!</p>
                    <p className={styles['long-desc']}>Тут ви знайдете найкращі твори української класики. Переглядайте каталог, читайте описи книг, та додавайте нові книги до колекції.</p>

                    <button className={styles.btn} onClick={handleOnViewCatalogClick}>Переглянути каталог</button>
                </div>
            </div>
        </main>
    );
}

export default Home;