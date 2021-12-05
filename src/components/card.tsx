import styled from "styled-components";

/**
 * Simple styled card component that contains the "body" of the current user
 */
export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.searchBackground};
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.shadows.search};
  padding: 32px 24px;
  display: grid;
  gap: 24px;
  grid-template-columns: 70px 1fr;

  @media(min-width: 481px) {
    grid-template-columns: 117px 1fr;
  }
`;