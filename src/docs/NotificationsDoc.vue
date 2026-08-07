<script setup lang="ts">
import { computed, ref } from 'vue';
import { CodePreview, CollapsableSection, PrimaryButton, SecondaryButton, PropsTable, Select, Input, Switch, Toaster, toast } from '../index';
import type { ToastAnimation, ToastOrder, ToastPosition } from '../index';
import DocDemoCard from './HelperComponents/DocDemoCard.vue';
import DocCallout from './HelperComponents/DocCallout.vue';
import DocConfig from './HelperComponents/DocConfig.vue';

/*
 * The docs mount their own Toaster here so the playground controls can rebind
 * its props live. A real app mounts one in the root layout and never touches it.
 */
const position = ref<ToastPosition>('bottom-right');
const order = ref<ToastOrder>('newest-first');
const animation = ref<ToastAnimation>('slide');
const duration = ref<number | string>(5000);
const max = ref<number | string>(4);
const stack = ref(false);

// Row-major, so a 3x2 grid lands each option in the corner it names.
const POSITIONS: ToastPosition[] = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];

const orderOptions = [
    { value: 'newest-first', label: 'newest-first - new items nearest the edge' },
    { value: 'oldest-first', label: 'oldest-first - new items furthest from it' },
];
const animationOptions = [
    { value: 'slide', label: 'slide - in from the anchored edge' },
    { value: 'fade', label: 'fade' },
    { value: 'scale', label: 'scale' },
];

// The number inputs hand back strings; the Toaster's props are numbers.
const durationMs = computed(() => Number(duration.value) || 0);
const maxVisible = computed(() => Number(max.value) || 1);

// ---- Demo triggers -------------------------------------------------------

let archived = 0;

const demoSnackbar = () => {
    archived += 1;
    const n = archived;
    toast.snackbar(`Message ${n} archived`, {
        action: { label: 'Undo', altText: `Undo archiving message ${n}`, onClick: () => toast.info(`Message ${n} restored`) },
    });
};

const demoAction = () =>
    toast.warning('Unsaved changes', {
        description: 'Leaving now will discard your edits.',
        duration: 0,
        action: { label: 'Save', onClick: () => toast.success('Saved') },
    });

// Re-using an id replaces the toast in place - the spinner becomes the result
// rather than stacking a second card next to it.
const demoProgress = () => {
    const id = toast.progress('Uploading report…', { description: 'report.pdf · 2.4 MB' });
    setTimeout(() => toast.success('Report uploaded', { id, description: 'report.pdf · 2.4 MB' }), 2200);
};

const demoClickable = () =>
    toast.info('3 new comments', {
        description: 'Click to open the thread.',
        onClick: () => toast.success('Opened the thread'),
    });

const demoBurst = () => {
    for (let i = 1; i <= 6; i += 1) setTimeout(() => toast.info(`Queued item ${i}`), i * 120);
};

const demoEvent = () =>
    window.dispatchEvent(
        new CustomEvent('nb:toast', {
            detail: { type: 'success', title: 'Raised via window event', description: 'No import needed at the call site.' },
        })
    );

// ---- Copy-paste config ---------------------------------------------------

const configBlocks = [
    {
        filename: 'resources/js/app.js',
        language: 'js',
        code: [
            "import { createApp, h } from 'vue';",
            "import Componentsnb from '@netblink/vue-components';",
            "import '@netblink/vue-components/dist/style.css';",
            '',
            'createApp(App).use(Componentsnb).mount(el);',
        ],
    },
    {
        filename: 'resources/js/Layouts/AppLayout.vue',
        code: [
            '<script setup>',
            "import { Toaster } from '@netblink/vue-components';",
            '<\/script>',
            '',
            '<template>',
            '    <slot />',
            '',
            '    <!-- Exactly ONE, anywhere in your root layout. Every prop below is',
            '         optional; these are the defaults. -->',
            '    <Toaster',
            '        position="bottom-right"',
            '        order="newest-first"',
            '        animation="slide"',
            '        :duration="5000"',
            '        :max="4"',
            '        width="24rem"',
            '        :stack="false"',
            '        :disable-swipe="false"',
            '        :disable-events="false"',
            '    />',
            '</template>',
        ],
    },
    {
        filename: 'anywhere.js',
        language: 'js',
        code: [
            '// A component, a Pinia action, an axios interceptor - anywhere at all.',
            '// No injection, no props, no reference to the Toaster.',
            "import { toast } from '@netblink/vue-components';",
            '',
            "toast.success('Profile saved');",
            "toast.error('Could not reach the server', { description: 'Retrying in 5s…' });",
            "toast.warning('Your session expires soon');",
            "toast.info('Three new comments');",
            "toast('Plain notification');",
            '',
            '// Snackbar: one inverted bar with a single action.',
            "toast.snackbar('Message archived', {",
            "    action: { label: 'Undo', onClick: () => restore() },",
            '});',
        ],
    },
];

// ---- Recipes -------------------------------------------------------------

const recipes = [
    '// Spinner while work runs, resolved in place when it finishes.',
    '// progress never auto-dismisses - it ends when you say it does.',
    "const id = toast.progress('Uploading report…');",
    'try {',
    '    await upload();',
    "    toast.success('Report uploaded', { id });",
    '} catch (e) {',
    "    toast.error('Upload failed', { id, description: e.message });",
    '}',
    '',
    '// Make the whole toast clickable. Dismisses once clicked.',
    "toast.info('3 new comments', {",
    "    onClick: () => router.visit('/threads/42'),",
    '});',
    '',
    '// Stays up until dismissed, with an action button.',
    "toast.warning('Unsaved changes', {",
    "    description: 'Leaving now will discard your edits.',",
    '    duration: 0,',
    "    action: { label: 'Save', onClick: save },",
    '});',
    '',
    '// Pass your own id to update that toast in place instead of stacking a copy.',
    "toast.info('Uploading report…', { id: 'upload', duration: 0 });",
    '// …when it finishes',
    "toast.success('Report uploaded', { id: 'upload' });",
    '',
    '// Drop the icon, or swap it for any icon the registry knows.',
    "toast.success('Done', { icon: false });",
    "toast.info('Deploying', { icon: 'fa:rocket' });",
    '',
    "toast.dismiss('upload'); // one, animated",
    'toast.dismiss(); // all of them, animated',
    'toast.clear(); // all of them, instantly - e.g. on route change',
];

const eventExample = [
    '<!-- For code that cannot import the library: a Blade view, an inline',
    '     script, a legacy bundle. The mounted Toaster listens on window. -->',
    '<script>',
    "    window.dispatchEvent(new CustomEvent('nb:toast', {",
    "        detail: { type: 'success', title: 'Saved' },",
    '    }));',
    '<\/script>',
    '',
    '// Or the typed shorthand, when you do have the import:',
    "import { emitToast } from '@netblink/vue-components';",
    "emitToast({ type: 'success', title: 'Saved' });",
];

// ---- API tables ----------------------------------------------------------

const toastApi = [
    { prop: 'toast(input, opts?)', type: 'string | ToastOptions', default: '-', description: 'Raise a notification. Returns its id.', highlight: true },
    { prop: 'toast.success / error / warning / info', type: 'same', default: '-', description: 'Shorthand that presets `type`' },
    {
        prop: 'toast.progress(input, opts?)',
        type: 'same',
        default: '-',
        description: 'Spinner instead of an icon, and never auto-dismisses. Resolve it by re-firing with the returned id.',
        highlight: true,
    },
    { prop: 'toast.snackbar(input, opts?)', type: 'same', default: '-', description: 'Shorthand that presets `variant: "snackbar"`' },
    { prop: 'toast.dismiss(id?)', type: 'string | number', default: '-', description: 'Animate one out, or all of them when `id` is omitted' },
    { prop: 'toast.clear()', type: '-', default: '-', description: 'Drop everything immediately, no exit animation' },
    { prop: 'toast.items', type: 'Ref<ToastItem[]>', default: '[]', description: 'The live queue, if you want to build your own viewport' },
    { prop: 'useToast()', type: '() => typeof toast', default: '-', description: 'Composable form of the same singleton' },
    { prop: 'emitToast(detail)', type: 'string | ToastOptions', default: '-', description: 'Typed shorthand for the `nb:toast` window event' },
];

const toastOptions = [
    { prop: 'title', type: 'string', default: '-', description: 'Main line. A bare string passed to `toast()` lands here.', highlight: true },
    { prop: 'description', type: 'string', default: '-', description: 'Optional muted second line' },
    {
        prop: 'type',
        type: "'success' | 'error' | 'warning' | 'info' | 'progress'",
        default: "'info'",
        description: 'Drives the icon and its colour. `progress` renders a spinner and defaults `duration` to 0.',
    },
    { prop: 'variant', type: "'toast' | 'snackbar'", default: "'toast'", description: 'Stacked card, or single inverted bar' },
    { prop: 'duration', type: 'number', default: "Toaster's", description: 'Visible time in ms. `0` stays up until dismissed.' },
    { prop: 'icon', type: 'IconLike | false', default: "type's icon", description: 'Override the icon, or `false` to drop it' },
    { prop: 'action', type: '{ label, altText?, onClick?, close? }', default: '-', description: 'Single action button. Dismisses after `onClick` unless `close: false`.' },
    { prop: 'dismissible', type: 'boolean', default: 'true', description: 'Show the close button. Defaults to `false` on a snackbar that has an action.' },
    { prop: 'id', type: 'string | number', default: 'auto', description: 'Reuse an id to update that toast in place instead of stacking' },
    {
        prop: 'onClick',
        type: '() => void',
        default: '-',
        description: 'Makes the toast body a button. Runs the handler, then dismisses. Use `action` when you want a labelled button instead.',
    },
    { prop: 'onDismiss', type: '() => void', default: '-', description: 'Called once it has left, however it left' },
];

const toasterProps = [
    { prop: 'position', type: 'ToastPosition', default: "'bottom-right'", description: 'Screen corner or edge to anchor to', highlight: true },
    { prop: 'order', type: "'newest-first' | 'oldest-first'", default: "'newest-first'", description: 'Whether new items join at the anchored edge or away from it' },
    { prop: 'animation', type: "'slide' | 'fade' | 'scale'", default: "'slide'", description: 'Entry animation. Slide direction follows `position`.' },
    { prop: 'duration', type: 'number', default: '5000', description: 'Default visible time in ms; a per-toast `duration` wins' },
    { prop: 'max', type: 'number', default: '4', description: 'Cap on visible items - the oldest are dismissed past it' },
    { prop: 'width', type: 'string', default: "'24rem'", description: 'Max width of the stack' },
    {
        prop: 'stack',
        type: 'boolean',
        default: 'false',
        description: 'Collapse the queue into a pile - newest fully visible, the rest peeking behind it. Pointing at it (or focusing a toast) expands the pile; moving away collapses it again.',
    },
    { prop: 'disableSwipe', type: 'boolean', default: 'false', description: 'Turn off swipe-to-dismiss' },
    { prop: 'disableEvents', type: 'boolean', default: 'false', description: 'Stop listening for `nb:toast` window events' },
    { prop: 'label', type: 'string', default: "'Notifications ({hotkey})'", description: 'Screen-reader label for the viewport landmark' },
];
</script>

<template>
    <div class="space-y-10">
        <header class="space-y-3">
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                Mount one <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">&lt;Toaster /&gt;</code> in your layout, then raise notifications from
                anywhere with <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">toast</code>. The Toaster decides where they appear and how they
                move; call sites only say what happened.
            </p>
        </header>

        <!-- Live Toaster, bound to the playground controls below. -->
        <Toaster :position="position" :order="order" :animation="animation" :duration="durationMs" :max="maxVisible" :stack="stack" />

        <DocConfig :blocks="configBlocks" />

        <section id="playground">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Playground</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Every Toaster prop, live. Change how the stack is anchored and animated on the left, then fire notifications on the right to see the
                    effect.
                </p>

                <div class="grid gap-8 lg:grid-cols-2">
                    <!-- Options -->
                    <div class="space-y-5">
                        <div>
                            <p class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Position</p>
                            <!-- Shaped like a screen so each cell sits where its toasts will. -->
                            <div
                                class="grid aspect-[16/6] grid-cols-3 grid-rows-2 gap-1.5 rounded-lg border-2 border-dashed border-gray-300 p-1.5 dark:border-gray-600"
                            >
                                <button
                                    v-for="p in POSITIONS"
                                    :key="p"
                                    type="button"
                                    @click="position = p"
                                    :class="[
                                        'cursor-pointer rounded-md text-[11px] font-medium whitespace-nowrap transition-colors',
                                        position === p
                                            ? 'bg-primary-600 text-white shadow-sm'
                                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-900/60 dark:text-gray-400 dark:hover:bg-gray-700',
                                    ]"
                                >
                                    {{ p.replace('-', ' ') }}
                                </button>
                            </div>
                        </div>

                        <Select v-model="order" label="Order" :options="orderOptions" />
                        <Select v-model="animation" label="Animation" :options="animationOptions" />

                        <div class="grid grid-cols-2 gap-4">
                            <Input v-model="duration" type="number" label="Duration (ms)" step="500" min="0" />
                            <Input v-model="max" type="number" label="Max visible" min="1" />
                        </div>

                        <Switch v-model="stack" label="Stack" right-description="Collapse into a pile - point at it to expand" />
                    </div>

                    <!-- Triggers -->
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Fire one</p>
                        <div class="mb-4 flex flex-wrap gap-2">
                            <PrimaryButton @click="toast.success('Profile saved')">Success</PrimaryButton>
                            <PrimaryButton @click="toast.error('Could not reach the server', { description: 'Retrying in 5 seconds…' })">Error</PrimaryButton>
                            <PrimaryButton @click="toast.warning('Your session expires soon')">Warning</PrimaryButton>
                            <PrimaryButton @click="toast.info('Three new comments', { description: 'On “Q3 roadmap”.' })">Info</PrimaryButton>
                        </div>

                        <p class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Patterns</p>
                        <div class="flex flex-wrap gap-2">
                            <SecondaryButton @click="demoProgress">Progress &rarr; success</SecondaryButton>
                            <SecondaryButton @click="demoClickable">Clickable body</SecondaryButton>
                            <SecondaryButton @click="demoSnackbar">Snackbar + Undo</SecondaryButton>
                            <SecondaryButton @click="demoAction">Sticky + action</SecondaryButton>
                            <SecondaryButton @click="demoBurst">Burst of 6 (hits max)</SecondaryButton>
                            <SecondaryButton @click="demoEvent">Via window event</SecondaryButton>
                            <SecondaryButton @click="toast.dismiss()">Dismiss all</SecondaryButton>
                        </div>

                        <DocCallout class="mt-6">
                            Hover a toast to pause its timer, drag it towards the screen edge to flick it away, or press
                            <kbd class="rounded bg-white px-1 dark:bg-blue-900/50">F8</kbd> to jump focus to the stack. All of that is reka-ui's
                            <code class="rounded bg-white px-1 dark:bg-blue-900/50">Toast</code> primitives, not something you configure.
                        </DocCallout>
                    </div>
                </div>
            </DocDemoCard>
        </section>

        <section id="recipes">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Recipes</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    The patterns you will reach for most: resolving a progress toast in place, keeping one up until it is acted on, and updating or
                    dismissing one by id.
                </p>

                <CodePreview :code="recipes" filename="Common patterns" language="js" />
            </DocDemoCard>
        </section>

        <section id="events">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Raising one without an import
            </h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Any code on the page can raise a notification by dispatching a
                    <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">nb:toast</code> window event. The mounted Toaster listens for it, so no
                    import is needed at the call site.
                </p>

                <CodePreview :code="eventExample" filename="Window event" />
                <DocCallout tone="warning" class="mt-4">
                    An <code class="rounded bg-white px-1 dark:bg-amber-900/40">action.onClick</code> callback only survives the event when the dispatching
                    code is real JavaScript. From a server-rendered template, stick to
                    <code class="rounded bg-white px-1 dark:bg-amber-900/40">title</code>, <code class="rounded bg-white px-1 dark:bg-amber-900/40">description</code>
                    and <code class="rounded bg-white px-1 dark:bg-amber-900/40">type</code>.
                </DocCallout>
            </DocDemoCard>
        </section>

        <section id="api">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">API</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    The full surface: the <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">toast</code> helper, the options every call accepts,
                    and the props on the single mounted Toaster.
                </p>

                <CollapsableSection header="toast helper" :open="true">
                    <PropsTable :rows="toastApi" />
                </CollapsableSection>

                <CollapsableSection header="ToastOptions" class="mt-4">
                    <PropsTable :rows="toastOptions" />
                </CollapsableSection>

                <CollapsableSection header="Toaster Props" class="mt-4">
                    <PropsTable :rows="toasterProps" />
                </CollapsableSection>
            </DocDemoCard>
        </section>
    </div>
</template>
