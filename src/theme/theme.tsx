import {DefaultTheme} from 'styled-components';
const baseTheme = {
    fonts: {
        body: "Space Mono"
    },
    fontSizes: [13, 15, 16, 22, 26],

}

export type ThemeMode = "light" | "dark";

export const lightTheme: DefaultTheme = {
    ...baseTheme,
    colors: {
        blue: "#0079FF",
        grey1: "#697C9A",
        blueGrey: "#4B6A9B",
        greyDark: "#2B3442",
        whiteGhost: "#F6F8FF",
        white: "#FEFEFE",

        background: "#F6F8FF",

        textPrimary: "#2B3442",
        textSecondary: "#4B6A9B",

        toggleHover: "#222731",

        button: "#0079FF",
        buttonHover: "#60ABFF",
        panel: "#FEFEFE",

        searchBackground: "#FEFEFE",
        cardBackground: "#FEFEFE"
    },
    shadows: {
        search: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
    }
}

export const darkTheme: DefaultTheme = {
    ...baseTheme,
    colors: {
        blue: "#0079FF",
        white: "#FFFFFF",
        grey: "#141D2F",

        background: "#141D2F",
        textPrimary: "#FFFFFF",
        textSecondary: "#FFFFFF",

        toggleHover: "#90A4D4",

        button: "#0079FF",
        buttonHover: "#60ABFF",
        panel: "#1E2A47",

        searchBackground: "#1E2A47",
        cardBackground: "#1E2A47"
    },
    shadows: {
        search: "none"
    }
}