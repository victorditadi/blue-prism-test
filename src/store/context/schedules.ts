import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ScheduleData, ScheduleService } from 'store/services/schedules';

export const SCHEDULES_QUERY_KEY = 'SCHEDULES_QUERY_KEY';

export const useSchedulesData = () => {
  const { data, isLoading, isSuccess, isError } = useQuery(
    SCHEDULES_QUERY_KEY,
    ScheduleService.fetchAll,
    {
      retry: false,
    }
  );

  return { schedules: data, isLoading, isSuccess, isError };
};

export const useUpdateSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation((newSchedule: ScheduleData) => ScheduleService.updateSchedule(newSchedule), {
    retry: false,
    onSuccess: async (newSchedule) => {
      await queryClient.cancelQueries([SCHEDULES_QUERY_KEY, newSchedule.id]);

      // queryClient.setQueryData(['SCHEDULES_QUERY_KEY', newSchedule.id], newSchedule);
      queryClient.invalidateQueries(SCHEDULES_QUERY_KEY);
    },
  });
};
