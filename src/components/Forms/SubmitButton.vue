<script setup>
import { PrimaryButton, Spinner } from '../../index';

const props = defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    disabled: Boolean,
    form: Object,
    loading: { type: Boolean, default: false },
});
</script>

<template>
    <PrimaryButton :disabled="loading || form?.processing || disabled" :type="type" class="focusable">
        <div :class="{ 'opacity-25': form?.processing || loading }">
            <slot />
        </div>

        <div v-if="form?.processing || loading" class="absolute inset-2 flex items-center justify-center">
            <Spinner class="aspect-square !h-full !w-auto text-white" />
        </div>
    </PrimaryButton>
</template>
