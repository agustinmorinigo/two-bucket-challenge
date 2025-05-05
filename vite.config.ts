import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
    plugins: [react(), tailwindcss()],
    base: command === 'build' ? '/two-bucket-challenge/' : '/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@/components': path.resolve(__dirname, './src/components'),
            '@/constants': path.resolve(__dirname, './src/constants'),
            '@/context': path.resolve(__dirname, './src/context'),
            '@/entities': path.resolve(__dirname, './src/entities'),
            '@/hooks': path.resolve(__dirname, './src/hooks'),
            '@/i18n': path.resolve(__dirname, './src/i18n'),
            '@/lib': path.resolve(__dirname, './src/lib'),
            '@/utils': path.resolve(__dirname, './src/utils')
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        exclude: [...configDefaults.exclude],
    },
}));
