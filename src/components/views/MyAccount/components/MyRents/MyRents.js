import React from 'react';
import { PropTypes } from 'prop-types';

import money from '../../../../../utils/money';
import { Card, Button } from '../../../../../components';
import { Container, Content, Table } from './styles';
import anualRentIcon from '../../../../../assets/icons/renta-anual.svg';

const MyRents = props => {
  const { myRents } = props;
  const {
    current,
    estimated,
    totals,
  } = myRents;

  return (
    <Container>
      <div className="horizontal-content">
        <h2>Mis Rentas</h2>
        <Button text="Ver mis rentas" />
      </div>
      <Card height="28.8rem">
        <Content>
          <Table>
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Mensual</th>
                <th>Anual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img alt="icono renta" src={anualRentIcon} />
                  <label>Renta Actual</label>
                </td>
                <td>{money(current?.monthly || 0)}</td>
                <td>{money(current?.yearly || 0)}</td>
              </tr>
              <tr>
                <td>
                  <img alt="icono renta" src={anualRentIcon} />
                  <label>Renta Estimada <br /> Área Disponible</label>
                </td>
                <td>{money(estimated?.monthly || 0)}</td>
                <td>{money(estimated?.yearly || 0)}</td>
              </tr>
              <tr>
                <td>
                  <img alt="icono renta" src={anualRentIcon} />
                  <label>Renta Anual Actual + Estimada</label>
                </td>
                <td>{money(totals?.monthly || 0)}</td>
                <td>{money(totals?.yearly || 0)}</td>
              </tr>
            </tbody>
          </Table>
        </Content>
      </Card>
    </Container>
  )
}

MyRents.propTypes = {
  current: PropTypes.shape({}).isRequired,
  estimated: PropTypes.shape({}).isRequired,
  totals: PropTypes.shape({}).isRequired,
}

MyRents.defaultProps = {
  current: {},
  estimated: {},
  totals: {},
}
export default MyRents;