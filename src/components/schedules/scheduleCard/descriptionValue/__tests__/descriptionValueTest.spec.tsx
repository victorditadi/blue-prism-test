import { fireEvent, render } from '@testing-library/react';

import Theme from 'css/theme';
import { DescriptionValue } from '../descriptionValue';

describe('Component: DescriptionValue', () => {
  const renderComponent = ({ text }: { text: string }) =>
    render(
      <Theme>
        <DescriptionValue text={text} />
      </Theme>
    );

  it('should render DescriptionValue component', () => {
    const { asFragment } = renderComponent({ text: 'small text' });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain Text', () => {
    const { queryByTestId } = renderComponent({ text: 'small text' });
    expect(queryByTestId('short-text')).toBeTruthy();
  });

  it('should slice Text if Lenght > 25', () => {
    const { queryByTestId } = renderComponent({
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });

    expect(queryByTestId('short-text')?.textContent).toStrictEqual('Lorem ipsum dolor sit ame...');
  });

  it('should not trigger tooltip outside mouseover', async () => {
    const { queryByTestId } = renderComponent({
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });

    const tooltipContainer = queryByTestId('tooltip');
    expect(tooltipContainer).not.toBeVisible();
  });

  it('should trigger tooltip when mouseover in a long text', async () => {
    const { queryByTestId } = renderComponent({
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });
    const shortText = queryByTestId('short-text');
    shortText && fireEvent.mouseOver(shortText);

    const tooltipContainer = queryByTestId('tooltip');
    expect(tooltipContainer).toBeVisible;
  });
});
