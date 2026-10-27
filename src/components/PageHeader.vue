<script setup lang="ts">
/**
 * The top of a page: breadcrumbs, title, description and an `#actions` slot on
 * the right, with a mobile "Back" link when `back` is set. `variant="bar"` is the
 * compact bordered breadcrumb/actions bar many admin screens use instead of a
 * title block. `sticky` (either variant) keeps it in view while scrolling; set the
 * `--nb-sticky-offset` CSS variable to clear a fixed banner above it.
 *
 * @part root - the header
 * @part breadcrumbs - the `Breadcrumbs`
 * @part back - the mobile "Back" link
 * @part main - the column holding breadcrumbs, title and description
 * @part title - the title
 * @part description - the text under the title
 * @part meta - the `#meta` slot wrapper
 * @part actions - the `#actions` slot wrapper
 * @motion off - static
 * @motion simple - static
 * @motion smooth - static
 * @motion fancy - fades in when it appears
 */
import NbIcon from '../icons/NbIcon.vue';
import Link from '../overrides/InertiaLink';
import Breadcrumbs, { type BreadcrumbItem } from './Breadcrumbs.vue';
import type { MotionLevel } from '../ui/motion';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface PageHeaderProps {
    /** Page title */
    title?: string;
    /** Text under the title */
    description?: string;
    /** Breadcrumb trail, first to current */
    breadcrumbs?: BreadcrumbItem[];
    /** URL for a "Back" link shown on small screens */
    back?: string;
    /** `default` title block or the compact bordered `bar` */
    variant?: 'default' | 'bar';
    /** Stick to the top while scrolling (offset by `--nb-sticky-offset`) */
    sticky?: boolean;
    /** Label of the mobile back link */
    backLabel?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['PageHeader']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<PageHeaderProps>(), {
    title: undefined,
    description: undefined,
    breadcrumbs: undefined,
    back: undefined,
    variant: 'default',
    sticky: false,
    backLabel: 'Back',
});

const { cls, attrs, level } = useUi('PageHeader', props);

// Below the app's own sticky navbar (--nb-sticky-offset) and any environment / impersonation banner.
const STICKY = 'sticky top-[calc(var(--nb-sticky-offset,0px)_+_var(--nb-environment-offset,0px)_+_var(--nb-impersonation-offset,0px))] z-20';
</script>

<template>
    <header
        v-if="variant === 'bar'"
        v-bind="attrs()"
        :class="
            cls(
                'root',
                'flex flex-wrap items-center gap-2 rounded-lg border border-gray-300 bg-neutral-50 px-4 py-2 shadow dark:border-gray-700 dark:bg-gray-800',
                sticky && STICKY,
                level === 'fancy' && 'animate-fade-in',
            )
        "
    >
        <div :class="cls('main', 'flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-1')">
            <Breadcrumbs v-if="breadcrumbs?.length" :items="breadcrumbs" :class="cls('breadcrumbs')" />
            <slot name="title">
                <h1 v-if="title && !breadcrumbs?.length" :class="cls('title', 'text-sm font-medium text-gray-800 dark:text-gray-100')">{{ title }}</h1>
            </slot>
            <slot />
        </div>
        <div v-if="$slots.meta" :class="cls('meta', 'flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400')"><slot name="meta" /></div>
        <div v-if="$slots.actions" :class="cls('actions', 'flex flex-wrap items-center gap-2')"><slot name="actions" /></div>
    </header>

    <header
        v-else
        v-bind="attrs()"
        :class="
            cls(
                'root',
                'flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between',
                sticky && [STICKY, 'bg-white/90 py-4 backdrop-blur dark:bg-gray-900/90'],
                level === 'fancy' && 'animate-fade-in',
            )
        "
    >
        <div :class="cls('main', 'min-w-0 flex-1')">
            <Link
                v-if="back"
                :href="back"
                :class="cls('back', 'mb-3 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 sm:hidden dark:text-gray-400 dark:hover:text-gray-200')"
            >
                <NbIcon name="$expand" class="h-4 w-4 rotate-90" aria-hidden="true" />
                {{ backLabel }}
            </Link>
            <Breadcrumbs v-if="breadcrumbs?.length" :items="breadcrumbs" :class="cls('breadcrumbs', 'mb-2', back && 'hidden sm:block')" />
            <slot name="title">
                <h1 v-if="title" :class="cls('title', 'text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100')">{{ title }}</h1>
            </slot>
            <p v-if="description" :class="cls('description', 'mt-1 text-sm text-gray-600 dark:text-gray-400')">{{ description }}</p>
            <div v-if="$slots.meta" :class="cls('meta', 'mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400')"><slot name="meta" /></div>
            <slot />
        </div>
        <div v-if="$slots.actions" :class="cls('actions', 'flex shrink-0 flex-wrap items-center gap-2')"><slot name="actions" /></div>
    </header>
</template>
