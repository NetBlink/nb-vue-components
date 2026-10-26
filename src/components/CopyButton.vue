<script setup lang="ts">
/**
 * Copies a value to the clipboard and confirms it: the icon turns into a check
 * and screen readers hear "Copied". Renders an `IconButton` by default; put your
 * own button in the default slot (it receives `copy` and `copied`). Falls back
 * to a hidden textarea where the Clipboard API is unavailable (plain-HTTP pages).
 *
 * @part root - the wrapper
 * @part icon - the copy or check icon (default button)
 * @part status - the visually hidden live region
 */
import { onBeforeUnmount, ref } from 'vue';
import IconButton from './IconButton.vue';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface CopyButtonProps {
    /** Text to copy, or a function returning it */
    value: string | (() => string);
    /** Accessible name and tooltip of the default button */
    label?: string;
    /** What screen readers hear after copying */
    copiedLabel?: string;
    /** How long the copied state lasts (ms) */
    timeout?: number;
    /** Size of the default button */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** Theme of the default button */
    theme?: 'ghost' | 'secondary' | 'primary';
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['CopyButton']>;
}

const props = withDefaults(defineProps<CopyButtonProps>(), {
    label: 'Copy',
    copiedLabel: 'Copied',
    timeout: 2000,
    size: 'sm',
    theme: 'ghost',
});

export interface CopyButtonEmits {
    copied: [value: string];
    error: [error: unknown];
}

const emit = defineEmits<CopyButtonEmits>();

const { cls, attrs } = useUi('CopyButton', props);

const copied = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;
onBeforeUnmount(() => clearTimeout(timer));

const CHECK = { svg: '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.57a1 1 0 0 1-1.42 0l-3.5-3.535a1 1 0 1 1 1.42-1.408l2.79 2.817 6.79-6.852a1 1 0 0 1 1.414-.006Z" clip-rule="evenodd"/></svg>' };
const COPY = { svg: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/></svg>' };

const fallbackCopy = (text: string) => {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(area);
    if (!ok) throw new Error('Copy command was rejected');
};

const copy = async () => {
    const text = typeof props.value === 'function' ? props.value() : props.value;
    try {
        if (navigator.clipboard?.writeText && window.isSecureContext) await navigator.clipboard.writeText(text);
        else fallbackCopy(text);
        copied.value = true;
        emit('copied', text);
        clearTimeout(timer);
        timer = setTimeout(() => (copied.value = false), props.timeout);
    } catch (error) {
        emit('error', error);
    }
};
</script>

<template>
    <span v-bind="attrs()" :class="cls('root', 'relative inline-flex')">
        <slot :copy="copy" :copied="copied">
            <IconButton
                :icon="copied ? CHECK : COPY"
                :label="copied ? copiedLabel : label"
                :size="size"
                :theme="theme"
                :ui="{ icon: cls('icon', copied && 'text-green-600 dark:text-green-400') }"
                @click="copy"
            />
        </slot>
        <span :class="cls('status', 'sr-only')" aria-live="polite">{{ copied ? copiedLabel : '' }}</span>
    </span>
</template>
