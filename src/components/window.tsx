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
  padding: 18px 24px;

  > [data-layout-cover-child] {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    margin-inline-start: auto;
    margin-inline-end: auto;
    margin-inline: auto;
  }
`;
