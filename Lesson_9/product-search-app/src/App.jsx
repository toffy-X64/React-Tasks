import { Route, Routes } from "react-router-dom";

import NotFound from './pages/NotFound/NotFound';
import ProductSearch from "./pages/ProductSearch/ProductSearch";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path = '/' element = { <ProductSearch /> } />
                <Route path = '/details/:id' element = { <ProductDetails /> } />
                <Route path = '*' element = { <NotFound /> } />
            </Routes>
        </div>
    );
}

export default App;