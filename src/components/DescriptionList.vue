<script setup>
import { provide, ref } from 'vue';

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
