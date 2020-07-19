import styled from 'styled-components';

export const StyledCardFlow = styled.div`
  display: grid;
  grid-template-columns: 15.3rem repeat(6, auto);

  .section,
  .section-arrow,
  .content {
    width: 100%;
    height: 5.5rem;
    display: flex;
    align-items: center;
  }

  .section {
    display: flex;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .label {
      font-size: ${({ theme }) => theme.font.s};
      text-align: center;
    }

    .quantity {
      font-weight: bold;
    }

    .underlined {
      text-decoration: underline;
    }

    .green-quantity{
      color: ${({ theme }) => theme.colors.green};
    }

    .red-quantity{
      color: ${({ theme }) => theme.colors.primary};
    }

  }

  .section-arrow {
    .content {
      position: relative;
      z-index: 10;
      background-color: #fff;
      border-radius: 8px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: none;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .big-label {
        font-size: ${({ theme }) => theme.font.md};
      }

      .big-quantity {
        font-size: ${({ theme }) => theme.font.lg};
        font-weight: bold;
        color: ${({ theme }) => theme.colors.secondary};
      }
    }

    .arrow {
      width: 0;
      height: 0;
      border-top: 2.8rem solid transparent;
      border-left: 1.4rem solid #fff;
      border-bottom: 2.8rem solid transparent;
      position: relative;
      filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
    }
  }
`;