import React from "react";
import styled from 'styled-components';

import {Nullable} from '../types';

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    & :last-child {
      grid-row: 1;
      grid-column: 2;
    }
  }


  & h2, & h3 {
    margin: 0;
    padding: 0;
  }

  & h2 {
    font-size: 26px;
  }

  & h3 {
    color: ${props => props.theme.colors.blue};
    font-weight: 400;
  }

  & div {
    font-size: 13px;
    color: ${props => props.theme.colors.grey1};
  }

  @media(max-width: 480px) {
    & h2 {
      font-size: 16px;
    }

    & h3 {
      font-size: 13px;
    }
  }
`
export interface UserInfoProps {
  name: Nullable<string>;
  login: string;
  joined: string;
}

export const UserInfo = (props: UserInfoProps) => {
  const { name, login, joined } = props;

  const actualName = name ?? login;

  return (
    <UserInfoWrapper>
      <h2>{actualName}</h2>
      <h3>@{login}</h3>
      <div>Joined {joined}</div>
    </UserInfoWrapper>
  );
};
