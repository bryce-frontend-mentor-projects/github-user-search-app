import React from "react";
export interface SearchInputProps {
    /**
     * Event handler for when the user clicks the search button
     */
    onChange?: (value: string) => void;
    /**
     * boolean determining if it should be in an error state.
     *
     * @default false
     */
    hasError?: boolean;
}
/**
 * Component responsible for the Search bar. When the user clicks the `button` it will trigger an `onChange` event
 * with the value of what the user has typed in the input field.
 *
 * The parent component is responsible for validating the input, and passing an error.
 *
 * Internally, it uses State to track what the user types in the input field.
 */
export declare const SearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLInputElement>>;
