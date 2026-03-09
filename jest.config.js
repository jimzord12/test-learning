/** @type {import('jest').Config} */
const config = {
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