import { Route, Routes } from "react-router-dom";

import ProtectedRoute from '../components/ProtectedRoute';

import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Login from '../pages/Login/Login';

import Books from '../pages/Books/Books'; 
import BooksNew from '../pages/Books/New/BooksNew';
import BooksDetails from '../pages/Books/Details/BooksDetails';
import BooksCatalog from '../pages/Books/Catalog/BooksCatalog';
import GuestRoute from "../components/GuestRoute";

export const navRoutes = [
    {to: '/', label: 'Головна' },
    {to: '/books', label: 'Каталог'},
    {to: '/books/new', label: 'Додати книгу', protected: true}
];

const RouterView = ({auth, booksState, booksFilter, onLogin}) => {
    return (
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path = '/login' element = {
                <GuestRoute isAuthenticated = {auth.isAuthenticated}>
                    <Login 
                        setCurrentUser = {auth.setCurrentUser}
                        onLogin = {onLogin}
                    />
                </GuestRoute>
            } />
            <Route path = '/books' element = {<Books/>} >
                <Route index element = {
                        <BooksCatalog 
                            books = {booksFilter.filteredBooks} 
                            filter = {booksFilter}
                        />
                    } 
                />

                <Route path = 'new' element = {
                    <ProtectedRoute isAuthenticated = {auth.isAuthenticated}>
                        <BooksNew addBook = {booksState.addBook} />
                    </ProtectedRoute>
                }/>
                <Route path = ':id' element = {<BooksDetails books = {booksState.books} />} />
            </Route>
            <Route path = '*' element = {<NotFound/>} />
        </Routes>
    );
}

export default RouterView;