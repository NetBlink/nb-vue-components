<script setup lang="ts">
import { PrimaryButton, SecondaryButton, CodePreview } from '../../index';
import { NbIcon } from '../../icons';
import { faBolt, faShieldHalved, faChartLine, faCheck } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// Gradient hero band
const heroSnippet = [
    '<div class="rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-10 text-white shadow-xl sm:px-12 sm:py-16">',
    '    <span class="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">New Release</span>',
    '    <h2 class="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">Ship better products, faster</h2>',
    '    <p class="mt-4 max-w-xl text-primary-100">',
    '        Everything your team needs to plan, build, and launch, all in one workspace. No setup required, cancel anytime.',
    '    </p>',
    '    <div class="mt-8 flex flex-wrap gap-3">',
    '        <PrimaryButton class="!bg-white !text-primary-700 hover:!bg-primary-50">Get started free</PrimaryButton>',
    '        <SecondaryButton class="!border-white/40 !bg-transparent !text-white hover:!bg-white/10">Watch demo</SecondaryButton>',
    '    </div>',
    '</div>',
];

// Feature grid
const featureGridSnippet = [
    '<div class="grid grid-cols-1 gap-6 md:grid-cols-3">',
    '    <div v-for="feature in features" :key="feature.title" class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">',
    '        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">',
    '            <NbIcon :name="feature.icon" size="lg" />',
    '        </div>',
    '        <h4 class="text-base font-semibold text-gray-800 dark:text-gray-100">{{ feature.title }}</h4>',
    '        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ feature.copy }}</p>',
    '    </div>',
    '</div>',
];

const features = [
    { icon: faBolt, title: 'Blazing fast', copy: 'Optimized rendering keeps every view snappy, even at scale.' },
    { icon: faShieldHalved, title: 'Secure by default', copy: 'Role-based access and audit logs built in from day one.' },
    { icon: faChartLine, title: 'Actionable insights', copy: 'Real-time dashboards surface what matters most to your team.' },
];

// Alternating image/text feature rows
const featureRowsSnippet = [
    '<div class="space-y-16">',
    '    <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">',
    '        <div class="h-64 rounded-xl bg-gradient-to-br from-primary-400 to-primary-700 lg:h-80"></div>',
    '        <div>',
    '            <h4 class="text-2xl font-bold text-gray-800 dark:text-gray-100">Plan work your whole team can see</h4>',
    '            <p class="mt-3 text-gray-600 dark:text-gray-400">Boards, timelines, and docs stay in sync so nobody works from a stale plan.</p>',
    '            <ul class="mt-5 space-y-2">',
    '                <li v-for="item in planPoints" :key="item" class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">',
    '                    <NbIcon :name="faCheck" class="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />',
    '                    {{ item }}',
    '                </li>',
    '            </ul>',
    '            <PrimaryButton class="mt-6">Explore planning</PrimaryButton>',
    '        </div>',
    '    </div>',
    '',
    '    <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">',
    '        <div class="order-2 lg:order-1">',
    '            <h4 class="text-2xl font-bold text-gray-800 dark:text-gray-100">Ship with confidence</h4>',
    '            <p class="mt-3 text-gray-600 dark:text-gray-400">Automated checks and staged rollouts catch problems before your customers do.</p>',
    '            <ul class="mt-5 space-y-2">',
    '                <li v-for="item in shipPoints" :key="item" class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">',
    '                    <NbIcon :name="faCheck" class="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />',
    '                    {{ item }}',
    '                </li>',
    '            </ul>',
    '            <PrimaryButton class="mt-6">Explore deploys</PrimaryButton>',
    '        </div>',
    '        <div class="order-1 h-64 rounded-xl bg-gradient-to-br from-primary-700 to-primary-400 lg:order-2 lg:h-80"></div>',
    '    </div>',
    '</div>',
];

const planPoints = ['Shared boards with live updates', 'Timelines that flag conflicts early', 'Docs linked directly to tasks'];
const shipPoints = ['One-click staged rollouts', 'Automated pre-flight checks', 'Instant rollback if something breaks'];

// Multi-column footer
const footerSnippet = [
    '<footer class="rounded-lg bg-gray-900 text-gray-300 dark:bg-black">',
    '    <div class="grid grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 sm:px-8 sm:py-12 lg:grid-cols-4">',
    '        <div class="sm:col-span-2 lg:col-span-1">',
    '            <span class="text-lg font-semibold text-white">Acme</span>',
    '            <p class="mt-3 max-w-xs text-sm text-gray-400">Tools for teams who ship. Built for speed, designed to get out of your way.</p>',
    '        </div>',
    '        <div>',
    '            <h5 class="text-sm font-semibold text-white uppercase">Product</h5>',
    '            <ul class="mt-4 space-y-2 text-sm">',
    '                <li><a href="/features" class="hover:text-gray-300">Features</a></li>',
    '                <li><a href="/pricing" class="hover:text-gray-300">Pricing</a></li>',
    '                <li><a href="/changelog" class="hover:text-gray-300">Changelog</a></li>',
    '            </ul>',
    '        </div>',
    '        <div>',
    '            <h5 class="text-sm font-semibold text-white uppercase">Company</h5>',
    '            <ul class="mt-4 space-y-2 text-sm">',
    '                <li><a href="/about" class="hover:text-gray-300">About</a></li>',
    '                <li><a href="/careers" class="hover:text-gray-300">Careers</a></li>',
    '                <li><a href="/contact" class="hover:text-gray-300">Contact</a></li>',
    '            </ul>',
    '        </div>',
    '        <div>',
    '            <h5 class="text-sm font-semibold text-white uppercase">Legal</h5>',
    '            <ul class="mt-4 space-y-2 text-sm">',
    '                <li><a href="/privacy" class="hover:text-gray-300">Privacy</a></li>',
    '                <li><a href="/terms" class="hover:text-gray-300">Terms</a></li>',
    '            </ul>',
    '        </div>',
    '    </div>',
    '    <div class="border-t border-white/10 px-6 py-4 text-xs text-gray-500 sm:px-8">&copy; 2026 Acme, Inc. All rights reserved.</div>',
    '</footer>',
];
</script>

<template>
    <section id="block-marketing">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
            Marketing Sections
        </h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A gradient hero band with an eyebrow pill, headline, supporting copy, and a CTA cluster, composed from PrimaryButton and
                SecondaryButton.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-10 text-white shadow-xl sm:px-12 sm:py-16">
                    <span class="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
                        New Release
                    </span>
                    <h2 class="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">Ship better products, faster</h2>
                    <p class="mt-4 max-w-xl text-primary-100">
                        Everything your team needs to plan, build, and launch, all in one workspace. No setup required, cancel anytime.
                    </p>
                    <div class="mt-8 flex flex-wrap gap-3">
                        <PrimaryButton class="!bg-white !text-primary-700 hover:!bg-primary-50">Get started free</PrimaryButton>
                        <SecondaryButton class="!border-white/40 !bg-transparent !text-white hover:!bg-white/10">
                            Watch demo
                        </SecondaryButton>
                    </div>
                </div>
            </div>
            <CodePreview :code="heroSnippet" filename="MarketingHero.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A three-up feature grid: an icon circle, a title, and a short line of copy per card.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div
                        v-for="feature in features"
                        :key="feature.title"
                        class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
                    >
                        <div
                            class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400"
                        >
                            <NbIcon :name="feature.icon" size="lg" />
                        </div>
                        <h4 class="text-base font-semibold text-gray-800 dark:text-gray-100">{{ feature.title }}</h4>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ feature.copy }}</p>
                    </div>
                </div>
            </div>
            <CodePreview :code="featureGridSnippet" filename="FeatureGrid.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                Alternating image/text feature rows: a gradient placeholder image on one side and a checklist with a CTA on the other, flipped
                on the second row with <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">order-2</code>.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="space-y-16">
                    <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                        <div class="h-64 rounded-xl bg-gradient-to-br from-primary-400 to-primary-700 lg:h-80"></div>
                        <div>
                            <h4 class="text-2xl font-bold text-gray-800 dark:text-gray-100">Plan work your whole team can see</h4>
                            <p class="mt-3 text-gray-600 dark:text-gray-400">
                                Boards, timelines, and docs stay in sync so nobody works from a stale plan.
                            </p>
                            <ul class="mt-5 space-y-2">
                                <li
                                    v-for="item in planPoints"
                                    :key="item"
                                    class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                                >
                                    <NbIcon :name="faCheck" class="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                                    {{ item }}
                                </li>
                            </ul>
                            <PrimaryButton class="mt-6">Explore planning</PrimaryButton>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                        <div class="order-2 lg:order-1">
                            <h4 class="text-2xl font-bold text-gray-800 dark:text-gray-100">Ship with confidence</h4>
                            <p class="mt-3 text-gray-600 dark:text-gray-400">
                                Automated checks and staged rollouts catch problems before your customers do.
                            </p>
                            <ul class="mt-5 space-y-2">
                                <li
                                    v-for="item in shipPoints"
                                    :key="item"
                                    class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                                >
                                    <NbIcon :name="faCheck" class="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                                    {{ item }}
                                </li>
                            </ul>
                            <PrimaryButton class="mt-6">Explore deploys</PrimaryButton>
                        </div>
                        <div class="order-1 h-64 rounded-xl bg-gradient-to-br from-primary-700 to-primary-400 lg:order-2 lg:h-80"></div>
                    </div>
                </div>
            </div>
            <CodePreview :code="featureRowsSnippet" filename="FeatureRows.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A multi-column footer: an about column plus two link columns in a dark band, with a slimmer copyright strip below.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <footer class="rounded-lg bg-gray-900 text-gray-300 dark:bg-black">
                    <div class="grid grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 sm:px-8 sm:py-12 lg:grid-cols-4">
                        <div class="sm:col-span-2 lg:col-span-1">
                            <span class="text-lg font-semibold text-white">Acme</span>
                            <p class="mt-3 max-w-xs text-sm text-gray-400">
                                Tools for teams who ship. Built for speed, designed to get out of your way.
                            </p>
                        </div>
                        <div>
                            <h5 class="text-sm font-semibold text-white uppercase">Product</h5>
                            <ul class="mt-4 space-y-2 text-sm">
                                <li><a href="#" class="hover:text-gray-300" @click.prevent>Features</a></li>
                                <li><a href="#" class="hover:text-gray-300" @click.prevent>Pricing</a></li>
                                <li><a href="#" class="hover:text-gray-300" @click.prevent>Changelog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="text-sm font-semibold text-white uppercase">Company</h5>
                            <ul class="mt-4 space-y-2 text-sm">
                                <li><a href="#" class="hover:text-gray-300" @click.prevent>About</a></li>
                                <li><a href="#" class="hover:text-gray-300" @click.prevent>Careers</a></li>
                                <li><a href="#" class="hover:text-gray-300" @click.prevent>Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="text-sm font-semibold text-white uppercase">Legal</h5>
                            <ul class="mt-4 space-y-2 text-sm">
                                <li><a href="#" class="hover:text-gray-300" @click.prevent>Privacy</a></li>
                                <li><a href="#" class="hover:text-gray-300" @click.prevent>Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-white/10 px-6 py-4 text-xs text-gray-500 sm:px-8">&copy; 2026 Acme, Inc. All rights reserved.</div>
                </footer>
            </div>
            <CodePreview :code="footerSnippet" filename="MarketingFooter.vue" />
        </DocDemoCard>
    </section>
</template>
