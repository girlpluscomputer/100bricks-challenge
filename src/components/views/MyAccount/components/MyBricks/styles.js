import styled from 'styled-components';

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

  .section {
    width: 14rem;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    padding: 1rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);

    .full {
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;

      label {
        font-size: ${({ theme }) => theme.font.lg};
        font-weight: bold;
      }
    }

    .divided {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;

      div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: ${({ theme }) => theme.font.s};

        label {
          width: 100%;
          text-align: center;
        }

        .quantity {
          font-size: ${({ theme }) => theme.font.bg};
          font-weight: bold;
        }
      }

      div:first-child {
        border-right: 1px solid ${({ theme }) => theme.colors.border};
        position: relative;

        img {
          position: absolute;
          left: 90%;
          padding: 10px 0;
          background-color: #fff;
        }
      }
    }
  }
`;