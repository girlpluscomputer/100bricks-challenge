import React from 'react'

import { Container } from './styles';
import { CashFlow, Button } from '../../../components';

const MyAccount = () => {
  return (
    <Container>
      <h1>Mi cuenta</h1>
      <Button text="Ver flujo de efectivo" />
      <CashFlow />
    </Container>
  );
}

export default MyAccount;