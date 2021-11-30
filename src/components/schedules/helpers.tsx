export const cleanDate = (date?: string) => {
  if (!date) return undefined;
  const cleanDate = new Date(date);
  return `${cleanDate.getMonth() + 1}/${cleanDate.getDate()}/${cleanDate.getFullYear()}`;
};

export interface ISchedule {
  id: number;
  name?: string;
  description?: string;
  isRetired?: boolean;
  tasksCount?: number;
  startPoint?: string;
  endPoint?: string;
  dayOfWeek?: number;
  dayOfMonth?: number;
  startDate?: string;
  endDate?: string;
  intervalType?: string;
  timePeriod?: number;
}
