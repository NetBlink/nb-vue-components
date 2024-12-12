<script setup>
// @ts-nocheck
import { InputLabel, InputError } from '../../index';

const props = defineProps({
    field: String,
    label: String,
    required: Boolean,
    disabled: Boolean,
    form: Object,
    addon: String,
    placeholder: String,
    noLabel: Boolean,
    autofocus: Boolean,
    modelValue: String,
    rows: Number,
});
function ucwords(text) {
    let res = [];
    text.split('_')
        .join(' ')
        .split(' ')
        .map(function (v) {
            res.push(v[0].toUpperCase() + v.slice(1));
        });
    return res.join(' ');
}

defineEmits(['update:modelValue']);
</script>

<template>
    <div>
        <InputLabel v-if="!noLabel" :for="field" :value="label ? label : ucwords(field)" :required="required" />
        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
            <textarea
                :id="field"
                class="relative m-0 block flex-auto rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
                v-model="props.form[field]"
                :required="props.required"
                :disabled="props.disabled"
                :autocomplete="field"
                :placeholder="props.placeholder"
                :autofocus="props.autofocus"
                :rows="props.rows"
                @input="$emit('update:modelValue', $event.target.value)"
            />
        </div>
        <InputError class="mt-2" :message="props.form.errors[field]" />
    </div>
</template>
