import React from 'react';
import { useLogsData } from 'store/context/logs';

import { useSchedulesData } from 'store/context/schedules';

import { HomeTemplate } from 'templates/home';

const Home = () => {
  const {
    schedules,
    isLoading: isLoadingSchedules,
    isError: isErrorSchedules,
  } = useSchedulesData();
  const { logs, isLoading: isLoadingLogs, isError: isErrorLogs } = useLogsData();

  return (
    <HomeTemplate
      schedules={schedules}
      isLoadingSchedules={isLoadingSchedules}
      isErrorSchedules={isErrorSchedules}
      logs={logs}
      isLoadingLogs={isLoadingLogs}
      isErrorLogs={isErrorLogs}
    />
  );
};

export default Home;
