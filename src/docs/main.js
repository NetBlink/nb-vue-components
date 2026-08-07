import { createApp } from 'vue';
import DocsApp from './DocsApp.vue';
import '../main.css';
import { buildIconsPlugin } from './setup-icons';
import { setInertiaPage, setInertiaRouter } from '../Helpers';

// The docs site isn't an Inertia app, but components like Stats read the page
// object for query-string state. Register a static stand-in so they render
// normally instead of logging setup instructions to the console.
setInertiaPage({
    component: 'Docs',
    props: {},
    url: typeof window !== 'undefined' ? window.location.pathname : '/',
    version: null,
});

// Same for the router. Every verb is a no-op: demos must never navigate the
// docs site away from itself.
const noop = (href) => console.log('Docs: navigation prevented ->', href);
setInertiaRouter({ visit: noop, get: noop, post: noop, put: noop, patch: noop, delete: noop, reload: noop });

/*
 * Deliberately NO Ziggy `route()` shim here.
 *
 * The docs site is a plain Vue app with no router helper, which makes it an
 * honest stand-in for a consumer that doesn't ship Ziggy. Components must
 * degrade to plain text rather than throwing "_ctx.route is not a function"
 * mid-render - see getRoute() in Helpers.ts. Adding a stub back would hide
 * that whole class of bug.
 */
const app = createApp(DocsApp);
app.use(buildIconsPlugin());
app.mount('#app');
