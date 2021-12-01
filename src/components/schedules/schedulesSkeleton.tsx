import Skeleton from 'react-loading-skeleton';

import styled from 'styled-components';

const SimpleDiv = styled.div`
  margin-top: 1vw;
`;

const ScheduleSkeleton = () => {
  return (
    <div data-testid="schedules-skeleton">
      <Skeleton height={'20px'} width={'20vw'} count={10} style={{ marginTop: '0.5vw' }} />
      <SimpleDiv />
      <Skeleton height={'20px'} width={'20vw'} count={10} style={{ marginTop: '0.5vw' }} />
      <SimpleDiv />
    </div>
  );
};

export { ScheduleSkeleton };
