import { useQuery } from 'react-query';
import { LogsService } from 'store/services/logs';

export const LOGS_QUERY_KEY = 'LOGS_QUERY_KEY';

export const useLogsData = () => {
  const { data, isLoading, refetch } = useQuery(LOGS_QUERY_KEY, LogsService.fetchAll);

  return { logs: data, isLoading, refetch };
};

export const useFilterLogs = (scheduleId: number) => {
  const { data, isLoading, refetch } = useQuery(
    LOGS_QUERY_KEY,
    () => LogsService.fetchByScheduleId(scheduleId),
    {
      refetchOnWindowFocus: false,
      enabled: false, // turned off by default, manual refetch is needed
    }
  );

  return { logs: data, isLoading, refetch };
};
