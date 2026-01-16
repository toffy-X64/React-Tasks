import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { productService } from "@api/services/productService";

function useDeleteProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async(id) => {
            return toast.promise(productService.deleteProduct(id), {
                loading: 'Завантаження...',
                success: 'Товар успішно видалено!',
                error: async(err) => {
                    if (err && err.response && err.response.data)
                        return err.response.data?.error || 'Server error!';
                    return 'Server error('
                }
            });
        },
        onSuccess: async() => {
            await queryClient.invalidateQueries(['products']);
        }
    });
}

export default useDeleteProduct;