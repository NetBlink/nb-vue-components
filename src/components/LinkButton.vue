<script setup>
import Link from '../overrides/InertiaLink';

const props = defineProps({
    href: String,
    colourClasses: {
        default: () => ['bg-primary', 'text-white', 'hover:bg-primary-700'],
    },
    target: {
        default: () => '_self',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    method: String,
    data: Object,
});

const getClass = () => {
    return props.disabled ? [...props.colourClasses, ['opacity-50', 'pointer-events-none']] : props.colourClasses;
};
</script>

<template>
    <Link
        v-if="href && (method || data)"
        :href="href"
        :method="method"
        :data="data"
        class="focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal"
        :class="getClass()"
        as="button"
        tabindex="0"
    >
        <slot />
    </Link>

    <a
        v-else
        :href="href"
        :target="target"
        class="focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal"
        :class="getClass()"
        tabindex="0"
    >
        <slot />
    </a>
</template>
