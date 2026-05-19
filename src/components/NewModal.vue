<script setup lang="ts">
/**
 * NewModal — accessible dialog built on reka-ui's headless `Dialog` primitives.
 *
 * Preferred for new code. Drives open-state with `v-model:open`, and offers named
 * header / description / footer / trigger slots in addition to the default slot
 * for body content. For the older single-default-slot variant see `Modal`.
 *
 * Forwards `$attrs` onto the underlying `DialogContent`, so accessibility props
 * (`aria-*`, `role`, …) and custom classes pass through.
 *
 * @slot default — body content
 * @slot header — overrides the `title` prop
 * @slot description — overrides the `description` prop
 * @slot footer — right-aligned footer area
 * @slot trigger — element that opens the dialog when clicked
 */
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger } from 'reka-ui';
import { onMounted, onUnmounted, watch } from 'vue';

interface NewModalProps {
    /** Title rendered in DialogTitle (overridden by the `header` slot) */
    title?: string;
    /** Sub-title rendered in DialogDescription (overridden by the `description` slot) */
    description?: string;
    /** Open the dialog on mount */
    defaultOpen?: boolean;
}

const props = withDefaults(defineProps<NewModalProps>(), {
    title: undefined,
    description: undefined,
    defaultOpen: false,
});

const open = defineModel({
    type: Boolean,
    default: false,
});
const updateOpen = (value: boolean) => {
    open.value = value;
};
onMounted(() => {
    if (props.defaultOpen) {
        open.value = true;
    }
});
onUnmounted(() => {
    open.value = false;
});
watch(
    () => props.defaultOpen,
    (newValue) => {
        open.value = newValue;
    }
);
</script>

<template>
    <DialogRoot :defaultOpen="defaultOpen" v-model:open="open" @update:open="updateOpen">
        <DialogTrigger v-if="$slots.trigger" asChild>
            <slot name="trigger" />
        </DialogTrigger>
        <DialogPortal>
            <DialogOverlay class="bg-dark/50 data-[state=open]:animate-fade-in fixed inset-0 z-30" />
            <DialogContent
                class="data-[state=open]:animate-slide-up-fade fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded bg-white p-5 shadow-lg/20 focus:outline-none"
                v-bind="$attrs"
            >
                <DialogTitle v-if="title || $slots.header" class="m-0 text-lg font-semibold">
                    <slot name="header">{{ title }}</slot>
                </DialogTitle>
                <DialogDescription v-if="description || $slots.description" class="mt-2 text-sm leading-normal">
                    <slot name="description">{{ description }}</slot>
                </DialogDescription>

                <div v-if="title || $slots.header || description || $slots.description" class="mb-3"></div>

                <slot />

                <div v-if="$slots.footer" class="mt-5 flex justify-end gap-1.5">
                    <slot name="footer" />
                </div>

                <DialogClose
                    class="focusable text-dark hover:bg-primary/50 focus:bg-primary/60 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] cursor-pointer appearance-none items-center justify-center rounded-full transition-all focus:shadow-[0_0_0_2px] focus:outline-none"
                    aria-label="Close"
                >
                    <FontAwesomeIcon :icon="faTimes" />
                </DialogClose>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>
