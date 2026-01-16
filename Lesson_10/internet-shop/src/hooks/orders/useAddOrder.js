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
            return await orderService.order(data);
        },
        onSuccess: async() => {
            toast.success('Замовлення успішно створено!');
            await queryClient.invalidateQueries(['orders']);

            clear();
            navigate('/checkout/success');
        },
        onError: async(err) => {
            if (err && err.response && err.response.data)
                toast.error(err.response.data?.error || 'Server error!');

            toast.error('Server error!');
        }
    });
}

export default useAddOrder;