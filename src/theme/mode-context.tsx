import React from "react";
import { ThemeProvider } from "styled-components";

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
  const { children, initialMode = "light" } = props;

  const [themeMode, setThemeMode] = React.useState<ThemeMode>(initialMode);

  const theme = React.useMemo(
    () => (themeMode === "light" ? lightTheme : darkTheme),
    [themeMode]
  );

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
