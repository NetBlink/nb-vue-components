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
 * @motion off - opens and closes instantly
 * @motion simple - quick fade in and out
 * @motion smooth - fades in with a small slide away from the trigger, fades out
 * @motion fancy - pops out of the trigger on a spring, zooms out on close
 */

import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';
import { computed, ref } from 'vue';
import type { NbParts, UiProp } from '../ui/parts';
import type { MotionLevel, NbMotionTable } from '../ui/motion';
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

const { cls, attrs, anim } = useUi('Tooltip', props, { classPart: 'content', aliases: { contentClass: 'content', arrowClass: 'arrow' } });

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
].join(' ');

const open = ref(false);

// Same theme tokens as Dropdown (the old `animate-in`/`slide-in-from-*` classes came from
// the v3 tailwindcss-animate plugin, which v4 doesn't have).
const MOTION: NbMotionTable<'content'> = {
    simple: { content: { enter: 'animate-fade-in-quick', leave: 'animate-fade-out' } },
    smooth: {
        content: {
            enter: 'data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade',
            leave: 'animate-fade-out',
        },
    },
    fancy: {
        content: {
            enter: 'animate-pop-in origin-(--reka-tooltip-content-transform-origin)',
            leave: 'animate-zoom-out origin-(--reka-tooltip-content-transform-origin)',
        },
    },
};

// Arrow classes - match the bubble background/border so the arrow blends in
const defaultArrowClasses = 'fill-white stroke-gray-200 dark:fill-gray-800 dark:stroke-gray-700';
</script>

<template>
    <TooltipProvider :delay-duration="delayDuration">
        <TooltipRoot v-model:open="open" :disabled="disabled">
            <TooltipTrigger as-child>
                <slot />
            </TooltipTrigger>
            <TooltipPortal>
                <TooltipContent
                    v-bind="attrs()"
                    :side="tooltipSide"
                    :sideOffset="sideOffset"
                    :collisionPadding="collisionPadding"
                    :class="cls('content', defaultContentClasses, anim('content', open ? 'enter' : 'leave', MOTION))"
                >
                    {{ content }}
                    <TooltipArrow :class="cls('arrow', defaultArrowClasses)" />
                </TooltipContent>
            </TooltipPortal>
        </TooltipRoot>
    </TooltipProvider>
</template>
