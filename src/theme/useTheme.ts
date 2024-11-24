import {useContext} from "react";
import {LS_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const themeSelected = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(themeSelected)
        localStorage.setItem(LS_THEME_KEY, themeSelected)
    };

    return {
        theme,
        toggleTheme
    }
}