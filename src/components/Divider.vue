<script setup lang="ts">
/**
 * A dividing line, optionally with a short centred label ("or"). `vertical`
 * stands between items in a toolbar or a flex row.
 *
 * @part root - the separator
 * @part line - each line segment
 * @part label - the label text
 */
import { useSlots } from 'vue';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface DividerProps {
    /** Text in the middle of the line, such as "or" */
    label?: string;
    /** Direction */
    orientation?: 'horizontal' | 'vertical';
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Divider']>;
}

const props = withDefaults(defineProps<DividerProps>(), { label: undefined, orientation: 'horizontal' });

const { cls, attrs } = useUi('Divider', props);
const slots = useSlots();
</script>

<template>
    <div
        v-if="orientation === 'vertical'"
        v-bind="attrs()"
        role="separator"
        aria-orientation="vertical"
        :class="cls('root', 'mx-2 w-px self-stretch bg-gray-200 dark:bg-gray-700')"
    />
    <div v-else v-bind="attrs()" role="separator" :aria-label="label" :class="cls('root', 'flex items-center gap-3')">
        <span :class="cls('line', 'h-px flex-1 bg-gray-200 dark:bg-gray-700')" />
        <template v-if="label || slots.default">
            <span :class="cls('label', 'shrink-0 text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400')"><slot>{{ label }}</slot></span>
            <span :class="cls('line', 'h-px flex-1 bg-gray-200 dark:bg-gray-700')" />
        </template>
    </div>
</template>
