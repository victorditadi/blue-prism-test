import { act } from '@testing-library/react';
import nock from 'nock';

import { ScheduleService } from '../service';
import { schedulesMock } from './schedulesMock';

describe('Context: Schedules Service', () => {
  it('should return list of Schedules when fetchAll is called', async () => {
    nock('http://localhost:3333')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/schedules')
      .reply(200, schedulesMock);
    const result = await ScheduleService.fetchAll();
    act(() => expect(result).toEqual(schedulesMock));
  });
  it('should return error when fetchAll failed', async () => {
    nock('http://localhost:3333')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/schedules')
      .reply(500, 'error');
    try {
      await ScheduleService.fetchAll();
    } catch (e) {
      expect(e.message).toEqual('Request failed with status code 500');
    }
  });
});
