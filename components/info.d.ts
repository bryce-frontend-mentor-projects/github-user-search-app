import React from "react";
import { Nullable } from '../types';
export interface InfoItemListProps {
}
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
/**
 * Component that displays an individual link along with its icon. If it has a `url` property, it will be
 * wrapped in a link tag
 */
export declare const InfoItem: (props: InfoItemProps) => JSX.Element;
/**
 * Styled component that handles displaying the links at the bottom of the page
 */
export declare const InfoItemList: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
