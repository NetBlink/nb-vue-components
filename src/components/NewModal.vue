<script setup lang="ts">
/**
 * Accessible dialog built on reka-ui's headless `Dialog` primitives, and the one
 * to use for new code. Open state is driven with `v-model:open`, and named
 * header, description, footer and trigger slots sit alongside the default slot
 * for body content. For the older single-default-slot variant see `Modal`.
 *
 * Forwards `$attrs` onto the underlying `DialogContent`, so accessibility props
 * (`aria-*`, `role`) and custom classes reach the dialog panel itself.
 *
 * @slot default - body content
 * @slot header - overrides the `title` prop
 * @slot description - overrides the `description` prop
 * @slot footer - right-aligned footer area
 * @slot trigger - element that opens the dialog when clicked
 */
import NbIcon from '../icons/NbIcon.vue';
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger } from 'reka-ui';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

// `$attrs` is bound explicitly onto DialogContent below. Without this the same
// attrs would ALSO land on the root DialogRoot, which is how `v-model:open`
// used to work at all: the `open` attr fell through to DialogRoot by accident.
// Both bindings are declared models now, so the fallthrough is no longer load-bearing.
defineOptions({ inheritAttrs: false });

interface NewModalProps {
    /** Title rendered in DialogTitle (overridden by the `header` slot) */
    title?: string;
    /** Sub-title rendered in DialogDescription (overridden by the `description` slot) */
    description?: string;
    /** Open the dialog on mount */
    defaultOpen?: boolean;
    /** Let the user drag-resize the dialog from its bottom-right corner */
    resizable?: boolean;
}

const props = withDefaults(defineProps<NewModalProps>(), {
    title: undefined,
    description: undefined,
    defaultOpen: false,
    resizable: false,
});

/*
 * Two supported bindings: `v-model:open` (documented, used across the docs and
 * the apps) and plain `v-model` (older call sites). Whichever the caller binds
 * wins; if both are bound they stay in sync. Unbound, the dialog keeps its own
 * state so a `trigger` slot still works with no model at all.
 */
const openModel = defineModel<boolean | undefined>('open', { default: undefined });
const legacyModel = defineModel<boolean | undefined>({ default: undefined });
const uncontrolled = ref(false);

const open = computed<boolean>({
    get() {
        if (openModel.value !== undefined) return openModel.value;
        if (legacyModel.value !== undefined) return legacyModel.value;
        return uncontrolled.value;
    },
    set(value) {
        if (openModel.value !== undefined) openModel.value = value;
        if (legacyModel.value !== undefined) legacyModel.value = value;
        uncontrolled.value = value;
    },
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
            <DialogOverlay
                class="bg-dark/50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out fixed inset-0 z-30 dark:bg-black/70"
            />
            <!-- Resizable swaps the fixed 600px cap for a 95vw one (CSS resize can
                 never exceed max-width) and adds native `resize: both` plus floor
                 sizes so the dialog can't be collapsed into nothing. -->
            <DialogContent
                class="data-[state=open]:animate-slide-up-fade data-[state=closed]:animate-slide-down-fade-out fixed top-[50%] left-[50%] z-[100] translate-x-[-50%] translate-y-[-50%] rounded bg-white p-5 text-gray-900 shadow-lg/20 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:shadow-black/40"
                :class="
                    props.resizable
                        ? 'resize overflow-auto max-h-[90vh] max-w-[95vw] min-h-40 min-w-80 w-[min(600px,90vw)]'
                        : 'overflow-y-auto max-h-[85vh] w-[90vw] max-w-[600px]'
                "
                v-bind="$attrs"
            >
                <DialogTitle v-if="title || $slots.header" class="m-0 text-lg font-semibold dark:text-gray-100">
                    <slot name="header">{{ title }}</slot>
                </DialogTitle>
                <DialogDescription v-if="description || $slots.description" class="mt-2 text-sm leading-normal dark:text-gray-300">
                    <slot name="description">{{ description }}</slot>
                </DialogDescription>

                <div v-if="title || $slots.header || description || $slots.description" class="mb-3"></div>

                <slot />

                <div v-if="$slots.footer" class="mt-5 flex justify-end gap-1.5">
                    <slot name="footer" />
                </div>

                <!-- Same rounded-square affordance as Alert's dismiss button, so the
                     two close controls read as one pattern rather than circle vs square. -->
                <DialogClose
                    class="focusable focus:ring-primary-500 absolute top-3 right-3 inline-flex cursor-pointer appearance-none items-center justify-center rounded-md p-1.5 text-gray-500 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                    aria-label="Close"
                >
                    <NbIcon name="$close" class="h-5 w-5" />
                </DialogClose>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>
