<script setup lang="ts">
/**
 * Dropdown separator component
 *
 * @component
 *
 * A visual separator for dropdown menu items.
 *
 * @part root - the separator line
 */
import { DropdownMenuSeparator } from 'reka-ui';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface DropdownSeparatorProps {
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['DropdownSeparator']>;
}

const props = defineProps<DropdownSeparatorProps>();

const { cls, attrs } = useUi('DropdownSeparator', props);
</script>

<template>
    <DropdownMenuSeparator v-bind="attrs()" :class="cls('root', 'mx-1 my-px h-px bg-gray-300 dark:bg-gray-700')" />
</template>
