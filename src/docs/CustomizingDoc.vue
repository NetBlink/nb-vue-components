<script setup lang="ts">
import { computed } from 'vue';
import { CodePreview, Input, PrimaryButton, NewModal, SecondaryButton } from '../index';
import { useMotion, MOTION_LEVELS } from '../ui/motion';
import DocDemoCard from './HelperComponents/DocDemoCard.vue';
import DocCallout from './HelperComponents/DocCallout.vue';
import TransitionsDoc from './sections/TransitionsDoc.vue';
import renameMap from '../../scripts/v4-rename-map.json';

const { level, userLevel, setLevel, reset } = useMotion();

const code = 'rounded bg-gray-100 px-1 dark:bg-gray-900/60';

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

const motionSnippet = [
    'app.use(Componentsnb, {',
    '    motion: {',
    "        level: 'smooth',",
    '        components: {',
    "            Toaster: { level: 'fancy' },",
    "            Table: { level: 'simple' },",
    "            NewModal: { smooth: { content: { enter: 'animate-zoom-in', leave: 'animate-fade-out' } } },",
    '        },',
    '        // Default true: cap at simple when the OS asks for reduced motion',
    '        respectReducedMotion: true,',
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
    "setLevel('simple'); // persists across reloads, and no component animates above it",
    'reset(); // back to the app default',
];

const levelRows = [
    ['off', 'Instant. Nothing animates, and hover and focus colour changes are instant too.'],
    ['simple', 'Only motion that explains a change: height for collapsing content, short fades for things that appear or disappear. Quick durations, no slides or scaling.'],
    ['smooth', 'The default. Enter and leave transitions everywhere, the sliding tab indicator, size changes (collapse, a modal whose content grows, a field error appearing, a button turning into its spinner).'],
    ['fancy', 'Everything in smooth with springier, longer movement, plus NewModal growing out of the element that opened it and lists reflowing (toast stack, table rows, filtered options).'],
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
        <header class="space-y-3">
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                Every component takes the same two styling inputs: <code :class="code">class</code> for its root element and <code :class="code">:ui</code> for its named
                parts. App-wide house styles, extra variants and the motion level live in the plugin options, so a wrapper component is only needed when you change
                behaviour.
            </p>
        </header>

        <section id="precedence" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Precedence</h2>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                Three layers, lowest first: the library default, the app config (<code :class="code">ui</code> plugin option), then the instance
                (<code :class="code">class</code> and <code :class="code">:ui</code>). Each layer is merged with
                <a class="text-primary-600 dark:text-primary-300 underline" href="https://github.com/dcastil/tailwind-merge">tailwind-merge</a>: a class in a later layer
                removes the clashing classes of earlier layers, and classes that don't clash stay. With no config and no overrides the components render exactly the
                classes they always have.
            </p>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                Config for a component applies wherever it renders, including inside other library components: <code :class="code">ui.Button</code> styles the
                button inside PrimaryButton and SubmitButton too, and <code :class="code">ui.SubmitButton</code> layers on top for submit buttons only.
                <code :class="code">&lt;Input type="switch"&gt;</code> picks up <code :class="code">ui.Switch</code>. A component's own <code :class="code">ui</code>
                only lists its own parts.
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
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                <code :class="code">:ui</code> is typed per component, so an unknown part name is a type error. Every component page ends with a Parts table listing the
                part names and which part receives <code :class="code">class</code>. For a few overlays <code :class="code">class</code> goes to the panel rather than
                an outer element, as it did in 3.x (Dropdown, LinkDropdownButton, NewModal, Modal and Tooltip content, the Collapse button, the DropdownLink link).
            </p>
        </section>

        <section id="app-config" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">App config: ui and variants</h2>
            <CodePreview :code="configSnippet" filename="app.js" language="js" />
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                <code :class="code">variants</code> adds new values, or redefines existing ones, for props that pick from a fixed class map. A string value styles the
                part listed below; an object value styles several parts. Values you add are valid prop values; to make TypeScript accept them, widen the type with
                module augmentation.
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
            <CodePreview :code="augmentSnippet" filename="types/nb-vue-components.d.ts" language="ts" />
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                The interfaces to augment are <code :class="code">ButtonThemes</code>, <code :class="code">ButtonSizes</code>, <code :class="code">AlertTypes</code>,
                <code :class="code">DataTileThemes</code>, <code :class="code">SpinnerSizes</code>, <code :class="code">TrVariants</code>,
                <code :class="code">SectionVariants</code>, <code :class="code">TabsVariants</code> and <code :class="code">NbColorVariants</code>
                (Badge, IconCircle, Progress).
            </p>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                The <code :class="code">badge</code> option sets which colour a status word gets when a Badge is given
                <code :class="code">status</code>. Your words are added to the built-in ones and win over them.
            </p>
            <CodePreview :code="badgeSnippet" filename="app.js" />
        </section>

        <section id="your-own-tokens" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Your own Tailwind tokens</h2>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                tailwind-merge can only resolve conflicts between classes it understands. The library teaches it about its own tokens (the colour scales, the
                <code :class="code">xxs</code>/<code :class="code">xs</code>/<code :class="code">laptop</code>/<code :class="code">3xl</code> breakpoints,
                <code :class="code">text-xxs</code>, <code :class="code">gutters</code>, <code :class="code">no-spinners</code>, <code :class="code">bg-dotted</code>
                and the <code :class="code">animate-*</code> tokens). If your app adds tokens in its own <code :class="code">@theme</code>, pass them through the
                <code :class="code">twMerge</code> option.
            </p>
            <DocCallout tone="warning">
                Without it, a custom font size such as <code :class="code">text-tiny</code> is read as a text colour, and passing it to a button silently removes the
                button's <code :class="code">text-white</code>.
            </DocCallout>
            <CodePreview :code="mergeSnippet" filename="app.css / app.js" language="js" />
        </section>

        <section id="wrapping-components" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Wrapping a component</h2>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                Pure styling wrappers are no longer needed: put house styles in <code :class="code">ui</code>. When a wrapper changes behaviour, extend the exported
                props type instead of re-declaring props, turn off attribute inheritance, and pass <code :class="code">$attrs</code>, the props and every slot through.
                New props on the library component then reach the wrapper without edits. Every component exports its props type
                (<code :class="code">InputProps</code>, <code :class="code">ButtonProps</code>, <code :class="code">NewModalProps</code>, ...) and, where it emits,
                its emits type.
            </p>
            <CodePreview :code="wrapperSnippet" filename="AppInput.vue" />
        </section>

        <section id="motion" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Motion levels</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full text-left text-sm">
                    <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                        <tr v-for="row in levelRows" :key="row[0]">
                            <td class="py-2 pr-6 align-top font-mono text-gray-900 dark:text-gray-100">{{ row[0] }}</td>
                            <td class="py-2 text-gray-600 dark:text-gray-300">{{ row[1] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <DocDemoCard>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    Current level: <strong class="font-mono">{{ level }}</strong>
                    <span v-if="userLevel">(your pick)</span>
                    <span v-else>(app default)</span>. The switcher in the sidebar does the same.
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
            <CodePreview :code="motionSnippet" filename="app.js" language="js" />
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                <code :class="code">components.X.&lt;level&gt;.&lt;part&gt;</code> replaces the animation classes one part uses for <code :class="code">enter</code>,
                <code :class="code">leave</code> or <code :class="code">move</code> at that level. Animation classes replace rather than merge. Where the library picks
                classes by direction (Dropdown and Tooltip by side, Toaster by position), an override applies to every direction.
            </p>
            <h3 id="resolving-the-level" class="text-lg font-semibold text-gray-900 dark:text-gray-100">How a component's level is resolved</h3>
            <ol class="max-w-3xl list-decimal space-y-1 pl-6 text-gray-600 dark:text-gray-400">
                <li>Start from the app's <code :class="code">motion.level</code> (default <code :class="code">smooth</code>).</li>
                <li>If the end user picked a level with <code :class="code">useMotion().setLevel</code>, it replaces the app level.</li>
                <li>A component pin, then the instance <code :class="code">motion</code> prop, override that.</li>
                <li>The user's pick is also a ceiling: nothing animates above it, even a component pinned to fancy. Pins and instance props can go lower.</li>
                <li>
                    If the OS reports <code :class="code">prefers-reduced-motion: reduce</code>, the result is capped at simple, unless the user picked a level in the app or
                    the app set <code :class="code">respectReducedMotion: false</code>.
                </li>
            </ol>
            <CodePreview :code="useMotionSnippet" filename="Settings.vue" language="ts" />
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                Status indicators are exempt and keep moving at every level: Spinner (including inside SubmitButton) and the table loading skeleton. Each component page
                lists what that component does at each level.
            </p>
        </section>

        <TransitionsDoc />

        <section id="migrating-from-3x" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Migrating from 3.x override props</h2>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                The 3.x override props still work in 4.x and warn once each in development. They are removed in 5.0. 3.x appended them next to the defaults, so a
                clashing default could still win; 4.0 merges them, so <code :class="code">!</code> markers added only to beat a default can go.
            </p>
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
            <ul class="max-w-3xl list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
                <li v-for="c in renameMap.classTargetChanges" :key="c.component">
                    <span class="font-mono text-gray-900 dark:text-gray-100">{{ c.component }}</span>: {{ c.change }}
                </li>
            </ul>
        </section>
    </div>
</template>
