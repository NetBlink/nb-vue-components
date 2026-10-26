import '../css/app.css';

import { createApp } from 'vue';
import App from './App.vue';
import '@netblink/vue-components/style.css';

const el = <HTMLElement>document.getElementById('app');
createApp(App).mount(el);
