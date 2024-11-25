<script setup>
import { ModelListSelect } from 'vue-search-select';
import { InputLabel, InputError } from '../../index';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
    },
    list: {
        type: Array,
        required: true,
    },
    optionValue: {
        type: String,
        required: true,
    },
    optionText: {
        type: String,
        required: true,
    },
    optionDisabled: {
        type: String,
    },
    placeholder: {
        type: String,
    },
    field: String,
    form: Object,
    modelValue: {},
    noLabel: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    noForm: {
        type: Boolean,
        default: false,
    },
    filterPredicate: {
        type: Function,
        default: (option, term) => {
            return option.toLowerCase().includes(term.toLowerCase());
        },
    },
    required: Boolean,
});

const emit = defineEmits(['update:modelValue', 'searchchange']);

const ucwords = (text) => {
    let res = [];
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
    <div>
        <InputLabel v-if="!noLabel && (label || field)" :for="id ?? field" :value="ucwords(label ?? field)" :required="required" />
        <template v-if="noForm">
            <model-list-select
                :id="id ?? field"
                :list="list"
                :modelValue="modelValue"
                :option-value="optionValue"
                :option-text="optionText"
                :option-disabled="optionDisabled"
                :placeholder="placeholder"
                class="model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !shadow"
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
                v-model="form[field]"
                :option-value="optionValue"
                :option-text="optionText"
                :option-disabled="optionDisabled"
                :placeholder="placeholder"
                class="model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !px-3 !shadow"
                @update:modelValue="(val) => emit('update:modelValue', val)"
                @searchchange="($event) => emit('searchchange', $event)"
                :is-disabled="disabled"
                :filterPredicate="filterPredicate"
            ></model-list-select>
            <InputError :message="form.errors[field]" />
        </template>
    </div>
</template>

<style scoped>
.model-list.search.active {
    @apply !border-accent-500 !ring-1 !ring-accent-500;
}
.model-list .search {
    @apply !inline-flex !items-center !py-2 !text-base !font-normal;
}
.model-list .text {
    @apply !text-base !font-normal leading-5 !text-black;
}
.model-list .menu {
    @apply !rounded-b !rounded-t-none !border-gray-300 !shadow;
}
.model-list .dropdown.icon {
    @apply !right-0 !top-0 !m-0 !aspect-square !h-full !p-0 !text-base !opacity-100;
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
