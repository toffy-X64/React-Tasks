import useLocalStorage from "./useLocalStorage";

import { booksData } from '../mocks/booksData.js';

function useBooks() {
    const [books, setBooks] = useLocalStorage('books', booksData);

    const addBook = (book) => {
        const newId = crypto.randomUUID();

        setBooks(prev => [
            ...prev, 
            {...book, id: newId}
        ]);

        return newId;
    };

    const removeBook = (id) => {
        setBooks(prev => prev.filter(b => b.id !== id));
    };

    return {
        books,
        addBook,
        removeBook,
        setBooks
    };
}

export default useBooks;