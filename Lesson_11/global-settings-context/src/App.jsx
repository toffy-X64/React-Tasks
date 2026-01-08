import clsx from "clsx";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useSettings } from "./providers/SettingsContext";


const App = () => {
    const {theme, getFontSizeStyle, t, reset} = useSettings();
    const fzClass = getFontSizeStyle();

    return (
        <div className={clsx('app', fzClass, {
            ['theme-dark']: theme === 'dark',
            ['theme-light']: theme === 'light'
        })}>
            <Header/>
            <main className="page">
                <div className="container">
                    <h1>{t('welcome')}</h1>

                    <button onClick={reset}>{t('resetSettings')}</button>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;