<script setup lang="ts">
/**
 * Primary Button component
 *
 * @component
 *
 * @prop {'button' | 'submit' | 'reset'} type - The button type (default: 'submit')
 * @prop {boolean} disabled - Whether the button is disabled
 * @prop {string} customButtonClass - Deprecated, use `class`
 * @prop {'xs' | 'sm' | 'md' | 'lg'} size - Button size (default: 'md')
 * @part root - the `<button>`, rendered by `Button`, so `ui.Button` config applies too
 */

import { Button } from './index.js';
import { ComponentTheme } from '../Types';
import type { ButtonSizes, NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface PrimaryButtonProps {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    /** Deprecated, use `class` */
    customButtonClass?: string;
    size?: keyof ButtonSizes;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['PrimaryButton']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<PrimaryButtonProps>(), {
    type: 'submit',
    disabled: false,
    customButtonClass: '',
    size: 'md',
});

const { cls, attrs } = useUi('PrimaryButton', props, { aliases: { customButtonClass: 'root' } });
</script>

<template>
    <Button v-bind="attrs()" :theme="ComponentTheme.PRIMARY" :type="type" :disabled="disabled" :class="cls('root')" :size="size" :motion="motion">
        <slot />
    </Button>
</template>
