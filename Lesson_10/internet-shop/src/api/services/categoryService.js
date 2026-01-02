import api from '../axios.config';

export const categoryService = {
    getAll: async() => await api.get('/categories')
};