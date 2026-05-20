import { createApp } from 'vue';
import DocsApp from './DocsApp.vue';
import '../main.css';
import { buildIconsPlugin } from './setup-icons';

// Ziggy's `route()` global is provided by consumer apps. Components like
// LogsContent reference it directly. The docs site doesn't ship Ziggy, so
// stub it to return '#' so demos with router-bound links render without
// throwing.
if (typeof window !== 'undefined' && typeof window.route === 'undefined') {
    window.route = () => '#';
}

const app = createApp(DocsApp);
app.use(buildIconsPlugin());
app.mount('#app');
