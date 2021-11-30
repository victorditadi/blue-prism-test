import React from 'react';
import { render } from '@testing-library/react';

import Theme from 'css/theme';

import { scheduleMock } from './scheduleMock';
import { Schedules } from '..';

describe('Component: Schedules', () => {
  const renderComponent = () =>
    render(
      <Theme>
        <Schedules schedules={scheduleMock} />
      </Theme>
    );

  it('should render ScheduleCard component', () => {
    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });
});
