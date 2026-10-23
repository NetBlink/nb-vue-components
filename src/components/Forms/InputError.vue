<script setup lang="ts">
/**
 * Input Error component for displaying validation error messages
 *
 * @component
 *
 * @prop {string} message - The error message to display
 * @part root - the wrapper, hidden while there is no message
 * @part message - the red `<p>`
 */
import type { NbParts, UiProp } from '../../ui/parts';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface InputErrorProps {
    message?: string | null;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['InputError']>;
}

const props = defineProps<InputErrorProps>();

const { cls, attrs } = useUi('InputError', props);
</script>

<template>
    <div v-bind="attrs()" :class="cls('root')" v-show="message">
        <p :class="cls('message', 'text-sm text-red-600 dark:text-red-400')">
            {{ message }}
        </p>
    </div>
</template>
