import React from "react";
import { ThemeMode } from "./theme";
export interface ThemeModeContextProps {
    /**
     * Current theme mode (light or dark)
     */
    currentMode: ThemeMode;
    /**
     * Mutation method to change the current theme mode.
     */
    setThemeMode: (value: React.SetStateAction<ThemeMode>) => void;
}
export interface ThemeContextProviderProps {
    /**
     * Initial mode to set (override default)
     */
    initialMode?: ThemeMode;
}
export interface UseThemeContextReturn extends ThemeModeContextProps {
    /**
     * Just a convenience prop to identify the mode that would be selected when you toggle (i.e.,
     * if you are in Dark mode, this will indicate "Light")
     */
    nextMode: ThemeMode;
    /**
     * Convenience function that will toggle the theme (from dark => light, or light => dark). Added
     * so you don't have to know the current theme when you call it.
     */
    toggleThemeMode: () => void;
}
/**
 * Hook to provide information about the current theme mode.
 * @returns
 */
export declare const useThemeContext: () => UseThemeContextReturn;
/**
 * Context provider for the theme.
 *
 * It is able to determine what the user's preferred color scheme by "watching" the media query `prefers-color-scheme`.
 * this value is used unless the user has overriden this preference with the property `initialMode`
 */
export declare const ThemeContextProvider: (props: React.PropsWithChildren<ThemeContextProviderProps>) => JSX.Element;
