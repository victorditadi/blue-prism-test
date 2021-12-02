import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { DiviseDiv } from './styles';

const ScheduleSkeleton = () => {
  return (
    <div data-testid="schedules-skeleton">
      <Skeleton height={'20px'} width={'20vw'} count={10} style={{ marginTop: '0.5vw' }} />
      <DiviseDiv />
      <Skeleton height={'20px'} width={'20vw'} count={10} style={{ marginTop: '0.5vw' }} />
      <DiviseDiv />
    </div>
  );
};

export { ScheduleSkeleton };
