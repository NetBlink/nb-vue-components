<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui';
import { onMounted, ref, watch } from 'vue';

import { PropType } from 'vue';
import type { Align } from '@/Types';
import { Align as AlignValue } from '@/Types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

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
    title: String,
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
