import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import {categoryService} from '@api/services/categoryService';

function useDeleteCategory() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async(id) => {
            return await categoryService.delete(id);
        },
        onSuccess: async() => {
            await queryClient.invalidateQueries(['categories']);
            toast.success('Категорію успішно видалено!');
        },
        onError: async(error) => {
            toast.error(error.response.data.error || 'Server error!');
        }
    });
}

export default useDeleteCategory;