import { createApp } from 'vue';
import NbVueComponents from '@netblink/vue-components';
import App from './App.vue';

const app = createApp(App);
app.use(NbVueComponents);
app.mount('#app');
