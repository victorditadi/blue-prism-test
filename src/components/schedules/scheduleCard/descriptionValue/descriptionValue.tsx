import React from 'react';

import { Container, TooltipContainer, ScheduleValue } from './styles';

const DescriptionValue = ({ text, ...props }: { text: string }) => {
  const tooltipOn = text.length > 25;
  const shortText = tooltipOn ? `${text.slice(0, 25)}...` : text;

  return (
    <Container {...props}>
      <ScheduleValue data-testid="short-text">{shortText}</ScheduleValue>
      {tooltipOn && <TooltipContainer data-testid="tooltip">{text}</TooltipContainer>}
    </Container>
  );
};

export { DescriptionValue };
