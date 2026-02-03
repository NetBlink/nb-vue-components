<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { InputMode } from './types';

interface TextInputEmits {
    /** Emitted when the input value changes */
    'update:modelValue': [value: string];
}

interface TextInputProps {
    /** The input value */
    modelValue?: string;
    inputmode?: InputMode;
    noNumberSpinners?: boolean;
}

const props = withDefaults(defineProps<TextInputProps>(), {
    noNumberSpinners: false,
});
const emit = defineEmits<TextInputEmits>();

const input = ref<HTMLInputElement | null>(null);

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};

onMounted(() => {
    if (input.value?.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({
    /** Focus the input element */
    focus: () => input.value?.focus(),
});
</script>

<template>
    <input
        class="focusable focus:border-primary-500 focus:ring-primary-500 relative m-0 block w-full flex-auto rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
        :class="{ 'no-spinners': noNumberSpinners }"
        :value="modelValue"
        :inputmode="inputmode"
        @input="handleInput"
        ref="input"
    />
</template>
