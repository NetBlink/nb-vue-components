import { createApp } from 'vue';
import DocsApp from './DocsApp.vue';
import '../main.css';

// Icon provider system — wires up FontAwesome (the project default) plus three
// alternate providers so the IconsDoc page can demonstrate live switching.
//
// This file is the canonical "real world" example consumers should mirror:
// install the icon library you want, import its components, and pass them to
// createNbIcons. We register all four here only because the docs demo needs
// to flip between them.
import { createNbIcons } from '../icons';

// --- FontAwesome (default) ---
import { faAliasPreset, faSet } from '../icons/presets/fa';

// --- Iconify-backed sets (used by Material Symbols, Solar) ---
import { Icon as IconifyIcon, addCollection } from '@iconify/vue';
import heroiconsData from '@iconify-json/heroicons/icons.json';
import materialData from '@iconify-json/material-symbols/icons.json';
import solarData from '@iconify-json/solar/icons.json';

// Pre-register the icon data so Iconify can render offline. Each `addCollection`
// pulls the full set's JSON; tree-shaking + gzip keeps the dev-mode docs bundle
// at ~150 KB extra per set, fine for a docs site.
addCollection(heroiconsData);
addCollection(materialData);
addCollection(solarData);

const iconifySet = (prefix) => ({
    component: IconifyIcon,
    resolve: (name) => `${prefix}:${name}`,
});

const app = createApp(DocsApp);

app.use(
    createNbIcons({
        aliases: faAliasPreset,
        sets: {
            fa: faSet,
            heroicons: iconifySet('heroicons'),
            'material-symbols': iconifySet('material-symbols'),
            solar: iconifySet('solar'),
        },
        defaultSet: 'fa',
    })
);

app.mount('#app');
