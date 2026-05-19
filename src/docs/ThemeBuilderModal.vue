<script setup lang="ts">
import { ref, computed } from 'vue';
import { NewModal, PrimaryButton, SecondaryButton } from '../index';
import { useThemeBuilder, type ColorName } from './composables/useThemeBuilder';

const {
    state,
    isModalOpen,
    shades,
    setColorAnchor,
    setColorShade,
    resetAll,
    resetColor,
    tailwindConfigSnippet,
} = useThemeBuilder();

const COLOR_NAMES: ColorName[] = ['primary', 'accent', 'danger', 'warning', 'success', 'info'];
type Tab = 'colors' | 'typography' | 'layout' | 'effects' | 'breakpoints';
const tab = ref<Tab>('colors');

const tabs: { id: Tab; label: string }[] = [
    { id: 'colors',      label: 'Colors' },
    { id: 'typography',  label: 'Typography' },
    { id: 'layout',      label: 'Layout' },
    { id: 'effects',     label: 'Effects' },
    { id: 'breakpoints', label: 'Breakpoints' },
];

// Track which color's per-shade panel is open
const expandedColor = ref<ColorName | null>(null);
function toggleColor(name: ColorName): void {
    expandedColor.value = expandedColor.value === name ? null : name;
}

const copyStatus = ref<'idle' | 'copied' | 'failed'>('idle');
async function copySnippet(): Promise<void> {
    try {
        await navigator.clipboard.writeText(tailwindConfigSnippet.value);
        copyStatus.value = 'copied';
    } catch {
        copyStatus.value = 'failed';
    }
    setTimeout(() => (copyStatus.value = 'idle'), 2000);
}

const previewLines = computed(() => tailwindConfigSnippet.value.split('\n').slice(0, 16));
</script>

<template>
    <NewModal v-model="isModalOpen" title="Theme builder" size="2xl">
        <div class="flex flex-col gap-4">
            <!-- Tabs -->
            <div class="flex flex-wrap gap-1 border-b border-gray-200 dark:border-gray-700">
                <button
                    v-for="t in tabs"
                    :key="t.id"
                    type="button"
                    @click="tab = t.id"
                    class="-mb-px border-b-2 px-3 py-1.5 text-sm font-medium transition-colors"
                    :class="tab === t.id
                        ? 'border-primary-600 text-primary-600 dark:border-primary-300 dark:text-primary-300'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'"
                >
                    {{ t.label }}
                </button>
            </div>

            <!-- COLORS ============================================== -->
            <div v-if="tab === 'colors'" class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Pick a base for each colour. The 50–950 scale is derived automatically (lighter shades mix toward white,
                    darker toward black). Expand a row to override individual shades.
                </p>

                <div
                    v-for="name in COLOR_NAMES"
                    :key="name"
                    class="rounded-lg border border-gray-200 dark:border-gray-700"
                >
                    <div class="flex items-center gap-3 p-3">
                        <div
                            class="h-10 w-10 flex-shrink-0 rounded-md border border-black/10 dark:border-white/10"
                            :style="{ background: state.colors[name][500] }"
                        />
                        <div class="min-w-0 flex-1">
                            <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">{{ name }}</div>
                            <div class="text-xs text-gray-500 dark:text-gray-400">base (500): {{ state.colors[name][500] }}</div>
                        </div>
                        <input
                            type="color"
                            :value="state.colors[name][500]"
                            @input="setColorAnchor(name, ($event.target as HTMLInputElement).value)"
                            class="h-10 w-10 cursor-pointer rounded border border-gray-300 dark:border-gray-600"
                            aria-label="Base colour"
                        />
                        <input
                            type="text"
                            :value="state.colors[name][500]"
                            @change="setColorAnchor(name, ($event.target as HTMLInputElement).value)"
                            class="w-24 rounded border border-gray-300 px-2 py-1 font-mono text-xs dark:border-gray-600 dark:bg-gray-800"
                            aria-label="Base colour hex"
                        />
                        <button
                            type="button"
                            @click="toggleColor(name)"
                            class="text-xs text-primary-600 underline dark:text-primary-300"
                        >
                            {{ expandedColor === name ? 'collapse' : 'edit scale' }}
                        </button>
                        <button
                            type="button"
                            @click="resetColor(name)"
                            class="text-xs text-gray-500 underline hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            reset
                        </button>
                    </div>

                    <!-- Per-shade panel -->
                    <div
                        v-if="expandedColor === name"
                        class="grid grid-cols-2 gap-2 border-t border-gray-200 p-3 sm:grid-cols-4 lg:grid-cols-6 dark:border-gray-700"
                    >
                        <div v-for="shade in shades" :key="shade" class="flex items-center gap-2">
                            <input
                                type="color"
                                :value="state.colors[name][shade]"
                                @input="setColorShade(name, shade, ($event.target as HTMLInputElement).value)"
                                class="h-6 w-6 cursor-pointer rounded border border-gray-300 dark:border-gray-600"
                                :aria-label="`${name} ${shade}`"
                            />
                            <div class="min-w-0 flex-1">
                                <div class="text-xs font-medium text-gray-700 dark:text-gray-200">{{ shade }}</div>
                                <div class="truncate font-mono text-[10px] text-gray-500 dark:text-gray-400">
                                    {{ state.colors[name][shade] }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Plain colors -->
                <div class="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
                    <div class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Plain tokens</div>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2">
                            <input
                                type="color"
                                v-model="state.dark"
                                class="h-9 w-9 cursor-pointer rounded border border-gray-300 dark:border-gray-600"
                                aria-label="dark"
                            />
                            <div class="flex flex-col">
                                <span class="text-sm font-medium text-gray-700 dark:text-gray-200">dark</span>
                                <span class="font-mono text-xs text-gray-500 dark:text-gray-400">{{ state.dark }}</span>
                            </div>
                        </label>
                        <label class="flex items-center gap-2">
                            <input
                                type="color"
                                v-model="state.muted"
                                class="h-9 w-9 cursor-pointer rounded border border-gray-300 dark:border-gray-600"
                                aria-label="muted"
                            />
                            <div class="flex flex-col">
                                <span class="text-sm font-medium text-gray-700 dark:text-gray-200">muted</span>
                                <span class="font-mono text-xs text-gray-500 dark:text-gray-400">{{ state.muted }}</span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <!-- TYPOGRAPHY ========================================== -->
            <div v-if="tab === 'typography'" class="space-y-4">
                <div class="grid gap-3 sm:grid-cols-2">
                    <label class="flex flex-col gap-1">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Sans family</span>
                        <input
                            type="text"
                            v-model="state.fontSans"
                            class="rounded border border-gray-300 px-2 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-800"
                        />
                    </label>
                    <label class="flex flex-col gap-1">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Open Sans family</span>
                        <input
                            type="text"
                            v-model="state.fontSerif"
                            class="rounded border border-gray-300 px-2 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-800"
                        />
                    </label>
                </div>
                <div class="grid gap-3 sm:grid-cols-4">
                    <label v-for="(_, key) in state.fontSize" :key="key" class="flex flex-col gap-1">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">text-{{ key }}</span>
                        <input
                            type="text"
                            v-model="state.fontSize[key]"
                            class="rounded border border-gray-300 px-2 py-1.5 font-mono text-sm dark:border-gray-600 dark:bg-gray-800"
                        />
                    </label>
                </div>
                <div class="rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Sans preview</div>
                    <div class="mt-1 font-sans" style="font-family: var(--font-sans, sans-serif)">The quick brown fox jumps over the lazy dog</div>
                    <div class="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Open Sans preview</div>
                    <div class="mt-1" style="font-family: var(--font-opensans, sans-serif)">The quick brown fox jumps over the lazy dog</div>
                </div>
            </div>

            <!-- LAYOUT (radius) ===================================== -->
            <div v-if="tab === 'layout'" class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-400">Border-radius scale.</p>
                <div class="grid gap-3 sm:grid-cols-2">
                    <label v-for="(_, key) in state.radius" :key="key" class="flex flex-col gap-1">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">rounded-{{ key === 'default' ? '(default)' : key }}</span>
                        <div class="flex items-center gap-3">
                            <input
                                type="text"
                                v-model="state.radius[key]"
                                class="flex-1 rounded border border-gray-300 px-2 py-1.5 font-mono text-sm dark:border-gray-600 dark:bg-gray-800"
                            />
                            <div
                                class="h-10 w-10 bg-primary-500"
                                :style="{ borderRadius: state.radius[key] }"
                                aria-label="preview"
                            />
                        </div>
                    </label>
                </div>
            </div>

            <!-- EFFECTS (shadow) ==================================== -->
            <div v-if="tab === 'effects'" class="space-y-3">
                <label class="flex flex-col gap-1">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">shadow (default)</span>
                    <input
                        type="text"
                        v-model="state.shadow"
                        class="rounded border border-gray-300 px-2 py-1.5 font-mono text-xs dark:border-gray-600 dark:bg-gray-800"
                    />
                </label>
                <div class="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900/40">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Preview</div>
                    <div class="mt-3 inline-block rounded-md bg-white px-6 py-4 text-sm dark:bg-gray-800" :style="{ boxShadow: state.shadow }">
                        Card with current shadow
                    </div>
                </div>
            </div>

            <!-- BREAKPOINTS ========================================= -->
            <div v-if="tab === 'breakpoints'" class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Min-widths for each breakpoint. The package also defines <code>xxs</code>, <code>xs</code>, <code>laptop</code>, and <code>3xl</code> — left alone here.
                </p>
                <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    <label v-for="(_, key) in state.screens" :key="key" class="flex flex-col gap-1">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ key }}</span>
                        <input
                            type="text"
                            v-model="state.screens[key]"
                            class="rounded border border-gray-300 px-2 py-1.5 font-mono text-sm dark:border-gray-600 dark:bg-gray-800"
                        />
                    </label>
                </div>
            </div>

            <!-- OUTPUT PREVIEW ====================================== -->
            <div class="rounded-lg border border-gray-200 bg-gray-900 p-3 text-gray-100 dark:border-gray-700">
                <div class="mb-2 flex items-center justify-between">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-400">tailwind.config.js (preview)</div>
                    <button
                        type="button"
                        @click="copySnippet"
                        class="rounded bg-primary-600 px-3 py-1 text-xs font-medium text-white hover:bg-primary-700"
                    >
                        {{ copyStatus === 'copied' ? '✓ Copied' : copyStatus === 'failed' ? '✗ Failed' : 'Copy full snippet' }}
                    </button>
                </div>
                <pre class="overflow-x-auto whitespace-pre font-mono text-[11px] leading-snug"><code>{{ previewLines.join('\n') }}<span v-if="previewLines.length < tailwindConfigSnippet.split('\n').length">
…</span></code></pre>
            </div>
        </div>

        <template #footer>
            <div class="flex items-center justify-between">
                <button
                    type="button"
                    @click="resetAll"
                    class="text-sm text-gray-500 underline hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                    Reset to defaults
                </button>
                <SecondaryButton @click="isModalOpen = false">Close</SecondaryButton>
            </div>
        </template>
    </NewModal>
</template>
