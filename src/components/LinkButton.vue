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
        class="focusable inline-flex cursor-pointer items-center justify-center gap-1.5 rounded px-2 text-sm leading-normal font-medium select-none"
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
        class="focusable inline-flex cursor-pointer items-center justify-center gap-1.5 rounded px-2 text-sm leading-normal font-medium select-none"
        :class="getClass()"
        tabindex="0"
    >
        <slot />
    </a>
</template>
