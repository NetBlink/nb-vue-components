<script setup>
// @ts-nocheck
import { onMounted, ref } from 'vue';
import { Collapse } from 'tw-elements';

const props = defineProps({
    header: String,
    open: {
        type: Boolean,
        default: false,
    },
    headerColor: {
        type: String,
    },
});

const collapseRef = ref(null);
const collapseTe = ref(null);
const isVisible = ref(props.open);

onMounted(() => {
    collapseTe.value = new Collapse(collapseRef.value, {
        toggle: props.open,
    });
});

const onClick = () => {
    collapseTe.value.toggle();
    isVisible.value = !isVisible.value;
};
</script>
<template>
    <div class="mt-2 rounded-lg border-2 border-gray-200 dark:border-gray-700" :class="{ 'px-4 py-2': !header }">
        <div class="bg-white sm:rounded-lg" :class="{ 'p-1': !header }">
            <div
                @click="onClick"
                class="focusable block! rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
                tabindex="0"
                :aria-controls="header ? header.replaceAll(' ', '_') : `collapsable`"
                :style="{ backgroundColor: headerColor }"
            >
                {{ header }}
                <button class="text-xs font-semibold uppercase leading-normal text-primary hover:text-primary-700" type="button">
                    {{ isVisible ? 'Hide' : 'Show' }}
                </button>
            </div>
            <div class="visible! hidden overflow-hidden" :id="header ? header.replaceAll(' ', '_') : `collapsable`" ref="collapseRef">
                <div :class="{ 'px-4 pb-2': header }" class="mt-2">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
