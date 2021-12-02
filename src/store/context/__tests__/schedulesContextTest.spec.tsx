import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import nock from 'nock';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useSchedulesData } from '../schedules';
import { schedulesMock } from './mocks';

describe('Context: Schedules', () => {
  it('should return list of schedules when useSchedulesData is called', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    nock('http://localhost:3333')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/schedules')
      .reply(200, schedulesMock);

    const { result, waitFor } = renderHook(() => useSchedulesData(), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.schedules).toEqual(schedulesMock);
  });
});
