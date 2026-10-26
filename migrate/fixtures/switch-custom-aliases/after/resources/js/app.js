import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { createNbIcons } from '@netblink/vue-components/icons';
import { heroiconsAliasPreset, heroiconsSet } from '@netblink/vue-components/icons/heroicons';
import Logo from './Logo.vue';

createInertiaApp({
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(createNbIcons({ aliases: { ...heroiconsAliasPreset, $logo: Logo, $whatsapp: 'fab fa-whatsapp' }, sets: { heroicons: heroiconsSet } }))
            .mount(el);
    },
});
