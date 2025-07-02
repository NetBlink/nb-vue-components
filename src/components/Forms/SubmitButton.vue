<script setup lang="ts">
/**
 * Submit Button component with loading state and theme support
 *
 * @component
 *
 * @prop {ComponentTheme} theme - The button theme (default: 'primary')
 * @prop {'button' | 'submit' | 'reset'} type - The button type (default: 'submit')
 * @prop {boolean} disabled - Whether the button is disabled
 * @prop {object} form - The form object (for processing state)
 * @prop {boolean} loading - Manual loading state
 * @prop {string} customButtonClass - Custom CSS classes to apply
 * @prop {'xs' | 'sm' | 'md' | 'lg'} size - Button size (default: 'md')
 */

import { Button, Spinner } from '../../index';
import type { ComponentTheme } from '../../Types';
import { ComponentTheme as Theme } from '../../Types';

interface Props {
    theme?: ComponentTheme;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    form?: any;
    loading?: boolean;
    customButtonClass?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
    theme: Theme.PRIMARY,
    type: 'submit',
    disabled: false,
    loading: false,
    customButtonClass: '',
    size: 'md',
});
</script>

<template>
    <Button
        :theme="theme"
        :disabled="loading || form?.processing || disabled"
        :type="type"
        :custom-class="`relative ${customButtonClass}`"
        :size="size"
        class="focusable"
    >
        <div :class="{ 'opacity-25': form?.processing || loading }">
            <slot />
        </div>

        <div v-if="form?.processing || loading" class="absolute inset-2 flex items-center justify-center">
            <Spinner class="aspect-square h-full! w-auto! text-white" />
        </div>
    </Button>
</template>
