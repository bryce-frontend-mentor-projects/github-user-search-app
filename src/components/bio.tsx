import React from 'react'
import styled from 'styled-components';

/**
 * Styled component wrapper for styles
 */
const Wrapper = styled.div`
    grid-column: 1/3;
    color: ${props => props.theme.colors.textSecondary};
    font-size: 13px;
    @media(min-width: 768px) {
        grid-column: 2/3;
        grid-row: 2;
    }
`;

export interface BioProps {
    /**
     * String to use for the bio.
     */
    bio?: string | null;
}

/**
 * Container for the bio information. If the bio is undefined or null uses the text "This profile has no bio"
 */
export const Bio = (props: BioProps) => {
    const {bio} = props;
    
    const copy = bio ?? "This profile has no bio";

    return <Wrapper>{copy}</Wrapper>
}