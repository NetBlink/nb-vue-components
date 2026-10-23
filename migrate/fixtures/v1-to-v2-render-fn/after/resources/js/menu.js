import { h } from 'vue';
import { NavCollapse } from '@netblink/vue-components';

export function renderMenu(x) {
    return h(NavCollapse, { show: x }, () => 'Menu');
}
