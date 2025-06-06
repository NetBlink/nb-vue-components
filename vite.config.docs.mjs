import path from 'path';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    return defineConfig({
        plugins: [vue(), tailwindcss()],
        base: '/nb-vue-components',
        /*
        build: {
            lib: {
                entry: path.resolve(__dirname, 'src/index.js'),
                name: '@nb/vue-components',
                fileName: (format) => `nb-vue-components.${format}.js`,
            },
            rollupOptions: {
                external: ['vue'],
                output: {
                    globals: {
                        vue: 'Vue',
                    },
                    exports: 'named',
                },
                input: {
                    main: path.resolve(__dirname, 'src/index.js'),
                },
            },
        }, */
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
        server: {
            watch: {
                ignored: [
                    '!**/node_modules/**',
                    '**/vendor/**',
                    '**/.docker/**',
                ],
            },
            host: '0.0.0.0',
            port: 80,
            hmr: {
                host: process.env.VITE_HMR_HOST,
                port: 80,
            },
        },
    });
};
