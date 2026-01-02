import api from '../axios.config';

export const userService = {
    getMe: async () => await api.get('/auth/me')
};