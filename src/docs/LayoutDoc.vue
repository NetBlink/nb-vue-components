<script setup lang="ts">
import { ref } from 'vue';
import { faRocket, faPaintBrush, faGears, faChartLine, faShieldHalved, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { NbIcon } from '../icons';
import { Section, CollapsableSection, DottedCarousel, CodePreview, PropsTable } from '../index';

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
</script>

<template>
    <div class="space-y-10">
        <header class="space-y-3">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Layout Components</h1>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">Layout primitives for structuring content: collapsible sections and dotted carousels.</p>
        </header>

        <section id="sections">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Sections</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">

                <div class="mb-6 space-y-4">
                    <Section>
                        <div class="mb-2 text-lg font-medium">Basic Section</div>
                        <p class="text-gray-600 dark:text-gray-400">This is a basic section component that provides consistent spacing and styling for content areas.</p>
                    </Section>

                    <Section class="border border-blue-200 bg-blue-50">
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
                    See the <strong>Sections</strong> entry under <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">Utility Components</code> for the full prop
                    table.
                </p>
            </div>
        </section>

        <section id="collapsable-sections">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Collapsable Sections</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-2 text-gray-600 dark:text-gray-400">
                    Styled card with a header bar - click the header to expand or collapse the body. Use for sectioning long forms or settings into
                    expandable groups.
                </p>
                <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    Related: <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">Collapse</code> (inline disclosure, see <em>Utility Components</em>) and
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">NavCollapse</code> (nav menus, see <em>Navigation Components</em>).
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
            </div>
        </section>

        <section id="carousel">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Dotted Carousel</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
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
            </div>
        </section>

    </div>
</template>
