import styled from 'styled-components';

export const StyledButton = styled.div`
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 2.5rem;
  padding 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-size: ${({ theme }) => theme.font.regular};
`;