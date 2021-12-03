import React from "react";
export interface SearchInputProps {
    onChange?: (value: string) => void;
    hasError?: boolean;
}
export declare const SearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLInputElement>>;
