import React from 'react'
import { NavLink } from 'react-router-dom';

import StyledSidebar from './styles';
import logo from '../../assets/logo.svg';
import { Icon } from '../../components';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <NavLink to="/">
        <img alt="Logo 100 ladrillos" src={logo} />
      </NavLink>
      <NavLink to="/valor-de-cuenta" activeClassName="selected">
        <span className="section-title">Valor de la cuenta</span>
        <span className="section-content">$ 1.000.00 </span>
      </NavLink>
      <NavLink to="/saldo-disponible" activeClassName="selected">
        <span className="section-title">Saldo disponible</span>
        <span className="section-content">$ 1.000.00 </span>
      </NavLink>
      <NavLink to="/mi-cuenta" activeClassName="selected">
        <Icon iconType="myaccount" />
        <span className="section-title">Mi cuenta</span>
      </NavLink>
      <NavLink to="/comprar" activeClassName="selected">
        <Icon iconType="buy" />
        <span className="section-title">Comprar</span>
      </NavLink>
      <NavLink to="/vender" activeClassName="selected">
        <Icon iconType="sell" />
        <span className="section-title">Vender</span>
      </NavLink>
      <NavLink to="/agregar-fondos" activeClassName="selected">
        <Icon iconType="addfunds" />
        <span className="section-title">Agregar fondos</span>
      </NavLink>
      <NavLink to="/retirar-fondos" activeClassName="selected">
        <Icon iconType="removefunds" />
        <span className="section-title">Retirar fondos</span>
      </NavLink>
      <NavLink to="/movimientos" activeClassName="selected">
        <Icon iconType="movements" />
        <span className="section-title">Movimientos</span>
      </NavLink>
      <NavLink to="/ayuda" activeClassName="selected">
        <Icon iconType="help" />
      </NavLink>
    </StyledSidebar>
  );
}

export default Sidebar;