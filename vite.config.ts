import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

const prNumber = process.env.PR_NUMBER;

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build'
    ? prNumber
      ? `/preview/pr-${prNumber}/`
      : '/two-bucket-challenge/'
    : '/',
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/lib': path.resolve(__dirname, './src/lib'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
}));
