import React from "react";
import styled from "styled-components";

export interface MetaItemProps {
  label: string;
  value: number | string;
}

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > :first-child {
    font-size: 11px;
    color: ${props => props.theme.colors.blueGrey};
  }

  & > :second-child {
    font-size: 16px;
    color: ${props => props.theme.colors.greyDark};
    font-weight: bold;
  }
`;

export const MetaItem = (props: MetaItemProps) => {
  const { label, value } = props;

  return (
    <Wrapper>
      <div>{label}</div>
      <div>{value}</div>
    </Wrapper>
  );
};
