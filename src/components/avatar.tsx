import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.img`
    border-radius: 50%;
    width: 117px;
    height: 117px;
`
export interface AvatarProps {
    url: string;
}

export const Avatar = (props: AvatarProps) => {
    const {url} = props;

    return <Wrapper src={url}/>
}