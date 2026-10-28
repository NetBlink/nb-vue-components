<script setup lang="ts">
/**
 * Primary-styled button that opens a reka-ui dropdown menu of links, rendering the slot
 * content inside its own `<ul>`. Fill it with `LinkDropdownButtonItem` children, which
 * supply the matching `<li>`; use `Dropdown` instead when you need an arbitrary trigger
 * element rather than this fixed button.
 *
 * @part trigger - the primary-styled `<button>`
 * @part icon - the chevron in the button
 * @part content - the menu panel; `class` and other attrs land here
 * @part list - the `<ul>` around the items
 * @motion off - opens and closes instantly
 * @motion simple - quick fade in and out
 * @motion smooth - fades in with a small slide away from the trigger, fades out, the chevron turns
 * @motion fancy - pops out of the trigger on a spring, zooms out on close
 */
import { DropdownMenuContent, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui';
import { ref } from 'vue';
import type { Align } from '@/Types';
import { Align as AlignValue } from '@/Types';
import NbIcon from '../icons/NbIcon.vue';
import type { NbParts, UiProp } from '../ui/parts';
import { levelAtLeast, type MotionLevel, type NbMotionTable } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface LinkDropdownButtonProps {
    /** Alignment of the dropdown content relative to trigger */
    align?: Align;
    /** Offset from the alignment position */
    alignOffset?: number;
    /** Title text displayed on the button */
    title?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['LinkDropdownButton']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<LinkDropdownButtonProps>(), {
    align: AlignValue.START,
    alignOffset: 5,
    title: undefined,
});

const { cls, attrs, anim, level } = useUi('LinkDropdownButton', props, { classPart: 'content' });

const toggleState = ref(false);

// Enter/leave classes are picked from the open state, so a plain `animate-*` override works.
const MOTION: NbMotionTable<'content'> = {
    simple: { content: { enter: 'animate-fade-in-quick', leave: 'animate-fade-out' } },
    smooth: {
        content: {
            // Popovers open at --duration-popover: they hold short content, so they should feel snappy.
            enter: 'data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade [animation-duration:var(--duration-popover)]',
            leave: 'animate-fade-out',
        },
    },
    fancy: {
        content: {
            enter: 'animate-pop-in origin-(--reka-dropdown-menu-content-transform-origin) [animation-duration:var(--duration-popover)]',
            leave: 'animate-zoom-out origin-(--reka-dropdown-menu-content-transform-origin)',
        },
    },
};
const contentMotion = () => anim('content', toggleState.value ? 'enter' : 'leave', MOTION);
</script>

<template>
    <DropdownMenuRoot v-model:open="toggleState">
        <DropdownMenuTrigger aria-label="Dropdown" asChild>
            <button
                :class="
                    cls(
                        'trigger',
                        'focusable bg-primary-600 hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-800 inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-transparent px-4 py-2 text-xs font-semibold tracking-widest whitespace-nowrap text-white uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden motion-reduce:transition-none'
                    )
                "
                type="button"
            >
                {{ title }}
                <NbIcon name="$expand" :class="cls('icon', 'size-3', { 'transition-transform': levelAtLeast(level, 'smooth'), 'rotate-180': toggleState })" />
            </button>
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
            <DropdownMenuContent
                :alignOffset="alignOffset"
                v-bind="attrs()"
                :align="align"
                :class="
                    cls(
                        'content',
                        contentMotion(),
                        'z-50 mt-2 min-w-max overflow-hidden rounded-md bg-white p-1 text-gray-900 shadow-lg ring-1 ring-gray-200 will-change-[opacity,transform] dark:bg-gray-800 dark:text-gray-100 dark:shadow-black/40 dark:ring-gray-700'
                    )
                "
            >
                <ul :class="cls('list', 'm-0 list-none p-0 text-left text-sm')" :aria-labelledby="title">
                    <slot />
                </ul>
            </DropdownMenuContent>
        </DropdownMenuPortal>
    </DropdownMenuRoot>
</template>
