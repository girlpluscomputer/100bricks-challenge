import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 4.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: fixed;
  z-index: 20;
`;

export default StyledHeader;