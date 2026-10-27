<script setup lang="ts">
/**
 * Dashed drag-and-drop area for picking files, built on `vue3-dropzone`, with click-to-
 * browse, an `accept` filter and optional multiple selection. Three ways to use it:
 *
 * - `:form` + `field`: the chosen File objects go straight onto the Inertia form,
 *   which uploads them with the rest of the form (rejections and `form.errors` show inline).
 * - `v-model`: the chosen `File` (or `File[]` with `multiple`), without an Inertia form.
 * - `:upload`: each file uploads as soon as it is picked, with per-file progress and
 *   retry. Whatever the function resolves to (a server token, an id) goes into
 *   `v-model`; `initialFiles` lists files already on the server and `:remove` deletes them.
 *
 * The file list (with previews and remove buttons) is on by default for `v-model` and
 * `:upload`, and opt-in with `list` for `:form` + `field`.
 *
 * @prop {string} FileDropCustomClass - Deprecated, use `:ui="{ zone: '...' }"`
 * @part root - the wrapper `<div>`
 * @part zone - the dashed drop area
 * @part content - the clickable area inside it
 * @part label - the label text
 * @part list - the list of picked files
 * @part file - each file row
 * @part thumb - the image preview or file icon
 * @part name - the file name and size
 * @part progress - the upload `Progress`
 * @part remove - the remove `IconButton`
 * @part error - the `InputError`
 * @motion off - files appear and leave the list instantly
 * @motion simple - files fade in and out
 * @motion smooth - files slide in and the list closes up smoothly
 * @motion fancy - the same, springier
 */
import { InputError } from '../../index';
import { formatFileSize } from '../../Helpers';
import IconButton from '../IconButton.vue';
import Progress from '../Progress.vue';
import NbTransitionGroup from '../NbTransitionGroup.vue';
import { useDropzone } from 'vue3-dropzone';
import { computed, onBeforeUnmount, reactive, ref, toRaw, toRef, watch } from 'vue';
import type { MotionLevel } from '../../ui/motion';
import type { NbParts, UiProp } from '../../ui/parts';
import { useUi } from '../../ui/useUi';
import { baseLayer, stateLayer } from '../../ui/merge';

defineOptions({ inheritAttrs: false });

/** A file that is already stored (shown in the list with `:upload`). */
export interface FileDropInitialFile {
    name: string;
    /** Preview image or download URL */
    url?: string;
    /** Size in bytes */
    size?: number;
    /** What `v-model` holds for this file (e.g. its server token) */
    value: unknown;
}

/** Uploads one file; report progress (0-100) and resolve with what `v-model` should hold. */
export type FileDropUpload = (file: File, helpers: { onProgress: (percent: number) => void }) => Promise<unknown>;

export interface FileDropZoneInputProps {
    /** File types the picker and drop accept */
    accept?: string | string[];
    /** Allow several files */
    multiple?: boolean;
    label?: string;
    /** Inertia form to write the files onto (with `field`) */
    form?: Record<string, any>;
    /** Form field name */
    field?: string;
    required?: boolean;
    disabled?: boolean;
    /** Picked file(s), or uploaded values with `:upload` */
    modelValue?: unknown;
    /** Upload each file as soon as it is picked */
    upload?: FileDropUpload;
    /** Delete an uploaded or initial file on the server; rejecting keeps it in the list */
    remove?: (value: unknown) => Promise<void> | void;
    /** Files already stored, shown in the list (with `:upload`) */
    initialFiles?: FileDropInitialFile[];
    /** Largest accepted file, in MB */
    maxSize?: number;
    /** Most files accepted at once */
    maxFiles?: number;
    /** Show the file list (default on for `v-model` and `:upload`, off for `:form` + `field`) */
    list?: boolean;
    /** Thumbnails for images in the list */
    preview?: boolean;
    /** Deprecated, use `:ui="{ zone: '...' }"` */
    FileDropCustomClass?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['FileDropZoneInput']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<FileDropZoneInputProps>(), {
    accept: 'image/*',
    multiple: false,
    required: false,
    disabled: false,
    form: undefined,
    field: undefined,
    modelValue: undefined,
    upload: undefined,
    remove: undefined,
    initialFiles: () => [],
    maxSize: undefined,
    maxFiles: undefined,
    list: undefined,
    preview: true,
});

export interface FileDropZoneInputEmits {
    'update:modelValue': [value: unknown];
    /** A file was rejected or failed to upload */
    error: [message: string];
    /** A file finished uploading */
    uploaded: [value: unknown, file: File];
    /** A file was removed from the list */
    removed: [value: unknown];
}

const emit = defineEmits<FileDropZoneInputEmits>();

const { cls, attrs, level } = useUi('FileDropZoneInput', props, { aliases: { FileDropCustomClass: 'zone' } });

const errors = ref<string | null>(null);

const formMode = computed(() => !!props.form && !!props.field);
const showList = computed(() => props.list ?? !formMode.value);

const ucwords = (text: string) =>
    text
        .split('_')
        .join(' ')
        .split(' ')
        .map((v) => (v ? v[0].toUpperCase() + v.slice(1) : v))
        .join(' ');

const what = computed(() => (props.field ? ucwords(props.field) : props.multiple ? 'files' : 'a file'));

/* --- File list ------------------------------------------------------------ */

type Status = 'done' | 'uploading' | 'failed';
interface Entry {
    id: number;
    name: string;
    size?: number;
    file?: File;
    url?: string;
    value?: unknown;
    status: Status;
    progress: number;
    error?: string;
    removing?: boolean;
}

let nextId = 0;
const entries = ref<Entry[]>([]);
const ownUrls = new Set<string>();

const objectUrl = (file: File) => {
    if (!props.preview || !file.type.startsWith('image/') || typeof URL === 'undefined') return undefined;
    const url = URL.createObjectURL(file);
    ownUrls.add(url);
    return url;
};

const dropUrl = (url?: string) => {
    if (url && ownUrls.has(url)) {
        URL.revokeObjectURL(url);
        ownUrls.delete(url);
    }
};

onBeforeUnmount(() => ownUrls.forEach((url) => URL.revokeObjectURL(url)));

// Stored files are matched by value, so a parent that rebuilds the array on every render
// (`:initial-files="doc.files.map(...)"`) neither resets the list nor brings back a removed file.
const valueKey = (value: unknown) => (value !== null && typeof value === 'object' ? JSON.stringify(value) : String(value));
const removedInitial = new Set<string>();
watch(
    () => props.initialFiles.map((f) => valueKey(f.value)).join('\u0000'),
    () => {
        const current = entries.value;
        const stored = props.initialFiles
            .filter((f) => !removedInitial.has(valueKey(f.value)))
            .map(
                (f) =>
                    current.find((e) => !e.file && valueKey(e.value) === valueKey(f.value)) ?? {
                        id: nextId++,
                        name: f.name,
                        size: f.size,
                        url: props.preview ? f.url : undefined,
                        value: f.value,
                        status: 'done' as Status,
                        progress: 100,
                    },
            );
        entries.value = [...stored, ...current.filter((e) => e.file)];
    },
    { immediate: true },
);

const sizeText = (bytes?: number) => (bytes === undefined ? '' : formatFileSize(bytes));

/* --- Emitting the model ---------------------------------------------------- */

// What we last emitted, so the watcher below can tell the parent's own changes from our echo.
let lastEmitted: unknown;

const emitModel = () => {
    if (props.upload) {
        const values = entries.value.filter((e) => e.status === 'done').map((e) => e.value);
        lastEmitted = props.multiple ? values : (values[0] ?? null);
    } else {
        const files = entries.value.map((e) => e.file).filter(Boolean) as File[];
        lastEmitted = props.multiple ? files : (files[0] ?? null);
    }
    emit('update:modelValue', lastEmitted);
};

// The parent changed v-model itself (typically cleared it after submitting): follow it.
watch(
    () => props.modelValue,
    (value) => {
        if (formMode.value || toRaw(value) === toRaw(lastEmitted)) return;
        const empty = value === null || value === undefined || (Array.isArray(value) && value.length === 0);
        if (empty) {
            entries.value.forEach((e) => dropUrl(e.url));
            entries.value = entries.value.filter((e) => e.status === 'uploading');
        } else if (!props.upload) {
            const files = (Array.isArray(value) ? value : [value]).filter((f): f is File => typeof File !== 'undefined' && f instanceof File);
            entries.value.forEach((e) => dropUrl(e.url));
            entries.value = files.map((file) => ({ id: nextId++, name: file.name, size: file.size, file, url: objectUrl(file), status: 'done', progress: 100 }));
        }
        lastEmitted = value;
    },
);

/* --- Picking ----------------------------------------------------------------- */

const reject = (message: string) => {
    errors.value = message;
    emit('error', message);
};

const validate = (files: File[]): File[] => {
    let accepted = files;
    if (props.maxSize !== undefined) {
        const tooBig = accepted.filter((f) => f.size > props.maxSize! * 1024 * 1024);
        if (tooBig.length) reject(`${tooBig.map((f) => f.name).join(', ')} ${tooBig.length > 1 ? 'are' : 'is'} larger than ${props.maxSize} MB`);
        accepted = accepted.filter((f) => !tooBig.includes(f));
    }
    if (props.maxFiles !== undefined) {
        const room = Math.max(0, props.maxFiles - (props.multiple && !formMode.value ? entries.value.length : 0));
        if (accepted.length > room) reject(`You can add at most ${props.maxFiles} file${props.maxFiles === 1 ? '' : 's'}`);
        accepted = accepted.slice(0, room);
    }
    return accepted;
};

const startUpload = async (entry: Entry) => {
    entry.status = 'uploading';
    entry.progress = 0;
    entry.error = undefined;
    try {
        const value = await props.upload!(entry.file!, {
            onProgress: (percent) => {
                entry.progress = Math.max(0, Math.min(100, percent));
            },
        });
        entry.value = value;
        entry.status = 'done';
        entry.progress = 100;
        if (!props.multiple) {
            // Single file: the previous one goes only once its replacement is stored.
            entries.value.filter((e) => e.id !== entry.id).forEach((e) => dropUrl(e.url));
            entries.value = entries.value.filter((e) => e.id === entry.id);
        }
        emitModel();
        emit('uploaded', value, entry.file!);
    } catch (error: any) {
        entry.status = 'failed';
        entry.error = error?.message || 'Upload failed';
        emit('error', entry.error!);
    }
};

const addFiles = (files: File[]) => {
    const fresh: Entry[] = files.map((file) => ({ id: nextId++, name: file.name, size: file.size, file, url: objectUrl(file), status: 'done', progress: 100 }));
    if (props.multiple) {
        entries.value = [...entries.value, ...fresh];
    } else {
        if (props.upload) {
            // Keep the stored file until the new upload succeeds; drop an earlier failed or pending pick.
            entries.value.filter((e) => e.status !== 'done').forEach((e) => dropUrl(e.url));
            entries.value = [...entries.value.filter((e) => e.status === 'done'), ...fresh];
        } else {
            entries.value.forEach((e) => e.file && dropUrl(e.url));
            entries.value = [...entries.value.filter((e) => !e.file), ...fresh];
        }
    }
    if (props.upload) {
        // The entries in the list are reactive proxies; upload through them so progress shows.
        for (const entry of entries.value.filter((e) => fresh.some((f) => f.id === e.id))) startUpload(entry);
    } else {
        emitModel();
    }
};

const onDrop = (acceptedFiles: File[], rejectReasons: any[]) => {
    errors.value = null;
    if (rejectReasons && rejectReasons.length > 0) {
        if (rejectReasons[0].errors) {
            reject(rejectReasons[0]?.errors.map((error: any) => error.message).join(', '));
        }
        console.error(rejectReasons);
        return;
    }

    if (!acceptedFiles || acceptedFiles.length === 0) {
        errors.value = `${props.field ?? 'file'} is required`;
        return;
    }

    const files = validate(acceptedFiles);
    if (!files.length) return;

    if (formMode.value) {
        if (props.multiple) {
            props.form![props.field!] = files;
        } else {
            props.form![props.field!] = files[0];
        }
        if (showList.value) {
            entries.value.forEach((e) => dropUrl(e.url));
            entries.value = files.map((file) => ({ id: nextId++, name: file.name, size: file.size, file, url: objectUrl(file), status: 'done', progress: 100 }));
        }
        return;
    }

    addFiles(files);
};

/* --- Removing ---------------------------------------------------------------- */

const removeEntry = async (entry: Entry) => {
    entry.error = undefined;
    if (props.remove && entry.status === 'done' && entry.value !== undefined) {
        entry.removing = true;
        try {
            await props.remove(entry.value);
        } catch (error: any) {
            entry.removing = false;
            entry.error = error?.message || 'Could not remove the file';
            emit('error', entry.error!);
            return;
        }
    }
    if (!entry.file && entry.value !== undefined) removedInitial.add(valueKey(entry.value));
    dropUrl(entry.url);
    entries.value = entries.value.filter((e) => e.id !== entry.id);
    if (formMode.value) {
        const files = entries.value.map((e) => e.file).filter(Boolean) as File[];
        props.form![props.field!] = props.multiple ? files : (files[0] ?? null);
    } else {
        emitModel();
    }
    emit('removed', entry.value ?? entry.file);
};

/* --- Dropzone ---------------------------------------------------------------- */

// Reactive options: vue3-dropzone copies a plain object once, so `disabled` would never update.
const { getRootProps, getInputProps, isDragActive } = useDropzone(
    reactive({
        onDrop,
        multiple: toRef(props, 'multiple'),
        accept: toRef(props, 'accept'),
        disabled: toRef(props, 'disabled'),
    }),
);

const formErrors = computed(() => (formMode.value ? props.form!.errors?.[props.field!] : undefined));
const errorMessage = computed(() => formErrors.value ?? errors.value);

// What the zone says once something is picked: the form value (as before) or the list summary.
const pickedText = computed(() => {
    if (formMode.value) return props.form![props.field!] ? props.form![props.field!]?.path ?? 'File prepared' : '';
    if (showList.value) return '';
    const count = entries.value.length;
    return count ? (count === 1 ? entries.value[0].name : `${count} files`) : '';
});
</script>
<template>
    <div v-bind="attrs()" :class="cls('root', 'flex w-full flex-col')">
        <div
            :class="
                cls(
                    'zone',
                    'border-primary-200 bg-primary-50 hover:border-primary-600 hover:text-primary-700 dark:border-primary-800 dark:bg-primary-950/40 dark:text-gray-200 dark:hover:border-primary-500 dark:hover:text-primary-300 w-full rounded-lg border-2 border-dashed text-gray-700 transition duration-100 ease-in-out',
                    stateLayer({
                        'border-primary-400 bg-primary-100 dark:border-primary-500 dark:bg-primary-900/50': isDragActive,
                        'bg-primary-100 border-red-600 dark:bg-red-950/40': errorMessage,
                        'pointer-events-none opacity-60': disabled,
                    })
                )
            "
        >
            <div :class="cls('content', 'flex h-20 w-full cursor-copy flex-col items-center justify-center p-4 font-medium')" v-bind="getRootProps()">
                <p v-if="label" :class="cls('label', 'text-gray-900 select-none dark:text-gray-100')">{{ label }}</p>
                <input v-bind="getInputProps()" :name="field" />
                <span v-if="isDragActive" class="select-none">Drop the {{ what }} here ...</span>
                <span v-else-if="pickedText">{{ pickedText }}</span>
                <span v-else class="select-none">Drag 'n' drop {{ what }} here</span>
            </div>
        </div>

        <NbTransitionGroup v-if="showList" tag="ul" preset="slide-up" :motion="level" :class="cls('list', entries.length ? 'mt-3 space-y-2' : '')">
            <li
                v-for="entry in entries"
                :key="entry.id"
                :class="
                    cls(
                        'file',
                        'flex items-center gap-3 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800',
                        stateLayer(entry.status === 'failed' || entry.error ? 'border-red-300 dark:border-red-800' : ''),
                    )
                "
            >
                <img v-if="entry.url" :src="entry.url" alt="" :class="cls('thumb', 'h-10 w-10 shrink-0 rounded object-cover')" />
                <span v-else :class="cls('thumb', 'flex h-10 w-10 shrink-0 items-center justify-center rounded bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500')" aria-hidden="true">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M5 2.75h6.5L15.25 6.5v10.75a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75V3.5a.75.75 0 0 1 .75-.75Z" />
                        <path d="M11.5 2.75V6.5h3.75" />
                    </svg>
                </span>
                <div :class="cls('name', 'min-w-0 flex-1')">
                    <p class="truncate font-medium text-gray-800 dark:text-gray-100">{{ entry.name }}</p>
                    <Progress v-if="entry.status === 'uploading'" :value="entry.progress" size="sm" :class="cls('progress', 'mt-1.5')" :aria-label="`Uploading ${entry.name}`" />
                    <p v-else-if="entry.status === 'failed' || entry.error" class="text-xs text-red-600 dark:text-red-400">{{ entry.error }}</p>
                    <p v-else-if="entry.size !== undefined" class="text-xs text-gray-500 dark:text-gray-400">{{ sizeText(entry.size) }}</p>
                </div>
                <button
                    v-if="entry.status === 'failed'"
                    type="button"
                    class="focusable rounded-md px-2 py-1 text-xs font-semibold text-primary-700 hover:bg-primary-50 focus:ring-2 focus:ring-primary-500 focus:outline-hidden dark:text-primary-300 dark:hover:bg-primary-950/50"
                    @click="startUpload(entry)"
                >
                    Retry
                </button>
                <IconButton
                    icon="$close"
                    :label="`Remove ${entry.name}`"
                    theme="ghost-danger"
                    size="sm"
                    :disabled="entry.removing || entry.status === 'uploading' || disabled"
                    :class="cls('remove')"
                    @click="removeEntry(entry)"
                />
            </li>
        </NbTransitionGroup>

        <InputError :class="cls('error')" :ui="{ root: baseLayer('mt-2') }" :message="errorMessage" />
    </div>
</template>
