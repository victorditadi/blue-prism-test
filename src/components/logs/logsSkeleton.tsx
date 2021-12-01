import Skeleton from 'react-loading-skeleton';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const LogsSkeleton = () => {
  return (
    <Container data-testid="logs-skeleton">
      <Skeleton
        height={'20px'}
        width={'10vw'}
        count={30}
        style={{ margin: '0.5vw 0.5vw 0 0.5vw' }}
      />
      <Skeleton
        height={'20px'}
        width={'10vw'}
        count={30}
        style={{ margin: '0.5vw 0.5vw 0 0.5vw' }}
      />
      <Skeleton
        height={'20px'}
        width={'10vw'}
        count={30}
        style={{ margin: '0.5vw 0.5vw 0 0.5vw' }}
      />
      <Skeleton
        height={'20px'}
        width={'10vw'}
        count={30}
        style={{ margin: '0.5vw 0.5vw 0 0.5vw' }}
      />
      <Skeleton
        height={'20px'}
        width={'10vw'}
        count={30}
        style={{ margin: '0.5vw 0.5vw 0 0.5vw' }}
      />
    </Container>
  );
};

export { LogsSkeleton };
