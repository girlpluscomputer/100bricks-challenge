import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from './components';
import {
  AddFunds,
  Buy,
  Help,
  Movements,
  MyAccount,
  RemoveFunds,
  Sell,
} from './components/views';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/mi-cuenta" render={() => <MyAccount />} />
          <Route exact path="/comprar" render={() => <Buy />} />
          <Route exact path="/vender" render={() => <Sell />} />
          <Route exact path="/agregar-fondos" render={() => <AddFunds />} />
          <Route exact path="/retirar-fondos" render={() => <RemoveFunds />} />
          <Route exact path="/movimientos" render={() => <Movements />} />
          <Route exact path="/ayuda" render={() => <Help />} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
