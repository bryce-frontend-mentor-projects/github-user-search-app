import React from 'react'
import styled from 'styled-components';

export interface MetaProps {
}

const Wrapper = styled.div`
    background-color: ${props => props.theme.colors.metaBackground};
    grid-column: 1/3;
    display: flex;
    justify-content: space-evenly;
    border-radius: 10px;
    padding: 12px;
`;

export const Meta = (props: React.PropsWithChildren<MetaProps>) => {
    const {children} = props;

    return <Wrapper>{children}</Wrapper>
}