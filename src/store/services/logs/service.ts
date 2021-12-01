import { Api } from 'external/api';
import { AxiosError } from 'axios';
import { LogsData, LogData } from '.';

const LogsService = {
  fetchAll: async (): Promise<LogsData> => {
    try {
      return await (
        await Api.get('/scheduleLogs')
      ).data;
    } catch (e) {
      if ((e as AxiosError).isAxiosError) {
        throw { message: e.message, status: e.code };
      }
      throw e;
    }
  },
  fetchByScheduleId: async (scheduleId: number): Promise<LogData> => {
    try {
      return await (
        await Api.get(`/scheduleLogs?scheduleId=${scheduleId}`)
      ).data;
    } catch (e) {
      if ((e as AxiosError).isAxiosError) {
        throw { message: e.message, status: e.code };
      }
      throw e;
    }
  },
};

export { LogsService };
