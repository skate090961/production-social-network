import {createContext} from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface CreateContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<CreateContextProps>({});

export const LS_THEME_KEY = 'theme';