<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui';
import { ref } from 'vue';
import type { Align } from '@/Types';
import { Align as AlignValue } from '@/Types';
import NbIcon from '../icons/NbIcon.vue';

interface LinkDropdownButtonProps {
    /** Alignment of the dropdown content relative to trigger */
    align?: Align;
    /** Offset from the alignment position */
    alignOffset?: number;
    /** Title text displayed on the button */
    title?: string;
}

const props = withDefaults(defineProps<LinkDropdownButtonProps>(), {
    align: AlignValue.START,
    alignOffset: 5,
    title: undefined,
});

const toggleState = ref(false);
</script>

<template>
    <DropdownMenuRoot v-model:open="toggleState">
        <DropdownMenuTrigger aria-label="Dropdown" asChild>
            <button
                class="focusable bg-primary-600 hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-800 inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-transparent px-4 py-2 text-xs font-semibold tracking-widest whitespace-nowrap text-white uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden motion-reduce:transition-none"
                type="button"
            >
                {{ title }}
                <NbIcon name="$expand" class="size-3 transition-transform" :class="{ 'rotate-180': toggleState }" />
            </button>
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
            <DropdownMenuContent
                :alignOffset="alignOffset"
                v-bind="$attrs"
                :align="align"
                class="data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 min-w-max overflow-hidden rounded-md bg-white p-1 text-gray-900 shadow-lg ring-1 ring-gray-200 will-change-[opacity,transform] dark:bg-gray-800 dark:text-gray-100 dark:shadow-black/40 dark:ring-gray-700"
            >
                <ul class="m-0 list-none p-0 text-left text-sm" :aria-labelledby="title">
                    <slot />
                </ul>
            </DropdownMenuContent>
        </DropdownMenuPortal>
    </DropdownMenuRoot>
</template>
