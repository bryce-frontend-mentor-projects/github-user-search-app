import React from 'react'
import styled from 'styled-components';

const SearchWrapper = styled.div`
    background-color: ${props => props.theme.colors.searchBackground};
    border-radius: 15px;
    box-shadow: ${props => props.theme.shadows.search};
    padding: 1em;
`

export interface SearchInputProps {

}

export const SearchInput = (props: SearchInputProps) => {
    console.log('props', props);

    return <SearchWrapper>Text</SearchWrapper>
}