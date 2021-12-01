import React from 'react';
import { render } from '@testing-library/react';

import Theme from 'css/theme';

import { scheduleMock } from './scheduleMock';
import { Schedules } from '..';
import { QueryClient, QueryClientProvider } from 'react-query';

describe('Component: Schedules', () => {
  const renderComponent = ({ isLoading = false }: { isLoading?: boolean }) => {
    const queryClient = new QueryClient();

    return render(
      <QueryClientProvider client={queryClient}>
        <Theme>
          <Schedules isLoadingSchedules={isLoading} schedules={scheduleMock} />
        </Theme>
      </QueryClientProvider>
    );
  };

  it('should render Schedules component', () => {
    const { asFragment } = renderComponent({});

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render skeleton if is loading', () => {
    const { queryByTestId } = renderComponent({ isLoading: true });
    expect(queryByTestId('schedules-skeleton')).toBeInTheDocument();
  });

  it('should not render skeleton if is not loading', () => {
    const { queryByTestId } = renderComponent({});
    expect(queryByTestId('schedules-skeleton')).not.toBeInTheDocument();
  });
});
