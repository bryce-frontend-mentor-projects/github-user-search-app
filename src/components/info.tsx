import React from "react";
import styled from "styled-components";

export interface InfoItemListProps {}

export interface InfoItemProps {
  icon: React.ReactNode;
  value?: string;
}

const InfoItemWrapper = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 13px;
  display: flex;
  gap: 20px;

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
`

export const InfoItem = (props: InfoItemProps) => {
  const { icon, value } = props;

  const displayValue = value ?? "Not Available";
  return (
    <InfoItemWrapper>
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
