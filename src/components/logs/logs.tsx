import React from 'react';

import { LogCard } from './logCard';

import { LogData } from 'store/services/logs';
import { cleanDate } from 'helpers';

import {
  Container,
  ScrollableContainer,
  LogSectionHeader,
  LogSectionTitle,
  LogSectionButton,
} from './styles';
import { LogsSkeleton } from './logsSkeleton';
import { useLogsData } from 'store/context/logs';

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

const Logs = ({ logs, isLoadingLogs }: { logs?: LogData[]; isLoadingLogs: boolean }) => {
  const { refetch } = useLogsData();

  return (
    <Container>
      {!isLoadingLogs && (
        <LogSectionHeader>
          <LogSectionTitle>Logs</LogSectionTitle>
          <LogSectionButton data-testid="show-all-logs-button" onClick={() => refetch()}>
            Show all Logs
          </LogSectionButton>
        </LogSectionHeader>
      )}
      {isLoadingLogs && <LogsSkeleton />}
      {logs && !isLoadingLogs && <ScrollableContainer>{mountLogsCard(logs)}</ScrollableContainer>}
    </Container>
  );
};

export { Logs };
