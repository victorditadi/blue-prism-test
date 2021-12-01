//@ts-nocheck
import * as nextRouter from 'next/router';
import * as reactQuery from 'react-query';
import '@testing-library/jest-dom';
import 'jest-styled-components';

// Mock NextJS Use Router
nextRouter.useRouter = jest.fn().mockImplementation(() => ({ route: '/', pathname: '/' }));

// Mock ReactQuery
reactQuery.useQueryClient = jest.fn();
reactQuery.useMutation = jest.fn();
