import React from 'react';

import { ScheduleCard } from './scheduleCard';
import { cleanDate } from 'helpers';

import { Container, ScrollableContainer } from './styles';
import { ScheduleData } from 'store/services/schedules';
import { ScheduleSkeleton } from './schedulesSkeleton';

const mountScheduleCard = (schedules: ScheduleData[]) => {
  return schedules.map((schedule) => {
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

const Schedules = ({
  schedules,
  isLoadingSchedules,
}: {
  schedules?: ScheduleData[];
  isLoadingSchedules: boolean;
}) => {
  return (
    <Container>
      {isLoadingSchedules && <ScheduleSkeleton />}
      {schedules && !isLoadingSchedules && (
        <ScrollableContainer>{mountScheduleCard(schedules)}</ScrollableContainer>
      )}
    </Container>
  );
};

export { Schedules };
