<script setup lang="ts">
import { ref } from 'vue';
import { faRocket, faPaintBrush, faGears, faChartLine, faShieldHalved, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { NbIcon } from '../icons';
import { Section, CollapsableSection, Collapse, DottedCarousel, CodePreview, PropsTable, Tabs, Tab } from '../index';
import DocDemoCard from './HelperComponents/DocDemoCard.vue';

// Collapse lives here beside CollapsableSection - same idea, one styled and one bare.
const collapseOpen = ref(false);
const collapseProps = [
    { prop: 'open', type: 'boolean', default: 'false', description: 'Initial open state (reactive - updating the prop opens/closes the section)' },
    { prop: 'button', type: '[string, string]', default: "['Show more', 'Show less']", description: 'Labels for the built-in trigger button (only used when no #trigger slot is provided)' },
];

const collapseSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Content shown when expanded' },
    { prop: 'trigger', type: 'slot', default: '-', description: 'Custom trigger element (otherwise a SecondaryButton with the `button` labels is used)' },
];


// Carousel slides - varied content so there's something to actually swipe through
const carouselItems = ref([
    {
        id: 1,
        title: 'Ship faster',
        description: 'Components for inputs, tables, modals, and more.',
        icon: faRocket,
        gradient: 'from-blue-50 to-indigo-100',
        accent: 'text-indigo-600',
    },
    {
        id: 2,
        title: 'Consistent design',
        description: 'Every component shares the same theming tokens - primary, accent, success, and danger stay in sync across the app.',
        icon: faPaintBrush,
        gradient: 'from-pink-50 to-fuchsia-100',
        accent: 'text-fuchsia-600',
    },
    {
        id: 3,
        title: 'Built for Inertia',
        description: 'Form integration, validation errors, and Link wrappers for @inertiajs/vue3.',
        icon: faGears,
        gradient: 'from-emerald-50 to-teal-100',
        accent: 'text-teal-600',
    },
    {
        id: 4,
        title: 'Data-heavy ready',
        description: 'Sortable headers, sticky chrome, pagination, selection, and the EnhancedTable wrapper for big lists.',
        icon: faChartLine,
        gradient: 'from-amber-50 to-orange-100',
        accent: 'text-orange-600',
    },
    {
        id: 5,
        title: 'Accessible by default',
        description: 'NewModal, Tooltip, and Dropdown use reka-ui primitives for focus management, ARIA, and keyboard handling.',
        icon: faShieldHalved,
        gradient: 'from-purple-50 to-violet-100',
        accent: 'text-violet-600',
    },
    {
        id: 6,
        title: 'Open and extensible',
        description: 'Slot-based composition and customClass props on every component - no !important overrides needed.',
        icon: faPeopleGroup,
        gradient: 'from-cyan-50 to-sky-100',
        accent: 'text-sky-600',
    },
]);

// Code examples
const sectionExamples = [
    '<!-- Basic Section -->',
    '<Section>',
    '  <h3 class="mb-2 text-lg font-medium">Section Title</h3>',
    '  <p>Section content goes here...</p>',
    '</Section>',
    '',
    '<!-- Section with custom styling -->',
    '<Section class="bg-blue-50 border border-blue-200">',
    '  <h3 class="mb-2 text-lg font-medium">Styled Section</h3>',
    '  <p>Custom styled section content.</p>',
    '</Section>',
    '',
    '<!-- Section variants -->',
    '<Section variant="outlined">',
    '  <p>Outlined section variant</p>',
    '</Section>',
    '',
    '<Section variant="minimal">',
    '  <p>Minimal section variant</p>',
    '</Section>',
    '',
    '<!-- Unstyled section for full customization -->',
    '<Section unstyled class="bg-gradient-to-r from-purple-400 to-pink-400 p-8 rounded-xl">',
    '  <p class="text-white">Completely custom styled section</p>',
    '</Section>',
];

const collapsableSectionExamples = [
    '<!-- Basic Collapsable Section -->',
    '<CollapsableSection header="Feature Details">',
    '  <p>This content can be collapsed and expanded.</p>',
    '</CollapsableSection>',
    '',
    '<!-- Section with custom header and initially open -->',
    '<CollapsableSection header="Advanced Options" :open="true">',
    '  <div class="space-y-4">',
    '    <p>This section starts in an expanded state.</p>',
    '  </div>',
    '</CollapsableSection>',
];

const carouselExamples = [
    '<!-- Render whatever you want inside - DottedCarousel handles the snap/scroll/dots -->',
    '<DottedCarousel :gap="20">',
    '  <div v-for="slide in slides" :key="slide.id" class="min-w-full snap-start">',
    '    <h3 class="text-xl font-medium mb-4">{{ slide.title }}</h3>',
    '    <p class="text-gray-600 dark:text-gray-400">{{ slide.description }}</p>',
    '  </div>',
    '</DottedCarousel>',
];

// Props data - verified against the actual components
const carouselProps = [
    { prop: 'gap', type: 'number', default: '20', description: 'Pixel gap between slides (also used in scroll math)' },
    { prop: 'padding', type: 'number', default: '0', description: 'Outer padding offset applied to the scroll calculation when navigating via the dots' },
];

const carouselSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Carousel slides. Each top-level child becomes one slide; mark each as `class="min-w-full snap-start"` so the snap scrolling lines up.' },
];

const collapsableSectionProps = [
    { prop: 'header', type: 'string', default: '-', description: 'Heading text shown in the toggle row (use the #trigger slot for custom markup)' },
    { prop: 'open', type: 'boolean', default: 'false', description: 'Initial open state (reactive - updating the prop opens/closes the section)' },
    { prop: 'headerColor', type: 'string', default: '-', description: 'Inline background-color applied to the header trigger' },
];

const collapsableSectionSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Body content rendered when expanded' },
    { prop: 'trigger', type: 'slot', default: '-', description: 'Custom heading content (used only when no `header` prop is provided)' },
];

// --- Tabs ---------------------------------------------------------------
const tabsDemo = ref('overview');
const tabsPillsDemo = ref('day');

const demoTabs = [
    { value: 'overview', label: 'Overview' },
    { value: 'activity', label: 'Activity', badge: 12 },
    { value: 'settings', label: 'Settings' },
    { value: 'archived', label: 'Archived', disabled: true },
];

const rangeTabs = [
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
];

const tabsExample = [
    // `<\/script>` is escaped: a literal closing tag would end this SFC's script block.
    '<script setup>',
    "import { Tabs, Tab } from '@netblink/vue-components';",
    "const active = ref('overview');",
    '',
    'const tabs = [',
    "    { value: 'overview', label: 'Overview' },",
    "    { value: 'activity', label: 'Activity', badge: 12 },",
    "    { value: 'settings', label: 'Settings' },",
    "    { value: 'archived', label: 'Archived', disabled: true },",
    '];',
    '<\/script>',
    '',
    '<Tabs v-model="active" :tabs="tabs">',
    '    <Tab value="overview">Overview panel</Tab>',
    '    <Tab value="activity">Activity panel</Tab>',
    '    <Tab value="settings">Settings panel</Tab>',
    '</Tabs>',
];

const tabsPillsExample = [
    '<!-- Pills variant, stretched to fill the row -->',
    '<Tabs v-model="range" :tabs="rangeTabs" variant="pills" fitted />',
];

const tabsProps = [
    { prop: 'tabs', type: 'TabItem[]', default: '-', description: 'Tab strip definition: `{ value, label, icon?, disabled?, badge? }`. `value` links each entry to its `<Tab>` panel.', required: true },
    { prop: 'modelValue', type: 'string', default: 'first enabled tab', description: 'Active tab value. Use `v-model`; omit it and the component manages its own state.' },
    { prop: 'variant', type: "'underline' | 'pills'", default: "'underline'", description: 'Visual treatment of the tab strip.' },
    { prop: 'fitted', type: 'boolean', default: 'false', description: 'Stretch triggers to share the full width of the strip.' },
];

const tabsSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'The `<Tab>` panels.' },
    { prop: 'trigger', type: 'slot', default: '-', description: 'Custom trigger content. Scoped: `{ tab, active }`.' },
];

const tabProps = [
    { prop: 'value', type: 'string', default: '-', description: 'Key matching the corresponding entry in the parent `tabs` array.', required: true },
];
</script>

<template>
    <div class="space-y-10">
        <header class="space-y-3">
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">Layout primitives for structuring content: collapsible sections and dotted carousels.</p>
        </header>

        <section id="sections">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Sections</h3>
            <DocDemoCard>

                <div class="mb-6 space-y-4">
                    <Section>
                        <div class="mb-2 text-lg font-medium">Basic Section</div>
                        <p class="text-gray-600 dark:text-gray-400">This is a basic section component that provides consistent spacing and styling for content areas.</p>
                    </Section>

                    <Section class="border border-blue-200 bg-blue-50 dark:border-blue-800/70 dark:bg-blue-950/40">
                        <div class="mb-2 text-lg font-medium">Custom Styled Section</div>
                        <p class="text-gray-600 dark:text-gray-400">
                            This section demonstrates custom styling with background color and border that overrides the defaults.
                        </p>
                    </Section>

                    <Section variant="outlined">
                        <div class="mb-2 text-lg font-medium">Outlined Variant</div>
                        <p class="text-gray-600 dark:text-gray-400">A section with a border and no background or shadow.</p>
                    </Section>

                    <Section variant="minimal">
                        <div class="mb-2 text-lg font-medium">Minimal Variant</div>
                        <p class="text-gray-600 dark:text-gray-400">A minimal section with rounded corners.</p>
                    </Section>

                    <Section unstyled class="rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 p-8">
                        <div class="mb-2 text-lg font-medium text-white">Fully Custom Section</div>
                        <p class="text-purple-100">This section uses the unstyled prop for complete custom styling freedom.</p>
                    </Section>
                </div>

                <CodePreview :code="sectionExamples" />

                <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    See the <strong>Sections</strong> entry under <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">Utility Components</code> for the full prop
                    table.
                </p>
            </DocDemoCard>
        </section>

        <section id="tabs">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Tabs</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Tabbed panel switcher built on reka-ui's <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">Tabs</code> primitives - arrow-key
                    navigation, roving focus and ARIA wiring come for free. Declare the strip with
                    <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">:tabs</code>, then render one
                    <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">&lt;Tab&gt;</code> per panel.
                </p>

                <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Underline (default)</div>
                <div class="mb-6">
                    <Tabs v-model="tabsDemo" :tabs="demoTabs" aria-label="Demo tabs">
                        <Tab value="overview">
                            <p class="text-gray-600 dark:text-gray-400">
                                The overview panel. Only the active panel is rendered, so heavy content in other tabs costs nothing until it is opened.
                            </p>
                        </Tab>
                        <Tab value="activity">
                            <p class="text-gray-600 dark:text-gray-400">
                                Activity panel - note the badge on the trigger, useful for unread counts.
                            </p>
                        </Tab>
                        <Tab value="settings">
                            <p class="text-gray-600 dark:text-gray-400">Settings panel. "Archived" is disabled and cannot be focused.</p>
                        </Tab>
                    </Tabs>
                </div>

                <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Pills, fitted</div>
                <div class="mb-6">
                    <Tabs v-model="tabsPillsDemo" :tabs="rangeTabs" variant="pills" fitted aria-label="Range">
                        <Tab value="day"><p class="text-gray-600 dark:text-gray-400">Showing today's figures.</p></Tab>
                        <Tab value="week"><p class="text-gray-600 dark:text-gray-400">Showing the last 7 days.</p></Tab>
                        <Tab value="month"><p class="text-gray-600 dark:text-gray-400">Showing the last 30 days.</p></Tab>
                    </Tabs>
                </div>

                <CodePreview language="html" :code="tabsExample" />

                <div class="mt-6">
                    <CodePreview language="html" :code="tabsPillsExample" />
                </div>

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Tabs Props</div>
                    <PropsTable :rows="tabsProps" />
                </div>

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Tabs Slots</div>
                    <PropsTable :rows="tabsSlots" />
                </div>

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Tab Props</div>
                    <PropsTable :rows="tabProps" />
                </div>
            </DocDemoCard>
        </section>

        <section id="collapsable-sections">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Collapsable Sections</h3>
            <DocDemoCard>
                <p class="mb-2 text-gray-600 dark:text-gray-400">
                    Styled card with a header bar - click the header to expand or collapse the body. Use for sectioning long forms or settings into
                    expandable groups.
                </p>
                <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    Related: <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">Collapse</code> (inline disclosure, see <em>Utility Components</em>) and
                    <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">NavCollapse</code> (nav menus, see <em>Navigation Components</em>).
                </p>

                <div class="mb-6 space-y-4">
                    <CollapsableSection header="Feature Documentation">
                        <div class="p-4">
                            <p class="mb-4 text-gray-600 dark:text-gray-400">This content can be collapsed and expanded by clicking the header above.</p>
                            <div class="rounded bg-gray-50 dark:bg-gray-900/40 p-4">
                                <div class="mb-2 font-medium">Key Features:</div>
                                <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                    <li>• Smooth animations</li>
                                    <li>• Customizable headers</li>
                                    <li>• Initial state control</li>
                                    <li>• Nested content support</li>
                                </ul>
                            </div>
                        </div>
                    </CollapsableSection>

                    <CollapsableSection header="Advanced Options" :open="true">
                        <div class="p-4">
                            <p class="text-gray-600 dark:text-gray-400">This section starts in an expanded state and demonstrates the open prop.</p>
                        </div>
                    </CollapsableSection>
                </div>

                <CodePreview :code="collapsableSectionExamples" />

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">CollapsableSection Props</div>
                    <PropsTable :rows="collapsableSectionProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Slots</div>
                    <PropsTable :rows="collapsableSectionSlots" />
                </div>
            </DocDemoCard>
        </section>

        <section id="collapsible">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Collapse</h3>
            <DocDemoCard>
                <p class="mb-3 text-gray-600 dark:text-gray-400">
                    Low-level open/close container. By default it renders a <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">SecondaryButton</code> as the
                    trigger (labels come from the <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">button</code> prop); pass a
                    <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">#trigger</code> slot to override.
                </p>

                <!-- Family comparison: there are three "collapsible" components and they get confused -->
                <DocCallout class="mb-6">
                    <strong>Picking the right one:</strong>
                    <ul class="mt-2 list-inside list-disc space-y-1">
                        <li><strong>Collapse</strong> - minimal show/hide for inline disclosure (this section).</li>
                        <li>
                            <strong>CollapsableSection</strong> - styled card with a header bar; use for sectioning content into expandable groups.
                            See <em>Layout Components → Collapsable Sections</em>.
                        </li>
                        <li>
                            <strong>NavCollapse</strong> - expandable group inside a navigation list (renders as an
                            <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">&lt;li&gt;</code>).
                            See <em>Navigation Components → Collapsible Navigation</em>.
                        </li>
                    </ul>
                </DocCallout>

                <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Default trigger (`button` prop)</div>
                <Collapse class="mb-6">
                    <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-4">
                        <p class="text-gray-600 dark:text-gray-400">
                            Default trigger uses a SecondaryButton labelled by the <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">button</code> prop.
                            <br />
                            <span class="text-gray-500 dark:text-gray-400">Try the labels: pass <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">:button="['Details', 'Hide']"</code>.</span>
                        </p>
                    </div>
                </Collapse>

                <Collapse :button="['View advanced details', 'Hide advanced details']" class="mb-6">
                    <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-4">
                        <p class="text-gray-600 dark:text-gray-400">
                            Same Collapse, with custom button labels via <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">:button="['…', '…']"</code>.
                        </p>
                    </div>
                </Collapse>

                <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Custom trigger (#trigger slot)</div>
                <Collapse :open="collapseOpen" class="mb-6">
                    <template #trigger>
                        <button
                            @click="collapseOpen = !collapseOpen"
                            class="flex w-full items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-900/60 p-3 text-left transition-colors hover:bg-gray-200"
                        >
                            <span class="font-semibold">Advanced settings</span>
                            <NbIcon :name="faChevronDown" class="h-4 w-4 transition-transform" :class="{ 'rotate-180': collapseOpen }" />
                        </button>
                    </template>
                    <div class="mt-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-4">
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                            When you supply your own trigger, you also own the open state - toggle <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">collapseOpen</code>
                            yourself.
                        </p>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            <label class="block">
                                <span class="font-medium text-gray-700 dark:text-gray-200">API timeout</span>
                                <input type="number" class="mt-1 block w-full rounded border-gray-300" value="30" />
                            </label>
                            <label class="block">
                                <span class="font-medium text-gray-700 dark:text-gray-200">Max retries</span>
                                <input type="number" class="mt-1 block w-full rounded border-gray-300" value="3" />
                            </label>
                        </div>
                    </div>
                </Collapse>

                <CodePreview
                    :code="[
                        '&lt;!-- Auto trigger --&gt;',
                        '&lt;Collapse&gt;…body…&lt;/Collapse&gt;',
                        '',
                        '&lt;!-- Auto trigger with custom labels --&gt;',
                        '&lt;Collapse :button=&quot;[\'View advanced details\', \'Hide advanced details\']&quot;&gt;',
                        '  …body…',
                        '&lt;/Collapse&gt;',
                        '',
                        '&lt;!-- Custom trigger (you own the open state) --&gt;',
                        '&lt;Collapse :open=&quot;collapseOpen&quot;&gt;',
                        '  &lt;template #trigger&gt;',
                        '    &lt;button @click=&quot;collapseOpen = !collapseOpen&quot;&gt;Advanced settings&lt;/button&gt;',
                        '  &lt;/template&gt;',
                        '  …body…',
                        '&lt;/Collapse&gt;',
                    ]"
                />

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Collapse Props</div>
                    <PropsTable :rows="collapseProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Slots</div>
                    <PropsTable :rows="collapseSlots" />
                </div>
            </DocDemoCard>
        </section>

        <section id="carousel">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Dotted Carousel</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">Click the dots below the panel - or swipe / scroll horizontally - to move between slides.</p>
                <div class="mb-6">
                    <DottedCarousel>
                        <div
                            v-for="item in carouselItems"
                            :key="item.id"
                            class="min-w-full snap-start rounded-lg bg-gradient-to-br p-10 text-center"
                            :class="item.gradient"
                        >
                            <div class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
                                <NbIcon :name="item.icon" :class="['text-3xl', item.accent]" />
                            </div>
                            <!-- Slide chrome forces dark text because the gradient is always light, even in dark mode. -->
                            <div class="mb-2 text-xs font-medium uppercase tracking-widest text-gray-500">
                                Slide {{ item.id }} / {{ carouselItems.length }}
                            </div>
                            <div class="mb-3 text-2xl font-semibold text-gray-900">{{ item.title }}</div>
                            <p class="mx-auto max-w-md text-gray-700">{{ item.description }}</p>
                        </div>
                    </DottedCarousel>
                </div>

                <CodePreview :code="carouselExamples" />

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">DottedCarousel Props</div>
                    <PropsTable :rows="carouselProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Slots</div>
                    <PropsTable :rows="carouselSlots" />
                </div>
            </DocDemoCard>
        </section>

    </div>
</template>
