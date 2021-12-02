import React from 'react';

import { LogCard } from './logCard';

import { LogsSkeleton } from './logsSkeleton';
import { LogsError } from './logsError';

import { LogData } from 'store/services/logs';
import { cleanDate } from 'helpers';

import { Container, ScrollableContainer, LogSectionHeader, LogSectionTitle } from './styles';

const mountLogsCard = (logs: LogData[]) => {
  return logs.map((log) => {
    const logForCard = {
      ...log,
      startTime: cleanDate(log.startTime),
      endTime: cleanDate(log.endTime),
    };
    return <LogCard key={log.id} log={logForCard} />;
  });
};

const Logs = ({
  logs,
  isLoadingLogs,
  isErrorLogs,
}: {
  logs?: LogData[];
  isLoadingLogs: boolean;
  isErrorLogs: boolean;
}) => {
  return (
    <Container>
      {!isLoadingLogs && isErrorLogs && <LogsError />}
      {!isLoadingLogs && !isErrorLogs && (
        <LogSectionHeader>
          <LogSectionTitle>Logs</LogSectionTitle>
        </LogSectionHeader>
      )}
      {isLoadingLogs && <LogsSkeleton />}
      {logs && !isLoadingLogs && <ScrollableContainer>{mountLogsCard(logs)}</ScrollableContainer>}
    </Container>
  );
};

export { Logs };
