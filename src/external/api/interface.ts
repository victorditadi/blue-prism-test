export interface ScheduleBE {
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

export interface LogBE {
  id: number;
  startTime?: string;
  endTime?: string;
  status?: string;
  serverName?: string;
  scheduleId?: number;
}
