<script setup>
import { provide, ref, watch } from 'vue';

const props = defineProps({
    form: {
        type: Object,
        required: false,
    },
    stopEditOnSubmit: {
        type: Boolean,
        default: false,
    },
});

const wasProcessing = ref(false);
watch(
    () => props.form?.processing,
    (processing) => {
        // form started processing
        if (processing) {
            wasProcessing.value = true;
            return;
        }

        if (wasProcessing.value) {
            // form was processing and now it's not
            wasProcessing.value = false;
            if (props.stopEditOnSubmit) {
                stopEditing();
            }
        }
    }
);

const items = ref([]);
const registerItem = (item) => {
    items.value.push(item);
};
provide('registerItem', registerItem);

const startEditing = () => {
    items.value.forEach((item) => {
        if (item && typeof item.startEditing === 'function') {
            item.startEditing();
        }
    });
};
const stopEditing = () => {
    items.value.forEach((item) => {
        if (item && typeof item.stopEditing === 'function') {
            item.stopEditing();
        }
    });
};
const toggleEditing = () => {
    items.value.forEach((item) => {
        if (item && typeof item.toggleEditing === 'function') {
            item.toggleEditing();
        }
    });
};

defineExpose({
    startEditing,
    stopEditing,
    toggleEditing,
});
</script>

<template>
    <div class="border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
            <slot />
        </dl>
    </div>
</template>
