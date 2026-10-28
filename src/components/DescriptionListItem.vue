<script setup lang="ts">
/**
 * One label/value row inside a `DescriptionList`, rendered as a `<dt>`/`<dd>` pair. When
 * `editable` is set it shows a pencil button that swaps the value for the `edit` slot, and
 * it registers itself with the parent list so the whole list can be put into or taken out
 * of edit mode together.
 *
 * @part root - the row
 * @part term - the `<dt>` label
 * @part required - the red asterisk
 * @part details - the `<dd>`
 * @part row - the flex row inside it
 * @part value - the value or edit slot area
 * @part actions - the buttons area
 * @part edit - the edit toggle button
 */
import { inject, onMounted, ref, watch } from 'vue';
import NbIcon from '../icons/NbIcon.vue';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface DescriptionListItemProps {
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
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['DescriptionListItem']>;
}

export interface DescriptionListItemEmits {
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

const { cls, attrs } = useUi('DescriptionListItem', props);
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
    <div v-bind="attrs()" :class="cls('root', 'description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6')">
        <dt :class="cls('term', 'flex items-center text-sm font-medium dark:text-gray-200')">
            {{ label }}
            <slot name="label" />
            <span :class="cls('required', 'ml-1 text-red-500 dark:text-red-400')" v-if="required">*</span>
        </dt>
        <dd :class="cls('details', 'mt-1 min-h-[42px] text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0 dark:text-gray-200')">
            <div :class="cls('row', 'flex min-h-full items-center')">
                <template v-if="!editing">
                    <div :class="cls('value', 'slot-content grow')">
                        <slot />
                        {{ value }}
                    </div>
                    <span :class="cls('actions', 'ml-4 shrink-0')">
                        <button type="button" @click="toggleEditing" :aria-label="`Edit ${label ?? ''}`.trim()" :class="cls('edit', 'text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200 text-lg font-bold')" v-if="editable">
                            <NbIcon name="$edit" />
                        </button>
                        <slot name="buttons" />
                    </span>
                </template>
                <template v-else>
                    <!-- [&>*]:mb-0: an Input's own bottom margin would make the row taller while editing -->
                    <div :class="cls('value', 'slot-edit grow [&>*]:mb-0')">
                        <slot name="edit" />
                    </div>
                    <span :class="cls('actions', 'ml-4 shrink-0')">
                        <button type="button" @click="toggleEditing" :aria-label="`Done editing ${label ?? ''}`.trim()" :class="cls('edit', 'text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200 text-lg font-bold')">
                            <NbIcon name="$edit-alt" />
                        </button>
                    </span>
                </template>
            </div>
        </dd>
    </div>
</template>
