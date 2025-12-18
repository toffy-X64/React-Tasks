import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './BookCard.module.scss';

const BookCard = ({id, cover, title, author, genre, year}) => {
    return (
        <div className={styles.card}>
            <img className={styles.cover} src = {cover} alt = {title}/>
            <div className={styles.content}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.author}>{author}</p>
                <div className={styles.tag}>{genre}</div>
                <p className={styles.release}>{year}</p>
                
                <Link className={styles.footer} to={`/books/${id}`}>
                    Детальніше
                    <ArrowRight />
                </Link>
            </div>
        </div>
    );
}

export default BookCard;