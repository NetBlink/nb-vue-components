<script setup lang="ts">
/**
 * Under Construction component
 *
 * A utility component to display a placeholder for sections that are still being developed.
 * Shows a construction icon with customizable message.
 *
 * @component
 *
 * @prop {boolean} full - Whether to take full height (grows to fill container)
 * @prop {string} info - Custom message to display (supports line breaks with \n)
 * @part root - the striped background
 * @part card - the white card
 * @part icon - the construction icon
 * @part title - the heading
 * @part message - the message text
 */

import NbIcon from '../icons/NbIcon.vue';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface UnderConstructionProps {
    /** Whether to take full height (grows to fill container) */
    full?: boolean;
    /** Custom message to display (supports line breaks with \n) */
    info?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['UnderConstruction']>;
}

const props = withDefaults(defineProps<UnderConstructionProps>(), {
    full: false,
    info: 'Section under construction.\nPlease come back later.',
});

const { cls, attrs } = useUi('UnderConstruction', props);
</script>

<template>
    <!-- Spacing is plain Tailwind; the old .p-ui/.px-ui/.gap-ui-half helpers just
         restated theme values, and the local .grow shadowed Tailwind's own. -->
    <!--
        `full` needs both: `grow` fills a flex parent, `h-full` fills a plain
        block parent that has a height. On its own `grow` silently does nothing
        outside a flex container, which makes `<UnderConstruction full />` look
        broken in the most obvious markup someone would write. Neither has any
        effect when the parent height is undefined, so this stays safe to add.
    -->
    <div v-bind="attrs()" :class="cls('root', 'bg-stripes flex w-full items-center justify-center rounded-lg p-8', { 'h-full grow': full })">
        <div
            :class="cls('card', 'flex max-w-md flex-col items-center gap-3 rounded-lg border border-gray-200 bg-white px-8 py-10 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800')"
        >
            <NbIcon name="$construction" size="2xl" :class="cls('icon', 'text-primary-500 dark:text-primary-400')" />
            <h2 :class="cls('title', 'text-xl font-bold text-gray-900 dark:text-gray-100')">Under Construction</h2>
            <p :class="cls('message', 'text-sm whitespace-pre-line text-gray-600 dark:text-gray-300')">{{ info }}</p>
        </div>
    </div>
</template>

<style scoped>
/* Striped background pattern - light theme */
.bg-stripes {
    background-image: repeating-linear-gradient(45deg, #f3f4f6, #f3f4f6 10px, #e5e7eb 10px, #e5e7eb 20px);
}

/* Striped background pattern - dark theme (darker greys so the card pops) */
:global(.dark) .bg-stripes {
    background-image: repeating-linear-gradient(45deg, #1f2937, #1f2937 10px, #111827 10px, #111827 20px);
}
</style>
