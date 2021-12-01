import React from 'react';
import { LogData } from 'store/services/logs';
import { convertObjectToArray } from 'helpers';

import { Container, CardDescriptionContainer } from './styles';
import { DescriptionItem } from 'components/descriptionItem';

const mountCardDescription = (log: LogData) => {
  return convertObjectToArray(log).map((firstKey) => {
    return (
      <DescriptionItem
        key={`log-${firstKey}-container`}
        data-testid={`log-${firstKey}-container`}
        type={'log'}
        itemValue={log[firstKey]}
        itemKey={firstKey}
      />
    );
  });
};

const LogCard = ({ log }: { log: LogData }) => {
  return (
    <Container>
      <CardDescriptionContainer>{mountCardDescription(log)}</CardDescriptionContainer>
    </Container>
  );
};

export { LogCard };
