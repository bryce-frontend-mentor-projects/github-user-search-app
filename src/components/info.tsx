import React from "react";
import styled from "styled-components";
import {Nullable} from '../types';

export interface InfoItemListProps {}

export interface InfoItemProps {
  /**
   * Icon to use for the list item
   */
  icon: React.ReactNode;

  /**
   * Value for the item
   */
  value: Nullable<string>;

  /**
   * URL to use for the link
   */
  url?: string;
}

interface ItemWrapperProps {
  /**
   * Internal property to toggle opacity on an item if it doesn't contain a value
   */
  hasValue: boolean;
}

/**
 * Wrapper for a list item.
 */
const InfoItemWrapper = styled.div<ItemWrapperProps>`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 13px;
  display: flex;
  gap: 20px;

  opacity: ${props => props.hasValue ? 1 : 0.5};
  & > svg {
    height: 20px;
    width: 20px;
    > path, > g {
      fill: ${props => props.theme.colors.textSecondary};
    }
  }
`;

/**
 * Component that displays an individual link along with its icon. If it has a `url` property, it will be 
 * wrapped in a link tag
 */
export const InfoItem = (props: InfoItemProps) => {
  const { icon, value, url } = props;

  const displayValue = value || "Not Available";

  const child = url && value ? <a href={url}>{displayValue}</a> : <span>{displayValue}</span>
  return (
    <InfoItemWrapper hasValue={!!value}>
      {icon}
      {child}
    </InfoItemWrapper>
  );
};

/**
 * Styled component that handles displaying the links at the bottom of the page
 */
export const InfoItemList = styled.div`
  grid-column: 1 / 3;
  
  display: grid;
  gap: 16px;

  @media(min-width: 481px) {
    grid-template-columns: 1fr 1fr;
  }
`

