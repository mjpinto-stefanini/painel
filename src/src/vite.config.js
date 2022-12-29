import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        https: false,
        host: '0.0.0.0',
        hmr: {
            host: 'painel.stefanini.test'
        },
        watch: {
            usePolling: true,
        }
    },

    esbuild: {
        loader: "jsx",
    },

    optimizeDeps: {
        esbuildOptions: {
            loader: {
                ".js": "jsx",
                ".ts": "tsx",
            },
        },
    },

    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        react({
            include: "**/*.jsx",
        }),
    ],
});
