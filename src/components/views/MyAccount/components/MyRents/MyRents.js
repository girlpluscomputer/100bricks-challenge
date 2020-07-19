import React from 'react';

import { Card, Button } from '../../../../../components';
import { Container, Content, Table } from './styles';
import anualRentIcon from '../../../../../assets/icons/renta-anual.svg';

const MyRents = () => {
  return (
    <Container>
      <div className="horizontal-content">
        <h2>Mis Rentas</h2>
        <Button text="Ver mis rentas" />
      </div>
      <Card height="28.8rem">
        <Content>
          <Table>
            <th>Concepto</th>
            <th>Mensual</th>
            <th>Anual</th>
            <tr>
              <td>
                <img alt="icono renta" src={anualRentIcon} />
                <label>Renta Actual</label>
              </td>
              <td>$ 2, 000</td>
              <td>$ 24, 000</td>
            </tr>
            <tr>
              <td>
                <img alt="icono renta" src={anualRentIcon} />
                <label>Renta Estimada <br /> Área Disponible</label>
              </td>
              <td>$ 2, 000</td>
              <td>$ 24, 000</td>
            </tr>
            <tr>
              <td>
                <img alt="icono renta" src={anualRentIcon} />
                <label>Renta Anual Actual + Estimada</label>
              </td>
              <td>$ 2, 000</td>
              <td>$ 24, 000</td>
            </tr>
          </Table>
        </Content>
      </Card>
    </Container>
  )
}

export default MyRents;