import { useQuery } from "@tanstack/react-query";
import { orderService } from "@api/services/orderService";

function useOrders(status = 'all') {
    const { data, isLoading, isError, error } = useQuery({
        queryFn: async() => {
            return await orderService.get(status);
        },
        queryKey: ['orders', status],
        retry: false,
        staleTime: 1 * 60 * 1000
    });

    return {
        orders: data,
        isLoading,
        isError,
        error
    }
}

export default useOrders;