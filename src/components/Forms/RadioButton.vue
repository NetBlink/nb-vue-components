<script setup>
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    id: String,
    name: String,
    value: String,
    isChecked: {
        type: Boolean,
        default: false,
    },
    modelValue: String, // This is used with v-model on the parent component

    label: String,
});

// This method is called whenever the radio button value changes
const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
};
</script>

<template>
    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <input
            class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 ring-accent before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-1 after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-hidden focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
            type="radio"
            :name="name"
            :value="value"
            :id="id"
            :checked="modelValue === value"
            @change="updateValue"
        />
        <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" :for="id">{{ label }}</label>
    </div>
</template>
