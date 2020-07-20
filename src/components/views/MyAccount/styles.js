import styled from 'styled-components';

export const Container = styled.div`
  .head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h1 {
      font-size: ${({ theme }) => theme.font.md};
      font-weight: bold;
      margin: 0;
    }
  }

  .divided-layout {
    display: grid;
    grid-template-columns: 33% auto;
    grid-column-gap: 20px;
  }
`;