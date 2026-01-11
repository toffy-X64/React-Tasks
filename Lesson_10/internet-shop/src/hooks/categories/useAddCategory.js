import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { categoryService } from "@api/services/categoryService";


function useAddCategory() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async(data) => {
            return await categoryService.create(data);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(['categories']);
            toast.success('Категорія успішно створена!');
        },
        onError: (error) => {
            toast.error(error.response.data.error || 'Server error!');
        }
    });
}

export default useAddCategory;