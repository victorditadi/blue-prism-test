import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Theme from 'css/theme';

import { logsMock } from './logsMock';
import { Logs } from '..';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useLogsData } from 'store/context/logs';

const mockedUseLogsData = useLogsData as jest.Mock<unknown>;
jest.mock('store/context/logs');

mockedUseLogsData.mockReturnValue({
  refetch: jest.fn(),
});

describe('Component: Logs', () => {
  const renderComponent = ({ isLoading = false }: { isLoading?: boolean }) => {
    const queryClient = new QueryClient();

    return render(
      <QueryClientProvider client={queryClient}>
        <Theme>
          <Logs isLoadingLogs={isLoading} logs={logsMock} />
        </Theme>
      </QueryClientProvider>
    );
  };

  it('should render Logs component', () => {
    const { asFragment } = renderComponent({});

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render skeleton if is loading', () => {
    const { queryByTestId } = renderComponent({ isLoading: true });
    expect(queryByTestId('logs-skeleton')).toBeInTheDocument();
  });

  it('should not render skeleton if is not loading', () => {
    const { queryByTestId } = renderComponent({});
    expect(queryByTestId('logs-skeleton')).not.toBeInTheDocument();
  });

  it('should fire refetch when Show all Logs is clicked', () => {
    let refetchHaveBeenCalled = false;
    mockedUseLogsData.mockReturnValue({
      refetch: jest.fn().mockImplementation(() => (refetchHaveBeenCalled = true)),
    });

    const { getByTestId } = renderComponent({});

    fireEvent.click(getByTestId('show-all-logs-button'));

    expect(refetchHaveBeenCalled).toBeTruthy();
  });
});
