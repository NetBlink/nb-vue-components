/**
 * Heroicons preset - Iconify-backed.
 *
 * Requires `@iconify/vue` (optional peer) and `@iconify-json/heroicons` (data).
 *
 * Usage:
 *
 *     import { createNbIcons } from '@netblink/vue-components/icons';
 *     import { heroiconsAliasPreset, heroiconsSet } from '@netblink/vue-components/icons/heroicons';
 *
 *     app.use(createNbIcons({
 *         aliases: heroiconsAliasPreset,
 *         sets: { heroicons: heroiconsSet },
 *     }));
 */
import { Icon } from '@iconify/vue';
import type { AliasName, IconLike, IconSet } from '../types';

export const heroiconsSet: IconSet = {
    component: Icon,
    resolve: (name) => `heroicons:${name}`,
};

export const heroiconsAliasPreset: Record<AliasName, IconLike> = {
    $expand:       'heroicons:chevron-down',
    $close:        'heroicons:x-mark',
    $success:      'heroicons:check-circle',
    $error:        'heroicons:x-circle',
    $warning:      'heroicons:exclamation-triangle',
    $info:         'heroicons:information-circle',
    $search:       'heroicons:magnifying-glass',
    $eye:          'heroicons:eye',
    '$eye-off':    'heroicons:eye-slash',
    $help:         'heroicons:question-mark-circle',
    $edit:         'heroicons:pencil',
    '$edit-alt':   'heroicons:pencil-square',
    $construction: 'heroicons:wrench-screwdriver',
    $sun:          'heroicons:sun',
    $moon:         'heroicons:moon',
    $whatsapp:     'heroicons:chat-bubble-left-ellipsis',
};
