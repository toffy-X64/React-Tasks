import api from '@api/axios.config';

export const categoryService = {
    getAll: async() => await api.get('/categories'),
    delete: async(id) => {
        return await api.delete(`/categories/${id}`);
    },
    create: async(data) => {
        return await api.post('/categories', data);
    },
    getById: async(id) => {
        return await api.get(`/categories/${id}`);
    },
    update: async(id, data) => {
        return await api.patch(`/categories/${id}`, data);
    }
};