/**
 * Google Material Symbols preset — Iconify-backed.
 *
 * Uses the outline variant by default. Requires `@iconify/vue` (optional peer)
 * and `@iconify-json/material-symbols` (data).
 *
 * Usage:
 *
 *     import { createNbIcons } from '@netblink/vue-components/icons';
 *     import { materialAliasPreset, materialSet } from '@netblink/vue-components/icons/material';
 *
 *     app.use(createNbIcons({
 *         aliases: materialAliasPreset,
 *         sets: { 'material-symbols': materialSet },
 *     }));
 */
import { Icon } from '@iconify/vue';
import type { AliasName, IconLike, IconSet } from '../types';

export const materialSet: IconSet = {
    component: Icon,
    resolve: (name) => `material-symbols:${name}`,
};

export const materialAliasPreset: Record<AliasName, IconLike> = {
    $expand:       'material-symbols:expand-more',
    $close:        'material-symbols:close',
    $success:      'material-symbols:check-circle',
    $error:        'material-symbols:cancel',
    $warning:      'material-symbols:warning',
    $info:         'material-symbols:info',
    $search:       'material-symbols:search',
    $eye:          'material-symbols:visibility',
    '$eye-off':    'material-symbols:visibility-off',
    $help:         'material-symbols:help',
    $edit:         'material-symbols:edit',
    '$edit-alt':   'material-symbols:edit-note',
    $construction: 'material-symbols:construction',
    $sun:          'material-symbols:light-mode',
    $moon:         'material-symbols:dark-mode',
    $whatsapp:     'material-symbols:chat',
};
