import { render } from '@testing-library/react';

import { Header } from '..';

import * as nextRouter from 'next/router';

describe('Component: Header', () => {
  it('should render Header component', () => {
    expect(Header).toMatchSnapshot();
  });

  it('should contain Title', () => {
    const { queryByTestId } = render(<Header />);
    expect(queryByTestId('header-title')).toBeTruthy();
  });

  it('should contain MenuIcon', () => {
    const { queryByTestId } = render(<Header />);
    expect(queryByTestId('header-menu')).toBeTruthy();
  });

  it('should contain Schedules text inside Header Title /', () => {
    const { queryByTestId } = render(<Header />);
    const headerTitle = queryByTestId('header-title');

    expect(headerTitle?.textContent).toStrictEqual('Schedules');
  });

  it('should contain Schedules text inside Header Title /', () => {
    // Mock NextJS Use Router
    // @ts-ignore
    nextRouter.useRouter = jest
      .fn()
      .mockImplementation(() => ({ route: '/test', pathname: '/test' }));

    const { queryByTestId } = render(<Header />);
    const headerTitle = queryByTestId('header-title');

    expect(headerTitle?.textContent).toStrictEqual('Default');
  });
});
