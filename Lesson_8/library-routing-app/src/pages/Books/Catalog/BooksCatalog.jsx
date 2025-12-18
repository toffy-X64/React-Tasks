import BookCard from '../../../components/Books/BookCard/BookCard';
import BooksFilter from '../../../components/Books/BooksFilter/BooksFilter';
import styles from './BooksCatalog.module.scss';

const BooksCatalog = ({books, filter }) => {
    return (
        <div>
            <h1>Каталог книг</h1>

            <div className={styles.filter}>
                <BooksFilter
                    showByGenre = {filter.showByGenre}
                    setShowByGenre = {filter.setShowByGenre}
                />
            </div>

            <div className={styles.catalog}>
                {books?.map(book => (
                    <BookCard
                        key = {book.id}
                        id = {book.id}
                        cover = {book.cover}
                        title = {book.title}
                        author = {book.author}
                        genre = {book.genre}
                        year = {book.year}
                    />
                ))}
            </div>
        </div>
    );
}

export default BooksCatalog;