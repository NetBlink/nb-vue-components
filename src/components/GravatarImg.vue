<script setup>
import { computed } from 'vue';
import { md5 } from 'js-md5';

const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        default: 100,
    },
});

const hash = computed(() => {
    return md5(props.email.trim().toLowerCase());
});

const src = computed(() => {
    return `https://www.gravatar.com/avatar/${hash.value}?s=${props.size}`;
});

const alt = computed(() => {
    return `Gravatar for ${props.email}`;
});
</script>
<template>
    <img :src="src" :alt="alt" />
</template>
