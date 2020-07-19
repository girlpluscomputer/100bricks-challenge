import React from 'react'

import { Card, Button } from '../../../../../components';
import { Container, Content } from './styles';
import sales from '../../../../../assets/icons/ventas.svg';
import addIcon from '../../../../../assets/icons/add-icon.svg';

const MySales = () => {
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
                <div clasName="description">
                  <label className="big-quantity">40</label>
                  <label className="label">Ladrillos <br /> totales</label>
                </div>
                <div clasName="description">
                  <label className="quantity">50</label>
                  <label className="label">Ladrillos génesis</label>
                  <img alt="simbolo de suma" src={addIcon} className="icon" />
                </div>
                <div clasName="description">
                  <label className="quantity">57</label>
                  <label className="label">Ladrillos comprados</label>
                  <img alt="simbolo de suma" src={addIcon} className="icon" />
                </div>
                <div clasName="description">
                  <label className="quantity red">18</label>
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

export default MySales;