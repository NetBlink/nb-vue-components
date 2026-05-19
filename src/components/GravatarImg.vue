<script setup lang="ts">
/**
 * GravatarImg - `<img>` pointing at the Gravatar for an email.
 *
 * MD5-hashes the (trimmed, lowercased) email and builds a
 * `https://www.gravatar.com/avatar/<hash>?s=<size>` URL. The `alt` text is
 * derived from the email - no `alt` prop. Pair with utility classes like
 * `rounded-full` to shape the image; the component doesn't apply any.
 *
 * @prop {string} email - email address used to compute the avatar hash
 * @prop {number} [size=100] - requested image size in pixels (Gravatar `s=` parameter)
 */
import { computed } from 'vue';
import { md5 } from 'js-md5';

interface GravatarImgProps {
    /** Email - md5-hashed (after trim + lowercase) for the Gravatar lookup */
    email: string;
    /** Pixel size requested from Gravatar (the `s=` query parameter) */
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
