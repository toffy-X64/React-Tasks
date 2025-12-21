import api from '../axios.config';

export const productService = {
    search: async(query) => {
        const response = await api.get('/products/search', {
            params: {q: query}
        });
        return response.data;
    },

    getById: async(id) => {
        const response = await api.get(`/products/${id}`);
        return response.data;
    }
};