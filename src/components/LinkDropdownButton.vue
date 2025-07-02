<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui';
import { ref } from 'vue';
import type { Align } from '@/Types';
import { Align as AlignValue } from '@/Types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

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
                class="focusable bg-primary hover:bg-primary-700 flex cursor-pointer items-center rounded px-2 text-sm whitespace-nowrap text-white motion-reduce:transition-none"
                type="button"
            >
                {{ title }}
                <span class="mx-1 w-2">
                    <FontAwesomeIcon :icon="faChevronCircleDown" />
                </span>
            </button>
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
            <DropdownMenuContent
                :alignOffset="alignOffset"
                v-bind="$attrs"
                :align="align"
                class="ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]"
            >
                <ul
                    class="absolute z-1000 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-te-dropdown-show:block dark:bg-neutral-700"
                    :aria-labelledby="title"
                    data-te-dropdown-menu-ref
                >
                    <slot />
                </ul>
            </DropdownMenuContent>
        </DropdownMenuPortal>
    </DropdownMenuRoot>
</template>
