/** @type {import('jest').Config} */
const config = {
  rootDir: './',
  preset: '@swc/jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  moduleNameMapper: {
    '\.(css|less|scss)$': 'identity-obj-proxy',
    '\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/test/mocks/fileMock.js',
  },
  // Map both .js and .ts files (with or without React/JSX) to SWC
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },

  // Optional: Only if you are using ES Modules (ESM)
  extensionsToTreatAsEsm: ['.ts', '.tsx'],

    // Add this to tell Jest how to resolve path aliases
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Change 'src' if your code is in a different folder
  },
};

export default config;