<script setup lang="ts">
import type { PropType } from 'vue';
import { DropdownMenuContent, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui';
import type { Align } from '@/Types';
import { Align as AlignValue } from '@/Types';
import { ref, nextTick } from 'vue';

interface DropdownProps {
    /** Alignment of the dropdown content relative to trigger */
    align?: Align;
    /** Offset from the alignment position */
    alignOffset?: number;
    /** Whether to open dropdown on hover instead of click */
    openOnHover?: boolean;
    /** Delay in milliseconds before closing on mouse leave */
    hoverDelay?: number;
}

const props = withDefaults(defineProps<DropdownProps>(), {
    align: AlignValue.START,
    alignOffset: 5,
    openOnHover: false,
    hoverDelay: 150,
});

const toggleState = ref(false);
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
        <DropdownMenuTrigger aria-label="Dropdown"><slot name="trigger" /></DropdownMenuTrigger>

        <DropdownMenuPortal>
            <DropdownMenuContent
                :alignOffset="alignOffset"
                v-bind="$attrs"
                :align="align"
                class="ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 cursor-pointer rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
            >
                <slot name="content" />
            </DropdownMenuContent>
        </DropdownMenuPortal>
    </DropdownMenuRoot>
</template>
