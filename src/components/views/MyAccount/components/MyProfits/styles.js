import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-weight: normal;
  }
`;

export const SideContainer = styled.div`
  width: 12.7rem;
  height: 100%;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: grid;
  grid-template-rows: repeat(5, auto);
  padding: 0 0.6rem;
  border-right: 1px solid ${({ theme }) => theme.colors.border};

  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    position: relative;

    .big-label {
      font-size: ${({ theme }) => theme.font.md};
    }

    .big-quantity {
      font-size: ${({ theme }) => theme.font.lg};
      font-weight: bold;
    }

    .icon {
      position: absolute;
      bottom: -10px;
      padding: 0 10px;
      background-color: white;
    }

    .section-horizontal {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 1.2rem;

      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1rem;

        .label,
        .quantity {
          font-size: ${({ theme }) => theme.font.s};
          white-space: nowrap;
        }
    
        .quantity {
          font-weight: bold;
        }
      }
    }
  }
`;