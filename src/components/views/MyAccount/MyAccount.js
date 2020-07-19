import React from 'react'

import { Container } from './styles';
import { Button } from '../../../components';
import { CashFlow, MyProfits } from './components';

const MyAccount = () => {
  return (
    <Container>
      <div className="head">
        <h1>Mi cuenta</h1>
        <Button text="Ver flujo de efectivo" />
      </div>
      <CashFlow />
      <MyProfits />
    </Container>
  );
}

export default MyAccount;