<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';

interface TableCollapseProps {
    /** Whether the content is initially expanded */
    expanded?: boolean;
    /** Unique identifier for the collapsible row */
    rowId?: string | number;
}

const props = withDefaults(defineProps<TableCollapseProps>(), {
    expanded: false,
    rowId: undefined,
});

const isExpanded = ref(props.expanded);
const contentRef = ref<HTMLElement>();

// Watch for external changes to expanded prop
watch(
    () => props.expanded,
    (newVal) => {
        isExpanded.value = newVal;
        nextTick(() => {
            updateHeight();
        });
    }
);

const updateHeight = () => {
    if (contentRef.value) {
        if (isExpanded.value) {
            contentRef.value.style.maxHeight = contentRef.value.scrollHeight + 'px';
        } else {
            contentRef.value.style.maxHeight = '0px';
        }
    }
};

const toggle = () => {
    isExpanded.value = !isExpanded.value;
    updateHeight();
};

// Expose toggle function and state
defineExpose({
    toggle,
    isExpanded,
});
</script>

<template>
    <tr class="table-collapse-wrapper">
        <td :colspan="999" class="border-0 p-0">
            <div
                ref="contentRef"
                class="overflow-hidden transition-all duration-300 ease-in-out"
                :class="{ 'max-h-0': !isExpanded, 'max-h-[1000px]': isExpanded }"
            >
                <div class="border-t border-gray-200 bg-gray-50">
                    <slot />
                </div>
            </div>
        </td>
    </tr>
</template>

<style scoped>
.table-collapse-wrapper {
    transition: max-height 0.3s ease-in-out;
}
</style>
