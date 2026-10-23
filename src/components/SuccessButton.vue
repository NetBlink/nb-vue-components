<script setup lang="ts">
/**
 * Success Button component
 *
 * @component
 *
 * @prop {'button' | 'submit' | 'reset'} type - The button type (default: 'button')
 * @prop {boolean} disabled - Whether the button is disabled
 * @prop {string} customClass - Deprecated, use `class`
 * @prop {'xs' | 'sm' | 'md' | 'lg'} size - Button size (default: 'md')
 * @part root - the `<button>`, rendered by `Button`, so `ui.Button` config applies too
 */

import { Button } from './index.js';
import { ComponentTheme } from '../Types';
import type { ButtonSizes, NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface SuccessButtonProps {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    /** Deprecated, use `class` */
    customClass?: string;
    size?: keyof ButtonSizes;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['SuccessButton']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<SuccessButtonProps>(), {
    type: 'button',
    disabled: false,
    customClass: '',
    size: 'md',
});

const { cls, attrs } = useUi('SuccessButton', props, { aliases: { customClass: 'root' } });
</script>

<template>
    <Button v-bind="attrs()" :theme="ComponentTheme.SUCCESS" :type="type" :disabled="disabled" :class="cls('root')" :size="size" :motion="motion">
        <slot />
    </Button>
</template>
