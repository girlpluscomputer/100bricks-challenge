import React from 'react'

import { Card } from '../../../../../components';

import { StyledCardFlow } from './styles';
import addIcon from '../../../../../assets/icons/add-icon.svg';

const CashFlow = props => {
  const {
    accountValue = "$ 1,000,000",
    brickInvestment = "$ 700,000",
    capitalGain = "$ 150,000",
    revolvingFund = "$ 30,000",
    bricksInPurchase = "$ 25,000",
    pendingRents = "$ 85,000",
    availableCash = "$ 10,000"
  } = props;

  return (
    <Card height="5.6rem">
      <StyledCardFlow>
        <div className="section-arrow">
          <div className="content">
            <label className="big-label">Valor de la cuenta:</label>
            <label className="big-quantity">{accountValue}</label>
          </div>
          <div className="arrow"></div>
        </div>
        <div className="section">
          <div className="content">
            <label className="label">Inversión ladrillos</label>
            <label className="quantity">{brickInvestment}</label>
          </div>
          <img alt="simbolo de suma" src={addIcon} className="icon" />
        </div>
        <div className="section">
          <div className="content">
            <label className="label">Plusvalía</label>
            <label className="quantity">{capitalGain}</label>
          </div>
          <img alt="simbolo de suma" src={addIcon} className="icon" />
        </div>
        <div className="section">
          <div className="content">
            <label className="label">Fondo revolvente</label>
            <label className="quantity">{revolvingFund}</label>
          </div>
          <img alt="simbolo de suma" src={addIcon} className="icon" />
        </div>
        <div className="section">
          <div className="content">
            <label className="label">Ladrillos en <br /> proceso de compra</label>
            <label className="quantity underlined">{bricksInPurchase}</label>
          </div>
          <img alt="simbolo de suma" src={addIcon} className="icon" />
        </div>
        <div className="section">
          <div className="content">
            <label className="label">Renta pendiente <br /> de liberar</label>
            <label className="quantity underlined">{pendingRents}</label>
            <label className="quantity red-quantity underlined">Liberar</label>
          </div>
          <img alt="simbolo de suma" src={addIcon} className="icon" />
        </div>
        <div className="section">
          <div className="content">
            <label className="label">Dinero <br /> disponible</label>
            <label className="quantity green-quantity">{availableCash}</label>
          </div>
        </div>
      </StyledCardFlow>
    </Card>
  );
}

// CashFlow.propTypes = {
//   accountValue: PropTypes.number.isRequired,
//   brickInvestment: PropTypes.number.isRequired,
//   capitalGain: PropTypes.number.isRequired,
//   revolvingFund: PropTypes.number.isRequired,
//   bricksInPurchase: PropTypes.number.isRequired,
//   pendingRents: PropTypes.number.isRequired,
//   availableCash: PropTypes.number.isRequired,
// }

export default CashFlow;