<script setup lang="ts">
import { inject, onMounted, ref, watch } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPencil, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPencil, faPenRuler);

interface DescriptionListItemProps {
    /** Whether the item can be edited */
    editable?: boolean;
    /** Label text for the item */
    label?: string;
    /** Value text for the item */
    value?: string;
    /** Whether to force editing mode on mount */
    forceEditing?: boolean;
    /** Whether the field is required (shows asterisk) */
    required?: boolean;
}

interface DescriptionListItemEmits {
    /** Emitted when edit mode is toggled */
    editToggled: [isEditing: boolean];
}

const props = withDefaults(defineProps<DescriptionListItemProps>(), {
    editable: false,
    label: '',
    value: undefined,
    forceEditing: false,
    required: false,
});

const emit = defineEmits<DescriptionListItemEmits>();
const editing = ref(props.editable ? props.forceEditing : false);
const toggleEditing = () => {
    if (!props.editable) return;
    editing.value = !editing.value;
    emit('editToggled', editing.value);
};

watch(
    () => props.forceEditing,
    (newValue) => {
        if (props.editable) {
            editing.value = newValue;
        }
    }
);

const startEditing = () => {
    if (!props.editable) return;
    editing.value = true;
};
const stopEditing = () => {
    if (!props.editable) return;
    editing.value = false;
};

type RegisterItemFunction = (item: { startEditing: () => void; stopEditing: () => void; toggleEditing: () => void }) => void;

const registerItem = inject<RegisterItemFunction>('registerItem');
onMounted(() => {
    if (registerItem) {
        registerItem({ startEditing, stopEditing, toggleEditing });
    }
});
const isEditing = () => {
    return editing.value;
};
defineExpose({
    toggleEditing,
    startEditing,
    stopEditing,
    isEditing,
});
</script>

<template>
    <div class="description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="flex items-center text-sm font-medium">
            {{ label }}
            <slot name="label" />
            <span class="ml-1 text-red-500" v-if="required">*</span>
        </dt>
        <dd class="mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <div class="flex min-h-full items-center">
                <template v-if="!editing">
                    <div class="slot-content grow">
                        <slot />
                        {{ value }}
                    </div>
                    <span class="ml-4 shrink-0">
                        <button type="button" @click="toggleEditing" class="text-primary hover:text-primary-400 text-lg font-bold" v-if="editable">
                            <FontAwesomeIcon :icon="faPencil" />
                        </button>
                        <slot name="buttons" />
                    </span>
                </template>
                <template v-else>
                    <div class="slot-edit grow">
                        <slot name="edit" />
                    </div>
                    <span class="ml-4 shrink-0">
                        <button type="button" @click="toggleEditing" class="text-primary hover:text-primary-400 text-xl font-bold">
                            <FontAwesomeIcon :icon="faPenRuler" />
                        </button>
                    </span>
                </template>
            </div>
        </dd>
    </div>
</template>
