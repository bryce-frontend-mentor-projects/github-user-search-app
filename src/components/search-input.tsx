import React from "react";
import styled from "styled-components";

import { Button } from "./button";

import SearchIcon from "../assets/icon-search.svg";

const SearchWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.searchBackground};
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.shadows.search};
  padding: 1em;
  display: flex;
  align-items: center;
  gap: 12px;

  & div {
    font-size: 13px;
    white-space: nowrap;
  }

  & svg {
    height: 24px;
    width: 24px;
  }
`;

const StyledInput = styled.input`
  font-family: "Space Mono";
  background-color: transparent;
  border: 0;
  flex: 1;
  color: ${(props) => props.theme.colors.searchColor};
  font-size: 13px;

  &:focus {
      border: 0;
      outline: 0;
  }
`;

const ErrorWrapper = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.colors.error};
`

export interface SearchInputProps {
  onChange?: (value: string) => void;
  hasError?: boolean;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>((props, ref) => {
  const {onChange, hasError = false} = props;

  const [value, setValue] = React.useState<string>("");

  const handleClick = () => {
    onChange?.(value);
  }

  if(hasError) {
    console.log('HAS ERROR');
  }
  return (
    <SearchWrapper>
      <SearchIcon />
      <StyledInput ref={ref} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search GitHub username..." />
      {hasError && <ErrorWrapper>No results</ErrorWrapper>}
      <Button onClick={handleClick}>Search</Button>
    </SearchWrapper>
  );
});
