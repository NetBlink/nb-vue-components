<script setup lang="ts">
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'
import { onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  defaultOpen: {
    type: Boolean,
    default: false,
  },
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
watch(() => props.defaultOpen, (newValue) => {
  open.value = newValue;
});

</script>

<template>
  <DialogRoot :defaultOpen="defaultOpen" v-model:open="open" @update:open="updateOpen">
    <DialogTrigger v-if="$slots.trigger" asChild>
      <slot name="trigger"/>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-dark/50 data-[state=open]:animate-fade-in fixed inset-0 z-30" />
      <DialogContent
            class="data-[state=open]:animate-slide-up-fade overflow-y-auto fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded bg-white p-5 shadow-lg/20 focus:outline-none z-[100]"
            v-bind="$attrs"
      >
        <DialogTitle v-if="title || $slots.header" class="m-0 text-lg font-semibold">
          <slot name="header">{{ title }}</slot>
        </DialogTitle>
        <DialogDescription v-if="description || $slots.description" class=" mt-2 mb-3 text-sm leading-normal">
             <slot name="description">{{ description }}</slot>
        </DialogDescription>

        <slot />

        <div v-if="$slots.footer" class="mt-5 flex justify-end">
            <slot name="footer" />
        </div>

        <DialogClose
          class="focusable cursor-pointer text-dark hover:bg-primary/50 focus:bg-primary/60 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none transition-all"
          aria-label="Close"
        >
          <FontAwesomeIcon :icon="faTimes" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
