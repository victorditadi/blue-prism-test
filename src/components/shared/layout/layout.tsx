import React from 'react';
import { GlobalStyle } from 'css/styles';
import Theme from 'css/theme';

import { Header } from '../header';
import { Container, ContentContainer } from './styles';

interface IPrivateLayout {
  children: React.ReactNode;
}

const Layout = (props: IPrivateLayout): JSX.Element => {
  return (
    <Container>
      <Theme>
        <GlobalStyle />
        <Header />
        <ContentContainer>{props.children}</ContentContainer>
      </Theme>
    </Container>
  );
};

export { Layout };
