import { sliceAndUpperCaseString } from 'helpers';
import React from 'react';

import {
  Container,
  DescriptionType,
  DescriptionValueContainer,
  TooltipContainer,
  DescriptionValue,
} from './styles';

const DescriptionItem = ({
  itemKey,
  itemValue,
  type,
}: {
  itemKey: string;
  itemValue?: string | number | boolean | undefined;
  type: string;
}) => {
  const valueIsString = typeof itemValue === 'string';
  const tooltipOn = valueIsString ? itemValue.length > 10 : false;
  const shortText =
    valueIsString && tooltipOn ? `${itemValue.slice(0, 10)}...` : itemValue?.toString();

  return (
    <Container data-testid={`${type}-${itemKey}-container`}>
      <DescriptionType data-testid={`${type}-${itemKey}-type`}>
        {sliceAndUpperCaseString(itemKey)}:
      </DescriptionType>
      <DescriptionValueContainer data-testid={`${type}-${itemKey}-value`}>
        <DescriptionValue data-testid="short-text">{shortText}</DescriptionValue>
        {tooltipOn && <TooltipContainer data-testid="tooltip">{itemValue}</TooltipContainer>}
      </DescriptionValueContainer>
    </Container>
  );
};

export { DescriptionItem };
