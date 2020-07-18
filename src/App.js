import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Sidebar } from './components';
import { MyAccount } from './components/views';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route exact path="/valor-de-cuenta" render={() => <MyAccount />} />
          <Route exact path="/saldo-disponible" render={() => <MyAccount />} />
          <Route exact path="/mi-cuenta" render={() => <MyAccount />} />
          <Route exact path="/comprar" render={() => <MyAccount />} />
          <Route exact path="/vender" render={() => <MyAccount />} />
          <Route exact path="/agregar-fondos" render={() => <MyAccount />} />
          <Route exact path="/retirar-fondos" render={() => <MyAccount />} />
          <Route exact path="/movimientos" render={() => <MyAccount />} />
          <Route exact path="/ayuda" render={() => <MyAccount />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
