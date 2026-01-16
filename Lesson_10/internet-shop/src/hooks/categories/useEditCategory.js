import { useMutation, useQueryClient } from "@tanstack/react-query";

import { categoryService } from '@api/services/categoryService'
import toast from "react-hot-toast";

function useEditCategory() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async(data) => {
            return toast.promise(categoryService.update(data.id, data), {
                loading: 'Завантаження...',
                success: 'Категорія успішно оновлена!',
                error: async(err) => {
                    if (err && err.response && err.response.data)
                        return err.response.data?.error || 'Server error!';
                    return 'Server error('
                }
            });
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(['categories']);
        }
    });
}

export default useEditCategory;