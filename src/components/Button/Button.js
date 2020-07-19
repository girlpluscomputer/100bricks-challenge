import React from 'react'

import { StyledButton } from './styles';

const Button = props => {
  const { text } = props;
  return (
    <StyledButton>{text}</StyledButton>
  )
}

export default Button;