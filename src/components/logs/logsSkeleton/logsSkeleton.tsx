import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container } from './styles';

const SkeletonComponent = () => (
  <Skeleton height={'20px'} width={'10vw'} count={20} style={{ margin: '0.5vw 0.5vw 0 0.5vw' }} />
);

const LogsSkeleton = () => {
  return (
    <Container data-testid="logs-skeleton">
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
    </Container>
  );
};

export { LogsSkeleton };
