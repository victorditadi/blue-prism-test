import React from 'react';

import { Schedules } from 'components/schedules';
import { Container, ScheduleContainer, LogRecordsContainer } from './styles';

const HomeTemplate = () => {
  return (
    <Container>
      <ScheduleContainer>
        <Schedules />
      </ScheduleContainer>

      <LogRecordsContainer></LogRecordsContainer>
    </Container>
  );
};

export { HomeTemplate };
