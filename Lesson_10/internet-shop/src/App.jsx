import Header from "./components/Header/Header";
import RouterView from './components/RouterView/RouterView';
import Footer from './components/Footer/Footer';

import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <RouterView/>
            <Footer/>

            <Toaster 
                position="top-right"
                toastOptions={{
                    duration: 1500,
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
                    loading: {
                        icon: null,
                        style: {
                            background: '#2563eb',
                            color: '#fff',
                        },
                    },
                }}
            />
        </div>
    );
}

export default App;