import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { productService } from "@api/services/productService";
import { useNavigate } from "react-router-dom";

function useEditProduct() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: async(data) => {
            return toast.promise(productService.editProduct(data.id, data), {
                loading: 'Завантаження...',
                success: 'Товар успішно оновлено!',
                error: async(err) => {
                    if (err && err.response && err.response.data)
                        return err.response.data?.error || 'Server error!';
                    return 'Server error('
                }
            });
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(['products']);
            navigate('/admin');
        }
    });
}

export default useEditProduct;