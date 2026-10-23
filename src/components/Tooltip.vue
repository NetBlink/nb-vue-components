<script setup lang="ts">
/**
 * Tooltip component using Reka UI
 *
 * @component
 *
 * @prop {string} content - The tooltip content text
 * @prop {'top' | 'bottom' | 'left' | 'right'} side - The side where the tooltip appears (default: 'top')
 * @prop {number} delayDuration - Delay before tooltip shows in milliseconds (default: 700)
 * @prop {boolean} disabled - Whether the tooltip is disabled
 * @prop {string} contentClass - Deprecated, use `class`
 * @prop {string} arrowClass - Deprecated, use `:ui="{ arrow: '...' }"`
 * @prop {number} sideOffset - Distance from trigger in pixels (default: 4)
 * @prop {number} collisionPadding - Padding from viewport edges in pixels (default: 8)
 * @part content - the tooltip bubble; `class` and other attrs land here
 * @part arrow - the arrow
 */

import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';
import { computed } from 'vue';
import type { NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

type TooltipSide = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
    content: string;
    side?: TooltipSide;
    delayDuration?: number;
    disabled?: boolean;
    /** Deprecated, use `class` */
    contentClass?: string;
    /** Deprecated, use `:ui="{ arrow: '...' }"` */
    arrowClass?: string;
    sideOffset?: number;
    collisionPadding?: number;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Tooltip']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<TooltipProps>(), {
    side: 'top',
    delayDuration: 100,
    disabled: false,
    contentClass: '',
    arrowClass: '',
    sideOffset: 4,
    collisionPadding: 8,
});

const { cls, attrs } = useUi('Tooltip', props, { classPart: 'content', aliases: { contentClass: 'content', arrowClass: 'arrow' } });

// Ensure side is one of the valid values
const tooltipSide = computed((): TooltipSide => {
    const validSides: TooltipSide[] = ['top', 'bottom', 'left', 'right'];
    return validSides.includes(props.side) ? props.side : 'top';
});

// Modern content classes following NewModal's design system
const defaultContentClasses = [
    'z-50',
    'max-w-xs',
    'overflow-hidden',
    'rounded-lg',
    'bg-white',
    'border',
    'border-gray-200 dark:border-gray-700',
    'px-3',
    'py-2',
    'text-sm',
    'text-gray-900 dark:text-gray-100',
    'shadow-lg',
    'backdrop-blur-sm',
    // Dark mode
    'dark:bg-gray-800',
    'dark:border-gray-700',
    'dark:text-gray-100',
    'dark:shadow-black/40',
    // Animations - same theme tokens as Dropdown (the old `animate-in`/`slide-in-from-*`
    // classes came from the v3 tailwindcss-animate plugin, which v4 doesn't have)
    'data-[side=top]:animate-slide-down-fade',
    'data-[side=right]:animate-slide-left-fade',
    'data-[side=bottom]:animate-slide-up-fade',
    'data-[side=left]:animate-slide-right-fade',
].join(' ');

// Arrow classes - match the bubble background/border so the arrow blends in
const defaultArrowClasses = 'fill-white stroke-gray-200 dark:fill-gray-800 dark:stroke-gray-700';
</script>

<template>
    <TooltipProvider :delay-duration="delayDuration">
        <TooltipRoot :disabled="disabled">
            <TooltipTrigger as-child>
                <slot />
            </TooltipTrigger>
            <TooltipPortal>
                <TooltipContent
                    v-bind="attrs()"
                    :side="tooltipSide"
                    :sideOffset="sideOffset"
                    :collisionPadding="collisionPadding"
                    :class="cls('content', defaultContentClasses)"
                >
                    {{ content }}
                    <TooltipArrow :class="cls('arrow', defaultArrowClasses)" />
                </TooltipContent>
            </TooltipPortal>
        </TooltipRoot>
    </TooltipProvider>
</template>
