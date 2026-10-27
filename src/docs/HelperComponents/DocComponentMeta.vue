<script setup lang="ts">
import { InlineCode } from '../../index';
/**
 * DocComponentMeta - Parts and Motion tables for the components on a docs page.
 *
 * Reads `src/docs/generated/component-meta.json`, which `npm run nb:docs:llms`
 * builds from the `@part` / `@motion` tags in each component, so the tables
 * can't drift from the source.
 */
import meta from '../generated/component-meta.json';

interface Props {
    /** Component names, in the order to show them. */
    names: string[];
}

defineProps<Props>();

type Meta = { parts: { name: string; description: string }[]; classPart: string; motion: { level: string; description: string }[] };
const all = meta as Record<string, Meta>;

const LEVELS = ['off', 'simple', 'smooth', 'fancy'];
const motionRows = (m: Meta) => {
    const all = m.motion.find((row) => row.level === 'all');
    const own = m.motion.filter((row) => row.level !== 'all');
    if (!own.length) return [{ level: 'all levels', description: all?.description ?? '' }];
    return [
        ...LEVELS.filter((level) => own.some((row) => row.level === level)).map((level) => own.find((row) => row.level === level)!),
        ...(all ? [{ level: 'all levels', description: all.description }] : []),
    ];
};
</script>

<template>
    <section id="parts-and-motion">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Parts and motion</h3>
        <p class="mb-6 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
            Style a part with <InlineCode>:ui="{ part: '...' }"</InlineCode> on one instance, or app-wide with
            the <InlineCode>ui</InlineCode> plugin option. See Customizing for the precedence and the motion levels.
        </p>
        <div class="grid gap-6 lg:grid-cols-2">
            <div
                v-for="name in names.filter((n) => all[n])"
                :key="name"
                class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                data-skip-anchor
            >
                <h4 class="mb-2 font-mono text-base font-semibold text-gray-900 dark:text-gray-100">{{ name }}</h4>
                <table class="mb-4 w-full text-left text-sm">
                    <thead class="text-xs tracking-wider text-gray-500 uppercase dark:text-gray-400">
                        <tr>
                            <th class="py-1 pr-4 font-medium">Part</th>
                            <th class="py-1 font-medium">Element</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                        <tr v-for="part in all[name].parts" :key="part.name">
                            <td class="py-1 pr-4 align-top font-mono text-gray-900 dark:text-gray-100">
                                {{ part.name }}
                                <span v-if="part.name === all[name].classPart" class="text-primary-600 dark:text-primary-300 ml-1 font-sans text-xs">class</span>
                            </td>
                            <td class="py-1 text-gray-600 dark:text-gray-300">{{ part.description }}</td>
                        </tr>
                    </tbody>
                </table>
                <table class="w-full text-left text-sm">
                    <thead class="text-xs tracking-wider text-gray-500 uppercase dark:text-gray-400">
                        <tr>
                            <th class="py-1 pr-4 font-medium">Motion</th>
                            <th class="py-1 font-medium">Behaviour</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                        <tr v-for="row in motionRows(all[name])" :key="row.level">
                            <td class="py-1 pr-4 align-top font-mono whitespace-nowrap text-gray-900 dark:text-gray-100">{{ row.level }}</td>
                            <td class="py-1 text-gray-600 dark:text-gray-300">{{ row.description }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>
