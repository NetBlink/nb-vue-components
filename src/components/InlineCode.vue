<script setup lang="ts">
/**
 * A short piece of code inside running text: a prop name, a class, a command.
 * Monospace on a faint tint, sized to the surrounding text and padded only
 * sideways, so it never makes its line taller than the lines around it.
 *
 * @part root - the `<code>` element
 */
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface InlineCodeProps {
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['InlineCode']>;
}

const props = defineProps<InlineCodeProps>();

const { cls, attrs } = useUi('InlineCode', props);
</script>

<template>
    <code
        v-bind="attrs()"
        data-nb-inline-code
        :class="
            cls(
                'root',
                'rounded-[0.3em] bg-gray-100 px-[0.35em] py-0 font-mono text-[0.875em] leading-none text-gray-800 ring-1 ring-gray-200 ring-inset [box-decoration-break:clone] dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700',
            )
        "
        ><slot
    /></code>
</template>
