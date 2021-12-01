import React from 'react';

import { CheckCircle, TimesCircle } from '@styled-icons/fa-regular';

import { convertObjectToArray } from 'helpers';

import {
  Container,
  CardHeader,
  CardContent,
  ScheduleName,
  CardDescriptionContainer,
  ButtonContainer,
  ButtonRetire,
} from './styles';

import { DescriptionItem } from 'components/descriptionItem';
import { useUpdateSchedule } from 'store/context/schedules';
import { ScheduleData } from 'store/services/schedules';
import { useFilterLogs } from 'store/context/logs';

const mountCardDescription = (schedule: ScheduleData) => {
  return convertObjectToArray(schedule).map((firstKey) => {
    if (schedule[firstKey] === schedule.name) return null;

    return (
      <DescriptionItem
        key={`schedule-${firstKey}-container`}
        type={'schedule'}
        itemValue={schedule[firstKey]}
        itemKey={firstKey}
      />
    );
  });
};

const ScheduleCard = ({ schedule }: { schedule: ScheduleData }) => {
  const updateSchedule = useUpdateSchedule();
  const { refetch } = useFilterLogs(schedule.id);

  return (
    <Container onClick={() => refetch()} key={schedule.id as number}>
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
          <ButtonRetire
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.stopPropagation();
              updateSchedule.mutate({ ...schedule, isRetired: !schedule.isRetired });
            }}
            isRetired={schedule.isRetired}
            data-testid="retire-button"
          >
            {schedule.isRetired ? 'unretire' : 'retire'}
          </ButtonRetire>
        </ButtonContainer>
      </CardContent>
    </Container>
  );
};

export { ScheduleCard };
