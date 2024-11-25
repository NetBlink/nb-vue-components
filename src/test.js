import { createApp } from 'vue';
import Test from './Test.vue';
import './main.css';
import VueHighlightJS from 'vue3-highlightjs';
import 'highlight.js/styles/atom-one-dark.css';
import { setInertiaRouter } from './Helpers.js';
import { router } from '@inertiajs/vue3';

const app = createApp(Test);
setInertiaRouter(router);
app.use(VueHighlightJS);
app.mount('#app');
