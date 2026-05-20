<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue';
import { NbIcon } from '../icons';
import { useDarkMode } from '../composables/useDarkMode';

// Import documentation components
import SetupDoc from './SetupDoc.vue';
import IconsDoc from './IconsDoc.vue';
import ThemeDoc from './ThemeDoc.vue';
import InputsDoc from './InputsDoc.vue';
import ButtonsDoc from './ButtonsDoc.vue';
import TablesDoc from './TablesDoc.vue';
import ModalsDoc from './ModalsDoc.vue';
import NavigationDoc from './NavigationDoc.vue';
import LayoutDoc from './LayoutDoc.vue';
import UtilityDoc from './UtilityDoc.vue';
import ThemeBuilderModal from './ThemeBuilderModal.vue';
import { useThemeBuilder } from './composables/useThemeBuilder';

const { isModalOpen: isThemeBuilderOpen } = useThemeBuilder();

// Current active section
const activeSection = ref<string>('setup');

// Available documentation sections - Setup ships first so newcomers can install before exploring.
const sections: Record<string, { component: any; title: string }> = {
    setup: { component: SetupDoc, title: 'Getting Started' },
    icons: { component: IconsDoc, title: 'Icons' },
    theme: { component: ThemeDoc, title: 'Theme & Tokens' },
    inputs: { component: InputsDoc, title: 'Input Components' },
    buttons: { component: ButtonsDoc, title: 'Button Components' },
    tables: { component: TablesDoc, title: 'Table Components' },
    modals: { component: ModalsDoc, title: 'Modal Components' },
    navigation: { component: NavigationDoc, title: 'Navigation Components' },
    layout: { component: LayoutDoc, title: 'Layout Components' },
    utilities: { component: UtilityDoc, title: 'Utility Components' },
};

// Dark-mode plumbing - drives the toggle and persists user choice.
const { isDark, toggle, initialize } = useDarkMode();
onMounted(() => {
    initialize();
});

const currentComponent = computed(() => sections[activeSection.value]?.component || SetupDoc);

// ========== URL hash + anchor sub-navigation ==========================
//
// Each doc page exposes its h2/h3 headings as sidebar sub-items under the
// active section. We do this dynamically from the DOM so individual doc
// pages don't need to register anything special - just write normal Vue
// templates with <h2>, <h3>.

interface Heading {
    id: string;
    text: string;
    level: number; // 2 or 3
}

const headings = ref<Heading[]>([]);
const activeAnchor = ref<string>('');

function slugify(text: string): string {
    return text
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]+/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

async function refreshHeadings(): Promise<void> {
    await nextTick();
    const main = document.querySelector('main');
    if (!main) {
        headings.value = [];
        return;
    }

    const found = main.querySelectorAll(
        'section[id] > h2, section[id] > h3, h2[id], h3[id]'
    );
    const seen = new Map<string, number>();
    const list: Heading[] = [];

    found.forEach((el) => {
        // Skip headings that live inside a modal portal/teleport target etc.
        if ((el as HTMLElement).closest('[data-skip-anchor]')) return;

        const text = (el.textContent || '').replace(/#\s*$/, '').trim();
        if (!text) return;

        // Skip prop-table heading clutter ("Foo Props & Parameters", etc.).
        // The component docs use these for the PropsTable sub-section under each
        // component - useful in-page but noisy in the sidebar.
        if (/\b(props|parameters)\b/i.test(text)) return;

        let id = el.id;
        if (!id) {
            const base = slugify(text) || 'section';
            const n = (seen.get(base) || 0) + 1;
            seen.set(base, n);
            id = n === 1 ? base : `${base}-${n}`;
            el.id = id;
        }

        // Inject (once) a small `#` permalink so headings double as anchors.
        if (!el.querySelector('.anchor-link')) {
            const link = document.createElement('a');
            link.className = 'anchor-link';
            link.href = `#${id}`;
            link.setAttribute('aria-label', `Direct link to ${text}`);
            link.textContent = '#';
            link.addEventListener('click', (e) => {
                e.preventDefault();
                scrollToAnchor(id);
            });
            el.appendChild(link);
        }

        list.push({ id, text, level: Number(el.tagName[1]) });
    });

    headings.value = list;

    // If we just landed with a hash, scroll to it now that ids exist.
    if (window.location.hash) {
        const want = window.location.hash.slice(1);
        if (list.some((h) => h.id === want)) {
            scrollToAnchor(want, false);
        }
    }
}

function scrollToAnchor(id: string, updateHash = true): void {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (updateHash) {
        history.replaceState(null, '', `#${id}`);
        activeAnchor.value = id;
    }
}

const navigateTo = async (section: string): Promise<void> => {
    activeSection.value = section;
    activeAnchor.value = '';
    // Clear stale anchor list immediately - new page's headings re-populate after render.
    headings.value = [];
    await refreshHeadings();
    // Reset to top of new page.
    const main = document.querySelector('main');
    if (main) main.scrollTo({ top: 0, behavior: 'auto' });
};

// Refresh whenever the active section changes (covers initial mount via watch + immediate).
watch(activeSection, refreshHeadings, { immediate: false });

onMounted(async () => {
    await refreshHeadings();
});

// Scroll-spy: highlight the heading currently in view.
function onMainScroll(e: Event): void {
    const main = e.target as HTMLElement;
    const offset = 80; // px - matches the header padding
    let current = '';
    for (const h of headings.value) {
        const el = document.getElementById(h.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top - main.getBoundingClientRect().top;
        if (top - offset <= 0) current = h.id;
        else break;
    }
    activeAnchor.value = current;
}
</script>

<template>
    <div class="flex h-screen w-full">
        <!-- Sidebar Navigation -->
        <nav class="bg-primary-900 fixed top-0 left-0 z-10 flex h-full w-64 flex-col overflow-hidden text-white">
            <ul class="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
                <li class="text-primary-100 mb-4 text-lg font-bold">NB Components</li>

                <li v-for="(section, key) in sections" :key="key">
                    <button
                        @click="navigateTo(String(key))"
                        class="hover:bg-primary-800 block w-full rounded-md p-2 text-left transition-colors"
                        :class="{ 'bg-primary-700': activeSection === key }"
                    >
                        {{ section.title }}
                    </button>
                    <!-- Sub-anchors: live, on the active section only -->
                    <transition name="anchor-list">
                        <ul
                            v-if="activeSection === key && headings.length"
                            class="ml-2 mt-1 space-y-px overflow-hidden border-l border-white/10 pl-2"
                        >
                            <li v-for="h in headings" :key="h.id">
                                <a
                                    :href="`#${h.id}`"
                                    @click.prevent="scrollToAnchor(h.id)"
                                    class="block truncate rounded py-1 pr-2 text-xs transition-colors hover:text-white"
                                    :class="[
                                        h.level === 3 ? 'pl-5' : 'pl-2',
                                        activeAnchor === h.id
                                            ? 'bg-primary-700/60 text-white'
                                            : 'text-primary-100/70',
                                    ]"
                                    :title="h.text"
                                >
                                    {{ h.text }}
                                </a>
                            </li>
                        </ul>
                    </transition>
                </li>
            </ul>

            <!-- Dark-mode toggle: stays put while the list above scrolls -->
            <div class="flex-shrink-0 border-t border-white/10 p-4">
                <button
                    @click="toggle"
                    class="flex w-full items-center justify-between gap-2 rounded-md bg-white/5 px-3 py-2 text-sm transition-colors hover:bg-white/10"
                    :aria-pressed="isDark"
                    aria-label="Toggle dark mode"
                >
                    <span class="flex items-center gap-2">
                        <NbIcon :name="isDark ? '$moon' : '$sun'" class="h-4 w-4" />
                        <span>{{ isDark ? 'Dark mode' : 'Light mode' }}</span>
                    </span>
                    <span
                        class="relative inline-flex h-5 w-9 items-center rounded-full transition-colors"
                        :class="isDark ? 'bg-primary-400' : 'bg-white/20'"
                    >
                        <span
                            class="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform"
                            :class="isDark ? 'translate-x-4' : 'translate-x-0.5'"
                        />
                    </span>
                </button>
            </div>
        </nav>

        <!-- Main Content Area -->
        <main
            class="ml-64 flex-1 overflow-y-auto bg-gray-50 transition-colors dark:bg-gray-900"
            @scroll.passive="onMainScroll"
        >
            <div class="container mx-auto px-6 py-8">
                <header class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {{ sections[activeSection]?.title || 'Documentation' }}
                    </h1>
                    <p class="mt-2 text-gray-600 dark:text-gray-400">
                        Comprehensive component library documentation and examples
                    </p>
                </header>

                <component :is="currentComponent" />
            </div>
        </main>

        <!-- Floating theme-builder trigger - visible on every docs page -->
        <button
            type="button"
            @click="isThemeBuilderOpen = true"
            class="fixed bottom-6 right-6 z-20 flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl"
            aria-label="Open theme builder"
        >
            <NbIcon name="$edit" size="sm" />
            <span class="hidden sm:inline">Theme</span>
        </button>

        <ThemeBuilderModal />
    </div>
</template>

<style scoped>
/* Custom scrollbar for navigation */
nav::-webkit-scrollbar {
    width: 6px;
}

nav::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
}

nav::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
}

nav::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
}

/*
 * Sub-anchor list transition. Uses the same motion tokens the rest of the
 * package's animations do (--duration-base + --ease-emphasised from @theme),
 * so collapse/expand here feels like every other animated thing on the site.
 */
.anchor-list-enter-active,
.anchor-list-leave-active {
    transition:
        max-height var(--duration-base, 400ms) var(--ease-emphasised, cubic-bezier(0.16, 1, 0.3, 1)),
        opacity    var(--duration-base, 400ms) var(--ease-emphasised, cubic-bezier(0.16, 1, 0.3, 1)),
        transform  var(--duration-base, 400ms) var(--ease-emphasised, cubic-bezier(0.16, 1, 0.3, 1));
}
.anchor-list-enter-from,
.anchor-list-leave-to {
    opacity: 0;
    max-height: 0;
    transform: translateY(-2px);
}
.anchor-list-enter-to,
.anchor-list-leave-from {
    opacity: 1;
    max-height: 1000px;
    transform: translateY(0);
}
</style>

<!--
  Global (non-scoped) styles for the `#` permalinks the script injects
  on every h2/h3 inside <main>. Scoped styles wouldn't reach them
  because they're DOM-inserted after render.
-->
<style>
main h2,
main h3 {
    scroll-margin-top: 1.5rem;
}

main h2 .anchor-link,
main h3 .anchor-link {
    display: inline-block;
    margin-left: 0.4em;
    color: var(--color-primary-500);
    text-decoration: none;
    font-weight: 400;
    opacity: 0;
    transition: opacity 150ms ease;
}

main h2:hover .anchor-link,
main h3:hover .anchor-link,
main h2 .anchor-link:focus-visible,
main h3 .anchor-link:focus-visible {
    opacity: 1;
}
</style>
