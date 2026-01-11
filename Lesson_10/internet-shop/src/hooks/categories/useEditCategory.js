import { useMutation, useQueryClient } from "@tanstack/react-query";

import { categoryService } from '@api/services/categoryService'
import toast from "react-hot-toast";

function useEditCategory() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async(data) => {
            return categoryService.update(data.id, data);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(['categories']);
            toast.success('Категорія успішно оновлена!');
        },
        onError: (error) => {
            toast.error(error.response.data.error || 'Server error!');
        }
    });
}

export default useEditCategory;