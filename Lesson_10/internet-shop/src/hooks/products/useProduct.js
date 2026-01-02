import { useQuery } from "@tanstack/react-query";
import { productService } from "../../api/services/productService";

function useProduct(productId) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['product', productId],
        queryFn: async() => {
            return await productService.getById(productId);
        },
        retry: false,
        staleTime: 5 * 60 * 1000
    });

    return {
        data,
        loading: isLoading,
        error: isError
    }
}

export default useProduct;