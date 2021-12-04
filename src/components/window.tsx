import React from "react";

import styled from "styled-components";

export const Window = styled.div.attrs(({ children }) => {
  return {
    children: (
      <>
        <div data-layout-cover-child="">{children}</div>
      </>
    ),
  };
})`
  overflow: hidden;
  height: 100vh;
  display: flex;

  > [data-layout-cover-child] {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    gap: 16px;

    margin-inline-start: auto;
    margin-inline-end: auto;
    margin-inline: auto;

    @media(min-width: 481px) {
      flex: 1;
      align-self: center;
      margin-top: auto;
      margin-bottom: auto;
    }
    @media(min-width: 481px) and (max-width: 768px) {
      margin: 98px;
    }

    @media(min-width: 769px) {
      max-width: 730px;
    }
  }
`;
