import styled from 'styled-components';

export const Content = styled.div`
  width: calc(100vw - 7.8rem);
  height: 100vh;
  position: relative;
  left: 7.8rem;
  top: 4.4rem;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.6rem 3.2rem;
`;

export const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;