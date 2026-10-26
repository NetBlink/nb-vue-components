import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { createNbIcons } from '@netblink/vue-components/icons';
import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';
import Logo from './Logo.vue';

createInertiaApp({
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(createNbIcons({ aliases: { ...faAliasPreset, $logo: Logo, $whatsapp: 'fab fa-whatsapp' }, sets: { fa: faSet }, defaultSet: 'fa' }))
            .mount(el);
    },
});
