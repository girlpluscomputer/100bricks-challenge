import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 1.8rem;

  .section {
    width: 100%;
    display: flex;

    img {
      margin-right: 1rem;
      margin-left: 1rem;
    }

    .brick-summatory {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      background-color: ${({ theme }) => theme.colors.background};
      border-radius: 8px;
      
      div:first-child {
        border-right: 1px solid ${({ theme }) => theme.colors.border};
        background-color: #fff;
      }

      & > div {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .big-quantity {
        font-size: ${({ theme }) => theme.font.xl};
      }

      .big-quantity,
      .quantity {
        font-weight: bold;
      }

      .quantity {
        font-size: ${({ theme }) => theme.font.md};
        margin-left: 1rem;

      }
      
      .red {
        color: ${({ theme }) => theme.colors.primary};
      }

      .label {
        font-size: ${({ theme }) => theme.font.s};
        margin-left: 0.5rem;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;

  .horizontal-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: normal;
    }
  }
`;