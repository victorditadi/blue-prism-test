export const logsMock = [
  {
    id: 88578155,
    startTime: '2021-10-15T13:13:08.525Z',
    endTime: '2021-06-09T12:46:31.086Z',
    status: 'Running',
    serverName: 'cillum',
    scheduleId: 81112054,
  },
  {
    id: 36629794,
    startTime: '2021-08-05T06:53:28.924Z',
    endTime: '2021-04-05T23:13:29.297Z',
    status: 'Exception',
    serverName: 'deserunt pariatur',
    scheduleId: 52888597,
  },
];

export const logsMockWithSameScheduleId = [
  {
    id: 88578155,
    startTime: '2021-10-15T13:13:08.525Z',
    endTime: '2021-06-09T12:46:31.086Z',
    status: 'Running',
    serverName: 'cillum',
    scheduleId: 81112054,
  },
  {
    id: 36629794,
    startTime: '2021-08-05T06:53:28.924Z',
    endTime: '2021-04-05T23:13:29.297Z',
    status: 'Exception',
    serverName: 'deserunt pariatur',
    scheduleId: 81112054,
  },
];

export const schedulesMock = [
  {
    id: 81112054,
    name: 'Random Schedule Name (0.2880763882796018)',
    description: 'amet consectetur dolore do esse',
    isRetired: true,
    tasksCount: 10,
    startPoint: '2021-12-05T12:51:42.685Z',
    endPoint: '2021-01-04T10:32:13.462Z',
    dayOfWeek: 3,
    dayOfMonth: 10,
    startDate: '2021-02-11T00:31:01.219Z',
    endDate: '2021-06-25T06:49:02.658Z',
    intervalType: 'Week',
    timePeriod: 28,
  },
  {
    id: 8111054,
    name: 'Random Schedule Name (0.2880763882796018)',
    description: 'amet consectetur dolore do esse',
    isRetired: true,
    tasksCount: 10,
    startPoint: '2021-12-05T12:51:42.685Z',
    endPoint: '2021-01-04T10:32:13.462Z',
    dayOfWeek: 3,
    dayOfMonth: 10,
    startDate: '2021-02-11T00:31:01.219Z',
    endDate: '2021-06-25T06:49:02.658Z',
    intervalType: 'Week',
    timePeriod: 28,
  },
];

export const updatedScheduleMock = {
  id: 81112054,
  name: 'Random Schedule Name (0.2880763882796018)',
  description: 'amet consectetur dolore do esse',
  isRetired: false,
  tasksCount: 10,
  startPoint: '2021-12-05T12:51:42.685Z',
  endPoint: '2021-01-04T10:32:13.462Z',
  dayOfWeek: 3,
  dayOfMonth: 10,
  startDate: '2021-02-11T00:31:01.219Z',
  endDate: '2021-06-25T06:49:02.658Z',
  intervalType: 'Week',
  timePeriod: 28,
};
