import React from 'react';

import { ExclamationCircle } from 'styled-icons/fa-solid';
import { Container, ErrorText } from './styles';

const LogsError = () => {
  return (
    <Container data-testid={'logs-error'}>
      <ExclamationCircle size={'2vw'} />
      <ErrorText>Ops...please, try again later</ErrorText>
    </Container>
  );
};

export { LogsError };
