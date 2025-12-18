import useAuthentication from './hooks/useAuthentication.js';

import RouterView from "./routes/routes";

import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';

import useBooks from './hooks/useBooks.js';
import useBooksFilter from './hooks/useBooksFilter.js';
import useLocalStorage from './hooks/useLocalStorage.js';

import { usersData } from './mocks/usersData.js';
import useAuthorization from './hooks/useAuthorization.js';

const App = () => {
    const auth = useAuthentication();
    const booksState = useBooks();
    const booksFilter = useBooksFilter(booksState.books);

    const [users, setUsers] = useLocalStorage('users-storage', usersData);
    const { login } = useAuthorization(users);

    return (
        <div className="app">
            <Navbar 
                currentUser = {auth.currentUser}
                setCurrentUser = {auth.setCurrentUser}
                isAuthenticated = {auth.isAuthenticated}
            />
            <RouterView  
                auth = {auth}
                booksState = {booksState}
                booksFilter = {booksFilter}
                onLogin = {login}
            />
            <Footer />
        </div>
    );
}

export default App;