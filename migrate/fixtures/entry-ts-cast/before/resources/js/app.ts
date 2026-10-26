import '../css/app.css';

import { createApp } from 'vue';
import App from './App.vue';

const el = <HTMLElement>document.getElementById('app');
createApp(App).mount(el);
