import React from "react";
import styled from "styled-components";

import { Nullable } from "../types";

export interface UserInfoProps {
  /**
   * Name of the current user. If this is null or undefined, it will use the login property
   */
  name: Nullable<string>;

  /**
   * Login property from the current user
   */
  login: string;

  /**
   * formatted date string of when the current user joined.
   */
  joined: string;
}

/**
 * Styled component for the user info section
 */
export const UserInfo = styled.div.attrs<UserInfoProps>((props) => {
  const { name, login, joined } = props;

  // if no name, use the login property
  const actualName = name ?? login;

  return {
    children: (
      <>
        <h2>{actualName}</h2>
        <h3>@{login}</h3>
        <div>Joined {joined}</div>
      </>
    ),
  };
})<UserInfoProps>`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    & :last-child {
      grid-row: 1;
      grid-column: 2;
    }
  }

  & h2,
  & h3 {
    margin: 0;
    padding: 0;
  }

  & h2 {
    font-size: 26px;
  }

  & h3 {
    color: ${(props) => props.theme.colors.blue};
    font-weight: 400;
  }

  & div {
    font-size: 13px;
    color: ${(props) => props.theme.colors.grey1};
  }

  @media (max-width: 480px) {
    & h2 {
      font-size: 16px;
    }

    & h3 {
      font-size: 13px;
    }
  }
`;
