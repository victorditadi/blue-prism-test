import { render } from '@testing-library/react';

import { Layout } from '..';

describe('Component: Layout', () => {
  it('should render Layout component', () => {
    expect(Layout).toMatchSnapshot();
  });

  it('should contain Header', () => {
    const { queryByTestId } = render(
      <Layout>
        <h1>Children</h1>
      </Layout>
    );
    expect(queryByTestId('header-title')).toBeTruthy();
  });

  it('should contain Children', () => {
    const { queryByTestId } = render(
      <Layout>
        <h1 data-testid="children">Children</h1>
      </Layout>
    );
    expect(queryByTestId('children')).toBeTruthy();
  });
});
