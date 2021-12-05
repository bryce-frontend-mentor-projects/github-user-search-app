import React from 'react'
import styled from 'styled-components';

/**
 * styled components wrapper to provide the actual styling of the image, 
 * witih breakpoints for mobile and tablet.
 */
const Wrapper = styled.img`
    border-radius: 50%;
    width: 117px;
    height: 117px;

    @media(max-width: 480px) {
        width: 70px;
        height: 70px;
    }

    @media(min-width: 768px) {
        grid-row: 1/4;
    }
`
export interface AvatarProps {
    /**
     * URL of the avatar to use
     */
    url: string;
}

/**
 * Image that contains the user's avatar.
 */
export const Avatar = (props: AvatarProps) => {
    const {url} = props;

    return <Wrapper src={url}/>
}