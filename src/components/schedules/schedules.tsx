import React from 'react';

import { ScheduleCard } from './scheduleCard';
import { cleanDate, ISchedule } from './helpers';

import { Container, ScrollableContainer } from './styles';

const mountScheduleCard = (mock: ISchedule[]) => {
  return mock.map((schedule) => {
    const scheduleForCard = {
      ...schedule,
      startPoint: cleanDate(schedule.startPoint),
      endPoint: cleanDate(schedule.endPoint),
      startDate: cleanDate(schedule.startDate),
      endDate: cleanDate(schedule.endDate),
      name: schedule.name?.replace(/ *\([^)]*\) */g, ''),
    };
    return <ScheduleCard key={schedule.id} schedule={scheduleForCard} />;
  });
};

const Schedules = ({ schedules }: { schedules: ISchedule[] }) => {
  return (
    <Container>
      <ScrollableContainer>{mountScheduleCard(schedules)}</ScrollableContainer>
    </Container>
  );
};

export { Schedules };
