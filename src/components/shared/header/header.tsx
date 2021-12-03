import React from 'react';
import { useRouter } from 'next/router';
import { Bars } from '@styled-icons/fa-solid';

import { Container, HeaderTitle } from './styles';

// Generate if have others pages.
const mountHeaderTitle = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return 'Schedules';
    default:
      return 'Default';
  }
};

const Header = () => {
  const { pathname } = useRouter();
  const headerTitle = mountHeaderTitle(pathname);

  return (
    <Container>
      <HeaderTitle data-testid="header-title">{headerTitle}</HeaderTitle>
      <Bars data-testid="header-menu" cursor={'pointer'} size={'2vw'} />
    </Container>
  );
};

export { Header };
