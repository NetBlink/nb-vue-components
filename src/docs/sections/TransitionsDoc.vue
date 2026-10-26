<script setup lang="ts">
import { ref } from 'vue';
import { NbTransition, NbTransitionGroup, IconButton, SecondaryButton, CodePreview, CollapsableSection, PropsTable } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const presets = ['fade', 'slide-up', 'slide-down', 'scale', 'collapse'] as const;
const shown = ref(true);
const saved = ref(false);
let savedTimer: ReturnType<typeof setTimeout> | undefined;
const save = () => {
    saved.value = true;
    clearTimeout(savedTimer);
    savedTimer = setTimeout(() => (saved.value = false), 1500);
};

let nextId = 4;
const items = ref([
    { id: 1, label: 'Design review' },
    { id: 2, label: 'Write release notes' },
    { id: 3, label: 'Update pricing page' },
]);
const add = () => items.value.unshift({ id: nextId++, label: `New task ${nextId - 1}` });
const shuffle = () => (items.value = [...items.value].sort(() => Math.random() - 0.5));
const drop = (id: number) => (items.value = items.value.filter((item) => item.id !== id));

const code = [
    '<!-- "Saved." flash -->',
    '<NbTransition><span v-if="form.recentlySuccessful">Saved.</span></NbTransition>',
    '',
    '<!-- Page transition in a layout -->',
    '<NbTransition preset="fade" mode="out-in" appear>',
    '    <div :key="$page.url"><slot /></div>',
    '</NbTransition>',
    '',
    '<!-- Expand and collapse by height -->',
    '<NbTransition preset="collapse"><div v-if="open">...</div></NbTransition>',
    '',
    '<!-- Lists: items animate in and out, the rest glide into place -->',
    '<NbTransitionGroup tag="ul" preset="slide-up">',
    '    <li v-for="task in tasks" :key="task.id">{{ task.label }}</li>',
    '</NbTransitionGroup>',
];

const props = [
    { prop: 'preset', type: "'fade' | 'slide-up' | 'slide-down' | 'scale' | 'collapse'", default: "'fade'", description: 'Animation (collapse is NbTransition only)' },
    { prop: 'mode', type: "'in-out' | 'out-in'", default: '-', description: 'NbTransition: out-in for swapping content such as pages' },
    { prop: 'appear', type: 'boolean', default: 'false', description: 'Animate on first render too' },
    { prop: 'tag', type: 'string', default: "'div'", description: 'NbTransitionGroup: the element wrapping the list' },
    { prop: 'motion', type: "'off' | 'simple' | 'smooth' | 'fancy'", default: '-', description: 'Motion level for this instance' },
];
</script>

<template>
    <section id="transitions">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Transitions</h2>
        <DocDemoCard class="mt-4">
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">NbTransition</code> and
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">NbTransitionGroup</code> wrap Vue's own components with presets that
                follow the motion levels and theme tokens, so app code stops copying
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">.fade-enter-active</code> CSS. Try them at each level with the motion
                switcher.
            </p>

            <div class="mb-3 flex flex-wrap items-center gap-3">
                <SecondaryButton size="sm" @click="shown = !shown">{{ shown ? 'Hide' : 'Show' }}</SecondaryButton>
                <SecondaryButton size="sm" @click="save">Save</SecondaryButton>
                <NbTransition><span v-if="saved" class="text-sm text-gray-600 dark:text-gray-400">Saved.</span></NbTransition>
            </div>
            <div class="mb-8 grid gap-3 sm:grid-cols-5">
                <div v-for="preset in presets" :key="preset" class="min-h-24 rounded-md border border-dashed border-gray-300 p-2 dark:border-gray-600">
                    <div class="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">{{ preset }}</div>
                    <NbTransition :preset="preset">
                        <div v-if="shown" class="rounded bg-primary-100 p-3 text-sm text-primary-800 dark:bg-primary-900/40 dark:text-primary-200">Hello</div>
                    </NbTransition>
                </div>
            </div>

            <div class="mb-3 flex gap-2">
                <SecondaryButton size="sm" @click="add">Add</SecondaryButton>
                <SecondaryButton size="sm" @click="shuffle">Shuffle</SecondaryButton>
            </div>
            <NbTransitionGroup tag="ul" preset="slide-up" class="relative mb-6 max-w-sm space-y-2">
                <li
                    v-for="item in items"
                    :key="item.id"
                    class="flex w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800"
                >
                    {{ item.label }}
                    <IconButton icon="$close" :label="`Remove ${item.label}`" theme="ghost-danger" size="xs" @click="drop(item.id)" />
                </li>
            </NbTransitionGroup>

            <CodePreview :code="code" />
            <CollapsableSection header="NbTransition / NbTransitionGroup Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
