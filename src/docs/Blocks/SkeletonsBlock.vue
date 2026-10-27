<script setup lang="ts">
import { ref } from 'vue';
import { Switch, SubmitButton, Skeleton, Card, Avatar, CodePreview, InlineCode } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// Primitives snippet
const primitivesSnippet = [
    '<!-- Text line stack -->',
    '<Skeleton :lines="3" width="14rem" />',
    '',
    '<!-- Avatar + two lines -->',
    '<Skeleton shape="row" width="14rem" />',
    '',
    '<!-- Image card -->',
    '<Card padding="none" class="w-48 overflow-hidden">',
    '    <Skeleton shape="rect" height="7rem" class="rounded-none" />',
    '    <Skeleton :lines="2" class="p-3" />',
    '</Card>',
];

// Table skeleton snippet
const tableRowWidths = ['75%', '50%', '100%', '66%', '33%'];
const tableSnippet = [
    '<Card padding="none" class="overflow-hidden">',
    '    <div class="flex gap-4 border-b border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">',
    '        <Skeleton v-for="n in 4" :key="n" shape="rect" height="0.75rem" width="25%" />',
    '    </div>',
    '    <div v-for="row in 5" :key="row" class="flex gap-4 border-b border-gray-100 p-3 last:border-b-0 dark:border-gray-700">',
    '        <Skeleton v-for="w in [\'75%\', \'50%\', \'100%\', \'66%\']" :key="w" shape="rect" height="0.75rem" :width="w" />',
    '    </div>',
    '</Card>',
];

// Full page composition snippet
const pageSnippet = [
    '<Card padding="sm">',
    '    <div class="space-y-6">',
    '        <!-- Header bar -->',
    '        <div class="flex items-center justify-between gap-4">',
    '            <Skeleton shape="rect" height="1.5rem" width="10rem" />',
    '            <Skeleton shape="rect" height="2rem" width="6rem" />',
    '        </div>',
    '',
    '        <!-- Stat cards -->',
    '        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">',
    '            <Card v-for="n in 3" :key="n" padding="sm"><Skeleton :lines="2" /></Card>',
    '        </div>',
    '',
    '        <!-- Table -->',
    '        <Card padding="none" class="overflow-hidden">',
    '            <div v-for="row in 4" :key="row" class="flex gap-4 border-b border-gray-100 p-3 last:border-b-0 dark:border-gray-700">',
    '                <Skeleton shape="rect" height="0.75rem" />',
    '                <Skeleton shape="rect" height="0.75rem" width="66%" />',
    '            </div>',
    '        </Card>',
    '    </div>',
    '</Card>',
];

// Toggle-compare demo
const showLoading = ref(true);
const toggleSnippet = [
    '<Switch v-model="loading" no-label right-description="Loading" class="mb-4" />',
    '',
    '<!-- the row skeleton, its circle sized to match the real avatar -->',
    "<Skeleton v-if=\"loading\" shape=\"row\" :ui=\"{ circle: 'h-12 w-12' }\" />",
    '<div v-else class="flex items-center gap-3">',
    '    <Avatar :src="user.avatar" :name="user.name" size="lg" />',
    '    <div>',
    '        <div class="font-medium text-gray-800 dark:text-gray-100">{{ user.name }}</div>',
    '        <div class="text-sm text-gray-500 dark:text-gray-400">{{ user.email }}</div>',
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
                <InlineCode>Skeleton</InlineCode> primitives: a text-line stack, an avatar
                row with two supporting lines, and an image card built from a <InlineCode>rect</InlineCode>.
            </p>
            <div class="mb-6 flex flex-wrap items-start gap-8 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <Skeleton :lines="3" width="14rem" />
                <Skeleton shape="row" width="14rem" />
                <Card padding="none" class="w-48 overflow-hidden">
                    <Skeleton shape="rect" height="7rem" class="rounded-none" />
                    <Skeleton :lines="2" class="p-3" />
                </Card>
            </div>
            <CodePreview :code="primitivesSnippet" filename="SkeletonPrimitives.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A table skeleton: a header row plus five rows of varying-width cell bars, matching the shape of a real data table while it loads.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <Card padding="none" class="overflow-hidden">
                    <div class="flex gap-4 border-b border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">
                        <Skeleton v-for="n in 4" :key="n" shape="rect" height="0.75rem" width="25%" />
                    </div>
                    <div v-for="(w, row) in tableRowWidths" :key="row" class="flex gap-4 border-b border-gray-100 p-3 last:border-b-0 dark:border-gray-700">
                        <Skeleton shape="rect" height="0.75rem" :width="w" />
                        <Skeleton shape="rect" height="0.75rem" width="50%" />
                        <Skeleton shape="rect" height="0.75rem" />
                        <Skeleton shape="rect" height="0.75rem" width="66%" />
                    </div>
                </Card>
            </div>
            <CodePreview :code="tableSnippet" filename="TableSkeleton.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A full-page loading composition: a header bar, a row of stat cards, and a table body, all rendered in skeleton form inside a bounded box.
            </p>
            <div class="mb-6 h-96 overflow-y-auto rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <Card padding="sm">
                    <div class="space-y-6">
                        <div class="flex items-center justify-between gap-4">
                            <Skeleton shape="rect" height="1.5rem" width="10rem" class="max-w-[50%]" />
                            <Skeleton shape="rect" height="2rem" width="6rem" class="shrink-0" />
                        </div>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <Card v-for="n in 3" :key="n" padding="sm"><Skeleton :lines="2" /></Card>
                        </div>

                        <Card padding="none" class="overflow-hidden">
                            <div class="border-b border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">
                                <Skeleton shape="rect" height="0.75rem" width="25%" />
                            </div>
                            <div v-for="row in 4" :key="row" class="flex gap-4 border-b border-gray-100 p-3 last:border-b-0 dark:border-gray-700">
                                <Skeleton shape="rect" height="0.75rem" />
                                <Skeleton shape="rect" height="0.75rem" width="66%" />
                            </div>
                        </Card>
                    </div>
                </Card>
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

                <Skeleton v-if="showLoading" shape="row" :ui="{ circle: 'h-12 w-12' }" />
                <div v-else class="flex items-center gap-3">
                    <Avatar name="Jane Cooper" size="lg" />
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
                Button-level loading: the library's <InlineCode>SubmitButton</InlineCode>
                already ships this state, pass <InlineCode>:loading</InlineCode> (or an
                Inertia <InlineCode>:form</InlineCode>, whose processing flag it reads itself)
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
