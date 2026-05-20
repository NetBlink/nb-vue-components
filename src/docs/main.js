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

// Inertia exposes `$page` to every component template
// (`app.config.globalProperties.$page`). Components like Images.vue read
// `$page.props.errors.*`. The docs site doesn't run Inertia, so stub
// $page with an empty shape. Falsy lookups stay falsy, no render crash.
app.config.globalProperties.$page = { props: { errors: {} } };

app.use(buildIconsPlugin());
app.mount('#app');
