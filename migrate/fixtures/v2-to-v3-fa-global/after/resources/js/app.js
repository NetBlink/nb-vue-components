import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp, router, usePage } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { setInertiaPage, setInertiaRouter } from '@netblink/vue-components';
import { createNbIcons } from '@netblink/vue-components/icons';
import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';

createInertiaApp({
    resolve: (name) => import(`./Pages/${name}.vue`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('font-awesome-icon', FontAwesomeIcon)
            .use(createNbIcons({ aliases: faAliasPreset, sets: { fa: faSet }, defaultSet: 'fa' }))
            .mount(el);
        setInertiaRouter(router);
        setInertiaPage(usePage());
    },
});
