/**
 * Solar icon-set preset — Iconify-backed.
 *
 * Uses the linear variant. Requires `@iconify/vue` (optional peer) and
 * `@iconify-json/solar` (data).
 *
 * Usage:
 *
 *     import { createNbIcons } from '@netblink/vue-components/icons';
 *     import { solarAliasPreset, solarSet } from '@netblink/vue-components/icons/solar';
 *
 *     app.use(createNbIcons({
 *         aliases: solarAliasPreset,
 *         sets: { solar: solarSet },
 *     }));
 */
import { Icon } from '@iconify/vue';
import type { AliasName, IconLike, IconSet } from '../types';

export const solarSet: IconSet = {
    component: Icon,
    resolve: (name) => `solar:${name}`,
};

export const solarAliasPreset: Record<AliasName, IconLike> = {
    $expand:       'solar:alt-arrow-down-linear',
    $close:        'solar:close-circle-linear',
    $success:      'solar:check-circle-linear',
    $error:        'solar:close-square-linear',
    $warning:      'solar:danger-triangle-linear',
    $info:         'solar:info-circle-linear',
    $search:       'solar:magnifer-linear',
    $eye:          'solar:eye-linear',
    '$eye-off':    'solar:eye-closed-linear',
    $help:         'solar:question-circle-linear',
    $edit:         'solar:pen-linear',
    '$edit-alt':   'solar:pen-new-square-linear',
    $construction: 'solar:wrench-linear',
    $sun:          'solar:sun-linear',
    $moon:         'solar:moon-linear',
    $whatsapp:     'solar:chat-line-linear',
};
