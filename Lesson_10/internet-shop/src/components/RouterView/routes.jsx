import { Box } from 'lucide-react';
import { ShoppingCart, ShieldUser, User, LogOut, LogIn, UserPlus } from 'lucide-react';

export const navRoutes = [
    {
        icon: <Box />,
        title: 'Каталог',
        link: '/',
        protected: false
    },
    {
        icon: <LogIn />,
        title: 'Увійти',
        link: '/login',
        protected: {
            guestOnly: true
        }
    },
    {
        icon: <UserPlus />,
        title: 'Реєстрація',
        link: '/register',
        protected: {
            guestOnly: true
        }
    },
    {
        icon: <ShoppingCart />,
        title: 'Кошик',
        custom: 'cart',
        protected: {
            requireAuth: true
        }
    },
    {
        icon: <ShieldUser />,
        title: 'Адмін панель',
        link: '/admin',
        protected: {
            requireAdmin: true
        }
    },
    {
        icon: <User />,
        title: 'Профіль',
        link: '/profile',
        protected: {
            requireAuth: true
        }
    },
    {
        icon: <LogOut />,
        title: 'Вихід',
        link: '/logout',
        protected: {
            requireAuth: true,
            requireAdmin: false
        }
    }
];