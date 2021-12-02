import React from 'react'
import styled from 'styled-components';

export interface MetaProps {
}

const Wrapper = styled.div`
    grid-column: 1/3;
`;

export const Meta = (props: React.PropsWithChildren<MetaProps>) => {
    const {children} = props;

    return <Wrapper>{children}</Wrapper>
}