import { createApp } from 'vue';
import DocsApp from './DocsApp.vue';
import '../main.css';

// Icon provider system — register all four showcase sets so the IconsDoc page
// can flip between them live. FontAwesome is the default per project convention.
import { createNbIcons } from '../icons';
import { faAliasPreset, faSet } from '../icons/presets/fa';
import { heroiconsSet } from '../icons/presets/heroicons';
import { materialSet } from '../icons/presets/material';
import { solarSet } from '../icons/presets/solar';

const app = createApp(DocsApp);

app.use(
    createNbIcons({
        aliases: faAliasPreset,
        sets: {
            fa: faSet,
            heroicons: heroiconsSet,
            'material-symbols': materialSet,
            solar: solarSet,
        },
        defaultSet: 'fa',
    })
);

app.mount('#app');
