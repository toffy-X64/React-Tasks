import Header from "@components/Header/Header";
import RouterView from '@components/RouterView/RouterView';
import Footer from '@components/Footer/Footer';

import CartSync from '@components/Cart/CartSync';
import CartModal from "@components/Cart/CartModal";

import { Toaster } from "react-hot-toast";


const App = () => {
    return (
        <div className="app">
            <Header/>
            <RouterView/>
            <Footer/>

            <Toaster 
                position="bottom-right"
                toastOptions={{
                    duration: 1900,
                    success: {
                        icon: null,
                        style: {
                            background: '#16a34a',
                            color: '#fff',
                        },
                    },
                    error: {
                        icon: null,
                        style: {
                            background: '#dc2626',
                            color: '#fff',
                        },
                    },
                }}
            />

            <CartModal />
            <CartSync />
        </div>
    );
}

export default App;