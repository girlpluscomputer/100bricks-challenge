import React from 'react'
import PropTypes from 'prop-types';

import StyledCard from './styles';

const Card = props => {
  const { children, height, width } = props;

  return (
    <StyledCard height={height} width={width}>
      {children}
    </StyledCard>
  )
}

Card.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string
};

Card.defaultProps = {
  width: '100%'
}

export default Card;