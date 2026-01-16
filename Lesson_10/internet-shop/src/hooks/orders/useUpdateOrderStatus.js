import { useMutation, useQueryClient } from "@tanstack/react-query";

import { orderService } from "@api/services/orderService";
import toast from "react-hot-toast";

function useUpdateOrderStatus() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async({id, status}) => {
            return toast.promise( orderService.updateStatus(id, status), {
                loading: 'Оновлення...',
                success: 'Статус замовлення успішно оновлено!',
                error: (err) => {
                    if (err && err.response && err.response.data)
                        return err.response.data?.error || 'Server error!';
                    return 'Server error('
                }
            } );
        },
        onSuccess: async() => {
            await queryClient.invalidateQueries(['orders']);
        }
    });
}

export default useUpdateOrderStatus;