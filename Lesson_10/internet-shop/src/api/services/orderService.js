import api from '@api/axios.config';

export const orderService = {
    order: async(data) => {
        return await api.post('/orders', data);
    },
    get: async(status = null) => {
        const params = new URLSearchParams();

        if (status && status != 'all') {
            params.append('status', status);
        }

        let url = '/orders?' + params.toString();
        return await api.get(url);
    },
    updateStatus: async(id, status) => {
        return await api.patch(`/orders/${id}/status`, {
            status: status
        });
    }
};