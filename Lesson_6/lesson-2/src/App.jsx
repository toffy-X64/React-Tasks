import { useState } from "react";
import {users as initialUsers} from './mocks/users.js';

import Header from "./components/Header/Header.jsx";
import AdminPanel from "./components/AdminPanel/AdminPanel.jsx";
import UserPanel from "./components/UserPanel/UserPanel.jsx";

import AuthModal from "./components/Modals/AuthModal.jsx";

function App() {
    const [users, setUsers] = useState(() => {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : initialUsers;
    });
    const [currentUser, setCurrentUser] = useState(null);

    // modals
    const [isLoginModalActive, setIsLoginModalActive] = useState(false);
    const [isRegisterModalActive, setIsRegisterModalActive] = useState(false);

    // login-modal
    const handleOpenLoginModal = () => {
        setIsLoginModalActive(true);
    };
    const handleOnLoginClose = () => {
        setIsLoginModalActive(false);
    };

    // register-modal
    const handleOpenRegisterModal = () => {
        setIsRegisterModalActive(true);
    };
    const handleOnRegisterClose = () => {
        setIsRegisterModalActive(false);
    };

    ///////////////////////
    const handleOnLogout = () => {
        setCurrentUser(null);
    };

    const saveUsersToLocalStorage = (updateUsers) => {
        localStorage.setItem('users', JSON.stringify(updateUsers));
    };

    //////////////////////////
    const handleOnLogin = (email, password) => {
        const foundUser = users.find((u) => u.email === email && u.password === password);

        if (!foundUser)
            return "Invalid credentials provided";

        if (foundUser.isBlocked)
            return "You has been banned";

        setCurrentUser(foundUser);
        setIsLoginModalActive(false);
        return null;
    };

    const handleOnRegister = (email, password) => {
        const foundUser = users.find((u) => u.email === email);
        if (foundUser)
            return 'User with this email is already exists!';

        const newUser = {
            id: crypto.randomUUID(),
            email,
            password,
            role: 'user',
            isBlocked: false
        }

        setUsers(prev => {
            const updated = [...prev, newUser];
            saveUsersToLocalStorage(updated);
            return updated;
        });
        

        setIsRegisterModalActive(false);
        setCurrentUser(newUser);
        return null;
    };

    const toggleBan = (userId) => {
        setUsers(prev => {
            const updated = prev.map(
                u => u.id === userId ? {...u, isBlocked: !u.isBlocked} : u
            );
            saveUsersToLocalStorage(updated);
            return updated;
        });
    };

    return (
        <div className="app">
            <Header currentUser={currentUser} onLoginModalOpen={handleOpenLoginModal} onRegisterModalOpen={handleOpenRegisterModal} onLogout={handleOnLogout} />

            {isLoginModalActive && (
                <AuthModal
                    ModalType={'login'} 
                    onClose={handleOnLoginClose} 
                    onContinue={handleOnLogin}
                />
            )}
            {isRegisterModalActive && (
                <AuthModal
                    ModalType={'register'} 
                    onClose={handleOnRegisterClose} 
                    onContinue={handleOnRegister}
                />
            )}

            <main>
                {!currentUser && <p className="info">Please login!</p>}

                {currentUser?.role === 'admin' && <AdminPanel users={users} toggleBan={toggleBan} />}
                {currentUser?.role === 'user' && <UserPanel currentUser={currentUser} />}

            </main>
        </div>
    );
}

export default App;