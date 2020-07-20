import React from 'react'

import { Header, Sidebar, Footer } from '../../components';
import { Content, HorizontalContainer } from './styles';

const Layout = props => {
  const { children } = props;

  return (
    <>
      <Header />
      <HorizontalContainer>
        <Sidebar />
        <Content>{children}</Content>
      </HorizontalContainer>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;