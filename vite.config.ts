import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import babel from 'vite-plugin-babel';

export default defineConfig({
    plugins: [vue(), babel()],
    root: '.',
    base: '/build/',
    publicDir: false,
    server: {
        port: 3000,
    },
});
