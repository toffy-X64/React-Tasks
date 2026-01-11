import { createContext } from 'react';

import { userService } from '@api/services/userService';
import { authService } from '@api/services/authService';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const queryClient = useQueryClient();

    const { data: user, isLoading } = useQuery({
        queryKey: ["me"],
        queryFn: userService.getMe,
        retry: false
    });

    const login = async (email, password) => {
        const responseData = await authService.login(email, password);
        localStorage.setItem('access-token', JSON.stringify(responseData.accessToken));
        await queryClient.refetchQueries({ queryKey: ['me'] });
    };

    const logout = async () => {
        await authService.logout();
        localStorage.removeItem('access-token');
        queryClient.setQueryData(['me'], null);
    };

    const register = async ({name, email, password, phone, address}) => {
        const responseData = await authService.register(name, email, password, phone, address);
        localStorage.setItem('access-token', JSON.stringify(responseData.accessToken));
        await queryClient.refetchQueries({ queryKey: ['me'] });
    };

    return (
        <AuthContext.Provider value = {{ user, loading: isLoading, login, register, logout, isAuthenticated: !!user }}>
            { children }
        </AuthContext.Provider>
    );
};