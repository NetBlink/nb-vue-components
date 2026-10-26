import { createApp } from 'vue';
import App from './App.vue';
import { plugin } from './plugin';
import { createNbIcons } from '@netblink/vue-components/icons';
import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';

const app = createApp(App);
app.use(plugin);
app.use(createNbIcons({ aliases: faAliasPreset, sets: { fa: faSet }, defaultSet: 'fa' }));
app.mount('#app');
