<script setup lang="ts">
import { computed } from 'vue';
import { md5 } from 'js-md5';

interface GravatarImgProps {
    /** Email address for the Gravatar */
    email: string;
    /** Size of the image in pixels */
    size?: number;
}

const props = withDefaults(defineProps<GravatarImgProps>(), {
    size: 100,
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
