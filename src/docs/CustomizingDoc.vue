<script setup lang="ts">
import { computed } from 'vue';
import { CodePreview, Input, PrimaryButton, InlineCode } from '../index';
import DocDemoCard from './HelperComponents/DocDemoCard.vue';
import DocCallout from './HelperComponents/DocCallout.vue';
import renameMap from '../../scripts/v4-rename-map.json';



const instanceSnippet = [
    '<!-- class merges into the root part, :ui styles named parts -->',
    '<Input',
    '    field="email"',
    '    class="mb-8"',
    "    :ui=\"{ label: 'text-xs uppercase tracking-wide', input: 'bg-primary-50 dark:bg-primary-950' }\"",
    '/>',
    '',
    '<!-- A clashing class wins: rounded-full replaces rounded-md, no ! needed -->',
    '<PrimaryButton class="rounded-full">Save</PrimaryButton>',
];

const configSnippet = [
    "import Componentsnb from '@netblink/vue-components';",
    '',
    'app.use(Componentsnb, {',
    '    // House styles per component and part',
    '    ui: {',
    "        Input: { input: 'border-gray-300 shadow-sm' },",
    "        SubmitButton: { root: 'rounded-full' },",
    '    },',
    '    // New or redefined values for props that pick from a class map',
    '    variants: {',
    '        Button: {',
    "            theme: { brand: 'bg-violet-600 text-white hover:bg-violet-700' },",
    "            size: { xs: 'px-2 py-0.5 text-xs' },",
    '        },',
    "        Alert: { type: { neutral: { root: 'border-gray-200 bg-gray-50 text-gray-800', icon: 'text-gray-500' } } },",
    '    },',
    '    // Motion level and per-component overrides (see below)',
    "    motion: { level: 'smooth' },",
    '});',
];

const augmentSnippet = [
    '// types/nb-vue-components.d.ts',
    "import '@netblink/vue-components';",
    '',
    "declare module '@netblink/vue-components' {",
    '    interface ButtonThemes {',
    '        brand: true;',
    '    }',
    '}',
    '',
    '// <Button theme="brand"> and <SubmitButton theme="brand"> now type-check.',
];

const variantTable = [
    ['Button', 'theme, size', 'root'],
    ['LinkButton', 'theme', 'root'],
    ['Alert', 'type', 'root, icon, dismiss'],
    ['DataTile', 'theme', 'icon, valueText, underline, selected (the ring while selected)'],
    ['Spinner', 'size', 'root'],
    ['Tr', 'variant', 'root'],
    ['Section', 'variant', 'root'],
    ['Tabs', 'variant', 'list, trigger, indicator'],
    ['Toast', 'type', 'icon'],
];

const mergeSnippet = [
    '/* app.css: your own token */',
    '@theme {',
    '    --text-tiny: 0.6rem;',
    '}',
    '',
    '// app.js: teach the class merger about it',
    'app.use(Componentsnb, {',
    '    twMerge: {',
    "        extend: { theme: { text: ['tiny'] } },",
    '    },',
    '});',
];

const wrapperSnippet = [
    '<!-- AppInput.vue: adds a hint below every field, keeps the whole Input API -->',
    '<script setup lang="ts">',
    "import { computed } from 'vue';",
    "import { Input, type InputProps } from '@netblink/vue-components';",
    '',
    'defineOptions({ inheritAttrs: false });',
    '',
    'interface AppInputProps extends InputProps {',
    '    hint?: string;',
    '}',
    '',
    'const props = defineProps<AppInputProps>();',
    '',
    '// Everything but the wrapper\'s own prop goes to Input. v-model travels in $attrs.',
    'const inputProps = computed(() => {',
    '    const { hint, ...rest } = props;',
    '    return rest;',
    '});',
    '</' + 'script>',
    '',
    '<template>',
    '    <div>',
    '        <Input v-bind="{ ...$attrs, ...inputProps }">',
    '            <template v-for="(_, name) in $slots" #[name]="slotProps">',
    '                <slot :name="name" v-bind="slotProps ?? {}" />',
    '            </template>',
    '        </Input>',
    '        <p v-if="hint" class="-mt-3 mb-4 text-xs text-gray-500">{{ hint }}</p>',
    '    </div>',
    '</template>',
];

const renames = computed(() => renameMap.renames);
const replacementText = (r: { replacement: string | null; part: string | null }) =>
    r.replacement === null ? 'remove it' : r.replacement === 'class' ? 'class' : `:ui="{ ${r.part}: '...' }"`;

const badgeSnippet = [
    'app.use(Componentsnb, {',
    '    badge: {',
    "        statuses: { shipped: 'success', on_hold: 'warning', refunded: 'info' },",
    '    },',
    '});',
    '',
    '<Badge :status="order.status" />  <!-- "On hold", yellow -->',
];
</script>


<template>
    <div class="space-y-10">
        <header>
            <p class="text-gray-600 dark:text-gray-400">
                Style any component with <InlineCode>class</InlineCode> (its root) and <InlineCode>:ui</InlineCode> (its named parts), or set house styles once in
                the plugin options. Animation lives on the <strong>Motion</strong> page.
            </p>
        </header>

        <section id="precedence" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Which class wins</h2>
            <p class="text-gray-600 dark:text-gray-400">
                Library default, then your app config, then the instance. A later class replaces the clashing one before it
                (<InlineCode>bg-red-500</InlineCode> replaces the default background) and everything else stays. App config for
                <InlineCode>ui.Button</InlineCode> also reaches the buttons inside PrimaryButton and SubmitButton.
            </p>
        </section>

        <section id="class-and-ui" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">class and :ui</h2>
            <DocDemoCard>
                <div class="grid max-w-xl gap-2">
                    <Input field="email" placeholder="you@example.com" :ui="{ label: 'text-xs uppercase tracking-wide', input: 'bg-primary-50 dark:bg-primary-950' }" />
                    <div class="flex gap-3">
                        <PrimaryButton type="button">Default</PrimaryButton>
                        <PrimaryButton type="button" class="rounded-full">rounded-full</PrimaryButton>
                    </div>
                </div>
                <CodePreview :code="instanceSnippet" />
            </DocDemoCard>
            <p class="text-gray-600 dark:text-gray-400">Part names are typed, so a typo is a type error. Each component page ends with its Parts table.</p>
        </section>

        <section id="app-config" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">App config: ui and variants</h2>
            <CodePreview :code="configSnippet" filename="app.js" language="js" />
            <p class="text-gray-600 dark:text-gray-400">
                <InlineCode>variants</InlineCode> adds or redefines values of props like Button <InlineCode>theme</InlineCode>. These props accept them:
            </p>
            <div class="overflow-x-auto">
                <table class="min-w-full text-left text-sm">
                    <thead class="text-xs tracking-wider text-gray-500 uppercase dark:text-gray-400">
                        <tr>
                            <th class="py-2 pr-6 font-medium">Component</th>
                            <th class="py-2 pr-6 font-medium">Props</th>
                            <th class="py-2 font-medium">Parts a value can style</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                        <tr v-for="row in variantTable" :key="row[0]">
                            <td class="py-2 pr-6 font-mono text-gray-900 dark:text-gray-100">{{ row[0] }}</td>
                            <td class="py-2 pr-6 font-mono text-gray-700 dark:text-gray-300">{{ row[1] }}</td>
                            <td class="py-2 text-gray-600 dark:text-gray-300">{{ row[2] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="text-gray-600 dark:text-gray-400">To have TypeScript accept your new values, extend the matching interface:</p>
            <CodePreview :code="augmentSnippet" filename="types/nb-vue-components.d.ts" language="ts" />
            <p class="text-gray-600 dark:text-gray-400"><InlineCode>badge.statuses</InlineCode> maps your own status words to Badge colours:</p>
            <CodePreview :code="badgeSnippet" filename="app.js" />
        </section>

        <section id="your-own-tokens" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Your own Tailwind tokens</h2>
            <p class="text-gray-600 dark:text-gray-400">
                If your app adds tokens in its own <InlineCode>@theme</InlineCode>, register them with <InlineCode>twMerge</InlineCode> so they merge correctly.
            </p>
            <DocCallout tone="warning">
                Without it, a custom size like <InlineCode>text-tiny</InlineCode> is read as a colour and removes the button's <InlineCode>text-white</InlineCode>.
            </DocCallout>
            <CodePreview :code="mergeSnippet" filename="app.css / app.js" language="js" />
        </section>

        <section id="wrapping-components" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Wrapping a component</h2>
            <p class="text-gray-600 dark:text-gray-400">
                Only wrap a component to change behaviour; styles belong in <InlineCode>ui</InlineCode>. Extend its exported props type and pass attrs, props and
                slots through:
            </p>
            <CodePreview :code="wrapperSnippet" filename="AppInput.vue" />
        </section>

        <section id="migrating-from-3x" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Migrating from 3.x override props</h2>
            <p class="text-gray-600 dark:text-gray-400">The old props still work, warn once in development, and go in 5.0. The upgrade CLI rewrites them for you.</p>
            <div class="overflow-x-auto">
                <table class="min-w-full text-left text-sm">
                    <thead class="text-xs tracking-wider text-gray-500 uppercase dark:text-gray-400">
                        <tr>
                            <th class="py-2 pr-6 font-medium">Component</th>
                            <th class="py-2 pr-6 font-medium">3.x prop</th>
                            <th class="py-2 pr-6 font-medium">4.0</th>
                            <th class="py-2 font-medium">Note</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                        <tr v-for="r in renames" :key="r.component + r.prop">
                            <td class="py-2 pr-6 font-mono text-gray-900 dark:text-gray-100">{{ r.component }}</td>
                            <td class="py-2 pr-6 font-mono text-gray-700 dark:text-gray-300">{{ r.prop }}</td>
                            <td class="py-2 pr-6 font-mono whitespace-nowrap text-gray-700 dark:text-gray-300">{{ replacementText(r) }}</td>
                            <td class="py-2 text-gray-600 dark:text-gray-400">{{ r.note ?? '' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 id="class-target-changes" class="text-lg font-semibold text-gray-900 dark:text-gray-100">Where class now lands</h3>
            <ul class="list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
                <li v-for="c in renameMap.classTargetChanges" :key="c.component">
                    <span class="font-mono text-gray-900 dark:text-gray-100">{{ c.component }}</span>: {{ c.change }}
                </li>
            </ul>
        </section>
    </div>
</template>
