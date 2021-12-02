import React from "react";

import { createGlobalStyle } from "styled-components";

import { ThemeContextProvider } from "./theme";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    @font-face {
      font-family: 'Space Mono';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/spacemono/v6/i7dPIFZifjKcF5UAWdDRYEF8RXi4EwQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }    
    body {
        background-color: ${(props) => props.theme.colors.background};
        font-family: "Space Mono";
        color: ${(props) => props.theme.colors.textPrimary};
    }
    h1 {
        font-family: "Space Mono";
        font-weight: bold;
        font-size: 26px;
        line-height : 38px;
        color: ${(props) => props.theme.colors.textPrimary};
    }
`;

export const Root = (props: React.PropsWithChildren<{}>) => {
  const { children } = props;

  return (
    <ThemeContextProvider>
      <GlobalStyle />
      {children}
    </ThemeContextProvider>
  );
};
