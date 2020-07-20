import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from '../../../../theme';
import MyAccount from '../MyAccount';

jest.mock('axios');

const renderMyAccount = () => {
  render(
    <Router>
      <ThemeProvider theme={theme}>
        <MyAccount />
      </ThemeProvider>
    </Router>
  );
};

describe('My Account', () => {
  const baseUrl = 'https://proxy-100ladrillos.herokuapp.com/';
  let url = '';

  beforeEach(() => {

  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should get account data', () => {
    url = 'users/98ef3f8c-e3e4-43c3-bbb2-e734c54400fd/my-account';
    axios.get.mockResolvedValueOnce();
    renderMyAccount();

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}${url}`);
  });

  test('should show error page if something fails', () => {
    url = 'users/98ef3f8c-e3e4-43c3-bbb2-e734c54400fd/my-account';
    axios.get.mockImplementation(() => Promise.reject());
    renderMyAccount();

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}${url}`);
  });
});
