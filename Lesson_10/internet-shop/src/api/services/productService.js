import api from '../axios.config';

export const productService = {
    getAll: async(
        category = null,
        page = 1,
        search = null
    ) => {
        const params = new URLSearchParams({
            page
        });

        if (category)
            params.append('category', category);

        if (search)
            params.append('search', search);

        let url = '/products?' + params.toString();
        return await api.get(url);
    },
    getStatista: async () => await api.get('/products/statista'),
    getById: async (id) => await api.get('/products/' + id),
    editProduct: async (id, data) => {
        return await api.patch(`/products/${id}`, data);
    },
    addProduct: async(data) => {
        return await api.post('/products', data);
    },
    deleteProduct: async(id) => {
        return await api.delete(`/products/${id}`);
    }
};