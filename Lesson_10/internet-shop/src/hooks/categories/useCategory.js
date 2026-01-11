import { useQuery } from "@tanstack/react-query";
import { categoryService } from '@api/services/categoryService'

function useCategory(categoryId) {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['category', categoryId],
        queryFn: async() => {
            return await categoryService.getById(categoryId);
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

export default useCategory;