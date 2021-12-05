import React from "react";
import styled from "styled-components";

export interface MetaItemProps {
  /**
   * Label for the item (such as "Repos", etc)
   */
  label: string;

  /**
   * Value for the item
   */
  value: number | string;
}

/**
 * Component responsible for displaying a label/value for the middle "meta" section of the UI
 */
 export const MetaItem = styled.div.attrs<MetaItemProps>((props) => {
  const { label, value } = props;

  return {
    children: (
      <>
        <div>{label}</div>
        <div>{value}</div>
      </>
    ),
  };
})<MetaItemProps>`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > :first-child {
    font-size: 11px;
    color: ${(props) => props.theme.colors.blueGrey};
  }

  & > :second-child {
    font-size: 16px;
    color: ${(props) => props.theme.colors.greyDark};
    font-weight: bold;
  }
`;
