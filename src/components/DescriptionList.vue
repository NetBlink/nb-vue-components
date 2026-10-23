<script setup lang="ts">
/**
 * Wrapper `<dl>` for a stack of `DescriptionListItem` rows. Child items register
 * themselves through provide/inject so the list can start, stop or toggle editing on all
 * of them at once via its exposed methods; pass an Inertia `form` plus `stopEditOnSubmit`
 * to have every row leave edit mode automatically once submission finishes.
 *
 * @part root - the wrapper with the top border
 * @part list - the `<dl>`
 */
import { provide, ref, watch } from 'vue';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

interface DescriptionListItem {
    startEditing?: () => void;
    stopEditing?: () => void;
    toggleEditing?: () => void;
}

export interface DescriptionListProps {
    /** Form object with processing state */
    form?: {
        processing?: boolean;
        [key: string]: any;
    };
    /** Whether to automatically stop editing when form submission completes */
    stopEditOnSubmit?: boolean;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['DescriptionList']>;
}

const props = withDefaults(defineProps<DescriptionListProps>(), {
    form: undefined,
    stopEditOnSubmit: false,
});

const { cls, attrs } = useUi('DescriptionList', props);

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
    <div v-bind="attrs()" :class="cls('root', 'border-t border-gray-100 dark:border-gray-700')">
        <dl :class="cls('list', 'divide-y divide-gray-100 dark:divide-gray-700')">
            <slot />
        </dl>
    </div>
</template>
