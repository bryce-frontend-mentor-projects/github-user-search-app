import React from "react";
import styled from "styled-components";

import { Button } from "./button";

import SearchIcon from "../assets/icon-search.svg";

/**
 * Styled component for the search wrapper
 */
const SearchWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.searchBackground};
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.shadows.search};
  padding: 5px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  gap: 12px;

  & div {
    font-size: 13px;
    white-space: nowrap;
  }

  & svg {
    height: 20px;
    width: 20px;
  }
`;

/**
 * Styled component for the input field
 */
const StyledInput = styled.input`
  font-family: "Space Mono";
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.searchColor};
  font-size: 13px;
  width: 100%;
  &:focus {
    border: 0;
    outline: 0;
  }
`;

/**
 * Container to wrap the input field so that it can size correctly depending on the space available.
 */
const InputContainer = styled.div`
  flex: 1;
`;

/**
 * Styled component for error text. Is only displayed if in an error state.
 */
const ErrorWrapper = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.colors.error};
`;

export interface SearchInputProps {
  /**
   * Event handler for when the user clicks the search button
   */
  onChange?: (value: string) => void;

  /**
   * boolean determining if it should be in an error state.
   * 
   * @default false
   */
  hasError?: boolean;
}

/**
 * Component responsible for the Search bar. When the user clicks the `button` it will trigger an `onChange` event
 * with the value of what the user has typed in the input field.
 * 
 * The parent component is responsible for validating the input, and passing an error.
 * 
 * Internally, it uses State to track what the user types in the input field.
 */
export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    const { onChange, hasError = false } = props;

    const [value, setValue] = React.useState<string>("");

    const handleClick = () => {
      onChange?.(value);
    };

    return (
      <SearchWrapper>
        <SearchIcon />
        <InputContainer>
          <StyledInput placeholder="Search GitHub username..." ref={ref} value={value} onChange={(e) => setValue(e.target.value)} />
        </InputContainer>
        {hasError && <ErrorWrapper>No results</ErrorWrapper>}
        <Button onClick={handleClick}>Search</Button>
      </SearchWrapper>
    );
  }
);
