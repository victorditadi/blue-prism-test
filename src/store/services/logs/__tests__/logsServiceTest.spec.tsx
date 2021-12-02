import { act } from '@testing-library/react';
import nock from 'nock';

import { LogsService } from '../service';
import { logsMock, logsMockWithSameScheduleId } from './logsMock';

describe('Context: Logs Service', () => {
  it('should return list of logs when fetchAll is called', async () => {
    nock('http://localhost:3333')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/scheduleLogs')
      .reply(200, logsMock);

    const result = await LogsService.fetchAll();

    act(() => expect(result).toEqual(logsMock));
  });

  it('should return error when fetchAll failed', async () => {
    nock('http://localhost:3333')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/scheduleLogs')
      .reply(500, 'error');

    try {
      await LogsService.fetchAll();
    } catch (e) {
      expect(e.message).toEqual('Request failed with status code 500');
    }
  });

  it('should fetch log by schedule id when fetchByScheduleId is called', async () => {
    nock('http://localhost:3333')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/scheduleLogs?scheduleId=81112054')
      .reply(200, logsMockWithSameScheduleId);

    const result = await LogsService.fetchByScheduleId(81112054);

    act(() => expect(result).toEqual(logsMockWithSameScheduleId));
  });

  it('should return error when fetchByScheduleId failed', async () => {
    nock('http://localhost:3333')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/scheduleLogs?scheduleId=81112054')
      .reply(500, 'error');

    try {
      await LogsService.fetchByScheduleId(81112054);
    } catch (e) {
      expect(e.message).toEqual('Request failed with status code 500');
    }
  });
});
