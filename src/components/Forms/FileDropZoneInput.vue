<script setup>
import { useForm } from '@inertiajs/vue3';
import { getInertiaRouter } from '../../Helpers';

import Link from '../../overrides/InertiaLink';
import { PrimaryButton, InputError } from '../../index';
import { useDropzone } from 'vue3-dropzone';
import { ref, reactive, onMounted } from 'vue';

const router = getInertiaRouter();
const props = defineProps({
    accept: { String, default: 'image/*' },
    multiple: { Boolean, default: false },
    label: String,
    form: Object,
    field: String,
    required: Boolean,
    disabled: Boolean,
    FileDropCustomClass: String,
});

const errors = ref(null);

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

const onDrop = (acceptedFiles, rejectReasons) => {
    errors.value = null;
    if (rejectReasons && rejectReasons.length > 0) {
        if (rejectReasons[0].errors) {
            errors.value = rejectReasons[0]?.errors.map((error) => error.message).join(', ');
        }
        console.error(rejectReasons);
        return;
    }

    if (!acceptedFiles || acceptedFiles.length === 0) {
        errors.value = `${props.field} is required`;
        return;
    }

    if (props.multiple) {
        props.form[props.field] = acceptedFiles;
    } else {
        props.form[props.field] = acceptedFiles[0];
    }
};

const { getRootProps, getInputProps, isDragActive, ...rest } = useDropzone({
    onDrop,
    multiple: props.multiple,
    accept: props.accept,
});
</script>
<template>
    <div class="flex w-full flex-col">
        <div
            class="border-primary-200 bg-primary-50 hover:border-primary-600 hover:text-primary-700 dark:border-primary-800 dark:bg-primary-950/40 dark:text-gray-200 dark:hover:border-primary-500 dark:hover:text-primary-300 w-full rounded-lg border-2 border-dashed text-gray-700 transition duration-100 ease-in-out"
            :class="{
                'border-primary-400 bg-primary-100 dark:border-primary-500 dark:bg-primary-900/50': isDragActive,
                'bg-primary-100 border-red-600 dark:bg-red-950/40': props.form.errors[field] ?? errors,
                [FileDropCustomClass]: !!FileDropCustomClass,
            }"
        >
            <div class="flex h-20 w-full cursor-copy flex-col items-center justify-center p-4 font-medium" v-bind="getRootProps()">
                <p v-if="label" class="text-gray-900 select-none dark:text-gray-100">{{ label }}</p>
                <input v-bind="getInputProps()" :name="field" />
                <span v-if="isDragActive" class="select-none">Drop the {{ ucwords(field) }} here ...</span>
                <span v-else-if="form[field]">{{ form[field]?.path ?? 'File prepared' }}</span>
                <span v-else class="select-none">Drag 'n' drop {{ ucwords(field) }} here</span>
            </div>
            <!-- Could add item remover for multiple files input -->
        </div>
        <InputError class="mt-2" :message="props.form.errors[field] ?? errors" />
    </div>
</template>
