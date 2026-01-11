import { useQuery } from "@tanstack/react-query";
import { productService } from "@api/services/productService";

function useProductsStatista() {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['statista'],
        queryFn: productService.getStatista,
        retry: false,
        staleTime: 5 * 60 * 1000
    });

    return {
        data,
        loading: isLoading,
        error: isError
    }
}

export default useProductsStatista;