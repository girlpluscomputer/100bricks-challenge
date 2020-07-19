import React from 'react'
import { NavLink } from 'react-router-dom';

import StyledSidebar from './styles';
import logo from '../../assets/logo.svg';
import miCuenta from '../../assets/icons/micuenta.svg';
import comprar from '../../assets/icons/comprar.svg';
import vender from '../../assets/icons/vender.svg';
import agregarFondos from '../../assets/icons/agregar-fondos.svg';
import retirarFondos from '../../assets/icons/retirar-fondos.svg';
import movimientos from '../../assets/icons/movimientos.svg';
import ayuda from '../../assets/icons/ayuda.svg';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <NavLink to="/">
        <img alt="Logo 100 ladrillos" src={logo} />
      </NavLink>
      <div className="section">
        <span className="section-title">Valor de la cuenta</span>
        <span className="section-content">$ 1.000.00 </span>
      </div>
      <div className="section">
        <span className="section-title">Saldo disponible</span>
        <span className="section-content">$ 1.000.00 </span>
      </div>
      <NavLink to="/mi-cuenta" activeClassName="selected">
        <img alt="icono mi cuenta" src={miCuenta} />
        <span className="section-title">Mi cuenta</span>
      </NavLink>
      <NavLink to="/comprar" activeClassName="selected">
        <img alt="" src={comprar} />
        <span className="section-title">Comprar</span>
      </NavLink>
      <NavLink to="/vender" activeClassName="selected">
        <img alt="" src={vender} />
        <span className="section-title">Vender</span>
      </NavLink>
      <NavLink to="/agregar-fondos" activeClassName="selected">
        <img alt="" src={agregarFondos} />
        <span className="section-title">Agregar fondos</span>
      </NavLink>
      <NavLink to="/retirar-fondos" activeClassName="selected">
        <img alt="" src={retirarFondos} />
        <span className="section-title">Retirar fondos</span>
      </NavLink>
      <NavLink to="/movimientos" activeClassName="selected">
        <img alt="" src={movimientos} />
        <span className="section-title">Movimientos</span>
      </NavLink>
      <NavLink to="/ayuda" activeClassName="selected">
        <img alt="" src={ayuda} />
      </NavLink>
    </StyledSidebar>
  );
}

export default Sidebar;