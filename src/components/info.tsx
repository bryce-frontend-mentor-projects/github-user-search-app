import React from "react";
import styled from "styled-components";
import {Nullable} from '../types';

export interface InfoItemListProps {}

export interface InfoItemProps {
  icon: React.ReactNode;
  value: Nullable<string>;
}

interface ItemWrapperProps {
  hasValue: boolean;
}
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

const InfoItemListWrapper = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const InfoItem = (props: InfoItemProps) => {
  const { icon, value } = props;

  const displayValue = value || "Not Available";
  return (
    <InfoItemWrapper hasValue={!!value}>
      {icon}
      <span>{displayValue}</span>
    </InfoItemWrapper>
  );
};

export const InfoItemList = (
  props: React.PropsWithChildren<InfoItemListProps>
) => {
  const { children } = props;

  return <InfoItemListWrapper>{children}</InfoItemListWrapper>;
};
