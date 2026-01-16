import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import {categoryService} from '@api/services/categoryService';

function useDeleteCategory() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async(id) => {
            return toast.promise( categoryService.delete(id), {
                loading: 'Завантаження...',
                success: 'Категорію успішно видалено!',
                error: async(err) => {
                    if (err && err.response && err.response.data)
                        return err.response.data?.error || 'Server error!';
                    return 'Server error('
                }
            } );
        },
        onSuccess: async() => {
            await queryClient.invalidateQueries(['categories']);
        }
    });
}

export default useDeleteCategory;