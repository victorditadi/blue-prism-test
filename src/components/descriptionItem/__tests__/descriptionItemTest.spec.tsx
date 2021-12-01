import { fireEvent, render } from '@testing-library/react';

import Theme from 'css/theme';
import { DescriptionItem } from '../DescriptionItem';

describe('Component: DescriptionItem', () => {
  const renderComponent = ({ text }: { text: string }) =>
    render(
      <Theme>
        <DescriptionItem
          key={`test-testType-container`}
          data-testid={`test-testType-container`}
          type={'test'}
          itemValue={text}
          itemKey={'testWithCamelCase'}
        />
      </Theme>
    );

  it('should render DescriptionItem component', () => {
    const { asFragment } = renderComponent({ text: 'small text' });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain Text', () => {
    const { queryByTestId } = renderComponent({ text: 'small text' });
    expect(queryByTestId('short-text')).toBeTruthy();
  });

  it('should slice Text if Lenght > 10', () => {
    const { queryByTestId } = renderComponent({
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });

    expect(queryByTestId('short-text')?.textContent).toStrictEqual('Lorem ipsu...');
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

  it('should slice and uppercase type description', () => {
    const { queryByTestId } = renderComponent({ text: '' });
    const descriptionContainer = queryByTestId(`test-testWithCamelCase-type`);
    expect(descriptionContainer?.textContent).toStrictEqual('Test With Camel Case:');
  });
});
