import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orderService } from "@api/services/orderService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCart from "@hooks/useCart";

function useAddOrder() {
    const { clear } = useCart();
    const navigate = useNavigate();

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async(data) => {
            return toast.promise( orderService.order(data), {
                loading: 'Завантаження...',
                success: 'Замовлення успішно створено!',
                error: async (err) => {
                    if (err && err.response && err.response.data)
                        return err.response.data?.error || 'Server error!';
                    return 'Server error('
                }
            } );
        },
        onSuccess: async() => {
            await queryClient.invalidateQueries(['orders']);

            clear();
            navigate('/checkout/success');
        }
    });
}

export default useAddOrder;