import React from "react";
export interface InfoItemListProps {
}
export interface InfoItemProps {
    icon: React.ReactNode;
    value?: string;
}
export declare const InfoItem: (props: InfoItemProps) => JSX.Element;
export declare const InfoItemList: (props: React.PropsWithChildren<InfoItemListProps>) => JSX.Element;
