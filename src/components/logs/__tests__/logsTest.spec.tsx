import React from 'react';
import { render } from '@testing-library/react';

import Theme from 'css/theme';

import { logsMock } from './logsMock';
import { Logs } from '..';
import { QueryClient, QueryClientProvider } from 'react-query';

describe('Component: Logs', () => {
  const renderComponent = ({
    isError = false,
    isLoading = false,
  }: {
    isError?: boolean;
    isLoading?: boolean;
  }) => {
    const queryClient = new QueryClient();

    return render(
      <QueryClientProvider client={queryClient}>
        <Theme>
          <Logs isErrorLogs={isError} isLoadingLogs={isLoading} logs={logsMock} />
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

  it('should render error if have error', () => {
    const { queryByTestId } = renderComponent({ isError: true });
    expect(queryByTestId('logs-error')).toBeInTheDocument();
  });
});
