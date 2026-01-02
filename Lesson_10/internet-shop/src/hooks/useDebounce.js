import { useEffect, useState } from "react";

function useDebounce(callback, delay) {
    const [debounceValue, setDebounceValue] = useState(callback);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceValue(callback);
        }, delay)

        return () => clearTimeout(timerId);
    }, [callback, delay]);

    return debounceValue;
}

export default useDebounce;