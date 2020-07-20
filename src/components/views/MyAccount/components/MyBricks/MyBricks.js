import React from 'react'
import { PropTypes } from 'prop-types';

import { Button, Card } from '../../../../../components';
import { Container } from './styles';
import addIcon from '../../../../../assets/icons/add-icon.svg';
import bricksIcon from '../../../../../assets/icons/ladrillos.svg';

const MyBricks = props => {
  const { myBricks } = props;
  const {
    on_portfolio: onPortfolio,
    on_sale: onSale,
  } = myBricks;

  const calculateNumberOfBricks = () => {
    if (Object.keys(myBricks).length > 0) {
      return onPortfolio + onSale;
    }

    return 0;
  }

  const numberOfBricks = calculateNumberOfBricks();

  return (
    <Container>
      <div className="horizontal-content">
        <h2>Mis Ladrillos</h2>
        <Button text="Ver mis ladrillos" />
      </div>
      <Card height="13.3rem">
        <div className="section">
          <div className="full">
            <img alt="icono de ladrillos" src={bricksIcon} className="icon" />
            <label>{`${numberOfBricks} Ladrillos`}</label>
          </div>
          <div className="divided">
            <div>
              <label>Ladrillos en portafolio</label>
              <label className="quantity">{onPortfolio}</label>
              <img alt="simbolo de suma" src={addIcon} className="icon" />
            </div>
            <div>
              <label>Ladrillos en venta</label>
              <label className="quantity">{onSale}</label>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  )
}

MyBricks.propTypes = {
  on_portfolio: PropTypes.number.isRequired,
  on_sale: PropTypes.number.isRequired,
}

MyBricks.defaultProps = {
  on_portfolio: 0,
  on_sale: 0,
}

export default MyBricks;