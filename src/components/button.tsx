import styled from 'styled-components';

/**
 * Simple styled button for use in the search bar
 */
export const Button = styled.button`
    background-color: ${props => props.theme.colors.button};
    color: ${props => props.theme.colors.white};
    font-family: "Space Mono";
    font-size: 14px;
    border-radius: 10px;
    border: 0;
    padding: 12px 18px;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.theme.colors.buttonHover};
    }
`;

