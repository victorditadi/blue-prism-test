import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import nock from 'nock';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useFilterLogs, useLogsData } from '../logs';
import { logsMock, logsMockWithSameScheduleId } from './mocks';

describe('Context: Logs', () => {
  it('should return list of logs when useLogsData is called', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    nock('http://localhost:3333')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/scheduleLogs')
      .reply(200, logsMock);

    const { result, waitFor } = renderHook(() => useLogsData(), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.logs).toEqual(logsMock);
  });
  it('should return list of logs when useFilterLogs is called', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    nock('http://localhost:3333')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/scheduleLogs?scheduleId=81112054')
      .reply(200, logsMockWithSameScheduleId);

    const { result, waitFor } = renderHook(() => useFilterLogs(81112054), { wrapper });
    result.current.refetch();
    await waitFor(() => result.current.isSuccess);

    expect(result.current.logs).toEqual(logsMockWithSameScheduleId);
  });
});
