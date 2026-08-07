<script setup lang="ts">
import { ref } from 'vue';
import { Switch, SubmitButton, CodePreview } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const pulse = 'animate-pulse rounded bg-gray-200 dark:bg-gray-700';

// Primitives snippet
const primitivesSnippet = [
    '<!-- Text line stack -->',
    '<div class="space-y-2">',
    '    <div class="h-4 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '    <div class="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '    <div class="h-4 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '</div>',
    '',
    '<!-- Avatar + two lines -->',
    '<div class="flex items-center gap-3">',
    '    <div class="h-10 w-10 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>',
    '    <div class="flex-1 space-y-2">',
    '        <div class="h-3 w-1/3 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '        <div class="h-3 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '    </div>',
    '</div>',
    '',
    '<!-- Image card -->',
    '<div class="w-48 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">',
    '    <div class="h-28 w-full animate-pulse bg-gray-200 dark:bg-gray-700"></div>',
    '    <div class="space-y-2 p-3">',
    '        <div class="h-3 w-2/3 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '        <div class="h-3 w-1/3 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '    </div>',
    '</div>',
];

// Table skeleton snippet
const tableRowWidths = ['w-3/4', 'w-1/2', 'w-full', 'w-2/3', 'w-1/3'];
const tableSnippet = [
    '<div class="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">',
    '    <div class="flex gap-4 border-b border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">',
    '        <div v-for="n in 4" :key="n" class="h-3 w-1/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '    </div>',
    '    <div v-for="row in 5" :key="row" class="flex gap-4 border-b border-gray-100 p-3 last:border-b-0 dark:border-gray-700">',
    '        <div class="h-3 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '        <div class="h-3 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '        <div class="h-3 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '        <div class="h-3 w-2/3 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '    </div>',
    '</div>',
];

// Full page composition snippet
const pageSnippet = [
    '<div class="space-y-6 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">',
    '    <!-- Header bar -->',
    '    <div class="flex items-center justify-between gap-4">',
    '        <div class="h-6 w-40 max-w-[50%] animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '        <div class="h-8 w-24 shrink-0 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '    </div>',
    '',
    '    <!-- Stat cards -->',
    '    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">',
    '        <div v-for="n in 3" :key="n" class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">',
    '            <div class="mb-2 h-3 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '            <div class="h-6 w-1/3 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '        </div>',
    '    </div>',
    '',
    '    <!-- Table -->',
    '    <div class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">',
    '        <div class="border-b border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">',
    '            <div class="h-3 w-1/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '        </div>',
    '        <div v-for="row in 4" :key="row" class="flex gap-4 border-b border-gray-100 p-3 last:border-b-0 dark:border-gray-700">',
    '            <div class="h-3 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '            <div class="h-3 w-2/3 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '        </div>',
    '    </div>',
    '</div>',
];

// Toggle-compare demo
const showLoading = ref(true);
const toggleSnippet = [
    '<Switch v-model="loading" no-label right-description="Loading" class="mb-4" />',
    '',
    '<div v-if="loading" class="flex items-center gap-3">',
    '    <div class="h-12 w-12 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>',
    '    <div class="flex-1 space-y-2">',
    '        <div class="h-4 w-1/3 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '        <div class="h-3 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>',
    '    </div>',
    '</div>',
    '<div v-else class="flex items-center gap-3">',
    '    <img src="/avatars/jane.jpg" class="h-12 w-12 rounded-full object-cover" />',
    '    <div>',
    '        <div class="font-medium text-gray-800 dark:text-gray-100">Jane Cooper</div>',
    '        <div class="text-sm text-gray-500 dark:text-gray-400">jane@example.com</div>',
    '    </div>',
    '</div>',
];

// Button loading demo
const saving = ref(false);
function triggerSave() {
    saving.value = true;
    setTimeout(() => {
        saving.value = false;
    }, 1500);
}
const buttonSnippet = [
    '<!-- SubmitButton ships the loading treatment: pass `loading` (or just',
    '     `:form` - it reads form.processing itself) and it disables, dims the',
    '     label and overlays a Spinner. No hand-rolled spinner markup needed. -->',
    '<SubmitButton type="button" :loading="saving" @click="save">Save Changes</SubmitButton>',
    '',
    '<!-- Inertia forms: wire the form object directly -->',
    '<SubmitButton :form="form">Save Changes</SubmitButton>',
];
</script>

<template>
    <section id="block-skeletons">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
            Skeletons &amp; Loading
        </h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                Skeleton primitives: an animated text-line stack, an avatar with two supporting lines, and an image card. All use
                <code class="rounded bg-gray-100 px-1 text-xs dark:bg-gray-900/60">animate-pulse</code> on gray-200 / dark:gray-700 shapes.
            </p>
            <div class="mb-6 flex flex-wrap items-start gap-8 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="w-56 space-y-2">
                    <div :class="[pulse, 'h-4 w-3/4']"></div>
                    <div :class="[pulse, 'h-4 w-full']"></div>
                    <div :class="[pulse, 'h-4 w-5/6']"></div>
                </div>

                <div class="flex w-56 items-center gap-3">
                    <div :class="[pulse, 'h-10 w-10 rounded-full']"></div>
                    <div class="flex-1 space-y-2">
                        <div :class="[pulse, 'h-3 w-1/3']"></div>
                        <div :class="[pulse, 'h-3 w-1/2']"></div>
                    </div>
                </div>

                <div class="w-48 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <div :class="[pulse, 'h-28 w-full rounded-none']"></div>
                    <div class="space-y-2 p-3">
                        <div :class="[pulse, 'h-3 w-2/3']"></div>
                        <div :class="[pulse, 'h-3 w-1/3']"></div>
                    </div>
                </div>
            </div>
            <CodePreview :code="primitivesSnippet" filename="SkeletonPrimitives.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A table skeleton: a header row plus five rows of varying-width cell bars, matching the shape of a real data table while it loads.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex gap-4 border-b border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">
                        <div v-for="n in 4" :key="n" :class="[pulse, 'h-3 w-1/4']"></div>
                    </div>
                    <div v-for="(w, row) in tableRowWidths" :key="row" class="flex gap-4 border-b border-gray-100 p-3 last:border-b-0 dark:border-gray-700">
                        <div :class="[pulse, 'h-3', w]"></div>
                        <div :class="[pulse, 'h-3 w-1/2']"></div>
                        <div :class="[pulse, 'h-3 w-full']"></div>
                        <div :class="[pulse, 'h-3 w-2/3']"></div>
                    </div>
                </div>
            </div>
            <CodePreview :code="tableSnippet" filename="TableSkeleton.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A full-page loading composition: a header bar, a row of stat cards, and a table body, all rendered in skeleton form inside a bounded box.
            </p>
            <div class="mb-6 h-96 overflow-y-auto rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="space-y-6 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-center justify-between gap-4">
                        <div :class="[pulse, 'h-6 w-40 max-w-[50%]']"></div>
                        <div :class="[pulse, 'h-8 w-24 shrink-0']"></div>
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div v-for="n in 3" :key="n" class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                            <div :class="[pulse, 'mb-2 h-3 w-1/2']"></div>
                            <div :class="[pulse, 'h-6 w-1/3']"></div>
                        </div>
                    </div>

                    <div class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                        <div class="border-b border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">
                            <div :class="[pulse, 'h-3 w-1/4']"></div>
                        </div>
                        <div v-for="row in 4" :key="row" class="flex gap-4 border-b border-gray-100 p-3 last:border-b-0 dark:border-gray-700">
                            <div :class="[pulse, 'h-3 w-full']"></div>
                            <div :class="[pulse, 'h-3 w-2/3']"></div>
                        </div>
                    </div>
                </div>
            </div>
            <CodePreview :code="pageSnippet" filename="PageLoadingSkeleton.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A live toggle: flip the switch to swap a real content card for its skeleton twin so the placeholder shapes can be compared against the
                loaded layout they stand in for.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <Switch v-model="showLoading" no-label right-description="Loading" class="mb-4" />

                <div v-if="showLoading" class="flex items-center gap-3">
                    <div :class="[pulse, 'h-12 w-12 rounded-full']"></div>
                    <div class="flex-1 space-y-2">
                        <div :class="[pulse, 'h-4 w-1/3']"></div>
                        <div :class="[pulse, 'h-3 w-1/2']"></div>
                    </div>
                </div>
                <div v-else class="flex items-center gap-3">
                    <div class="bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300 flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold">
                        JC
                    </div>
                    <div>
                        <div class="font-medium text-gray-800 dark:text-gray-100">Jane Cooper</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">jane@example.com</div>
                    </div>
                </div>
            </div>
            <CodePreview :code="toggleSnippet" filename="ToggleCompare.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                Button-level loading: the library's <code class="rounded bg-gray-100 px-1 text-xs dark:bg-gray-900/60">SubmitButton</code>
                already ships this state, pass <code class="rounded bg-gray-100 px-1 text-xs dark:bg-gray-900/60">:loading</code> (or an
                Inertia <code class="rounded bg-gray-100 px-1 text-xs dark:bg-gray-900/60">:form</code>, whose processing flag it reads itself)
                and it disables, dims the label and overlays a Spinner. Idle twin on the right.
            </p>
            <div class="mb-6 flex flex-wrap items-center gap-4 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <SubmitButton type="button" :loading="saving" @click="triggerSave">Save Changes</SubmitButton>
                <SubmitButton type="button">Save Changes</SubmitButton>
            </div>
            <CodePreview :code="buttonSnippet" filename="ButtonLoading.vue" />
        </DocDemoCard>
    </section>
</template>
