<script setup lang="ts">
/**
 * Files attached to something: name, size, a download link and, with `remove`,
 * a remove button. Removing waits for your function (the row shows it's busy);
 * if it fails the row stays and shows why. Rows animate in and out.
 *
 * @part root - the list
 * @part item - one row
 * @part thumbnail - the picture or file icon
 * @part name - the file name
 * @part meta - the size or status line
 * @part actions - the download and remove buttons
 * @motion off - rows appear and disappear instantly
 * @motion simple - rows fade quickly
 * @motion smooth - rows fade and slide, the rest glide into place
 * @motion fancy - the same on a spring
 */
import { computed, reactive } from 'vue';
import IconButton from './IconButton.vue';
import NbTransitionGroup from './NbTransitionGroup.vue';
import NbIcon from '../icons/NbIcon.vue';
import { formatFileSize } from '../Helpers';
import type { MotionLevel } from '../ui/motion';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface AttachmentItem {
    /** File name shown in the row */
    name: string;
    /** Size in bytes */
    size?: number;
    /** Download URL */
    url?: string;
    /** Picture URL for image files */
    thumbnail?: string;
    /** Your id or token, handed to `remove` */
    value?: unknown;
}

export interface AttachmentListProps {
    /** The files */
    items: AttachmentItem[];
    /** Delete a file; reject to keep it (the message is shown) */
    remove?: (item: AttachmentItem) => Promise<void> | void;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['AttachmentList']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

export interface AttachmentListEmits {
    /** A file was removed (after `remove` resolved) */
    removed: [item: AttachmentItem];
}

const props = defineProps<AttachmentListProps>();
const emit = defineEmits<AttachmentListEmits>();
const { cls, attrs, level } = useUi('AttachmentList', props);

const keyOf = (item: AttachmentItem, index: number) => String(item.value ?? `${item.name}#${index}`);
const state = reactive<Record<string, { removing?: boolean; error?: string; gone?: boolean }>>({});
const rows = computed(() => props.items.map((item, index) => ({ item, key: keyOf(item, index) })).filter((row) => !state[row.key]?.gone));

const FILE = { svg: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11 2H5.5A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5V7z"/><path d="M11 2v5h5"/></svg>' };
const DOWNLOAD = { svg: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3v10m0 0-4-4m4 4 4-4M4 16h12"/></svg>' };
const TRASH = { svg: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 6h12M8 6V4h4v2m-6 0 .7 10h6.6L14 6"/></svg>' };

const removeRow = async (row: { item: AttachmentItem; key: string }) => {
    if (!state[row.key]) state[row.key] = {};
    // Read it back through the reactive object: the plain object assigned above isn't tracked.
    const entry = state[row.key];
    entry.error = undefined;
    entry.removing = true;
    try {
        await props.remove?.(row.item);
        entry.gone = true;
        emit('removed', row.item);
    } catch (error: unknown) {
        entry.error = (error as Error)?.message || 'Could not remove the file';
    } finally {
        entry.removing = false;
    }
};
</script>

<template>
    <NbTransitionGroup v-bind="attrs()" tag="ul" preset="slide-up" :motion="level" :class="cls('root', 'space-y-2')">
        <li
            v-for="row in rows"
            :key="row.key"
            :class="cls('item', 'flex items-center gap-3 rounded-md border border-gray-200 bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-800')"
        >
            <img v-if="row.item.thumbnail" :src="row.item.thumbnail" alt="" :class="cls('thumbnail', 'h-9 w-9 shrink-0 rounded object-cover')" />
            <span v-else :class="cls('thumbnail', 'flex h-9 w-9 shrink-0 items-center justify-center rounded bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300')">
                <NbIcon :name="FILE" class="h-5 w-5" aria-hidden="true" />
            </span>
            <div class="min-w-0 flex-1">
                <p :class="cls('name', 'truncate text-sm font-medium text-gray-800 dark:text-gray-100')">{{ row.item.name }}</p>
                <p v-if="state[row.key]?.error" class="text-xs text-red-600 dark:text-red-400" role="alert">{{ state[row.key].error }}</p>
                <p v-else-if="state[row.key]?.removing" :class="cls('meta', 'text-xs text-gray-500 dark:text-gray-400')">Removing…</p>
                <p v-else-if="row.item.size !== undefined" data-size :class="cls('meta', 'text-xs text-gray-500 dark:text-gray-400')">{{ formatFileSize(row.item.size) }}</p>
            </div>
            <div :class="cls('actions', 'flex shrink-0 items-center gap-1')">
                <a
                    v-if="row.item.url"
                    :href="row.item.url"
                    download
                    :aria-label="`Download ${row.item.name}`"
                    :title="`Download ${row.item.name}`"
                    class="focusable inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                    <NbIcon :name="DOWNLOAD" class="h-4 w-4" aria-hidden="true" />
                </a>
                <IconButton
                    v-if="remove"
                    :icon="TRASH"
                    :label="`Remove ${row.item.name}`"
                    theme="ghost-danger"
                    size="sm"
                    :disabled="state[row.key]?.removing"
                    @click="removeRow(row)"
                />
            </div>
        </li>
    </NbTransitionGroup>
</template>
