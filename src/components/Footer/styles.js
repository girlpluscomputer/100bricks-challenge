import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 12.8rem;
  padding: 0 7.9rem;
  position: relative;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default StyledFooter;