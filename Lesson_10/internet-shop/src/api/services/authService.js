import api from '@api/axios.config';

export const authService = {
    login: async (email, password) => await api.post('/auth/login', { email, password }),
    logout: async () => await api.post('/auth/logout'),
    register: async(name, email, password, phone, address) => await api.post('/auth/register', { fullName: name, email, password, phone, address })
};