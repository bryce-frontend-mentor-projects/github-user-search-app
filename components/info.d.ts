import React from "react";
import { Nullable } from '../types';
export interface InfoItemListProps {
}
export interface InfoItemProps {
    icon: React.ReactNode;
    value: Nullable<string>;
    url?: string;
}
export declare const InfoItem: (props: InfoItemProps) => JSX.Element;
export declare const InfoItemList: (props: React.PropsWithChildren<InfoItemListProps>) => JSX.Element;
