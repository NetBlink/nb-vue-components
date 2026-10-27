<script setup lang="ts">
/**
 * A user picture, or their initials on a tinted disc when there is no picture or it
 * fails to load. Initials come from the first letters of the first two words of
 * `name`, and the tint is picked from `name` so the same person keeps the same
 * colour everywhere. `status` adds a presence dot. Stack several with `AvatarGroup`.
 *
 * @part root - the avatar
 * @part image - the picture
 * @part initials - the initials text
 * @part status - the presence dot
 */
import { computed, ref, watch } from 'vue';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface AvatarProps {
    /** Picture URL */
    src?: string | null;
    /** Full name: used for the initials, the tint and the accessible label */
    name?: string;
    /** Alternative text for the picture (defaults to `name`) */
    alt?: string;
    /** Size */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Presence dot */
    status?: 'online' | 'offline' | 'busy' | 'away';
    /** Rounded square instead of a circle */
    square?: boolean;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Avatar']>;
}

const props = withDefaults(defineProps<AvatarProps>(), {
    src: undefined,
    name: '',
    alt: undefined,
    size: 'md',
    status: undefined,
});

const { cls, attrs } = useUi('Avatar', props);

const failed = ref(false);
watch(() => props.src, () => (failed.value = false));

const SIZES = {
    xs: { root: 'h-6 w-6 text-[10px]', status: 'h-1.5 w-1.5' },
    sm: { root: 'h-8 w-8 text-xs', status: 'h-2 w-2' },
    md: { root: 'h-10 w-10 text-sm', status: 'h-2.5 w-2.5' },
    lg: { root: 'h-12 w-12 text-base', status: 'h-3 w-3' },
    xl: { root: 'h-16 w-16 text-lg', status: 'h-3.5 w-3.5' },
};

const TINTS = [
    'bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-200',
    'bg-accent-100 text-accent-700 dark:bg-accent-900/50 dark:text-accent-200',
    'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-200',
    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-200',
    'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200',
    'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-200',
];

const STATUS = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    busy: 'bg-red-500',
    away: 'bg-yellow-400',
};

const initials = computed(() =>
    props.name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join(''),
);

const tint = computed(() => {
    let hash = 0;
    for (const char of props.name) hash = (hash * 31 + char.charCodeAt(0)) | 0;
    return TINTS[Math.abs(hash) % TINTS.length];
});

const showImage = computed(() => !!props.src && !failed.value);
const label = computed(() => props.alt ?? props.name);
// The presence is part of the name ("Ada Lovelace (online)"), not a live region that announces on render.
const fullLabel = computed(() => (props.status && label.value ? `${label.value} (${props.status})` : label.value));
</script>

<template>
    <span
        v-bind="attrs()"
        :class="
            cls(
                'root',
                'relative inline-flex shrink-0 items-center justify-center font-semibold select-none',
                square ? 'rounded-md' : 'rounded-full',
                SIZES[size].root,
                showImage ? 'bg-gray-100 dark:bg-gray-700' : tint,
            )
        "
        :role="showImage ? undefined : 'img'"
        :aria-label="showImage ? undefined : fullLabel || undefined"
    >
        <img v-if="showImage" :src="src!" :alt="fullLabel" :class="cls('image', 'h-full w-full object-cover', square ? 'rounded-md' : 'rounded-full')" @error="failed = true" />
        <span v-else :class="cls('initials')" aria-hidden="true">{{ initials }}</span>
        <span
            v-if="status"
            :class="cls('status', 'absolute right-0 bottom-0 block rounded-full ring-2 ring-white dark:ring-gray-800', SIZES[size].status, STATUS[status])"
            aria-hidden="true"
        />
    </span>
</template>
