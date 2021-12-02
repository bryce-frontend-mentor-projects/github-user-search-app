import React from "react";
import { ThemeMode } from "./theme";
export interface ThemeModeContextProps {
    currentMode: ThemeMode;
    setThemeMode: (value: React.SetStateAction<ThemeMode>) => void;
}
export interface ThemeContextProviderProps {
    initialMode?: ThemeMode;
}
export declare const useThemeContext: () => {
    setThemeMode: (value: React.SetStateAction<ThemeMode>) => void;
    currentMode: ThemeMode;
    nextMode: string;
    toggleThemeMode: () => void;
};
export declare const ThemeContextProvider: (props: React.PropsWithChildren<ThemeContextProviderProps>) => JSX.Element;
