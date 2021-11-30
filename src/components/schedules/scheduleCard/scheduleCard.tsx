import React from 'react';

import { CheckCircle, TimesCircle } from '@styled-icons/fa-regular';

import { convertObjectToArray, sliceAndUpperCaseString, showDescriptionValue } from './helpers';

import {
  Container,
  CardHeader,
  CardContent,
  ScheduleName,
  DescriptionContainer,
  CardDescriptionContainer,
  DescriptionType,
  ButtonContainer,
  ButtonRetire,
} from './styles';
import { ISchedule } from '../helpers';
import { DescriptionValue } from './descriptionValue';

const mountCardDescription = (schedule: ISchedule) => {
  return convertObjectToArray(schedule).map((firstKey) => {
    if (schedule[firstKey] === schedule.name) return null;
    return (
      <DescriptionContainer
        data-testid={`schedule-${firstKey}-container`}
        key={`schedule-${firstKey}-container`}
      >
        <DescriptionType data-testid={`schedule-${firstKey}-type`}>
          {sliceAndUpperCaseString(firstKey)}:
        </DescriptionType>{' '}
        <DescriptionValue
          data-testid={`schedule-${firstKey}-value`}
          text={showDescriptionValue(schedule[firstKey])}
        />
      </DescriptionContainer>
    );
  });
};

const ScheduleCard = ({ schedule }: { schedule: ISchedule }) => {
  return (
    <Container key={schedule.id as number}>
      <CardHeader data-testid="card-header">
        {schedule.isRetired ? (
          <TimesCircle data-testid="retired-icon" size={'1.5vw'} />
        ) : (
          <CheckCircle data-testid="unretired-icon" size={'1.5vw'} />
        )}
        {schedule.name && <ScheduleName data-testid="schedule-name">{schedule.name}</ScheduleName>}
      </CardHeader>
      <CardContent>
        <CardDescriptionContainer>{mountCardDescription(schedule)}</CardDescriptionContainer>
        <ButtonContainer>
          <ButtonRetire isRetired={schedule.isRetired} data-testid="retire-button">
            {schedule.isRetired ? 'unretire' : 'retire'}
          </ButtonRetire>
        </ButtonContainer>
      </CardContent>
    </Container>
  );
};

export { ScheduleCard };
