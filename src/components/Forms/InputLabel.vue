<script setup lang="ts">
/**
 * Styled `<label>` for form fields: takes its text from the `value` prop or the default
 * slot and can append a grey sublabel, a red required asterisk and a help icon with a
 * `Tooltip`. Mostly used internally by `InputWrapper`; reach for it directly only when
 * hand-building a field rather than using `Input`.
 *
 * @part root - the `<label>`
 * @part icon - the help icon inside the tooltip trigger
 * @part sublabel - grey text after the label
 * @part required - the red asterisk
 */
import NbIcon from '../../icons/NbIcon.vue';
import { Tooltip } from '../../index';
import type { NbParts, UiProp } from '../../ui/parts';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface InputLabelProps {
    value?: string;
    sublabel?: string;
    // String first: as in 3.x, a bare `required` attribute stays an empty string.
    required?: string | boolean;
    /** Deprecated, use `class` */
    customClass?: string;
    tooltip?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['InputLabel']>;
}

const props = defineProps<InputLabelProps>();

const { cls, attrs } = useUi('InputLabel', props, { aliases: { customClass: 'root' } });
</script>

<template>
    <label v-bind="attrs()" :class="cls('root', 'mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200')">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
        <Tooltip v-if="tooltip" :content="tooltip">
            <NbIcon name="$help" :class="cls('icon', 'mx-1 cursor-help')" />
        </Tooltip>
        <span v-if="!!sublabel" :class="cls('sublabel', 'ml-2 text-xs text-gray-500 dark:text-gray-400')">{{ sublabel }}</span>
        <span :class="cls('required', 'ml-1 text-red-500 dark:text-red-400')" v-if="required">*</span>
    </label>
</template>
