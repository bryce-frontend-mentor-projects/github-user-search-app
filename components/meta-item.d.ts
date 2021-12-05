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
export declare const MetaItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, MetaItemProps, never>;
