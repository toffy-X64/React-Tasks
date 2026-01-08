import { useSettings, languages, languageNames, fontSizes } from '../../providers/SettingsContext';
import styles from './Header.module.scss';

const Header = () => {
    const { 
        getOpositeTheme, toggleTheme, 
        language, switchLanguage, t,
        fontSize, switchFontSize
    } = useSettings();

    const fontSizeNames = t('fontSizes');

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1 className={styles.logo}>WebPage</h1>
                <nav className={styles.navLinks}>
                    <button className={styles.theme} onClick={toggleTheme} >{getOpositeTheme()}</button>

                    <select value={language} onChange={e => switchLanguage(e.target.value)}>
                        {languages?.map(e => (
                            <option key={e} value={e}>{languageNames[e]}</option>
                        ))}
                    </select>

                    <select value={fontSize} onChange={e => switchFontSize(e.target.value)}>
                        {fontSizes?.map(e => (
                            <option key={e} value={e}>{fontSizeNames[e]}</option>
                        ))}
                    </select>
                </nav>
            </div>
        </header>
    );
}

export default Header;