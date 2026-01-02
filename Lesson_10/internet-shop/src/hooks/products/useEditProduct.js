import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { productService } from "../../api/services/productService";

function useEditProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async(data) => {
            return await productService.editProduct(data.id, data);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(['products']);
            toast.success('Товар успішно оновлений!');
        },
        onError: (error) => {
            toast.error(error.response.data.error || 'Server error!');
        }
    });
}

export default useEditProduct;