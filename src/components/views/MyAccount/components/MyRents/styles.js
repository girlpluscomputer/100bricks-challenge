import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
  padding: 1.5rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    width: 25%;
    height: 2.2rem;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: ${({ theme }) => theme.font.xxs};
    color: #fff;
    background-color: ${({ theme }) => theme.colors.darkGray};
    text-align: center;
    vertical-align: middle;
  }

  th:first-child {
    width: 50%;
    padding-left: 2rem;
    text-align: left;
  }

  tr {
    height: 2.3rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    vertical-align: center;
  }

  tr:last-child {
    background-color: ${({ theme }) => theme.colors.lightPrimary};
    border-bottom: none;
    font-weight: bold;
  }

  td {
    padding-left: 2rem;
    vertical-align: middle;

    label {
      margin-left: 1.2rem;
    }
  }

  td:first-child {
    display: flex;
    align-items: center;
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