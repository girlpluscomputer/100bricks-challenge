import React from 'react'

import { Button, Card } from '../../../../../components';
import { Container } from './styles';
import addIcon from '../../../../../assets/icons/add-icon.svg';
import bricksIcon from '../../../../../assets/icons/ladrillos.svg';

const MyBricks = () => {
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
            <label>40 Ladrillos</label>
          </div>
          <div className="divided">
            <div>
              <label>Ladrillos en portafolio</label>
              <label className="quantity">35</label>
              <img alt="simbolo de suma" src={addIcon} className="icon" />
            </div>
            <div>
              <label>Ladrillos en venta</label>
              <label className="quantity">5</label>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default MyBricks;