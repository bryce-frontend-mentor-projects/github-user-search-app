import React from "react";
import { ThemeProvider } from "styled-components";
import { useMedia } from "react-use";

import { ThemeMode, lightTheme, darkTheme } from "./theme";

export interface ThemeModeContextProps {
  currentMode: ThemeMode;
  setThemeMode: (value: React.SetStateAction<ThemeMode>) => void;
}

const ThemeModeContext = React.createContext<ThemeModeContextProps | undefined>(
  undefined
);
ThemeModeContext.displayName = "ThemeModeContext";

export interface ThemeContextProviderProps {
  initialMode?: ThemeMode;
}

export const useThemeContext = () => {
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

export const ThemeContextProvider = (
  props: React.PropsWithChildren<ThemeContextProviderProps>
) => {
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
