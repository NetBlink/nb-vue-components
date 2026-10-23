<script setup lang="ts">
/**
 * Single-choice select with a type-to-filter box, built on `vue-search-select`'s
 * `ModelListSelect` over a client-side `list` whose value/label keys you name via
 * `optionValue`/`optionText`; the filter itself is overridable with `filterPredicate`.
 * Binds via `v-model` or the Inertia `:form` + `field` pattern. Use `Select`/`SimpleSelect`
 * when a plain dropdown will do, `Select2ajax` when options must be fetched from a server,
 * and `SelectMultiple` or `RichSelect` when more than one value can be chosen.
 *
 * @part root - the wrapper `<div>`
 * @part label - the `InputLabel`
 * @part input - the search select control
 * @part error - the `InputError`
 */
import { ModelListSelect } from 'vue-search-select';
import { InputLabel, InputError } from '../../index';
import type { NbParts, UiProp } from '../../ui/parts';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface SearchSelectProps {
    id: string;
    label?: string;
    list: any[];
    optionValue: string;
    optionText: string;
    optionDisabled?: string;
    placeholder?: string;
    field?: string;
    form?: Record<string, any>;
    modelValue?: any;
    noLabel?: boolean;
    disabled?: boolean;
    noForm?: boolean;
    filterPredicate?: (option: string, term: string) => boolean;
    required?: boolean;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['SearchSelect']>;
}

export interface SearchSelectEmits {
    (e: 'update:modelValue', value: any): void;
    (e: 'searchchange', term: string): void;
}

const props = withDefaults(defineProps<SearchSelectProps>(), {
    noLabel: false,
    disabled: false,
    noForm: false,
    filterPredicate: (option: string, term: string) => {
        return option.toLowerCase().includes(term.toLowerCase());
    },
    required: false,
});

const emit = defineEmits<SearchSelectEmits>();

const { cls, attrs } = useUi('SearchSelect', props);

const ucwords = (text: string) => {
    let res: string[] = [];
    text.split('_')
        .join(' ')
        .split(' ')
        .map(function (v) {
            res.push(v[0].toUpperCase() + v.slice(1));
        });
    return res.join(' ');
};
</script>

<template>
    <div v-bind="attrs()" :class="cls('root')">
        <InputLabel
            v-if="!noLabel && (label || field)"
            :for="id ?? field"
            :value="ucwords((label ?? field)!)"
            :required="required"
            :class="cls('label')"
        />
        <template v-if="noForm">
            <model-list-select
                :id="id ?? field"
                :list="list"
                :modelValue="modelValue"
                :option-value="optionValue"
                :option-text="optionText"
                :option-disabled="optionDisabled"
                :placeholder="placeholder"
                :class="cls('input', 'model-list relative! mt-0! max-w-full! rounded! border-gray-300! shadow! h-[42px]')"
                @update:modelValue="(val) => emit('update:modelValue', val)"
                @searchchange="($event) => emit('searchchange', $event)"
                :is-disabled="disabled"
                :filterPredicate="filterPredicate"
            ></model-list-select>
        </template>
        <template v-else>
            <model-list-select
                :id="id ?? field"
                :list="list"
                v-model="form![field!]"
                :option-value="optionValue"
                :option-text="optionText"
                :option-disabled="optionDisabled"
                :placeholder="placeholder"
                :class="cls('input', 'model-list relative! mt-0! max-w-full! rounded! border-gray-300! px-3! shadow! h-[42px]')"
                @update:modelValue="(val) => emit('update:modelValue', val)"
                @searchchange="($event) => emit('searchchange', $event)"
                :is-disabled="disabled"
                :filterPredicate="filterPredicate"
            ></model-list-select>
            <InputError :message="form!.errors[field!]" :class="cls('error')" />
        </template>
    </div>
</template>

<style scoped lang="postcss">
.model-list.search.active {
    @apply border-accent-500! ring-1! !ring-accent-500;
}
.model-list .search {
    @apply inline-flex! items-center! py-2! text-base! !font-normal;
}
.model-list .text {
    @apply text-base! font-normal! leading-5 !text-black;
}
.model-list .menu {
    @apply rounded-b! rounded-t-none! border-gray-300! !shadow;
}
.model-list .dropdown.icon {
    @apply right-0! top-0! m-0! aspect-square! h-full! p-0! text-base! !opacity-100;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
}
.model-list .dropdown.icon:before {
    content: '' !important;
}
</style>
