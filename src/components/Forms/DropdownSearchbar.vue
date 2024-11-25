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
<script setup>
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

library.add(faWhatsapp);

const props = defineProps({
    options: Array,
    label: String,
    placeholder: String,
});
</script>

<template>
    <VueSelect :options="options" :label="label" :placeholder="placeholder" class="min-w-44"></VueSelect>
</template>
