import React from 'react'

import StyledErrorPage from './styles';

const ErrorPage = () => {
  return <StyledErrorPage>
    <h1>Ha ocurrido un error...</h1>
    <h3>Intentalo más tarde</h3>
    {/* <img alt="" src={errorImage}></img> */}
  </StyledErrorPage>
}

export default ErrorPage;