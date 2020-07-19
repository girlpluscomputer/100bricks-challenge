import React from 'react'

import { Container } from './styles';
import { Button } from '../../../components';
import { CashFlow, MyBricks, MyProfits, MyRents, MySales } from './components';

const MyAccount = () => {
  return (
    <Container>
      <div className="head">
        <h1>Mi cuenta</h1>
        <Button text="Ver flujo de efectivo" />
      </div>
      <CashFlow />
      <MyProfits />
      <MyBricks />
      <div className="divided-layout">
        <MyRents />
        <MySales />
      </div>
    </Container>
  );
}

export default MyAccount;