<style>
.vs__selected-options {
    padding: 0.2rem;
}
.vs__dropdown-toggle[aria-expanded='true'] {
    border-width: 2px;
    border-color: rgb(99 102 241 / var(--tw-border-opacity)) !important;
}
.vs__dropdown-toggle {
    border-width: 1px;
    border-radius: 0.375rem;
}
.vs__selected {
    white-space: nowrap;
}
.vs__search {
    min-width: 5rem;
}
</style>
<script setup lang="ts">
/**
 * Thin wrapper around the third-party `vue-select` component, giving a type-to-search
 * dropdown over a static `options` array with only light styling applied. It is the
 * oldest of the select family and carries an external dependency, so prefer the in-house
 * `SearchSelect` for filterable single-choice fields and `Select2ajax` when the options
 * have to come from a server.
 *
 * @part root - the `vue-select` control
 */
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import type { NbParts, UiProp } from '../../ui/parts';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface DropdownSearchbarProps {
    options?: any[];
    label?: string;
    placeholder?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['DropdownSearchbar']>;
}

const props = defineProps<DropdownSearchbarProps>();

const { cls, attrs } = useUi('DropdownSearchbar', props);
</script>

<template>
    <VueSelect v-bind="attrs()" :options="options" :label="label" :placeholder="placeholder" :class="cls('root', 'min-w-44')"></VueSelect>
</template>
