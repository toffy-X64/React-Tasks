import { useState } from 'react';
import styles from './BooksNew.module.scss';

import { genres } from '../../../mocks/booksData';
import { useNavigate } from 'react-router-dom';

const BooksNew = ({addBook}) => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState(() => {
        return genres[0] || 'повість';
    });
    const [year, setYear] = useState(() => {
        const date = new Date();
        return date.getFullYear();
    });
    const [description, setDescription] = useState('');
    const [cover, setCover] = useState('https://nashformat.ua/files/products/ebook-eneida-klasyka-ukrainskoi-literatury-629276.800x800.jpeg');


    const handleOnAdd = (e) => {
        e.preventDefault();

        const book = {
            title: name,
            author,
            genre,
            year,
            description,
            cover
        };

        const bookId = addBook(book);
        navigate(`/books/${bookId}`);
    };

    return (
        <main>
            <div className="container">
                <h1 className={styles.title}>Додати нову книгу</h1>

                <form className={styles.form} onSubmit={handleOnAdd}>
                    <span className={styles['form-control']}>
                        <label htmlFor="name">Назва книги</label>
                        <input type="text" id='name' placeholder='Введіть назву книги' required value={name} onChange={e => setName(e.target.value)} />
                    </span>

                    <span className={styles['form-control']}>
                        <label htmlFor="author">Автор</label>
                        <input type="text" id='author' placeholder='Введіть автора книги' required value={author} onChange={e => setAuthor(e.target.value)} />
                    </span>

                    <div className={styles['form-flex']}>
                        <span className={styles['form-control']}>
                            <label htmlFor="genre">Жанр</label>
                            <select id = 'genre' required value={genre} onChange={e => setGenre(e.target.value)}>
                                {genres?.map((g, index) => (
                                    <option key={index} value={g}>{g}</option>
                                ))}
                            </select>
                        </span>

                        <span className={styles['form-control']}>
                            <label htmlFor="year">Рік видання</label>
                            <input type="number" id = 'year' placeholder='Введіть рік видання' required value={year} onChange={e => setYear(e.target.value)} />
                        </span>
                    </div>
                    
                    <span className={styles['form-control']}>
                        <label htmlFor="desc">Опис</label>
                        <textarea id = 'desc' placeholder='Введіть опис книги' minLength={15} required value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    </span>

                    <span className={styles['form-control']}>
                        <label htmlFor="cover">URL Обкладинки</label>
                        <input type='url' id = 'cover' placeholder='Введіть URL Обкладинки' required value={cover} onChange={e => setCover(e.target.value)} />
                    </span>

                    <div className={styles.previewWrapper}>
                        <h3 className={styles.previewTitle}>Попередній перегляд</h3>
                        <img src = {cover} className={styles.coverPreview} />
                    </div>

                    <button className={styles.addBtn} type='submit'>Додати книгу</button>
                </form>
            </div>
        </main>
    );
}

export default BooksNew;