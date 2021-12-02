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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 730px;

  padding: 1rem;
  flex: 1 1 auto;

  > [data-layout-cover-child] {
      align-self: center;
      margin-top: auto;
      margin-bottom: auto;
      min-width: 730px;

      display: flex;
      flex-direction: column;
      gap: 24px;
  }
`;
