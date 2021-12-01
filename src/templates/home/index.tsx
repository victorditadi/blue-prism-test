import React from 'react';

import { Schedules } from 'components/schedules';
import { Logs } from 'components/logs';

import { Container, ScheduleContainer, LogRecordsContainer } from './styles';
import { ScheduleData } from 'store/services/schedules';
import { LogData } from 'store/services/logs';

const HomeTemplate = ({
  schedules,
  isLoadingSchedules,
  logs,
  isLoadingLogs,
}: {
  schedules?: ScheduleData[];
  isLoadingSchedules: boolean;
  logs?: LogData[];
  isLoadingLogs: boolean;
}) => {
  return (
    <Container>
      <ScheduleContainer>
        <Schedules isLoadingSchedules={isLoadingSchedules} schedules={schedules} />
      </ScheduleContainer>

      <LogRecordsContainer>
        <Logs logs={logs} isLoadingLogs={isLoadingLogs} />
      </LogRecordsContainer>
    </Container>
  );
};

export { HomeTemplate };
