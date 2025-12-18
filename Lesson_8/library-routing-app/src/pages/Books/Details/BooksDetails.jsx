import { useNavigate, useParams } from 'react-router-dom';
import styles from './BooksDetails.module.scss';
import { useEffect, useState } from 'react';

const BooksDetails = ({ books }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [currentBook, setCurrentBook] = useState(null);

    useEffect(() => {
        const foundBook = books.find(b => String(b.id) === String(id));

        if (foundBook)
            setCurrentBook(foundBook);
        else
            navigate('/not-found', { replace: true });
    }, [books, id]);

    if (!currentBook) 
        return null;

    return (
        <main className={styles.page}>
            <div className="container">
                <button
                    className={styles.back}
                    onClick={() => navigate(-1)}
                >
                    ← Назад
                </button>

                <div className={styles.card}>
                    <img
                        src={currentBook.cover}
                        alt={currentBook.title}
                        className={styles.cover}
                    />

                    <div className={styles.info}>
                        <h1 className={styles.title}>{currentBook.title}</h1>
                        <p className={styles.author}>Автор: {currentBook.author}</p>

                        <div className={styles.meta}>
                            <span className={styles.tag}>{currentBook.genre}</span>
                            <span className={styles.year}>{currentBook.year}</span>
                        </div>

                        <p className={styles.description}>
                            {currentBook.description || 'Опис книги відсутній.'}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BooksDetails;