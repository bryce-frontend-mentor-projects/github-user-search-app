import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.searchBackground};
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.shadows.search};
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export interface CardProps {}

export const Card = (props: React.PropsWithChildren<CardProps>) => {
  const { children } = props;

  return <CardWrapper>{children}</CardWrapper>;
};
