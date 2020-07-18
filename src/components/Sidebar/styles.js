import styled from 'styled-components';

const StyledSideBar = styled.aside`
  width: 7.9rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};

  a {
    text-decoration: none;
    height: 4.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    .section-title {
      color: ${({ theme }) => theme.colors.lightText};
      font-size: ${({ theme }) => theme.font.xs};
    }

    .section-content {
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.font.regular};
      font-family: 'Roboto', sans-serif;
    }
  }

  .selected {
    background-color: ${({ theme }) => theme.colors.gray};
    box-shadow: inset 0 1px 7px 0 rgba(134, 134, 134, 0.75);

    .section-title {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default StyledSideBar;