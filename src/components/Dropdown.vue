<script setup lang="ts">
import type { PropType } from 'vue';
import { DropdownMenuContent, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui';
import type { Align } from '@/Types';
import { Align as AlignValue } from '@/Types';
import { ref } from 'vue';

const props = defineProps({
    align: {
        type: String as PropType<Align>,
        default: AlignValue.START,
        validator(value: Align) {
            return Object.values(AlignValue).includes(value);
        },
    },
    alignOffset: {
        type: Number,
        default: 5,
    },
    openOnHover: {
        type: Boolean,
        default: false,
    },
    hoverDelay: {
        type: Number,
        default: 150,
    },
});

const toggleState = ref(false);
let hoverTimeout: number | null = null;

const handleMouseEnter = () => {
    if (!props.openOnHover) return;

    if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
    }

    toggleState.value = true;
};

const handleMouseLeave = () => {
    if (!props.openOnHover) return;

    hoverTimeout = setTimeout(() => {
        toggleState.value = false;
        hoverTimeout = null;
    }, props.hoverDelay);
};
</script>

<template>
    <DropdownMenuRoot v-model:open="toggleState" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
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
