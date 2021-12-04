import React from 'react'
import styled from 'styled-components';

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
    bio?: string | null;
}


export const Bio = (props: BioProps) => {
    const {bio} = props;
    
    const copy = bio ?? "This profile has no bio";

    return <Wrapper>{copy}</Wrapper>
}