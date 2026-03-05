import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // mirror the tsconfig paths so imports like `@lib/fibonacci` work
      '@lib': path.resolve(__dirname, 'src/lib'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    alias: {
      // vitest also needs to know about the alias
      '@lib': path.resolve(__dirname, 'src/lib'),
    },
  },
});

