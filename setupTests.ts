import * as nextRouter from 'next/router';
import '@testing-library/jest-dom';
import 'jest-styled-components';

// Mock NextJS Use Router
nextRouter.useRouter = jest.fn().mockImplementation(() => ({ route: '/', pathname: '/' }));
