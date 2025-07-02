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
 * @prop {string} contentClass - Custom classes for tooltip content
 * @prop {string} arrowClass - Custom classes for tooltip arrow
 * @prop {number} sideOffset - Distance from trigger in pixels (default: 4)
 * @prop {number} collisionPadding - Padding from viewport edges in pixels (default: 8)
 */

import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';
import { computed } from 'vue';

type TooltipSide = 'top' | 'bottom' | 'left' | 'right';

interface Props {
    content: string;
    side?: TooltipSide;
    delayDuration?: number;
    disabled?: boolean;
    contentClass?: string;
    arrowClass?: string;
    sideOffset?: number;
    collisionPadding?: number;
}

const props = withDefaults(defineProps<Props>(), {
    side: 'top',
    delayDuration: 100,
    disabled: false,
    contentClass: '',
    arrowClass: '',
    sideOffset: 4,
    collisionPadding: 8,
});

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
    'border-gray-200',
    'px-3',
    'py-2',
    'text-sm',
    'text-gray-900',
    'shadow-lg',
    'backdrop-blur-sm',
    'animate-in',
    'fade-in-0',
    'zoom-in-95',
    'data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0',
    'data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:slide-in-from-bottom-2',
].join(' ');

// Modern arrow classes to match the tooltip styling
const defaultArrowClasses = 'fill-white stroke-gray-200';
</script>

<template>
    <TooltipProvider :delay-duration="delayDuration">
        <TooltipRoot :disabled="disabled">
            <TooltipTrigger as-child>
                <slot />
            </TooltipTrigger>
            <TooltipPortal>
                <TooltipContent
                    :side="tooltipSide"
                    :sideOffset="sideOffset"
                    :collisionPadding="collisionPadding"
                    :class="[defaultContentClasses, contentClass]"
                >
                    {{ content }}
                    <TooltipArrow :class="[defaultArrowClasses, arrowClass]" />
                </TooltipContent>
            </TooltipPortal>
        </TooltipRoot>
    </TooltipProvider>
</template>
