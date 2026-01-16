import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { categoryService } from "@api/services/categoryService";


function useAddCategory() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async(data) => {
            return toast.promise( categoryService.create(data), {
                loading: 'Завантаження...',
                success: 'Категорія успішно створена!',
                error: async(err) => {
                    if (err && err.response && err.response.data)
                        return err.response.data?.error || 'Server error!';
                    return 'Server error('
                }
            } );
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(['categories']);
        }
    });
}

export default useAddCategory;