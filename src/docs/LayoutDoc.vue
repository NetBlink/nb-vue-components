<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
    Section,
    CollapsableSection,
    Collapse,
    DescriptionList,
    DescriptionListItem,
    DottedCarousel,
    CodePreview,
    PropsTable,
} from '../index';

// Component state
const showCollapse = ref(false);

// Carousel items
const carouselItems = ref([
    { id: 1, title: 'Slide 1', description: 'First carousel slide content' },
    { id: 2, title: 'Slide 2', description: 'Second carousel slide content' },
    { id: 3, title: 'Slide 3', description: 'Third carousel slide content' },
    { id: 4, title: 'Slide 4', description: 'Fourth carousel slide content' },
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
    '<!-- Render whatever you want inside — DottedCarousel handles the snap/scroll/dots -->',
    '<DottedCarousel :gap="20">',
    '  <div v-for="slide in slides" :key="slide.id" class="min-w-full snap-start">',
    '    <h3 class="text-xl font-medium mb-4">{{ slide.title }}</h3>',
    '    <p class="text-gray-600">{{ slide.description }}</p>',
    '  </div>',
    '</DottedCarousel>',
];

const descriptionListExamples = [
    '<DescriptionList>',
    '  <DescriptionListItem label="Name" value="John Doe" />',
    '  <DescriptionListItem label="Email" value="john@example.com" />',
    '  <DescriptionListItem label="Role" value="Administrator" />',
    '</DescriptionList>',
];

// Props data — verified against the actual components
const carouselProps = [
    { prop: 'gap', type: 'number', default: '20', description: 'Pixel gap between slides (also used in scroll math)' },
    { prop: 'padding', type: 'number', default: '0', description: 'Outer padding offset applied to the scroll calculation when navigating via the dots' },
];

const carouselSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Carousel slides. Each top-level child becomes one slide; mark each as `class="min-w-full snap-start"` so the snap scrolling lines up.' },
];

const collapsableSectionProps = [
    { prop: 'header', type: 'string', default: '-', description: 'Heading text shown in the toggle row (use the #trigger slot for custom markup)' },
    { prop: 'open', type: 'boolean', default: 'false', description: 'Initial open state (reactive — updating the prop opens/closes the section)' },
    { prop: 'headerColor', type: 'string', default: '-', description: 'Inline background-color applied to the header trigger' },
];

const collapsableSectionSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Body content rendered when expanded' },
    { prop: 'trigger', type: 'slot', default: '-', description: 'Custom heading content (used only when no `header` prop is provided)' },
];
</script>

<template>
    <div class="space-y-12">
        <section id="sections">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Sections</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Basic layout sections for organizing content with consistent styling.</p>

                <div class="mb-6 space-y-4">
                    <Section>
                        <h4 class="mb-2 text-lg font-medium">Basic Section</h4>
                        <p class="text-gray-600">This is a basic section component that provides consistent spacing and styling for content areas.</p>
                    </Section>

                    <Section class="border border-blue-200 bg-blue-50">
                        <h4 class="mb-2 text-lg font-medium">Custom Styled Section</h4>
                        <p class="text-gray-600">
                            This section demonstrates custom styling with background color and border that overrides the defaults.
                        </p>
                    </Section>

                    <Section variant="outlined">
                        <h4 class="mb-2 text-lg font-medium">Outlined Variant</h4>
                        <p class="text-gray-600">A section with just a border and no background or shadow.</p>
                    </Section>

                    <Section variant="minimal">
                        <h4 class="mb-2 text-lg font-medium">Minimal Variant</h4>
                        <p class="text-gray-600">A minimal section with just rounded corners.</p>
                    </Section>

                    <Section unstyled class="rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 p-8">
                        <h4 class="mb-2 text-lg font-medium text-white">Fully Custom Section</h4>
                        <p class="text-purple-100">This section uses the unstyled prop for complete custom styling freedom.</p>
                    </Section>
                </div>

                <CodePreview :code="sectionExamples" />

                <p class="mt-4 text-sm text-gray-600">
                    See the <strong>Sections</strong> entry under <code class="rounded bg-gray-100 px-1">Utility Components</code> for the full prop
                    table.
                </p>
            </div>
        </section>

        <section id="collapsable-sections">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Collapsable Sections</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Expandable content sections with customizable headers and initial states.</p>

                <div class="mb-6 space-y-4">
                    <CollapsableSection header="Feature Documentation">
                        <div class="p-4">
                            <p class="mb-4 text-gray-600">This content can be collapsed and expanded by clicking the header above.</p>
                            <div class="rounded bg-gray-50 p-4">
                                <h5 class="mb-2 font-medium">Key Features:</h5>
                                <ul class="space-y-1 text-sm text-gray-600">
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
                            <p class="text-gray-600">This section starts in an expanded state and demonstrates the open prop.</p>
                        </div>
                    </CollapsableSection>
                </div>

                <CodePreview :code="collapsableSectionExamples" />

                <div class="mt-6">
                    <h4 class="mb-3 font-semibold text-gray-800">CollapsableSection Props</h4>
                    <PropsTable :rows="collapsableSectionProps" />
                </div>

                <div class="mt-4">
                    <h4 class="mb-3 font-semibold text-gray-800">Slots</h4>
                    <PropsTable :rows="collapsableSectionSlots" />
                </div>
            </div>
        </section>

        <section id="carousel">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Dotted Carousel</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Interactive carousel component with dot navigation for displaying multiple slides.</p>

                <div class="mb-6">
                    <DottedCarousel>
                        <div
                            v-for="item in carouselItems"
                            :key="item.id"
                            class="min-w-full snap-start rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 p-8 text-center"
                        >
                            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                                <span class="text-primary-600 text-2xl font-bold">{{ item.id }}</span>
                            </div>
                            <h3 class="mb-4 text-xl font-medium">{{ item.title }}</h3>
                            <p class="text-gray-600">{{ item.description }}</p>
                        </div>
                    </DottedCarousel>
                </div>

                <CodePreview :code="carouselExamples" />

                <div class="mt-6">
                    <h4 class="mb-3 font-semibold text-gray-800">DottedCarousel Props</h4>
                    <PropsTable :rows="carouselProps" />
                </div>

                <div class="mt-4">
                    <h4 class="mb-3 font-semibold text-gray-800">Slots</h4>
                    <PropsTable :rows="carouselSlots" />
                </div>
            </div>
        </section>

        <section id="description-lists">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Description Lists</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Structured display of term-definition pairs for showing detailed information.</p>

                <div class="mb-6">
                    <DescriptionList>
                        <DescriptionListItem label="Full Name" value="John Doe" />
                        <DescriptionListItem label="Email Address" value="john.doe@example.com" />
                        <DescriptionListItem label="Role" value="Administrator" />
                        <DescriptionListItem label="Department" value="Engineering" />
                        <DescriptionListItem label="Location" value="San Francisco, CA" />
                        <DescriptionListItem label="Member Since" value="March 15, 2023" />
                    </DescriptionList>
                </div>

                <CodePreview :code="descriptionListExamples" />

                <p class="mt-4 text-sm text-gray-600">
                    See the <strong>Description List</strong> entry under <code class="rounded bg-gray-100 px-1">Input Components</code> for the full
                    prop table (including the editable variant).
                </p>
            </div>
        </section>

        <section id="collapse">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Collapse Component</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Low-level collapse component for building custom collapsible interfaces.</p>

                <div class="mb-6">
                    <button
                        @click="showCollapse = !showCollapse"
                        class="flex w-full items-center justify-between rounded-lg bg-gray-100 p-4 text-left transition-colors hover:bg-gray-200"
                    >
                        <span class="font-medium">Toggle Custom Collapse</span>
                        <FontAwesomeIcon
                            :icon="faChevronDown"
                            class="h-5 w-5 transition-transform duration-200"
                            :class="{ 'rotate-180': showCollapse }"
                        />
                    </button>

                    <Collapse :open="showCollapse">
                        <div class="rounded-b-lg border border-t-0 bg-white p-4">
                            <h4 class="mb-2 font-medium">Collapse Content</h4>
                            <p class="mb-4 text-gray-600">This content is controlled by the Collapse component with smooth animations.</p>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div class="rounded bg-gray-50 p-3">
                                    <h5 class="mb-1 font-medium">Feature 1</h5>
                                    <p class="text-gray-600">Smooth animations</p>
                                </div>
                                <div class="rounded bg-gray-50 p-3">
                                    <h5 class="mb-1 font-medium">Feature 2</h5>
                                    <p class="text-gray-600">Custom triggers</p>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </section>
    </div>
</template>
