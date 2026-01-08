import { useSettings, languageNames } from '../../providers/SettingsContext';
import styles from './Footer.module.scss';

const Footer = () => {
    const {t, language} = useSettings();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.logo}>WebPage</span>

                <div className={styles.links}>
                    <p>{t('selectedLanguage')}: {languageNames[language]}</p>
                </div>

                <span className={styles.copy}>
                    © {new Date().getFullYear()} WebPage. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;