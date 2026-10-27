<script setup lang="ts">
import { ref } from 'vue';
import { PrimaryButton, SecondaryButton, LinkButton, EmptyState, CodePreview } from '../../index';
import { NbIcon } from '../../icons';
import { faInbox, faPlus, faCartShopping, faMagnifyingGlass, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// No-search-results demo state
const searchQuery = ref('quantum widgets');

function clearSearch() {
    searchQuery.value = '';
}

const basicSnippet = [
    '<EmptyState :icon="faInbox" title="No projects yet" description="Get started by creating your first project.">',
    '    <PrimaryButton @click="createProject">',
    '        <NbIcon :name="faPlus" class="mr-1.5 h-4 w-4" />',
    '        New Project',
    '    </PrimaryButton>',
    '</EmptyState>',
];

const bigCircleSnippet = [
    '<!-- the icon part is the IconCircle: size it up through :ui -->',
    '<EmptyState',
    '    :icon="faCartShopping"',
    '    title="Your cart is empty"',
    '    description="Looks like you haven\'t added anything yet. Browse the catalog to find something you like."',
    "    :ui=\"{ icon: 'h-24 w-24 [&_svg]:size-10!' }\"",
    '>',
    '    <PrimaryButton @click="browseCatalog">Browse Catalog</PrimaryButton>',
    '</EmptyState>',
];

const noResultsSnippet = [
    '<EmptyState :icon="faMagnifyingGlass" :title="`No results for “${query}”`" description="Try checking your spelling or use a different search term.">',
    '    <SecondaryButton @click="query = \'\'">Clear search</SecondaryButton>',
    '</EmptyState>',
];

const notFoundSnippet = [
    '<div class="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 text-center dark:bg-gray-900">',
    '    <NbIcon :name="faTriangleExclamation" size="2xl" class="mb-4 text-gray-400 dark:text-gray-500" />',
    '    <p class="text-6xl font-extrabold text-gray-300 dark:text-gray-600">404</p>',
    '    <h1 class="mt-2 text-xl font-semibold text-gray-800 dark:text-gray-100">Page not found</h1>',
    '    <p class="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">',
    '        Sorry, we couldn\'t find the page you\'re looking for. It may have been moved or deleted.',
    '    </p>',
    '    <div class="mt-6 flex flex-wrap items-center justify-center gap-4">',
    '        <LinkButton href="/">Back to Home</LinkButton>',
    '        <LinkButton href="/contact" theme="no-style" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 text-sm font-medium">',
    '            Contact support',
    '        </LinkButton>',
    '    </div>',
    '</div>',
];
</script>

<template>
    <section id="block-empty-states">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
            Empty & Error States
        </h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A basic <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">EmptyState</code>: icon, title, short description, and a single call-to-action button.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <EmptyState :icon="faInbox" title="No projects yet" description="Get started by creating your first project.">
                    <PrimaryButton>
                        <NbIcon :name="faPlus" class="mr-1.5 h-4 w-4" />
                        New Project
                    </PrimaryButton>
                </EmptyState>
            </div>
            <CodePreview :code="basicSnippet" filename="EmptyState.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                Big-circle variant: the icon circle sized up through <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">:ui</code>, useful for a more prominent empty state such as an empty cart.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <EmptyState
                    :icon="faCartShopping"
                    title="Your cart is empty"
                    description="Looks like you haven't added anything yet. Browse the catalog to find something you like."
                    :ui="{ icon: 'h-24 w-24 [&_svg]:size-10!' }"
                >
                    <PrimaryButton>Browse Catalog</PrimaryButton>
                </EmptyState>
            </div>
            <CodePreview :code="bigCircleSnippet" filename="EmptyCart.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                No-search-results variant: a magnifier icon, the failed query echoed back, and a Clear search action.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <EmptyState :icon="faMagnifyingGlass" :title="`No results for “${searchQuery}”`" description="Try checking your spelling or use a different search term.">
                    <SecondaryButton @click="clearSearch">Clear search</SecondaryButton>
                </EmptyState>
            </div>
            <CodePreview :code="noResultsSnippet" filename="NoSearchResults.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A full 404 page: a huge muted "404", headline, copy, a primary button back home, and a text link to contact support.
                Demoed here inside a bounded page-background box.
            </p>
            <div class="mb-6 overflow-hidden rounded border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="flex min-h-96 flex-col items-center justify-center bg-white px-4 py-10 text-center dark:bg-gray-900">
                    <NbIcon :name="faTriangleExclamation" size="2xl" class="mb-4 text-gray-400 dark:text-gray-500" />
                    <p class="text-6xl font-extrabold text-gray-300 dark:text-gray-600">404</p>
                    <h1 class="mt-2 text-xl font-semibold text-gray-800 dark:text-gray-100">Page not found</h1>
                    <p class="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">
                        Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
                    </p>
                    <div class="mt-6 flex flex-wrap items-center justify-center gap-4">
                        <LinkButton href="#" @click.prevent>Back to Home</LinkButton>
                        <LinkButton
                            href="#"
                            theme="no-style"
                            class="text-primary-600 hover:text-primary-700 dark:text-primary-400 text-sm font-medium"
                            @click.prevent
                        >
                            Contact support
                        </LinkButton>
                    </div>
                </div>
            </div>
            <CodePreview :code="notFoundSnippet" filename="NotFound.vue" />
        </DocDemoCard>
    </section>
</template>
