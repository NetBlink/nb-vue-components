import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp, router } from '@inertiajs/vue3';
import { setInertiaRouter } from '@netblink/vue-components';
import '@netblink/vue-components/style.css';
import { createNbIcons } from '@netblink/vue-components/icons';
import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';

createInertiaApp({
    resolve: (name) => import(`./Pages/${name}.vue`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(createNbIcons({ aliases: faAliasPreset, sets: { fa: faSet }, defaultSet: 'fa' }))
            .mount(el);
        setInertiaRouter(router);
    },
});
