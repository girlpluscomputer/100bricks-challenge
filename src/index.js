import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import GlobalStyle from './globalStyle';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
