import styled from 'styled-components';

/**
 * Component that acts as container to the meta data section of the UI.
 */
export const Meta = styled.div`
    background-color: ${props => props.theme.colors.metaBackground};
    grid-column: 1/3;
    display: flex;
    justify-content: space-evenly;
    border-radius: 10px;
    padding: 12px;
`;