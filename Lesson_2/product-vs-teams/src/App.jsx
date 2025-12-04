import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainComponent from './components/MainComponent/MainComponent';
import ProductPage from './components/ProductPage/ProductSection/ProductSection';
import TeamPage from './components/TeamPage/TeamSection/TeamSection';

function App() {
    return (
        <>
            <Header />
            <MainComponent>
                <TeamPage />
                <ProductPage />
            </MainComponent>
            <Footer/>
        </>
    );
}

export default App;