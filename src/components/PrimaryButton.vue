<script setup lang="ts">
/**
 * Primary Button component
 *
 * @component
 *
 * @prop {'button' | 'submit' | 'reset'} type - The button type (default: 'submit')
 * @prop {boolean} disabled - Whether the button is disabled
 * @prop {string} customButtonClass - Custom CSS classes to apply
 * @prop {'xs' | 'sm' | 'md' | 'lg'} size - Button size (default: 'md')
 */

import { Button } from './index.js';
import { ComponentTheme } from '../Types';

interface Props {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    customButtonClass?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
    type: 'submit',
    disabled: false,
    customButtonClass: '',
    size: 'md',
});
</script>

<template>
    <Button :theme="ComponentTheme.PRIMARY" :type="type" :disabled="disabled" :custom-class="customButtonClass" :size="size">
        <slot />
    </Button>
</template>
