import { useEffect, useState } from "react";
import { allGenres } from '../mocks/booksData';

function useBooksFilter(books) {
    const [showByGenre, setShowByGenre] = useState(allGenres);
    const [filteredBooks, setFilteredBooks] = useState([...books]);
    
    useEffect(() => {
        let result = [...books];
        const filtered = result.filter(e => {
            if (showByGenre.toLowerCase() === allGenres.toLowerCase()) 
                return true;
            return e.genre.toLowerCase() === showByGenre.toLowerCase();
        });

        setFilteredBooks([...filtered]);
    }, [books, showByGenre]);

    return {
        filteredBooks,
        showByGenre,
        setShowByGenre
    };
}

export default useBooksFilter;