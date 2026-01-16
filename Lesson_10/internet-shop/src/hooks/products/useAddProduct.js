import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { productService } from "@api/services/productService";

function useAddProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async(data) => {
            return toast.promise( productService.addProduct(data), {
                loading: 'Завантаження...',
                success: 'Товар успішно створений!',
                error: async(err) => {
                    if (err && err.response && err.response.data)
                        return err.response.data?.error || 'Server error!';
                    return 'Server error('
                }
            } );
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(['products']);
        }
    });
}

export default useAddProduct;