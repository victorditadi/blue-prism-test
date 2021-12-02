import React from 'react';

import { ExclamationCircle } from 'styled-icons/fa-solid';
import { Container, ErrorText } from './styles';

const SchedulesError = () => {
  return (
    <Container>
      <ExclamationCircle size={'2vw'} />
      <ErrorText>Ops...please, try again later</ErrorText>
    </Container>
  );
};

export { SchedulesError };
