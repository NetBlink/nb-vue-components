import { createApp, h } from 'vue';
import { createInertiaApp, router, usePage } from '@inertiajs/vue3';
import { setInertiaPage, setInertiaRouter } from '@netblink/vue-components';

createInertiaApp({
    resolve: (name) => import(`./Pages/${name}.vue`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
        setInertiaRouter(router);
        setInertiaPage(usePage());
    },
});
