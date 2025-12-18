import styles from './BooksFilter.module.scss';
import { genres, allGenres } from '../../../mocks/booksData';

const BooksFilter = ({showByGenre, setShowByGenre}) => {
    const fortatedGenres = [...genres, allGenres];

    const handleOnChange = (e) => {
        setShowByGenre(e.target.value);
    }; 

    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Фільтр по жанру</p>
            <select value={showByGenre} onChange={handleOnChange}>
                {fortatedGenres?.map((g, index) => (
                    <option key = {index} value={g}>{g}</option>
                ))}
            </select>
        </div>
    );
}

export default BooksFilter;