import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    grid-column: 1/3;
`;

export interface BioProps {
    bio?: string | null;
}


export const Bio = (props: BioProps) => {
    const {bio = "This profile has no bio"} = props;

    return <Wrapper>{bio}</Wrapper>
}