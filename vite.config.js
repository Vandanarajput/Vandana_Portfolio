import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
    plugins: [react()],
    base: mode === 'gh-pages' ? '/Vandana_Portfolio/' : '/',
    build: {
        target: 'es2020',
        cssCodeSplit: true,
    },
}));
