<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { CodePreview } from '../../index';
import { NbIcon } from '../../icons';
import { faArrowTrendUp, faArrowTrendDown } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

/* ------------------------------------------------------------------ */
/* Theme plumbing                                                      */
/* ------------------------------------------------------------------ */
/**
 * ApexCharts renders to a detached SVG and cannot resolve Tailwind CSS vars,
 * so the theme scale is hardcoded here (values come from src/main.css).
 */
const brand = {
    primary400: '#72b6be',
    primary600: '#3d808c',
    accent500: '#c0738b',
    info500: '#6262f3',
    warning500: '#e89818',
    gray400: '#9ca3af',
};

/** Tracks the `dark` class the docs toggle puts on <html>. */
const isDark = ref(false);
let observer: MutationObserver | null = null;

onMounted(() => {
    const read = () => (isDark.value = document.documentElement.classList.contains('dark'));
    read();
    observer = new MutationObserver(read);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
});
onBeforeUnmount(() => observer?.disconnect());

/** Options every chart merges in so light/dark both read correctly. */
const themed = computed(() => ({
    mode: isDark.value ? ('dark' as const) : ('light' as const),
    foreColor: isDark.value ? '#9ca3af' : '#6b7280',
    grid: isDark.value ? '#374151' : '#e5e7eb',
}));

/* ------------------------------------------------------------------ */
/* 1. Area / line chart                                                */
/* ------------------------------------------------------------------ */
const areaSeries = [
    { name: 'Revenue', data: [18, 26, 22, 35, 31, 44, 40, 58] },
    { name: 'Costs', data: [12, 15, 16, 19, 20, 24, 23, 28] },
];

const areaOptions = computed(() => ({
    chart: { type: 'area', height: 300, background: 'transparent', foreColor: themed.value.foreColor, toolbar: { show: false }, zoom: { enabled: false } },
    theme: { mode: themed.value.mode },
    colors: [brand.primary600, brand.accent500],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2.5 },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.05, stops: [0, 90, 100] } },
    grid: { borderColor: themed.value.grid, strokeDashArray: 4 },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], axisBorder: { show: false }, axisTicks: { show: false } },
    yaxis: { labels: { formatter: (v: number) => `€${v}k` } },
    legend: { position: 'top', horizontalAlign: 'right' },
    tooltip: { theme: themed.value.mode, y: { formatter: (v: number) => `€${v}k` } },
}));

const areaSnippet = [
    '<VueApexCharts type="area" height="300" width="100%" :options="options" :series="series" />',
    '',
    '<script setup>',
    "import VueApexCharts from 'vue3-apexcharts';",
    '',
    'const series = [',
    "    { name: 'Revenue', data: [18, 26, 22, 35, 31, 44, 40, 58] },",
    "    { name: 'Costs', data: [12, 15, 16, 19, 20, 24, 23, 28] },",
    '];',
    '',
    '// isDark = your dark-mode ref (see the note above the demos)',
    'const options = computed(() => ({',
    "    chart: { type: 'area', background: 'transparent', foreColor: isDark.value ? '#9ca3af' : '#6b7280',",
    '             toolbar: { show: false }, zoom: { enabled: false } },',
    "    theme: { mode: isDark.value ? 'dark' : 'light' },",
    "    colors: ['#3d808c', '#c0738b'], // primary-600 / accent-500",
    '    dataLabels: { enabled: false },',
    "    stroke: { curve: 'smooth', width: 2.5 },",
    "    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.05, stops: [0, 90, 100] } },",
    "    grid: { borderColor: isDark.value ? '#374151' : '#e5e7eb', strokeDashArray: 4 },",
    "    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],",
    '             axisBorder: { show: false }, axisTicks: { show: false } },',
    '    yaxis: { labels: { formatter: (v) => `€${v}k` } },',
    "    legend: { position: 'top', horizontalAlign: 'right' },",
    "    tooltip: { theme: isDark.value ? 'dark' : 'light', y: { formatter: (v) => `€${v}k` } },",
    '}));',
    '<\/script>',
];

/* ------------------------------------------------------------------ */
/* 2. Donut with legend + centre total                                 */
/* ------------------------------------------------------------------ */
const donutSeries = [42, 31, 18, 9];

const donutOptions = computed(() => ({
    chart: { type: 'donut', height: 320, background: 'transparent', foreColor: themed.value.foreColor },
    theme: { mode: themed.value.mode },
    labels: ['Direct', 'Organic search', 'Referral', 'Social'],
    colors: [brand.primary600, brand.accent500, brand.info500, brand.gray400],
    stroke: { width: 0 },
    dataLabels: { enabled: false },
    legend: { position: 'bottom', horizontalAlign: 'center', markers: { size: 6 } },
    plotOptions: {
        pie: {
            donut: {
                size: '70%',
                labels: {
                    show: true,
                    name: { fontSize: '13px' },
                    value: { fontSize: '24px', fontWeight: 700, formatter: (v: string) => `${v}k` },
                    total: { show: true, label: 'Sessions', formatter: (w: any) => `${w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0)}k` },
                },
            },
        },
    },
    tooltip: { theme: themed.value.mode, y: { formatter: (v: number) => `${v}k sessions` } },
}));

const donutSnippet = [
    '<VueApexCharts type="donut" height="320" width="100%" :options="options" :series="series" />',
    '',
    '<script setup>',
    'const series = [42, 31, 18, 9];',
    '',
    'const options = computed(() => ({',
    "    chart: { type: 'donut', background: 'transparent', foreColor: isDark.value ? '#9ca3af' : '#6b7280' },",
    "    theme: { mode: isDark.value ? 'dark' : 'light' },",
    "    labels: ['Direct', 'Organic search', 'Referral', 'Social'],",
    "    colors: ['#3d808c', '#c0738b', '#6262f3', '#9ca3af'],",
    '    stroke: { width: 0 },',
    '    dataLabels: { enabled: false },',
    "    legend: { position: 'bottom', horizontalAlign: 'center', markers: { size: 6 } },",
    '    plotOptions: {',
    '        pie: {',
    '            donut: {',
    "                size: '70%',",
    '                labels: {',
    '                    show: true,',
    "                    name: { fontSize: '13px' },",
    "                    value: { fontSize: '24px', fontWeight: 700, formatter: (v) => `${v}k` },",
    '                    total: {',
    "                        show: true, label: 'Sessions',",
    '                        formatter: (w) => `${w.globals.seriesTotals.reduce((a, b) => a + b, 0)}k`,',
    '                    },',
    '                },',
    '            },',
    '        },',
    '    },',
    "    tooltip: { theme: isDark.value ? 'dark' : 'light', y: { formatter: (v) => `${v}k sessions` } },",
    '}));',
    '<\/script>',
];

/* ------------------------------------------------------------------ */
/* 3. Horizontal bar comparison                                        */
/* ------------------------------------------------------------------ */
const barSeries = [
    { name: 'This quarter', data: [1240, 3180, 2450, 890] },
    { name: 'Last quarter', data: [980, 2740, 2610, 640] },
];

const barOptions = computed(() => ({
    chart: { type: 'bar', height: 300, background: 'transparent', foreColor: themed.value.foreColor, toolbar: { show: false } },
    theme: { mode: themed.value.mode },
    colors: [brand.primary600, brand.primary400],
    plotOptions: { bar: { horizontal: true, borderRadius: 4, barHeight: '65%', borderRadiusApplication: 'end' } },
    dataLabels: { enabled: false },
    grid: { borderColor: themed.value.grid, strokeDashArray: 4, xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } },
    xaxis: { categories: ['Starter', 'Team', 'Business', 'Enterprise'], axisBorder: { show: false }, axisTicks: { show: false } },
    legend: { position: 'top', horizontalAlign: 'right' },
    tooltip: { theme: themed.value.mode, y: { formatter: (v: number) => `${v.toLocaleString()} signups` } },
}));

const barSnippet = [
    '<VueApexCharts type="bar" height="300" width="100%" :options="options" :series="series" />',
    '',
    '<script setup>',
    'const series = [',
    "    { name: 'This quarter', data: [1240, 3180, 2450, 890] },",
    "    { name: 'Last quarter', data: [980, 2740, 2610, 640] },",
    '];',
    '',
    'const options = computed(() => ({',
    "    chart: { type: 'bar', background: 'transparent', foreColor: isDark.value ? '#9ca3af' : '#6b7280',",
    '             toolbar: { show: false } },',
    "    theme: { mode: isDark.value ? 'dark' : 'light' },",
    "    colors: ['#3d808c', '#72b6be'], // primary-600 / primary-400",
    "    plotOptions: { bar: { horizontal: true, borderRadius: 4, barHeight: '65%', borderRadiusApplication: 'end' } },",
    '    dataLabels: { enabled: false },',
    "    grid: { borderColor: isDark.value ? '#374151' : '#e5e7eb', strokeDashArray: 4,",
    '            xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } },',
    "    xaxis: { categories: ['Starter', 'Team', 'Business', 'Enterprise'],",
    '             axisBorder: { show: false }, axisTicks: { show: false } },',
    "    legend: { position: 'top', horizontalAlign: 'right' },",
    "    tooltip: { theme: isDark.value ? 'dark' : 'light', y: { formatter: (v) => `${v.toLocaleString()} signups` } },",
    '}));',
    '<\/script>',
];

/* ------------------------------------------------------------------ */
/* 4. RadialBar rings                                                  */
/* ------------------------------------------------------------------ */
const radialSeries = [72, 45, 91];

const radialOptions = computed(() => ({
    chart: { type: 'radialBar', height: 330, background: 'transparent', foreColor: themed.value.foreColor },
    theme: { mode: themed.value.mode },
    labels: ['Storage', 'Bandwidth', 'Seats'],
    colors: [brand.primary600, brand.info500, brand.warning500],
    stroke: { lineCap: 'round' },
    plotOptions: {
        radialBar: {
            hollow: { size: '38%' },
            track: { background: themed.value.grid, margin: 8 },
            dataLabels: {
                name: { fontSize: '13px' },
                value: { fontSize: '20px', fontWeight: 700, formatter: (v: number) => `${v}%` },
                total: { show: true, label: 'Average', formatter: (w: any) => `${Math.round(w.globals.series.reduce((a: number, b: number) => a + b, 0) / w.globals.series.length)}%` },
            },
        },
    },
    legend: { show: true, position: 'bottom' },
}));

const radialSnippet = [
    '<VueApexCharts type="radialBar" height="330" width="100%" :options="options" :series="series" />',
    '',
    '<script setup>',
    'const series = [72, 45, 91];',
    '',
    'const options = computed(() => ({',
    "    chart: { type: 'radialBar', background: 'transparent', foreColor: isDark.value ? '#9ca3af' : '#6b7280' },",
    "    theme: { mode: isDark.value ? 'dark' : 'light' },",
    "    labels: ['Storage', 'Bandwidth', 'Seats'],",
    "    colors: ['#3d808c', '#6262f3', '#e89818'], // primary-600 / info-500 / warning-500",
    "    stroke: { lineCap: 'round' },",
    '    plotOptions: {',
    '        radialBar: {',
    "            hollow: { size: '38%' },",
    "            track: { background: isDark.value ? '#374151' : '#e5e7eb', margin: 8 },",
    '            dataLabels: {',
    "                name: { fontSize: '13px' },",
    "                value: { fontSize: '20px', fontWeight: 700, formatter: (v) => `${v}%` },",
    '                total: {',
    "                    show: true, label: 'Average',",
    '                    formatter: (w) => `${Math.round(w.globals.series.reduce((a, b) => a + b, 0) / w.globals.series.length)}%`,',
    '                },',
    '            },',
    '        },',
    '    },',
    "    legend: { show: true, position: 'bottom' },",
    '}));',
    '<\/script>',
];

/* ------------------------------------------------------------------ */
/* 5. Sparkline KPI cards                                              */
/* ------------------------------------------------------------------ */
const kpis = [
    { label: 'MRR', value: '€48.2k', delta: '+12.4%', up: true, color: brand.primary600, data: [12, 15, 14, 19, 22, 21, 27, 31] },
    { label: 'Active users', value: '9,142', delta: '+3.1%', up: true, color: brand.info500, data: [40, 38, 44, 43, 49, 52, 51, 57] },
    { label: 'Churn', value: '1.8%', delta: '-0.4pp', up: false, color: brand.accent500, data: [9, 8, 8, 7, 7, 6, 5, 5] },
];

/** One sparkline config per card, no axes, no grid, no toolbar, just the trend. */
function sparkOptions(color: string) {
    // called from the template, so it re-runs whenever `themed` changes
    return {
        chart: { type: 'area', sparkline: { enabled: true }, background: 'transparent' },
        theme: { mode: themed.value.mode },
        colors: [color],
        stroke: { curve: 'smooth', width: 2 },
        fill: { type: 'gradient', gradient: { opacityFrom: 0.4, opacityTo: 0 } },
        tooltip: { enabled: false },
    };
}

const sparkSnippet = [
    '<div class="grid gap-4 sm:grid-cols-3">',
    '    <div v-for="k in kpis" :key="k.label"',
    '         class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">',
    '        <p class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ k.label }}</p>',
    '        <p class="mt-1 text-xl font-bold text-gray-900 dark:text-gray-100">{{ k.value }}</p>',
    '        <p class="text-xs" :class="k.up ? \'text-success-600\' : \'text-danger-600\'">{{ k.delta }}</p>',
    '        <VueApexCharts type="area" height="56" width="100%"',
    '                       :options="sparkOptions(k.color)" :series="[{ name: k.label, data: k.data }]" />',
    '    </div>',
    '</div>',
    '',
    '<script setup>',
    'const kpis = [',
    "    { label: 'MRR', value: '€48.2k', delta: '+12.4%', up: true, color: '#3d808c', data: [12, 15, 14, 19, 22, 21, 27, 31] },",
    "    { label: 'Active users', value: '9,142', delta: '+3.1%', up: true, color: '#6262f3', data: [40, 38, 44, 43, 49, 52, 51, 57] },",
    "    { label: 'Churn', value: '1.8%', delta: '-0.4pp', up: false, color: '#c0738b', data: [9, 8, 8, 7, 7, 6, 5, 5] },",
    '];',
    '',
    '// sparkline.enabled strips axes, grid, padding and toolbar in one flag',
    'const sparkOptions = (color) => ({',
    "    chart: { type: 'area', sparkline: { enabled: true }, background: 'transparent' },",
    "    theme: { mode: isDark.value ? 'dark' : 'light' },",
    '    colors: [color],',
    "    stroke: { curve: 'smooth', width: 2 },",
    "    fill: { type: 'gradient', gradient: { opacityFrom: 0.4, opacityTo: 0 } },",
    '    tooltip: { enabled: false },',
    '});',
    '<\/script>',
];

/* Remounting on theme flip is cheaper than patching every colour option. */
const themeKey = computed(() => themed.value.mode);
</script>

<template>
    <section id="block-charts">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Charts &amp; Data Viz</h3>

        <p class="mb-6 text-gray-600 dark:text-gray-400">
            These recipes use
            <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">apexcharts</code>
            with the
            <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">vue3-apexcharts</code>
            wrapper, install it with
            <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">npm i apexcharts vue3-apexcharts</code>,
            then import the component locally in whichever SFC needs it. Apex renders to a detached SVG and cannot resolve Tailwind CSS variables, so the
            <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">primary-*</code> hex values are passed
            straight into <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">colors</code>. Every chart below is built from a
            <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">computed</code> that reads an <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">isDark</code> ref (a
            <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">MutationObserver</code> on <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">documentElement.classList</code>), so flipping the docs dark
            toggle rebuilds <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">theme.mode</code>, <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">foreColor</code> and the grid colours in place.
        </p>

        <!-- 1. Area / line chart -->
        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                Two series on a smooth-curve area chart with a gradient fill that fades to transparent. The toolbar and zoom are off, dashboard charts are read,
                not operated.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-baseline justify-between">
                        <h4 class="text-sm font-semibold text-gray-800 dark:text-gray-100">Monthly revenue</h4>
                        <span class="text-xs text-gray-500 dark:text-gray-400">Jan, Aug 2025</span>
                    </div>
                    <VueApexCharts :key="themeKey" type="area" height="300" width="100%" :options="areaOptions" :series="areaSeries" />
                </div>
            </div>
            <CodePreview :code="areaSnippet" filename="AreaChart.vue" />
        </DocDemoCard>

        <!-- 2. Donut -->
        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A donut with a bottom legend and a running total in the hollow, produced by
                <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">plotOptions.pie.donut.labels.total</code>, no overlay markup needed.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                    <h4 class="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-100">Traffic sources</h4>
                    <VueApexCharts :key="themeKey" type="donut" height="320" width="100%" :options="donutOptions" :series="donutSeries" />
                </div>
            </div>
            <CodePreview :code="donutSnippet" filename="DonutChart.vue" />
        </DocDemoCard>

        <!-- 3. Horizontal bars -->
        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                Horizontal bars compare two periods per category. Long category labels stay readable this way, which is the whole reason to turn a column chart on
                its side.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                    <h4 class="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-100">Signups by plan</h4>
                    <VueApexCharts :key="themeKey" type="bar" height="300" width="100%" :options="barOptions" :series="barSeries" />
                </div>
            </div>
            <CodePreview :code="barSnippet" filename="BarComparison.vue" />
        </DocDemoCard>

        <!-- 4. RadialBar rings -->
        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                Three quota metrics as concentric <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">radialBar</code> rings. The centre label cycles per ring on hover and falls back
                to the average.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                    <h4 class="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-100">Plan usage</h4>
                    <VueApexCharts :key="themeKey" type="radialBar" height="330" width="100%" :options="radialOptions" :series="radialSeries" />
                </div>
            </div>
            <CodePreview :code="radialSnippet" filename="RadialRings.vue" />
        </DocDemoCard>

        <!-- 5. Sparkline KPI cards -->
        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">chart.sparkline.enabled</code> strips axes, grid, padding and toolbar in a single flag, which is exactly what a stat
                card wants below its number.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div v-for="k in kpis" :key="k.label" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                        <p class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ k.label }}</p>
                        <p class="mt-1 text-xl font-bold text-gray-900 dark:text-gray-100">{{ k.value }}</p>
                        <p
                            class="mt-0.5 flex items-center gap-1 text-xs"
                            :class="k.up ? 'text-success-600 dark:text-success-400' : 'text-danger-600 dark:text-danger-400'"
                        >
                            <NbIcon :name="k.up ? faArrowTrendUp : faArrowTrendDown" class="h-3 w-3" />
                            {{ k.delta }}
                        </p>
                        <VueApexCharts
                            :key="themeKey"
                            type="area"
                            height="56"
                            width="100%"
                            :options="sparkOptions(k.color)"
                            :series="[{ name: k.label, data: k.data }]"
                        />
                    </div>
                </div>
            </div>
            <CodePreview :code="sparkSnippet" filename="SparklineStatCards.vue" />
        </DocDemoCard>
    </section>
</template>
