<script setup lang="ts">
import { ref } from 'vue';
import { NewModal, SecondaryButton, CodePreview } from '../index';
import { useThemeBuilder, type ColorName } from './composables/useThemeBuilder';

const {
    state,
    isModalOpen,
    shades,
    defaultShadeFor,
    setColorAnchor,
    setColorShade,
    resetAll,
    resetColor,
    activeSnippet,
    activeFilename,
} = useThemeBuilder();

const COLOR_NAMES: ColorName[] = ['primary', 'accent', 'danger', 'warning', 'success', 'info'];
type Tab = 'colors' | 'typography' | 'layout' | 'effects' | 'breakpoints' | 'motion';
const tab = ref<Tab>('colors');

const tabs: { id: Tab; label: string }[] = [
    { id: 'colors',      label: 'Colors' },
    { id: 'typography',  label: 'Typography' },
    { id: 'layout',      label: 'Layout' },
    { id: 'effects',     label: 'Effects' },
    { id: 'breakpoints', label: 'Breakpoints' },
    { id: 'motion',      label: 'Motion' },
];

const expandedColor = ref<ColorName | null>(null);
function toggleColor(name: ColorName): void {
    expandedColor.value = expandedColor.value === name ? null : name;
}

// Vue's template parser doesn't accept `as` casts in inline expressions,
// so extract event handlers and do the typing here.
function onAnchorInput(name: ColorName, e: Event): void {
    setColorAnchor(name, (e.target as HTMLInputElement).value);
}
function onShadeInput(name: ColorName, shade: typeof shades[number], e: Event): void {
    setColorShade(name, shade, (e.target as HTMLInputElement).value);
}

function onMotionEasingInput(e: Event): void {
    state.motion.easing = (e.target as HTMLInputElement).value;
}
function onMotionDurationQuickInput(e: Event): void {
    state.motion.durationQuick = (e.target as HTMLInputElement).value;
}
function onMotionDurationBaseInput(e: Event): void {
    state.motion.durationBase = (e.target as HTMLInputElement).value;
}

</script>

<template>
    <NewModal v-model="isModalOpen" title="Theme builder" size="3xl">
        <div class="flex flex-col gap-5">
            <!-- Tabs -->
            <div class="flex flex-wrap gap-1 border-b border-gray-200 dark:border-gray-700">
                <button
                    v-for="t in tabs"
                    :key="t.id"
                    type="button"
                    @click="tab = t.id"
                    class="-mb-px border-b-2 px-4 py-2 text-sm font-medium transition-colors"
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
                    Pick a base for each colour. The 50&ndash;950 scale is derived automatically (lighter shades mix toward white,
                    darker toward black). Expand a row to override individual shades.
                </p>

                <div
                    v-for="name in COLOR_NAMES"
                    :key="name"
                    class="overflow-hidden rounded-lg border border-gray-200 transition-shadow dark:border-gray-700"
                    :class="expandedColor === name ? 'shadow-md' : 'hover:shadow-sm'"
                >
                    <!-- Row -->
                    <div class="flex items-center gap-3 bg-white p-3 dark:bg-gray-800/40">
                        <div
                            class="h-12 w-12 flex-shrink-0 rounded-md ring-1 ring-black/10 dark:ring-white/10"
                            :style="{ background: state.colors[name][500] }"
                        />
                        <div class="min-w-0 flex-1">
                            <div class="text-sm font-semibold capitalize text-gray-900 dark:text-gray-100">{{ name }}</div>
                            <div class="text-xs text-gray-500 dark:text-gray-400">
                                base 500 · DEFAULT = {{ defaultShadeFor[name] }} = <span class="font-mono">{{ state.colors[name][defaultShadeFor[name]] }}</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <input
                                type="color"
                                :value="state.colors[name][500]"
                                @input="onAnchorInput(name, $event)"
                                class="h-9 w-9 cursor-pointer rounded border border-gray-300 dark:border-gray-600"
                                aria-label="Base colour picker"
                            />
                            <input
                                type="text"
                                :value="state.colors[name][500]"
                                @change="onAnchorInput(name, $event)"
                                class="w-24 rounded border border-gray-300 px-2 py-1 font-mono text-xs dark:border-gray-600 dark:bg-gray-800"
                                aria-label="Base colour hex"
                            />
                            <button
                                type="button"
                                @click="toggleColor(name)"
                                class="rounded px-2 py-1 text-xs font-medium text-primary-600 hover:bg-primary-50 dark:text-primary-300 dark:hover:bg-primary-900/30"
                            >
                                {{ expandedColor === name ? 'collapse' : 'edit scale' }}
                            </button>
                            <button
                                type="button"
                                @click="resetColor(name)"
                                class="rounded px-2 py-1 text-xs text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                            >
                                reset
                            </button>
                        </div>
                    </div>

                    <!-- Per-shade panel -->
                    <div
                        v-if="expandedColor === name"
                        class="grid grid-cols-2 gap-2 border-t border-gray-200 bg-gray-50 p-3 sm:grid-cols-4 lg:grid-cols-6 dark:border-gray-700 dark:bg-gray-900/40"
                    >
                        <div v-for="shade in shades" :key="shade" class="flex items-center gap-2">
                            <input
                                type="color"
                                :value="state.colors[name][shade]"
                                @input="onShadeInput(name, shade, $event)"
                                class="h-7 w-7 cursor-pointer rounded border border-gray-300 dark:border-gray-600"
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

                <!-- Plain tokens -->
                <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/40">
                    <div class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Plain tokens</div>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-3">
                            <input
                                type="color"
                                v-model="state.dark"
                                class="h-10 w-10 cursor-pointer rounded border border-gray-300 dark:border-gray-600"
                                aria-label="dark"
                            />
                            <div class="min-w-0 flex-1">
                                <div class="text-sm font-medium text-gray-700 dark:text-gray-200">dark</div>
                                <div class="font-mono text-xs text-gray-500 dark:text-gray-400">{{ state.dark }}</div>
                            </div>
                        </label>
                        <label class="flex items-center gap-3">
                            <input
                                type="color"
                                v-model="state.muted"
                                class="h-10 w-10 cursor-pointer rounded border border-gray-300 dark:border-gray-600"
                                aria-label="muted"
                            />
                            <div class="min-w-0 flex-1">
                                <div class="text-sm font-medium text-gray-700 dark:text-gray-200">muted</div>
                                <div class="font-mono text-xs text-gray-500 dark:text-gray-400">{{ state.muted }}</div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <!-- TYPOGRAPHY ========================================== -->
            <div v-if="tab === 'typography'" class="space-y-4">
                <div class="grid gap-3 sm:grid-cols-2">
                    <label class="flex flex-col gap-1.5">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Sans family</span>
                        <input
                            type="text"
                            v-model="state.fontSans"
                            class="rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800"
                        />
                    </label>
                    <label class="flex flex-col gap-1.5">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Open Sans family</span>
                        <input
                            type="text"
                            v-model="state.fontSerif"
                            class="rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800"
                        />
                    </label>
                </div>

                <div class="grid gap-3 sm:grid-cols-4">
                    <label v-for="(_, key) in state.fontSize" :key="key" class="flex flex-col gap-1.5">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">text-{{ key }}</span>
                        <input
                            type="text"
                            v-model="state.fontSize[key]"
                            class="rounded-md border border-gray-300 px-3 py-2 font-mono text-sm dark:border-gray-600 dark:bg-gray-800"
                        />
                    </label>
                </div>

                <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                    <div class="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Sans preview</div>
                    <div style="font-family: var(--font-sans, sans-serif)" class="text-base">The quick brown fox jumps over the lazy dog</div>
                    <div class="mt-3 mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Open Sans preview</div>
                    <div style="font-family: var(--font-opensans, sans-serif)" class="text-base">The quick brown fox jumps over the lazy dog</div>
                </div>
            </div>

            <!-- LAYOUT (radius) ===================================== -->
            <div v-if="tab === 'layout'" class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-400">Border-radius scale used by buttons, cards, inputs, etc.</p>
                <div class="grid gap-3 sm:grid-cols-2">
                    <label v-for="(_, key) in state.radius" :key="key" class="flex items-center gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-700">
                        <div
                            class="h-12 w-12 flex-shrink-0 bg-primary-500"
                            :style="{ borderRadius: state.radius[key] }"
                            aria-label="preview"
                        />
                        <div class="min-w-0 flex-1">
                            <div class="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                rounded-{{ key === 'default' ? '(default)' : key }}
                            </div>
                            <input
                                type="text"
                                v-model="state.radius[key]"
                                class="w-full rounded border border-gray-300 px-2 py-1 font-mono text-sm dark:border-gray-600 dark:bg-gray-800"
                            />
                        </div>
                    </label>
                </div>
            </div>

            <!-- EFFECTS (shadow) ==================================== -->
            <div v-if="tab === 'effects'" class="space-y-3">
                <label class="flex flex-col gap-1.5">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">shadow (DEFAULT)</span>
                    <input
                        type="text"
                        v-model="state.shadow"
                        class="rounded-md border border-gray-300 px-3 py-2 font-mono text-xs dark:border-gray-600 dark:bg-gray-800"
                    />
                </label>
                <div class="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-900/40">
                    <div class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Preview</div>
                    <div class="inline-block rounded-md bg-white px-6 py-4 text-sm dark:bg-gray-800" :style="{ boxShadow: state.shadow }">
                        Card with current shadow
                    </div>
                </div>
            </div>

            <!-- BREAKPOINTS ========================================= -->
            <div v-if="tab === 'breakpoints'" class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Min-widths for each breakpoint. The package also defines <code>xxs</code>, <code>xs</code>, <code>laptop</code>, and <code>3xl</code> &mdash; left alone here.
                </p>
                <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    <label v-for="(_, key) in state.screens" :key="key" class="flex flex-col gap-1.5">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ key }}</span>
                        <input
                            type="text"
                            v-model="state.screens[key]"
                            class="rounded-md border border-gray-300 px-3 py-2 font-mono text-sm dark:border-gray-600 dark:bg-gray-800"
                        />
                    </label>
                </div>
            </div>

            <!-- MOTION ============================================= -->
            <div v-if="tab === 'motion'" class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Easing curve and durations used by every component animation.
                </p>

                <label class="flex flex-col gap-1">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Easing (cubic-bezier)</span>
                    <input
                        type="text"
                        :value="state.motion.easing"
                        @input="onMotionEasingInput"
                        class="rounded-md border border-gray-300 bg-white px-3 py-2 font-mono text-sm dark:border-gray-600 dark:bg-gray-900"
                        placeholder="cubic-bezier(0.16, 1, 0.3, 1)"
                    />
                </label>

                <div class="grid gap-3 sm:grid-cols-2">
                    <label class="flex flex-col gap-1">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Duration - quick</span>
                        <input
                            type="text"
                            :value="state.motion.durationQuick"
                            @input="onMotionDurationQuickInput"
                            class="rounded-md border border-gray-300 bg-white px-3 py-2 font-mono text-sm dark:border-gray-600 dark:bg-gray-900"
                            placeholder="150ms"
                        />
                    </label>
                    <label class="flex flex-col gap-1">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Duration - base</span>
                        <input
                            type="text"
                            :value="state.motion.durationBase"
                            @input="onMotionDurationBaseInput"
                            class="rounded-md border border-gray-300 bg-white px-3 py-2 font-mono text-sm dark:border-gray-600 dark:bg-gray-900"
                            placeholder="400ms"
                        />
                    </label>
                </div>

                <!-- Live preview swatch -->
                <div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                    <div class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Preview</div>
                    <div
                        class="h-3 w-12 rounded-full bg-primary-500"
                        style="animation: motionPreview var(--duration-base) var(--ease-emphasised) infinite alternate"
                    />
                </div>
            </div>

            <!-- OUTPUT PREVIEW ====================================== -->
            <CodePreview
                :code="activeSnippet.split('\n')"
                language="css"
                :filename="activeFilename"
            />
        </div>

        <template #footer>
            <div class="flex items-center justify-between">
                <SecondaryButton @click="resetAll">Reset to defaults</SecondaryButton>
                <div class="flex items-center gap-3">
                    <span class="text-xs text-gray-500 dark:text-gray-400">Edits auto-save to your browser</span>
                    <SecondaryButton @click="isModalOpen = false">Close</SecondaryButton>
                </div>
            </div>
        </template>
    </NewModal>
</template>

<style>
@keyframes motionPreview {
    from { transform: translateX(0); }
    to   { transform: translateX(200px); }
}
</style>
