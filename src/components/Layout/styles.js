import styled from 'styled-components';

export const Content = styled.div`
  width: calc(100vw - 7.9rem);
  min-height: calc(100vh - 4.4rem);
  overflow: none;
  position: relative;
  left: 7.9rem;
  top: 4.4rem;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.6rem 3.2rem;
`;

export const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;