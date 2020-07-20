import React from 'react'
import { PropTypes } from 'prop-types';

import { Card, Button } from '../../../../../components';
import { Container, Content } from './styles';
import sales from '../../../../../assets/icons/ventas.svg';
import addIcon from '../../../../../assets/icons/add-icon.svg';

const MySales = props => {
  const { mySales } = props;
  const {
    bricks
  } = mySales;

  return (
    <Container>
      <div className="horizontal-content">
        <h2>Mis Compras / Ventas</h2>
        <Button text="Histórico de mis Ventas" />
      </div>
      <Card height="28.8rem">
        <Content>
          <div className="section">
            <img alt="" src={sales} />
            <Card height="3.1rem" width="37.2rem">
              <div className="brick-summatory">
                <div className="description">
                  <label className="big-quantity">{bricks?.current}</label>
                  <label className="label">Ladrillos <br /> totales</label>
                </div>
                <div className="description">
                  <label className="quantity">{bricks?.genesis}</label>
                  <label className="label">Ladrillos génesis</label>
                  <img alt="simbolo de suma" src={addIcon} className="icon" />
                </div>
                <div className="description">
                  <label className="quantity">{bricks?.purchased}</label>
                  <label className="label">Ladrillos comprados</label>
                  <img alt="simbolo de suma" src={addIcon} className="icon" />
                </div>
                <div className="description">
                  <label className="quantity red">{bricks?.sold}</label>
                  <label className="label">Ladrillos vendidos</label>
                </div>
              </div>
            </Card>
          </div>
        </Content>
      </Card>
    </Container>
  )
}

MySales.propTypes = {
  bricks: PropTypes.shape({
    current: PropTypes.number,
    genesis: PropTypes.number,
    purchased: PropTypes.number,
    sold: PropTypes.number,
  })
}

MySales.defaultProps = {
  bricks: {
    current: 0,
    genesis: 0,
    purchased: 0,
    sold: 0,
  }
}

export default MySales;