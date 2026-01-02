import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../../api/services/categoryService";

function useCategories() {
    const { data: categories, isLoading, isError } = useQuery({
        queryKey: ['categories'],
        queryFn: categoryService.getAll,
        retry: false,
        staleTime: 15 * 60 * 1000
    });

    return {
        categories,
        loading: isLoading,
        error: isError
    };
}

export default useCategories;