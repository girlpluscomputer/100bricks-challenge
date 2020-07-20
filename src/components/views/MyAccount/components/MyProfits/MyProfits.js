import React from 'react'
import { PropTypes } from 'prop-types';

import money from '../../../../../utils/money';
import { Card } from '../../../../../components';
import { SideContainer, Container } from './styles';
import addIcon from '../../../../../assets/icons/add-icon.svg';
import plusvaliaIcon from '../../../../../assets/icons/plusvalia.svg';
import utilityIcon from '../../../../../assets/icons/utilidadventas.svg';
import rentsIcon from '../../../../../assets/icons/rentarecibida.svg';
import othersIcon from '../../../../../assets/icons/otros.svg';

const MyProfits = props => {
  const { myProfits } = props;
  const {
    capitalGain,
    sales,
    rents,
    others
  } = myProfits;

  const calculateProfits = () => {
    if (Object.keys(myProfits).length > 0) {
      return capitalGain + sales + rents + others;
    }

    return 0;
  }

  const profits = calculateProfits();

  return (
    <Container>
      <h2>Mis Rendimientos</h2>
      <Card height="28.6rem">
        <SideContainer>
          <div className="section">
            <label className="big-label">Mi Rendimiento: </label>
            <label className="big-quantity">{money(profits || 0)}</label>
          </div>
          <div className="section">
            <div className="section-horizontal">
              <img alt="icono plusvalía" src={plusvaliaIcon} />
              <div className="content">
                <label className="label">Plusvalía:</label>
                <label className="quantity">{money(capitalGain || 0)}</label>
              </div>
            </div>
            <img alt="simbolo de suma" src={addIcon} className="icon" />
          </div>
          <div className="section">
            <div className="section-horizontal">
              <img alt="icono utilidad de ventas" src={utilityIcon} />
              <div className="content">
                <label className="label">Utilidad de ventas:</label>
                <label className="quantity">{money(sales || 0)}</label>
              </div>
            </div>
            <img alt="simbolo de suma" src={addIcon} className="icon" />
          </div>
          <div className="section">
            <div className="section-horizontal">
              <img alt="icono rentas recibida" src={rentsIcon} />
              <div className="content">
                <label className="label">Rentas recibidas:</label>
                <label className="quantity">{money(rents || 0)}</label>
              </div>
            </div>
            <img alt="simbolo de suma" src={addIcon} className="icon" />
          </div>
          <div className="section">
            <div className="section-horizontal">
              <img alt="icono otros" src={othersIcon} />
              <div className="content">
                <label className="label">Otros:</label>
                <label className="quantity">{money(others || 0)}</label>
              </div>
            </div>
          </div>
        </SideContainer>
      </Card>
    </Container>
  )
}

MyProfits.propTypes = {
  capitalGain: PropTypes.number.isRequired,
  sales: PropTypes.number.isRequired,
  rents: PropTypes.number.isRequired,
  others: PropTypes.number.isRequired,
}

MyProfits.defaultProps = {
  capitalGain: 0,
  sales: 0,
  rents: 0,
  others: 0,
}

export default MyProfits;