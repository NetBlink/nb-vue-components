import { h } from 'vue';
import { Input } from '@netblink/vue-components';

export const filter = () => h(Input, { inputCustomClass: 'rounded-none' });
