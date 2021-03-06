import { Api } from 'external/api';
import { AxiosError } from 'axios';
import { ScheduleData } from '.';

const ScheduleService = {
  fetchAll: async (): Promise<ScheduleData[]> => {
    try {
      return await (
        await Api.get(`/schedules`)
      ).data;
    } catch (e) {
      if ((e as AxiosError).isAxiosError) {
        throw { message: e.message, status: e.code };
      }
      throw e;
    }
  },
  updateSchedule: async (schedule: ScheduleData) => {
    try {
      return await (
        await Api.put(`/schedules/${schedule.id}`, schedule)
      ).data;
    } catch (e) {
      if ((e as AxiosError).isAxiosError) {
        throw { message: e.message, status: e.code };
      }
      throw e;
    }
  },
};

export { ScheduleService };
