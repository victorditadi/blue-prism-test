import React from 'react';
import { logsMock, schedulesMock } from 'store/context/__tests__/mocks';

import { HomeTemplate } from '../index';

describe('Template: Home', () => {
  it('should render template home', () => {
    const component = (
      <HomeTemplate
        schedules={schedulesMock}
        isLoadingSchedules={false}
        logs={logsMock}
        isLoadingLogs={false}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
