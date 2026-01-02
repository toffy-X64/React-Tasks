import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { productService } from "../../api/services/productService";

function useDeleteProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async(id) => {
            return await productService.deleteProduct(id);
        },
        onSuccess: async() => {
            await queryClient.invalidateQueries(['products']);
            toast.success('Товар успішно видалено!');
        },
        onError: (error) => {
            toast.error(error.response.data.error || 'Server error!');
        }
    });
}

export default useDeleteProduct;