import { createApp } from 'vue';
import DocsApp from './DocsApp.vue';
import '../main.css';
import { buildIconsPlugin } from './setup-icons';

const app = createApp(DocsApp);
app.use(buildIconsPlugin());
app.mount('#app');
