import styled from 'styled-components';

const StyledCard = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 0 2px 0 rgba(0, 0, 0, 0.14);
  border: solid 1px ${({ theme }) => theme.colors.border};
`;

export default StyledCard;