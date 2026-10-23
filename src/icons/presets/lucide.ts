/**
 * Lucide preset - Iconify-backed, same shape as the Heroicons preset.
 *
 * Requires `@iconify/vue` (optional peer) and `@iconify-json/lucide` (data).
 *
 * Usage:
 *
 *     import { createNbIcons } from '@netblink/vue-components/icons';
 *     import { lucideAliasPreset, lucideSet } from '@netblink/vue-components/icons/lucide';
 *
 *     app.use(createNbIcons({
 *         aliases: lucideAliasPreset,
 *         sets: { lucide: lucideSet },
 *     }));
 *
 * Prefer per-icon components (`lucide-vue-next`)? Pass them as alias values instead.
 */
import { Icon } from '@iconify/vue';
import type { AliasName, IconLike, IconSet } from '../types';

export const lucideSet: IconSet = {
    component: Icon,
    resolve: (name) => `lucide:${name}`,
};

export const lucideAliasPreset: Record<AliasName, IconLike> = {
    $expand:       'lucide:chevron-down',
    $close:        'lucide:x',
    $success:      'lucide:circle-check',
    $error:        'lucide:circle-x',
    $warning:      'lucide:triangle-alert',
    $info:         'lucide:info',
    $search:       'lucide:search',
    $eye:          'lucide:eye',
    '$eye-off':    'lucide:eye-off',
    $help:         'lucide:circle-question-mark',
    $edit:         'lucide:pencil',
    '$edit-alt':   'lucide:square-pen',
    $construction: 'lucide:construction',
    $sun:          'lucide:sun',
    $moon:         'lucide:moon',
    $whatsapp:     'lucide:message-circle',
};
