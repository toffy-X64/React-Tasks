import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key);
            if (saved === null) return initialValue;
            return JSON.parse(saved);
        } catch (err) {
            console.warn('Error during reading from localStorage', err);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.warn('Error during saving to localStorage', err);
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;