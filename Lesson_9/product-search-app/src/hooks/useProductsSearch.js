import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { productService } from "../api/services/productService";

function useProductsSearch(searchValue, delay = 500) {
    const debouncedValue = useDebounce(searchValue, 500);

    const [products, setProducts] = useState([]);
    const [foundTotal, setFoundTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setProducts([]);
            return;
        }

        const fetchProducts = async() => {
            try {
                setLoading(true);
                setError(null);

                const products = await productService.search(debouncedValue);
                setProducts(products.products);
                setFoundTotal(products.total);
            } catch (err) {
                
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [debouncedValue]);

    return {
        products,
        loading,
        foundTotal,
        error
    };
}

export default useProductsSearch;