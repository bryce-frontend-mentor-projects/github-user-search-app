import React from "react";
import styled from "styled-components";

import Moon from '../assets/icon-moon.svg';
import Sun from '../assets/icon-sun.svg';

import {useThemeContext} from '../theme';

/**
 * Styled component that acts as a wrapper for the header
 */
const HeaderWrapper = styled.header`
    --gutter: 1rem;

    display: flex;
    flex-wrap: nowrap;

    gap: var(--gutter);
    justify-content: flex-start;
    align-items: center;

    & > :first-child {
        flex: 1 1 0%;
    }
`;

/**
 * Styled component that styles the "button" that toggles the light/dark mode
 */
const ThemeSwitcher = styled.span`
  cursor: pointer;
  letter-spacing: 2.5px;
  font-size: 13px;
  display: flex;
  align-items: center;

  & > svg {
    margin-left: 16px;
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: ${props => props.theme.colors.toggleHover};

    & > svg {
      > path {
        fill: ${props => props.theme.colors.toggleHover};
      }
    }
  }

`

/**
 * Component representing the Header. It contains the button which allows the user to switch from light/dark
 * mode, displaying the appropriate text and icon for the current mode.
 */
export const Header = () => {
  const {toggleThemeMode, nextMode} = useThemeContext();

  const icon = nextMode === "light" ? <Sun/> : <Moon/>;
  const label = nextMode.toUpperCase();

  return (
    <HeaderWrapper>
      <>
        <h1>devfinder</h1>
        <ThemeSwitcher onClick={() => toggleThemeMode()}>{label} {icon}</ThemeSwitcher>
      </>
    </HeaderWrapper>
  );
};
