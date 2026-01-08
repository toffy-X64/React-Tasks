import { createContext, useContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage';
import { translations } from '../data/translations';

export const SettingsContext = createContext(null);

export const languages = ['en', 'uk'];
export const fontSizes = ['small', 'medium', 'large'];

export const languageNames = {
    en: 'English',
    uk: 'Українська'
};

export const SettingsProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [language, setLanguage] = useLocalStorage('lang', 'en');
    const [fontSize, setFonstSize] = useLocalStorage('fz', 'medium');

    const getOpositeTheme = () => {
        return (theme === 'light' ? 'dark' : 'light');
    }

    const getFontSizeStyle = () => {
        if (fontSize === 'large')
            return 'fz-lg';

        if (fontSize === 'medium')
            return 'fz-md';

        if (fontSize === 'small')
            return 'fz-sm';

        return 'fz-md';
    };

    const toggleTheme = () => {
        setTheme( getOpositeTheme() );
    };

    const switchLanguage = (lang) => {
        if (!languages.includes(lang))
            return;

        setLanguage(lang);
    };

    const switchFontSize = (fz) => {
        if (!fontSizes.includes(fz))
            return;

        setFonstSize(fz);
    };

    const reset = () => {
        switchFontSize('medium');
        switchLanguage('en');
        setTheme('light');
    };

    const t = (key) => translations[language]?.[key] ?? key;

    const value = {
        theme,
        language,
        fontSize,
        toggleTheme,
        switchLanguage,
        switchFontSize,
        t,
        getOpositeTheme,
        getFontSizeStyle,
        reset
    };

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => useContext(SettingsContext);