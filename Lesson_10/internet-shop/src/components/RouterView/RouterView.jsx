import { Navigate, Route, Routes } from "react-router-dom";
import Catalog from '../../pages/Catalog/Catalog';
import NotFound from "../../pages/NotFound/NotFound";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import useAuth from "../../hooks/useAuth";

import Loader from '../Loader/Loader';
import { useEffect } from "react";
import Profile from "../../pages/Profile/Profile";

import AdminLayout from '../../pages/Admin/AdminLayout';
import AdminHome from "../../pages/Admin/AdminHome/AdminHome";
import AdminEdit from "../../pages/Admin/AdminEdit/AdminEdit";
import AdminCreate from "../../pages/Admin/AdminCreate/AdminCreate";

const ProtectedRoute = ({children, protectionSettings}) => {
    const { user, loading, isAuthenticated } = useAuth();

    if (loading) 
        return <Loader visible={loading} />

    if (protectionSettings && protectionSettings.requireAuth && !isAuthenticated)
        return <Navigate to = '/login' replace />

    if (protectionSettings && protectionSettings.guestOnly && isAuthenticated)
        return <Navigate to = '/' replace />

    if (protectionSettings && protectionSettings.requireAdmin && user?.role !== 'admin')
        return <Navigate to = '/' replace />

    return children;
};

const LogoutRoute = () => {
    const { logout } = useAuth();

    useEffect(() => {
        const fetchLogout = async() => {
            logout();
        };
        fetchLogout();
    }, []);

    return <Navigate to = '/login' replace />
};

const RouterView = () => {
    return (
        <Routes>
            <Route path = '/' element = { <Catalog /> } />
            <Route path = '/login' element = { <Login /> } />
            <Route path = '/register' element = { <Register /> } />
            <Route path = '/logout' element = { 
                <ProtectedRoute protectionSettings={{ requireAuth: true }}>
                    <LogoutRoute />
                </ProtectedRoute>
            } />

            <Route path = '/profile' element = {
                <ProtectedRoute protectionSettings={{ requireAuth: true }}>
                    <Profile />
                </ProtectedRoute>
            }/>

            <Route path = '/admin' element = { 
                <ProtectedRoute protectionSettings={{ requireAdmin: true }}>
                    <AdminLayout />
                </ProtectedRoute>   
            }>
                <Route index element = { <AdminHome /> } />
                <Route path = 'create' element = { <AdminCreate />} />
                <Route path = 'edit/:id' element = { <AdminEdit /> } />
            </Route>

            <Route path = '*' element = { <NotFound /> } />
        </Routes>
    );
}

export default RouterView;