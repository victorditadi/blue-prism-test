import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ScheduleData, ScheduleService } from 'store/services/schedules';

export const SCHEDULES_QUERY_KEY = 'SCHEDULES_QUERY_KEY';

export const useSchedulesData = () => {
  const { data, isLoading } = useQuery(SCHEDULES_QUERY_KEY, ScheduleService.fetchAll);

  return { schedules: data, isLoading };
};

export const useUpdateSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation((newSchedule: ScheduleData) => ScheduleService.updateSchedule(newSchedule), {
    onSuccess: async (newSchedule) => {
      await queryClient.cancelQueries([SCHEDULES_QUERY_KEY, newSchedule.id]);

      // queryClient.setQueryData(['SCHEDULES_QUERY_KEY', newSchedule.id], newSchedule);
      queryClient.invalidateQueries(SCHEDULES_QUERY_KEY);

      return newSchedule;
    },
  });
};
