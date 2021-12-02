import React from 'react';

import { ScheduleCard } from './scheduleCard';
import { cleanDate } from 'helpers';

import { Container, ScrollableContainer } from './styles';
import { ScheduleData } from 'store/services/schedules';
import { ScheduleSkeleton } from './schedulesSkeleton';
import { SchedulesError } from './schedulesError';

const Schedules = ({
  schedules,
  isLoadingSchedules,
  isErrorSchedules,
}: {
  schedules?: ScheduleData[];
  isLoadingSchedules: boolean;
  isErrorSchedules: boolean;
}) => {
  const [active, setActive] = React.useState<number | null>(null);

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
      return (
        <ScheduleCard
          isSelected={active === schedule.id}
          selectScheduleAction={(scheduleId: number | null) => setActive(scheduleId)}
          key={schedule.id}
          schedule={scheduleForCard}
        />
      );
    });
  };

  return (
    <Container>
      {!isLoadingSchedules && isErrorSchedules && <SchedulesError />}
      {isLoadingSchedules && <ScheduleSkeleton />}
      {schedules && !isLoadingSchedules && (
        <ScrollableContainer>{mountScheduleCard(schedules)}</ScrollableContainer>
      )}
    </Container>
  );
};

export { Schedules };
