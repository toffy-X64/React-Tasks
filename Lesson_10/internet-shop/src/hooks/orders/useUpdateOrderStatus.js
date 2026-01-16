import { useMutation, useQueryClient } from "@tanstack/react-query";

import { orderService } from "@api/services/orderService";
import toast from "react-hot-toast";

function useUpdateOrderStatus() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async({id, status}) => {
            return await orderService.updateStatus(id, status);
        },
        onSuccess: async() => {
            await queryClient.invalidateQueries(['orders']);
            toast.success('Статус замовлення успішно оновлено!');
        },
        onError: async(err) => {
            if (err && err.response && err.response.data)
                toast.error(err.response.data?.error || 'Server error!');
            toast.error('Server error!');
        }
    });
}

export default useUpdateOrderStatus;