import React from "react";

import { createGlobalStyle } from "styled-components";

import {ThemeContextProvider} from './theme';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        background-color: ${(props) => props.theme.colors.background};
        font-family: "Space Mono";
        color: ${props => props.theme.colors.textPrimary};
    }
    h1 {
        font-family: "Space Mono";
        font-weight: bold;
        font-size: 26px;
        line-height : 38px;
        color: ${props => props.theme.colors.textPrimary};
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
