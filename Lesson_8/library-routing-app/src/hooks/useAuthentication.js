import useLocalStorage from './useLocalStorage.js';

function useAuthentication() {
    const [currentUser, setCurrentUser] = useLocalStorage('current-user', null);
    const isAuthenticated = Boolean(currentUser);

    return {
        currentUser, 
        isAuthenticated, 
        setCurrentUser
    }
}

export default useAuthentication;