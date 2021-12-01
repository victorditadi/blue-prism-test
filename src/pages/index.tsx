import React from 'react';
import { useLogsData } from 'store/context/logs';

import { useSchedulesData } from 'store/context/schedules';

import { HomeTemplate } from 'templates/home';

const Home = () => {
  const { schedules, isLoading: isLoadingSchedules } = useSchedulesData();
  const { logs, isLoading: isLoadingLogs } = useLogsData();

  return (
    <HomeTemplate
      schedules={schedules}
      isLoadingSchedules={isLoadingSchedules}
      logs={logs}
      isLoadingLogs={isLoadingLogs}
    />
  );
};

export default Home;
