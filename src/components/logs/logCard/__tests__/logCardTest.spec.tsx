import React from 'react';
import { render } from '@testing-library/react';

import Theme from 'css/theme';

import { logMock } from './logMock';
import { LogCard } from '..';

import { QueryClientProvider, QueryClient } from 'react-query';

describe('Component: LogCard', () => {
  const renderComponent = () => {
    const queryClient = new QueryClient();

    return render(
      <QueryClientProvider client={queryClient}>
        <Theme>
          <LogCard log={logMock} />
        </Theme>
      </QueryClientProvider>
    );
  };

  it('should render LogCard component', () => {
    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });
  it('should render description container', () => {
    const { queryByTestId } = renderComponent();
    const types = ['id', 'startTime', 'endTime', 'status', 'serverName', 'scheduleId'];
    types.map((type) => expect(queryByTestId(`log-${type}-container`)).toBeTruthy());
  });
});
