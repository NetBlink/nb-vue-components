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
 * @prop {string} customButtonClass - Deprecated, use `class`
 * @prop {'xs' | 'sm' | 'md' | 'lg'} size - Button size (default: 'md')
 * @part root - the `<button>`, rendered by `Button`, so `ui.Button` config applies too
 * @part content - wrapper around the label, dimmed while loading
 * @part loader - the overlay that centres the spinner
 * @part spinner - the `Spinner` shown while loading
 * @motion off - the spinner swaps in instantly (it keeps spinning at every level)
 * @motion simple - the spinner fades in
 * @motion smooth - the label dims and the spinner fades and scales in
 * @motion fancy - the spinner pops in on a spring
 */

import { computed } from 'vue';
import { Button, Spinner } from '../../index';
import { ComponentTheme as Theme } from '../../Types';
import type { ButtonSizes, ButtonThemes, NbParts, UiProp } from '../../ui/parts';
import { levelAtLeast, type MotionLevel } from '../../ui/motion';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface SubmitButtonProps {
    theme?: keyof ButtonThemes;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    form?: any;
    loading?: boolean;
    /** Deprecated, use `class` */
    customButtonClass?: string;
    size?: keyof ButtonSizes;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['SubmitButton']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<SubmitButtonProps>(), {
    theme: Theme.PRIMARY,
    type: 'submit',
    disabled: false,
    loading: false,
    customButtonClass: '',
    size: 'md',
});

const { cls, attrs, level } = useUi('SubmitButton', props, { aliases: { customButtonClass: 'root' } });

const LOADER: Record<MotionLevel, { active: string; hidden: string }> = {
    off: { active: '', hidden: '' },
    simple: { active: 'transition-opacity duration-150', hidden: 'opacity-0' },
    smooth: { active: 'transition duration-200 ease-out', hidden: 'opacity-0 scale-75' },
    fancy: { active: 'transition duration-300 ease-(--ease-spring)', hidden: 'opacity-0 scale-50' },
};
const loader = computed(() => LOADER[level.value]);
</script>

<template>
    <Button
        v-bind="attrs()"
        :theme="theme"
        :disabled="loading || form?.processing || disabled"
        :type="type"
        :class="cls('root', 'relative focusable')"
        :size="size"
        :motion="motion"
    >
        <div :class="cls('content', { 'opacity-25': form?.processing || loading, 'transition-opacity duration-200': levelAtLeast(level, 'smooth') })">
            <slot />
        </div>

        <Transition
            :css="level !== 'off'"
            :enter-active-class="loader.active"
            :enter-from-class="loader.hidden"
            :leave-active-class="loader.active"
            :leave-to-class="loader.hidden"
        >
            <div v-if="form?.processing || loading" :class="cls('loader', 'absolute inset-2 flex items-center justify-center')">
                <Spinner :class="cls('spinner', 'aspect-square h-full! w-auto! text-white')" />
            </div>
        </Transition>
    </Button>
</template>
