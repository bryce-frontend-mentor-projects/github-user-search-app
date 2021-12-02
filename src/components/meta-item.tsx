import React from "react";
import styled from "styled-components";

export interface MetaItemProps {
  label: string;
  value: number | string;
}

const Wrapper = styled.div``;

export const MetaItem = (props: MetaItemProps) => {
  const { label, value } = props;

  return (
    <Wrapper>
      <div>{label}</div>
      <div>{value}</div>
    </Wrapper>
  );
};
