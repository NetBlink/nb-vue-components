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
});

const toggleState = ref(false);
</script>

<template>
    <DropdownMenuRoot v-model:open="toggleState">
        <DropdownMenuTrigger aria-label="Dropdown"><slot name="trigger" /></DropdownMenuTrigger>

        <DropdownMenuPortal>
            <DropdownMenuContent
                :alignOffset="alignOffset"
                v-bind="$attrs"
                :align="align"
                class="ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 cursor-pointer rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]"
            >
                <slot name="content" />
            </DropdownMenuContent>
        </DropdownMenuPortal>
    </DropdownMenuRoot>
</template>
