import { Nullable } from "../types";
export interface UserInfoProps {
    /**
     * Name of the current user. If this is null or undefined, it will use the login property
     */
    name: Nullable<string>;
    /**
     * Login property from the current user
     */
    login: string;
    /**
     * formatted date string of when the current user joined.
     */
    joined: string;
}
/**
 * Styled component for the user info section
 */
export declare const UserInfo: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, UserInfoProps, never>;
