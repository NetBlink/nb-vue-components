<script setup>
import { inject, onMounted, ref, watch } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPencil, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPencil, faPenRuler);

const props = defineProps({
    editable: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: '',
    },
    value: {
        type: String,
    },
    forceEditing: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['editToggled']);
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
const registerItem = inject('registerItem');
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
                    <div class="slot-content flex-grow">
                        <slot />
                        {{ value }}
                    </div>
                    <span class="ml-4 flex-shrink-0">
                        <button type="button" @click="toggleEditing" class="text-lg font-bold text-primary hover:text-primary-400" v-if="editable">
                            <FontAwesomeIcon :icon="faPencil" />
                        </button>
                        <slot name="buttons" />
                    </span>
                </template>
                <template v-else>
                    <div class="slot-edit flex-grow">
                        <slot name="edit" />
                    </div>
                    <span class="ml-4 flex-shrink-0">
                        <button type="button" @click="toggleEditing" class="text-xl font-bold text-primary hover:text-primary-400">
                            <FontAwesomeIcon :icon="faPenRuler" />
                        </button>
                    </span>
                </template>
            </div>
        </dd>
    </div>
</template>
