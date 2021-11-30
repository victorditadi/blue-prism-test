import React from 'react';
import { render } from '@testing-library/react';

import Theme from 'css/theme';

import { scheduleMock } from './scheduleMock';
import { ScheduleCard } from '..';
import { convertObjectToArray } from '../helpers';

describe('Component: ScheduleCard', () => {
  const renderComponent = ({ isRetired = true }: { isRetired?: boolean }) =>
    render(
      <Theme>
        <ScheduleCard schedule={{ ...scheduleMock, isRetired: isRetired }} />
      </Theme>
    );

  it('should render ScheduleCard component', () => {
    const { asFragment } = renderComponent({});

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render TimesCircle when is Retired', () => {
    const { queryByTestId } = renderComponent({});
    expect(queryByTestId('retired-icon')).toBeTruthy();
    expect(queryByTestId('unretired-icon')).toBeFalsy();
  });

  it('should render CheckCircle when is not Retired', () => {
    const { queryByTestId } = renderComponent({ isRetired: false });
    expect(queryByTestId('unretired-icon')).toBeTruthy();
    expect(queryByTestId('retired-icon')).toBeFalsy();
  });

  it('should render Name when received name', () => {
    const { queryByTestId } = renderComponent({});
    expect(queryByTestId('schedule-name')).toBeTruthy();
  });
  it('should render button to retired or unretired', () => {
    const { queryByTestId } = renderComponent({});
    expect(queryByTestId('retire-button')).toBeTruthy();
  });
  it('should render retire in button if is not retired', () => {
    const { queryByTestId } = renderComponent({ isRetired: false });
    expect(queryByTestId('retire-button')?.textContent).toStrictEqual('retire');
  });
  it('should render unretired in button if is retired', () => {
    const { queryByTestId } = renderComponent({});
    expect(queryByTestId('retire-button')?.textContent).toStrictEqual('unretire');
  });

  describe('Component: ScheduleCard - Descriptions', () => {
    it('should not render name schedule', () => {
      const { queryByTestId } = renderComponent({});
      expect(queryByTestId('schedule-name-container')).toBeFalsy();
    });

    it('should render description container', () => {
      const { queryByTestId } = renderComponent({});
      const types = [
        'id',
        'description',
        'isRetired',
        'tasksCount',
        'startPoint',
        'endPoint',
        'dayOfWeek',
        'dayOfMonth',
        'startDate',
        'endDate',
        'intervalType',
        'timePeriod',
      ];
      types.map((type) => expect(queryByTestId(`schedule-${type}-container`)).toBeTruthy());
    });

    it('should slice and uppercase type description', () => {
      const { queryByTestId } = renderComponent({});
      const types = {
        id: 'Id:',
        description: 'Description:',
        isRetired: 'Is Retired:',
        tasksCount: 'Tasks Count:',
        startPoint: 'Start Point:',
        endPoint: 'End Point:',
        dayOfWeek: 'Day Of Week:',
        dayOfMonth: 'Day Of Month:',
        startDate: 'Start Date:',
        endDate: 'End Date:',
        intervalType: 'Interval Type:',
        timePeriod: 'Time Period:',
      };
      convertObjectToArray(types).map((type) => {
        const descriptionContainer = queryByTestId(`schedule-${type}-type`);
        expect(descriptionContainer?.textContent).toStrictEqual(types[type]);
      });
    });

    it('should render scheduleItem', () => {
      const { queryByTestId } = renderComponent({});
      const types = [
        'id',
        'description',
        'isRetired',
        'tasksCount',
        'startPoint',
        'endPoint',
        'dayOfWeek',
        'dayOfMonth',
        'startDate',
        'endDate',
        'intervalType',
        'timePeriod',
      ];
      types.map((type) => expect(queryByTestId(`schedule-${type}-value`)).toBeTruthy());
    });
  });
});
