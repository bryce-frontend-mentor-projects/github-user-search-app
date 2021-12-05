import React from "react";
import { ThemeProvider } from "styled-components";
import { useMedia } from "react-use";

import { ThemeMode, lightTheme, darkTheme } from "./theme";

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

/**
 * React context that contains the current mode as well as the method used to change it.
 */
const ThemeModeContext = React.createContext<ThemeModeContextProps | undefined>(
  undefined
);
ThemeModeContext.displayName = "ThemeModeContext";

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
export const useThemeContext = (): UseThemeContextReturn => {
  const ctx = React.useContext(ThemeModeContext);

  if (!ctx) {
    throw new Error(
      "Unable to find context. Ensure your component is wrapped in a <ThemeContextProvider>"
    );
  }

  const { setThemeMode, currentMode } = ctx;
  return {
    setThemeMode,
    currentMode,
    nextMode: currentMode === "light" ? "dark" : "light",
    toggleThemeMode: () =>
      setThemeMode((cur) => (cur === "light" ? "dark" : "light")),
  };
};

/**
 * Context provider for the theme. 
 * 
 * It is able to determine what the user's preferred color scheme by "watching" the media query `prefers-color-scheme`.
 * this value is used unless the user has overriden this preference with the property `initialMode`
 */
export const ThemeContextProvider = (
  props: React.PropsWithChildren<ThemeContextProviderProps>
) => {
  // Watch the `prefers-color-scheme` for changes, and update the color scheme accordingly
  const useDarkMode = useMedia("(prefers-color-scheme: dark");

  const { children, initialMode = useDarkMode ? "dark" : "light" } = props;

  const [themeMode, setThemeMode] = React.useState<ThemeMode>(initialMode);

  /**
   * This will set the theme based on the theme mode, and will only change
   * if the themeMode value is changed
   */
   const theme = React.useMemo(
    () => (themeMode === "light" ? lightTheme : darkTheme),
    [themeMode]
  );

  /**
   * This will fire when the media query `prefers-color-scheme` changes
   */
  React.useEffect(() => {
    setThemeMode(useDarkMode ? "dark" : "light");
  }, [useDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeModeContext.Provider
        value={{
          currentMode: themeMode,
          setThemeMode,
        }}
      >
        {children}
      </ThemeModeContext.Provider>
    </ThemeProvider>
  );
};
