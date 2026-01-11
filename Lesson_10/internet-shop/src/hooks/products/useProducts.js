import { useQuery } from "@tanstack/react-query";
import { productService } from "@api/services/productService";

function useProducts(activeCategory, page, search) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['products', activeCategory, page, search],
        queryFn: async() => {
            return await productService.getAll(activeCategory, page, search);
        },
        retry: false,
        staleTime: 1 * 60 * 1000
    });

    return {
        data,
        loading: isLoading,
        error: isError
    }
}

export default useProducts;