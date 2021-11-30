module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testMatch: ['**/?(*.)(spec|test).ts?(x)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/**.d.ts',
    '!**/**.css',
    '!**/styles.ts',
    '!**/pages/**',
    '!**/index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      funcionts: 80,
      lines: 80,
      statements: 80,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: ['./setupTests.ts'],
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: ['./cypress'],
};
