import React from 'react'
import { PropTypes } from 'prop-types';

import money from '../../../../../utils/money';
import { Card } from '../../../../../components';
import { StyledCardFlow } from './styles';
import addIcon from '../../../../../assets/icons/add-icon.svg';

const CashFlow = props => {
  const {
    accountData,
  } = props;

  const {
    brick_investment: brickInvestment,
    capital_gain: capitalGain,
    revolving_fund: revolvingFund,
    bricks_in_purchase: bricksInPurchase,
    pending_rents: pendingRents,
    available_cash: availableCash,
  } = accountData;

  const calculateAccountValue = () => {
    if (Object.keys(accountData).length > 0) {
      return (brickInvestment
        + capitalGain
        + revolvingFund
        + bricksInPurchase
        + pendingRents
        + availableCash);
    }

    return 0;
  }

  const accountValue = calculateAccountValue();

  return (
    <Card height="5.6rem">
      <StyledCardFlow>
        <div className="section-arrow">
          <div className="content">
            <label className="big-label">Valor de la cuenta:</label>
            <label className="big-quantity">{money(accountValue || 0)}</label>
          </div>
          <div className="arrow"></div>
        </div>
        <div className="section">
          <div className="content">
            <label className="label">Inversión ladrillos</label>
            <label className="quantity">{money(brickInvestment || 0)}</label>
          </div>
          <img alt="simbolo de suma" src={addIcon} className="icon" />
        </div>
        <div className="section">
          <div className="content">
            <label className="label">Plusvalía</label>
            <label className="quantity">{money(capitalGain || 0)}</label>
          </div>
          <img alt="simbolo de suma" src={addIcon} className="icon" />
        </div>
        <div className="section">
          <div className="content">
            <label className="label">Fondo revolvente</label>
            <label className="quantity">{money(revolvingFund || 0)}</label>
          </div>
          <img alt="simbolo de suma" src={addIcon} className="icon" />
        </div>
        <div className="section">
          <div className="content">
            <label className="label">Ladrillos en <br /> proceso de compra</label>
            <label className="quantity underlined">{money(bricksInPurchase || 0)}</label>
          </div>
          <img alt="simbolo de suma" src={addIcon} className="icon" />
        </div>
        <div className="section">
          <div className="content">
            <label className="label">Renta pendiente <br /> de liberar</label>
            <label className="quantity underlined">{money(pendingRents || 0)}</label>
            <label className="quantity red-quantity underlined">Liberar</label>
          </div>
          <img alt="simbolo de suma" src={addIcon} className="icon" />
        </div>
        <div className="section">
          <div className="content">
            <label className="label">Dinero <br /> disponible</label>
            <label className="quantity green-quantity">{money(availableCash || 0)}</label>
          </div>
        </div>
      </StyledCardFlow>
    </Card>
  );
}

CashFlow.propTypes = {
  brick_investment: PropTypes.number.isRequired,
  capital_gain: PropTypes.number.isRequired,
  revolving_fund: PropTypes.number.isRequired,
  bricks_in_purchase: PropTypes.number.isRequired,
  pending_rents: PropTypes.number.isRequired,
  available_cash: PropTypes.number.isRequired,
}

CashFlow.defaultProps = {
  brick_investment: 0,
  capital_gain: 0,
  revolving_fund: 0,
  bricks_in_purchase: 0,
  pending_rents: 0,
  available_cash: 0,
}

export default CashFlow;