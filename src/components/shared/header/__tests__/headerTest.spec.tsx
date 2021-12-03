import React from 'react';
import * as nextRouter from 'next/router';
import { render } from '@testing-library/react';

import Theme from 'css/theme';
import { Header } from '..';

describe('Component: Header', () => {
  const renderComponent = () => {
    return render(
      <Theme>
        <Header />
      </Theme>
    );
  };

  it('should render Header component', () => {
    const { asFragment } = renderComponent();
    expect(asFragment).toMatchSnapshot();
  });

  it('should contain Title', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId('header-title')).toBeTruthy();
  });

  it('should contain MenuIcon', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId('header-menu')).toBeTruthy();
  });

  it('should contain Schedules text inside Header Title /', () => {
    const { queryByTestId } = renderComponent();
    const headerTitle = queryByTestId('header-title');

    expect(headerTitle?.textContent).toStrictEqual('Schedules');
  });

  it('should contain Schedules text inside Header Title /', () => {
    // Mock NextJS Use Router
    // @ts-ignore
    nextRouter.useRouter = jest
      .fn()
      .mockImplementation(() => ({ route: '/test', pathname: '/test' }));

    const { queryByTestId } = renderComponent();
    const headerTitle = queryByTestId('header-title');

    expect(headerTitle?.textContent).toStrictEqual('Default');
  });
});
