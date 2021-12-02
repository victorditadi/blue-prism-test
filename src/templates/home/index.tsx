import React from 'react';

import { Schedules } from 'components/schedules';
import { Logs } from 'components/logs';

import { Container, ScheduleContainer, LogRecordsContainer } from './styles';
import { ScheduleData } from 'store/services/schedules';
import { LogData } from 'store/services/logs';

const HomeTemplate = ({
  schedules,
  isLoadingSchedules,
  isErrorSchedules,
  logs,
  isLoadingLogs,
  isErrorLogs,
}: {
  schedules?: ScheduleData[];
  isLoadingSchedules: boolean;
  isErrorSchedules: boolean;
  logs?: LogData[];
  isLoadingLogs: boolean;
  isErrorLogs: boolean;
}) => {
  return (
    <Container>
      <ScheduleContainer>
        <Schedules
          schedules={schedules}
          isLoadingSchedules={isLoadingSchedules}
          isErrorSchedules={isErrorSchedules}
        />
      </ScheduleContainer>

      <LogRecordsContainer>
        <Logs logs={logs} isLoadingLogs={isLoadingLogs} isErrorLogs={isErrorLogs} />
      </LogRecordsContainer>
    </Container>
  );
};

export { HomeTemplate };
