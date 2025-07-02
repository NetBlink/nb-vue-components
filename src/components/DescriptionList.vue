<script setup lang="ts">
import { provide, ref, watch } from 'vue';

interface DescriptionListItem {
    startEditing?: () => void;
    stopEditing?: () => void;
    toggleEditing?: () => void;
}

interface DescriptionListProps {
    /** Form object with processing state */
    form?: {
        processing?: boolean;
        [key: string]: any;
    };
    /** Whether to automatically stop editing when form submission completes */
    stopEditOnSubmit?: boolean;
}

const props = withDefaults(defineProps<DescriptionListProps>(), {
    form: undefined,
    stopEditOnSubmit: false,
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

const items = ref<DescriptionListItem[]>([]);
const registerItem = (item: DescriptionListItem) => {
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
