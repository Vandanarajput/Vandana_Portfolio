import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    base: '/Vandana_Portfolio/',
    build: {
        target: 'es2020',
        cssCodeSplit: true,
    },
});
