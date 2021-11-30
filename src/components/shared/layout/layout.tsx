import React from 'react';
import { GlobalStyle } from 'css/styles';

import { Header } from '../header';
import { Container, ContentContainer } from './styles';

interface IPrivateLayout {
  children: React.ReactNode;
}

const Layout = (props: IPrivateLayout): JSX.Element => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <ContentContainer>{props.children}</ContentContainer>
    </Container>
  );
};

export { Layout };
