import React from 'react';
import PropTypes from 'prop-types';

import { AddFunds } from './svg/addfunds';
import { Buy } from './svg/buy';
import { Help } from './svg/help';
import { Movements } from './svg/movements';
import { MyAccount } from './svg/myaccount';
import { RemoveFunds } from './svg/removefunds';
import { Sell } from './svg/sell';

const Icon = ({ iconType }) => {
  if (iconType === 'addfunds') {
    return <AddFunds />;
  }
  if (iconType === 'buy') {
    return <Buy />;
  }
  if (iconType === 'help') {
    return <Help />;
  }
  if (iconType === 'movements') {
    return <Movements />;
  }
  if (iconType === 'myaccount') {
    return <MyAccount />;
  }
  if (iconType === 'removefunds') {
    return <RemoveFunds />;
  }
  if (iconType === 'sell') {
    return <Sell />;
  }

  return null;
};

Icon.propTypes = {
  iconType: PropTypes.string.isRequired,
};

export default Icon;
