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
        build: {
            lib: {
                entry: {
                    'nb-vue-components': path.resolve(__dirname, 'src/index.ts'),
                    'icons':             path.resolve(__dirname, 'src/icons/index.ts'),
                    'icons/fa':          path.resolve(__dirname, 'src/icons/presets/fa.ts'),
                    'icons/heroicons':   path.resolve(__dirname, 'src/icons/presets/heroicons.ts'),
                    'icons/material':    path.resolve(__dirname, 'src/icons/presets/material.ts'),
                    'icons/solar':       path.resolve(__dirname, 'src/icons/presets/solar.ts'),
                    'icons/lucide':      path.resolve(__dirname, 'src/icons/presets/lucide.ts'),
                },
                formats: ['es'],
                fileName: (format, entryName) => `${entryName}.${format}.js`,
            },
            rollupOptions: {
                external: [
                    'vue',
                    'isomorphic-dompurify',
                    '@fortawesome/fontawesome-svg-core',
                    '@fortawesome/vue-fontawesome',
                    '@fortawesome/free-solid-svg-icons',
                    '@fortawesome/free-brands-svg-icons',
                    '@fortawesome/free-regular-svg-icons',
                    '@iconify/vue',
                ],
                output: {
                    globals: { vue: 'Vue' },
                    exports: 'named',
                },
            },
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, '/src'),
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
