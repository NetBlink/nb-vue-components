<script setup lang="ts">
/**
 * Dropdown - menu popover built on reka-ui's `DropdownMenu` primitives.
 *
 * Provide a `#trigger` slot for the toggle element and a `#content` slot for
 * the menu items (typically `DropdownLink` / `DropdownSeparator`). All
 * non-listed attrs are forwarded to the underlying `DropdownMenuContent`.
 *
 * @prop {Align} [align='start'] - `'start' | 'center' | 'end'` - anchors menu to the trigger
 * @prop {number} [alignOffset=5] - pixel offset from the alignment point
 * @prop {boolean} [openOnHover=false] - open the menu on hover instead of click
 * @prop {number} [hoverDelay=150] - ms to wait before closing on mouse leave (only when openOnHover is true)
 * @slot trigger - element that opens the menu
 * @slot content - menu items
 * @part trigger - the trigger `<button>` around the `#trigger` slot
 * @part content - the menu panel; `class` and other attrs land here
 * @motion off - opens and closes instantly
 * @motion simple - quick fade in and out
 * @motion smooth - fades in with a small slide away from the trigger, fades out
 * @motion fancy - pops out of the trigger on a spring, zooms out on close
 */
import { DropdownMenuContent, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui';
import type { Align } from '@/Types';
import { Align as AlignValue } from '@/Types';
import { ref, nextTick } from 'vue';
import type { NbParts, UiProp } from '../ui/parts';
import type { MotionLevel, NbMotionTable } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface DropdownProps {
    /** Where to anchor the menu relative to the trigger */
    align?: Align;
    /** Pixel offset from the alignment point */
    alignOffset?: number;
    /** Open on hover instead of click */
    openOnHover?: boolean;
    /** Delay before closing on mouse leave (only when openOnHover is true) */
    hoverDelay?: number;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Dropdown']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<DropdownProps>(), {
    align: AlignValue.START,
    alignOffset: 5,
    openOnHover: false,
    hoverDelay: 150,
});

const { cls, attrs, anim } = useUi('Dropdown', props, { classPart: 'content' });

const toggleState = ref(false);

// Enter/leave classes are picked from the open state, so a plain `animate-*` override works.
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
            enter: 'animate-pop-in origin-(--reka-dropdown-menu-content-transform-origin)',
            leave: 'animate-zoom-out origin-(--reka-dropdown-menu-content-transform-origin)',
        },
    },
};
const contentMotion = () => anim('content', toggleState.value ? 'enter' : 'leave', MOTION);
let hoverTimeout: number | null = null;

const handleMouseEnter = async () => {
    if (!props.openOnHover) return;

    // Clear any pending close timeout
    if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
    }

    // Use nextTick to ensure the state change is processed properly
    await nextTick();
    toggleState.value = true;
};

const handleMouseLeave = () => {
    if (!props.openOnHover) return;

    // Add a delay before closing to prevent flickering
    hoverTimeout = setTimeout(async () => {
        await nextTick();
        toggleState.value = false;
        hoverTimeout = null;
    }, props.hoverDelay);
};

// Handle manual state changes when not using hover
const handleOpenChange = (open: boolean) => {
    // Always sync our local state with the component state
    toggleState.value = open;
};
</script>

<template>
    <DropdownMenuRoot v-model:open="toggleState" @update:open="handleOpenChange">
        <DropdownMenuTrigger aria-label="Dropdown" :class="cls('trigger')"><slot name="trigger" /></DropdownMenuTrigger>

        <DropdownMenuPortal>
            <DropdownMenuContent
                :alignOffset="alignOffset"
                v-bind="attrs()"
                :align="align"
                :class="
                    cls(
                        'content',
                        contentMotion(),
                        'z-50 mt-2 min-w-[10rem] overflow-hidden rounded-md bg-white p-1 text-gray-900 shadow-lg ring-1 ring-gray-200 will-change-[opacity,transform] dark:bg-gray-800 dark:text-gray-100 dark:shadow-black/40 dark:ring-gray-700'
                    )
                "
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
            >
                <slot name="content" />
            </DropdownMenuContent>
        </DropdownMenuPortal>
    </DropdownMenuRoot>
</template>
