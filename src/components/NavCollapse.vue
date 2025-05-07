<script setup>
import { computed, ref, onMounted } from 'vue';
import Link from '../overrides/InertiaLink';
import { Collapse } from 'tw-elements';

const props = defineProps({
    show: { type: Boolean, default: false },
    name: String,
});
const collapseRef = ref(null);
const collapseTe = ref(null);
const isVisible = ref(props.show);

onMounted(() => {
    collapseTe.value = new Collapse(collapseRef.value, {
        toggle: props.show,
    });
});

const onClick = () => {
    collapseTe.value.toggle();
    isVisible.value = !isVisible.value;
};
</script>

<template>
    <li>
        <button
            :id="name"
            @click="onClick"
            class="focusable group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            :aria-controls="name ? name.replaceAll(' ', '_') : `collapsable`"
        >
            <slot name="icon" />
            <span class="ml-3 flex-1 whitespace-nowrap text-left">{{ name }}</span>
            <svg class="h-3 w-3 transform" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
        </button>

        <ul class="visible! hidden space-y-1 px-4" :id="name ? name.replaceAll(' ', '_') : `collapsable`" ref="collapseRef">
            <slot />
        </ul>
    </li>
</template>

<style scoped>
[data-te-collapse-collapsed] > svg {
    transform: rotate(180deg);
}
</style>
