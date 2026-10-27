<script setup lang="ts">
import { CodePreview, PrimaryButton, NewModal, SecondaryButton, InlineCode } from '../index';
import { useMotion, MOTION_LEVELS } from '../ui/motion';
import DocDemoCard from './HelperComponents/DocDemoCard.vue';
import TransitionsDoc from './sections/TransitionsDoc.vue';

const { level, userLevel, setLevel, reset } = useMotion();

const levelRows = [
    ['off', 'Nothing moves. Hover and focus colours change instantly too.'],
    ['simple', 'Only motion that explains a change: quick fades, and height for content that opens or closes.'],
    ['smooth', 'The default. Things slide and fade in and out, tab and switch indicators glide, panels resize smoothly.'],
    ['fancy', 'Smooth on springs, plus extras: dialogs grow from their button, lists reflow, checks pop.'],
];

const configSnippet = [
    'app.use(Componentsnb, {',
    '    motion: {',
    "        level: 'smooth',",
    '        components: {',
    "            Toaster: { level: 'fancy' },",
    "            Table: { level: 'simple' },",
    "            NewModal: { smooth: { content: { enter: 'animate-zoom-in', leave: 'animate-fade-out' } } },",
    '        },',
    '        respectReducedMotion: true, // the default',
    '    },',
    '});',
    '',
    '<!-- One instance -->',
    '<NewModal motion="off" v-model:open="open" />',
];

const useMotionSnippet = [
    "import { useMotion } from '@netblink/vue-components';",
    '',
    'const { level, setLevel, reset } = useMotion();',
    "setLevel('simple'); // remembered across reloads",
    'reset(); // back to the app default',
];
</script>

<template>
    <div class="space-y-10">
        <header>
            <p class="text-gray-600 dark:text-gray-400">
                Every animated component follows one motion level. Pick it for the whole app, let users change it, or pin it per component. Try the switcher in the
                sidebar: this page and the docs around it follow it too.
            </p>
        </header>

        <section id="levels" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Levels</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full text-left text-sm">
                    <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                        <tr v-for="row in levelRows" :key="row[0]">
                            <td class="w-24 py-2 pr-6 align-top font-mono text-gray-900 dark:text-gray-100">{{ row[0] }}</td>
                            <td class="py-2 text-gray-600 dark:text-gray-300">{{ row[1] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="text-gray-600 dark:text-gray-400">
                Spinners, the indeterminate Progress bar and skeleton pulses keep moving at every level: they tell the user something is happening.
            </p>
        </section>

        <section id="choosing-a-level" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Letting users choose</h2>
            <DocDemoCard>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    Current level: <InlineCode>{{ level }}</InlineCode> ({{ userLevel ? 'your pick' : 'app default' }})
                </p>
                <div class="flex flex-wrap items-center gap-2">
                    <SecondaryButton v-for="option in MOTION_LEVELS" :key="option" size="sm" @click="setLevel(option)">{{ option }}</SecondaryButton>
                    <SecondaryButton size="sm" @click="reset()">reset</SecondaryButton>
                    <NewModal title="Motion preview" description="Open and close this at each level.">
                        <template #trigger>
                            <PrimaryButton type="button" size="sm">Open a dialog</PrimaryButton>
                        </template>
                        <p class="text-sm text-gray-600 dark:text-gray-300">At fancy the dialog grows out of the button that opened it.</p>
                    </NewModal>
                </div>
            </DocDemoCard>
            <CodePreview :code="useMotionSnippet" filename="Settings.vue" language="ts" />
            <p class="text-gray-600 dark:text-gray-400">
                A user's pick wins over the app level and is also a ceiling: no component animates above it. When the OS asks for reduced motion, the app level is capped
                at <InlineCode>simple</InlineCode> until the user picks a level themselves.
            </p>
        </section>

        <section id="configuring-motion" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">App level and per-component pins</h2>
            <CodePreview :code="configSnippet" filename="app.js" language="js" />
            <p class="text-gray-600 dark:text-gray-400">
                <InlineCode>components.X.&lt;level&gt;.&lt;part&gt;</InlineCode> swaps the animation classes a part uses at that level. Each component page lists
                what it does at each level in its Motion table.
            </p>
        </section>

        <TransitionsDoc />
    </div>
</template>
