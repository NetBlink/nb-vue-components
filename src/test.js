import { createApp } from 'vue';
import DocsApp from './docs/DocsApp.vue';
import './main.css';
import VueHighlightJS from 'vue3-highlightjs';
import 'highlight.js/styles/atom-one-dark.css';
import { setInertiaRouter, setInertiaPage } from './Helpers';
import { router } from '@inertiajs/vue3';

const app = createApp(DocsApp);

// Mock page for testing - using a simple object that matches what components expect
const mockPage = {
    component: 'Test',
    props: {
        auth: {
            user: { id: 1, name: 'Test User', email: 'test@example.com' },
            permissions: ['view', 'create', 'edit', 'delete'],
        },
        errors: {},
        deferred: {},
    },
    url: '/test',
    version: '1.0.0',
    clearHistory: false,
    encryptHistory: false,
    rememberedState: {},
};

setInertiaRouter(router);
setInertiaPage(mockPage);
app.mount('#app');
