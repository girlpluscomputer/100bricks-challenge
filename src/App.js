import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Layout } from './components';
import {
  AddFunds,
  Buy,
  Help,
  Movements,
  MyAccount,
  RemoveFunds,
  Sell,
  ErrorPage
} from './components/views';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/mi-cuenta" />
          </Route>
          <Route exact path="/mi-cuenta" render={() => <MyAccount />} />
          <Route exact path="/comprar" render={() => <Buy />} />
          <Route exact path="/vender" render={() => <Sell />} />
          <Route exact path="/agregar-fondos" render={() => <AddFunds />} />
          <Route exact path="/retirar-fondos" render={() => <RemoveFunds />} />
          <Route exact path="/movimientos" render={() => <Movements />} />
          <Route exact path="/ayuda" render={() => <Help />} />
          <Route exact path="/error" render={() => <ErrorPage />} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
