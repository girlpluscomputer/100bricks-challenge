import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.font.md};
    font-weight: bold;
    margin: 0;
  }
`;