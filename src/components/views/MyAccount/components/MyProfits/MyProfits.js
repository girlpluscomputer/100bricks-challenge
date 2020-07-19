import React from 'react'
import { PropTypes } from 'prop-types';

import { Card } from '../../../../../components';
import { SideContainer, Container } from './styles';
import addIcon from '../../../../../assets/icons/add-icon.svg';
import plusvaliaIcon from '../../../../../assets/icons/plusvalia.svg';
import utilityIcon from '../../../../../assets/icons/utilidadventas.svg';
import rentsIcon from '../../../../../assets/icons/rentarecibida.svg';
import othersIcon from '../../../../../assets/icons/otros.svg';

const MyProfits = props => {
  return (
    <Container>
      <h2>Mis Rendimientos</h2>
      <Card height="28.6rem">
        <SideContainer>
          <div className="section">
            <label className="big-label">Mi Rendimiento: </label>
            <label className="big-quantity">$ 435,000</label>
          </div>
          <div className="section">
            <div className="section-horizontal">
              <img alt="icono plusvalía" src={plusvaliaIcon} />
              <div className="content">
                <label className="label">Plusvalía:</label>
                <label className="quantity">$ 150,000</label>
              </div>
            </div>
            <img alt="simbolo de suma" src={addIcon} className="icon" />
          </div>
          <div className="section">
            <div className="section-horizontal">
              <img alt="icono utilidad de ventas" src={utilityIcon} />
              <div className="content">
                <label className="label">Utilidad de ventas:</label>
                <label className="quantity">$ 100,000</label>
              </div>
            </div>
            <img alt="simbolo de suma" src={addIcon} className="icon" />
          </div>
          <div className="section">
            <div className="section-horizontal">
              <img alt="icono rentas recibida" src={rentsIcon} />
              <div className="content">
                <label className="label">Rentas recibidas:</label>
                <label className="quantity">$ 180,000</label>
              </div>
            </div>
            <img alt="simbolo de suma" src={addIcon} className="icon" />
          </div>
          <div className="section">
            <div className="section-horizontal">
              <img alt="icono otros" src={othersIcon} />
              <div className="content">
                <label className="label">Otros:</label>
                <label className="quantity">$ 5,000</label>
              </div>
            </div>
          </div>
        </SideContainer>
      </Card>
    </Container>
  )
}

export default MyProfits;