<script setup lang="ts">
/**
 * Warning Button component
 *
 * @component
 *
 * @prop {'button' | 'submit' | 'reset'} type - The button type (default: 'button')
 * @prop {boolean} disabled - Whether the button is disabled
 * @prop {string} customClass - Custom CSS classes to apply
 * @prop {'xs' | 'sm' | 'md' | 'lg'} size - Button size (default: 'md')
 */

import { Button } from './index.js';
import { ComponentTheme } from '../Types';

interface Props {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    customClass?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    disabled: false,
    customClass: '',
    size: 'md',
});
</script>

<template>
    <Button :theme="ComponentTheme.WARNING" :type="type" :disabled="disabled" :custom-class="customClass" :size="size">
        <slot />
    </Button>
</template>
