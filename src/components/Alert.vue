<script setup>
import { Alert, initTE } from 'tw-elements';
import { onMounted } from 'vue';

const props = defineProps({
    message: String,
});

onMounted(() => {
    initTE({ Alert });
});
</script>

<template>
    <div role="alert">
        <div>
            <div
                class="mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-xs data-te-alert-show:inline-flex sm:rounded-lg"
                role="alert"
                data-te-alert-init
                data-te-alert-show
            >
                <slot></slot>
                <button
                    type="button"
                    class="ml-auto box-content rounded-none border-none p-1 text-neutral-900 opacity-50 hover:text-neutral-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-hidden"
                    data-te-alert-dismiss
                    aria-label="Close"
                >
                    <span
                        class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                            <path
                                fill-rule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>
