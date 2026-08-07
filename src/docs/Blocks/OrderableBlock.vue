<script setup lang="ts">
import { ref, computed, type Ref } from 'vue';
import { Button, Input, CodePreview } from '../../index';
import { NbIcon } from '../../icons';
import { faGripVertical, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// ponytail: one tiny factory instead of a drag library - HTML5 DnD is native.
function useReorder<T>(list: Ref<T[]>) {
    const dragIndex = ref<number | null>(null);
    const overIndex = ref<number | null>(null);

    function move(from: number, to: number) {
        if (to < 0 || to >= list.value.length || from === to) return;
        const items = list.value.slice();
        const [item] = items.splice(from, 1);
        items.splice(to, 0, item);
        list.value = items;
    }

    function reset() {
        dragIndex.value = null;
        overIndex.value = null;
    }

    return {
        dragIndex,
        overIndex,
        move,
        reset,
        onDragStart: (i: number) => (dragIndex.value = i),
        // dragover must preventDefault or the browser never fires drop
        onDragOver: (i: number) => (overIndex.value = i),
        onDrop: (i: number) => {
            if (dragIndex.value !== null) move(dragIndex.value, i);
            reset();
        },
    };
}

// --- Demo 1: reorderable list -------------------------------------------------
const widgets = ref([
    { id: 'revenue', label: 'Revenue overview' },
    { id: 'signups', label: 'New signups' },
    { id: 'tickets', label: 'Open support tickets' },
    { id: 'uptime', label: 'Service uptime' },
]);
const {
    dragIndex: listDragIndex,
    overIndex: listOverIndex,
    move: listMove,
    reset: listReset,
    onDragStart: listDragStart,
    onDragOver: listDragOver,
    onDrop: listDrop,
} = useReorder(widgets);
const widgetOrder = computed(() => widgets.value.map((w) => w.id).join(', '));

const listSnippet = [
    '<ul class="divide-y divide-gray-200 overflow-hidden rounded-md border border-gray-200 dark:divide-gray-700 dark:border-gray-700">',
    '    <li',
    '        v-for="(item, i) in items"',
    '        :key="item.id"',
    '        draggable="true"',
    '        @dragstart="dragIndex = i"',
    '        @dragover.prevent="overIndex = i"',
    '        @drop.prevent="drop(i)"',
    '        @dragend="reset()"',
    '        class="relative flex items-center gap-3 bg-white px-3 py-2 dark:bg-gray-800"',
    '        :class="[dragIndex === i ? \'opacity-40\' : \'\', overIndex === i && dragIndex !== i ? \'before:bg-primary-500 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:content-[\\\'\\\']\' : \'\']"',
    '    >',
    '        <NbIcon :name="faGripVertical" class="h-4 w-4 shrink-0 cursor-grab text-gray-400" />',
    '        <span class="flex-1 text-sm text-gray-800 dark:text-gray-100">{{ item.label }}</span>',
    '',
    '        <!-- keyboard / a11y fallback -->',
    '        <Button theme="secondary" size="xs" :disabled="i === 0" aria-label="Move up" @click="move(i, i - 1)">',
    '            <NbIcon :name="faArrowUp" class="h-3 w-3" />',
    '        </Button>',
    '        <Button theme="secondary" size="xs" :disabled="i === items.length - 1" aria-label="Move down" @click="move(i, i + 1)">',
    '            <NbIcon :name="faArrowDown" class="h-3 w-3" />',
    '        </Button>',
    '    </li>',
    '</ul>',
    '',
    '// setup:',
    'function move(from, to) {',
    '    if (to < 0 || to >= items.value.length || from === to) return;',
    '    const next = items.value.slice();',
    '    next.splice(to, 0, next.splice(from, 1)[0]);',
    '    items.value = next;',
    '}',
    'function drop(i) {',
    '    if (dragIndex.value !== null) move(dragIndex.value, i);',
    '    reset(); // dragIndex = overIndex = null',
    '}',
];

// --- Demo 2: form field builder ----------------------------------------------
const fields = ref([
    { key: 'name', label: 'Full name', type: 'text', placeholder: 'Ada Lovelace' },
    { key: 'email', label: 'Email', type: 'email', placeholder: 'ada@example.com' },
    { key: 'company', label: 'Company', type: 'text', placeholder: 'Analytical Engines Ltd' },
    { key: 'phone', label: 'Phone', type: 'tel', placeholder: '+31 6 1234 5678' },
]);
const {
    dragIndex: formDragIndex,
    overIndex: formOverIndex,
    move: formMove,
    reset: formReset,
    onDragStart: formDragStart,
    onDragOver: formDragOver,
    onDrop: formDrop,
} = useReorder(fields);
const checkout = ref<Record<string, string>>({ name: '', email: '', company: '', phone: '' });

// Rows hold real inputs, so only the grip arms the drag - otherwise selecting
// text inside an input starts dragging the row instead.
const armed = ref<number | null>(null);
function endFormDrag() {
    armed.value = null;
    formReset();
}

const fieldOrder = computed(() => fields.value.map((f) => f.key));

const formSnippet = [
    '<form class="space-y-4" @submit.prevent="form.post(\'/checkout\')">',
    '    <div',
    '        v-for="(field, i) in fields"',
    '        :key="field.key"',
    '        :draggable="armed === i"',
    '        @dragstart="dragIndex = i"',
    '        @dragover.prevent="overIndex = i"',
    '        @drop.prevent="drop(i); armed = null"',
    '        @dragend="reset(); armed = null"',
    '        class="relative flex items-start gap-3 rounded-md border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800"',
    '        :class="[dragIndex === i ? \'opacity-40\' : \'\', overIndex === i && dragIndex !== i ? \'border-primary-500\' : \'\']"',
    '    >',
    '        <!-- rows contain inputs, so only the grip arms the drag -->',
    '        <span class="mt-8 cursor-grab" @mousedown="armed = i" @mouseup="armed = null">',
    '            <NbIcon :name="faGripVertical" class="h-4 w-4 text-gray-400" />',
    '        </span>',
    '',
    '        <div class="flex-1">',
    '            <Input v-model="form[field.key]" :field="field.key" :label="field.label" :type="field.type" :placeholder="field.placeholder" />',
    '        </div>',
    '',
    '        <div class="mt-7 flex gap-1">',
    '            <Button theme="secondary" size="xs" :disabled="i === 0" aria-label="Move up" @click="move(i, i - 1)">',
    '                <NbIcon :name="faArrowUp" class="h-3 w-3" />',
    '            </Button>',
    '            <Button theme="secondary" size="xs" :disabled="i === fields.length - 1" aria-label="Move down" @click="move(i, i + 1)">',
    '                <NbIcon :name="faArrowDown" class="h-3 w-3" />',
    '            </Button>',
    '        </div>',
    '    </div>',
    '</form>',
    '',
    '<!-- persist this, not the markup: -->',
    '<!-- fields.map(f => f.key) => [\'email\', \'name\', \'phone\', \'company\'] -->',
];
</script>

<template>
    <section id="block-orderable">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Orderable Fields</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A drag-to-reorder list built on native HTML5 drag events, no library. Each row carries a grip handle and up/down Buttons so the
                order is reachable by keyboard too. The dragged row dims, and the drop target shows a line where the item will land.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <ul class="divide-y divide-gray-200 overflow-hidden rounded-md border border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                    <li
                        v-for="(item, i) in widgets"
                        :key="item.id"
                        draggable="true"
                        class="relative flex items-center gap-3 bg-white px-3 py-2 dark:bg-gray-800"
                        :class="[
                            listDragIndex === i ? 'opacity-40' : '',
                            listOverIndex === i && listDragIndex !== i
                                ? 'before:bg-primary-500 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:content-[\'\']'
                                : '',
                        ]"
                        @dragstart="listDragStart(i)"
                        @dragover.prevent="listDragOver(i)"
                        @drop.prevent="listDrop(i)"
                        @dragend="listReset()"
                    >
                        <NbIcon :name="faGripVertical" class="h-4 w-4 shrink-0 cursor-grab text-gray-400 dark:text-gray-500" />
                        <span class="flex-1 text-sm text-gray-800 dark:text-gray-100">{{ item.label }}</span>

                        <Button theme="secondary" size="xs" :disabled="i === 0" aria-label="Move up" @click="listMove(i, i - 1)">
                            <NbIcon :name="faArrowUp" class="h-3 w-3" />
                        </Button>
                        <Button theme="secondary" size="xs" :disabled="i === widgets.length - 1" aria-label="Move down" @click="listMove(i, i + 1)">
                            <NbIcon :name="faArrowDown" class="h-3 w-3" />
                        </Button>
                    </li>
                </ul>

                <p class="mt-3 text-xs text-gray-600 dark:text-gray-400">
                    Current order:
                    <code class="rounded bg-gray-100 px-1 font-mono text-gray-800 dark:bg-gray-900/60 dark:text-gray-100">{{ widgetOrder }}</code>
                </p>
            </div>
            <CodePreview :code="listSnippet" filename="ReorderableList.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                The same mechanics applied to a configurable checkout form: dragging a row moves the real Input component with it, so what you
                reorder is the form itself. The array of field keys is the only thing you persist, the markup stays a plain v-for.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mx-auto w-full max-w-lg space-y-3">
                    <div
                        v-for="(field, i) in fields"
                        :key="field.key"
                        :draggable="armed === i"
                        class="flex items-start gap-3 rounded-md border bg-white p-3 dark:bg-gray-800"
                        :class="[
                            formDragIndex === i ? 'opacity-40' : '',
                            formOverIndex === i && formDragIndex !== i ? 'border-primary-500 dark:border-primary-400' : 'border-gray-200 dark:border-gray-700',
                        ]"
                        @dragstart="formDragStart(i)"
                        @dragover.prevent="formDragOver(i)"
                        @drop.prevent="
                            formDrop(i);
                            endFormDrag();
                        "
                        @dragend="endFormDrag()"
                    >
                        <span class="mt-8 shrink-0 cursor-grab" aria-hidden="true" @mousedown="armed = i" @mouseup="armed = null">
                            <NbIcon :name="faGripVertical" class="h-4 w-4 text-gray-400 dark:text-gray-500" />
                        </span>

                        <div class="min-w-0 flex-1">
                            <Input
                                v-model="checkout[field.key]"
                                :field="field.key"
                                :label="field.label"
                                :type="field.type"
                                :placeholder="field.placeholder"
                            />
                        </div>

                        <div class="mt-7 flex shrink-0 gap-1">
                            <Button theme="secondary" size="xs" :disabled="i === 0" aria-label="Move up" @click="formMove(i, i - 1)">
                                <NbIcon :name="faArrowUp" class="h-3 w-3" />
                            </Button>
                            <Button theme="secondary" size="xs" :disabled="i === fields.length - 1" aria-label="Move down" @click="formMove(i, i + 1)">
                                <NbIcon :name="faArrowDown" class="h-3 w-3" />
                            </Button>
                        </div>
                    </div>

                    <p class="text-xs text-gray-600 dark:text-gray-400">
                        Persisted order:
                        <code class="rounded bg-gray-100 px-1 font-mono text-gray-800 dark:bg-gray-900/60 dark:text-gray-100">{{ JSON.stringify(fieldOrder) }}</code>
                    </p>
                </div>
            </div>
            <CodePreview :code="formSnippet" filename="OrderableFormFields.vue" />
        </DocDemoCard>
    </section>
</template>
