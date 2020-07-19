import React from 'react'
import PropTypes from 'prop-types';

import StyledCard from './styles';

const Card = props => {
  const { children, height } = props;

  return (
    <StyledCard height={height}>
      {children}
    </StyledCard>
  )
}

Card.propTypes = {
  height: PropTypes.string.isRequired,
}

export default Card;