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
import NotificationsDoc from './NotificationsDoc.vue';
import DataDisplayDoc from './DataDisplayDoc.vue';
import PageShellBlock from './Blocks/PageShellBlock.vue';
import NavbarBlock from './Blocks/NavbarBlock.vue';
import SidebarBlock from './Blocks/SidebarBlock.vue';
import TabbedDetailBlock from './Blocks/TabbedDetailBlock.vue';
import IndexPageBlock from './Blocks/IndexPageBlock.vue';
import FormsBlock from './Blocks/FormsBlock.vue';
import ModalsBlock from './Blocks/ModalsBlock.vue';
import MegaMenuBlock from './Blocks/MegaMenuBlock.vue';
import DashboardBlock from './Blocks/DashboardBlock.vue';
import WizardBlock from './Blocks/WizardBlock.vue';
import SettingsPageBlock from './Blocks/SettingsPageBlock.vue';
import FeedTimelineBlock from './Blocks/FeedTimelineBlock.vue';
import AuthPagesBlock from './Blocks/AuthPagesBlock.vue';
import EmptyStatesBlock from './Blocks/EmptyStatesBlock.vue';
import CardsGridBlock from './Blocks/CardsGridBlock.vue';
import MarketingBlock from './Blocks/MarketingBlock.vue';
import AuthSecurityBlock from './Blocks/AuthSecurityBlock.vue';
import OrderableBlock from './Blocks/OrderableBlock.vue';
import ProductPageBlock from './Blocks/ProductPageBlock.vue';
import ShowEditBlock from './Blocks/ShowEditBlock.vue';
import ChartsBlock from './Blocks/ChartsBlock.vue';
import SkeletonsBlock from './Blocks/SkeletonsBlock.vue';
import ChatBlock from './Blocks/ChatBlock.vue';
import AiAssistantBlock from './Blocks/AiAssistantBlock.vue';
import FeedbackDoc from './FeedbackDoc.vue';
import ThemeBuilderModal from './ThemeBuilderModal.vue';
import { useThemeBuilder } from './composables/useThemeBuilder';

const { isModalOpen: isThemeBuilderOpen } = useThemeBuilder();

// Current active section
const activeSection = ref<string>('setup');

// Mobile drawer state - the sidebar is off-canvas below md.
const sidebarOpen = ref(false);

type SectionMap = Record<string, { component: any; title: string }>;

// Foundations always show - install it, theme it, then pick a mode below.
const foundationSections: SectionMap = {
    setup: { component: SetupDoc, title: 'Getting Started' },
    theme: { component: ThemeDoc, title: 'Theme & Tokens' },
    icons: { component: IconsDoc, title: 'Icons' },
};

// Sidebar entries render in labelled groups so the growing lists stay scannable.
interface NavGroup {
    label: string;
    sections: SectionMap;
}

const componentGroups: NavGroup[] = [
    {
        label: 'Forms & Actions',
        sections: {
            forms: { component: InputsDoc, title: 'Forms' },
            buttons: { component: ButtonsDoc, title: 'Buttons' },
        },
    },
    {
        label: 'Structure',
        sections: {
            navigation: { component: NavigationDoc, title: 'Navigation' },
            layout: { component: LayoutDoc, title: 'Layout' },
        },
    },
    {
        label: 'Data',
        sections: {
            tables: { component: TablesDoc, title: 'Tables' },
            dataDisplay: { component: DataDisplayDoc, title: 'Data Display' },
        },
    },
    {
        label: 'Feedback',
        sections: {
            feedback: { component: FeedbackDoc, title: 'Feedback' },
            notifications: { component: NotificationsDoc, title: 'Toasts & Snackbars' },
            modals: { component: ModalsDoc, title: 'Modals' },
        },
    },
];

// Prebuilt, copy-pasteable compositions of those components - one page each.
const blockGroups: NavGroup[] = [
    {
        label: 'Shells & Navigation',
        sections: {
            blockPageShell: { component: PageShellBlock, title: 'Page Shell' },
            blockNavbar: { component: NavbarBlock, title: 'App Navbar' },
            blockMegaMenu: { component: MegaMenuBlock, title: 'Mega Menu' },
            blockSidebar: { component: SidebarBlock, title: 'Sidebar Navigation' },
        },
    },
    {
        label: 'Pages',
        sections: {
            blockDashboard: { component: DashboardBlock, title: 'Dashboard Overview' },
            blockIndexPage: { component: IndexPageBlock, title: 'CRUD Index Page' },
            blockShowEdit: { component: ShowEditBlock, title: 'Show & Edit Page' },
            blockTabbedDetail: { component: TabbedDetailBlock, title: 'Tabbed Detail Page' },
            blockProductPage: { component: ProductPageBlock, title: 'Product Page' },
            blockSettingsPage: { component: SettingsPageBlock, title: 'Settings Page' },
        },
    },
    {
        label: 'Forms & Auth',
        sections: {
            blockForms: { component: FormsBlock, title: 'Form Layouts' },
            blockWizard: { component: WizardBlock, title: 'Multi-Step Form' },
            blockOrderable: { component: OrderableBlock, title: 'Orderable Fields' },
            blockAuthPages: { component: AuthPagesBlock, title: 'Auth Pages' },
            blockAuthSecurity: { component: AuthSecurityBlock, title: '2FA, OAuth & Passkeys' },
            blockModals: { component: ModalsBlock, title: 'Modal Recipes' },
        },
    },
    {
        label: 'Content & Display',
        sections: {
            blockCards: { component: CardsGridBlock, title: 'Cards & Lists' },
            blockChat: { component: ChatBlock, title: 'Chat Interface' },
            blockAiAssistant: { component: AiAssistantBlock, title: 'AI Assistant' },
            blockFeedTimeline: { component: FeedTimelineBlock, title: 'Feeds & Timelines' },
            blockCharts: { component: ChartsBlock, title: 'Charts & Data Viz' },
            blockSkeletons: { component: SkeletonsBlock, title: 'Skeletons & Loading' },
            blockEmptyStates: { component: EmptyStatesBlock, title: 'Empty & Error States' },
            blockMarketing: { component: MarketingBlock, title: 'Marketing Sections' },
        },
    },
];

// Components/Blocks switch under the foundations separator. Foundations stay
// reachable in both modes; only the grouped list below the switch swaps.
const mode = ref<'components' | 'blocks'>('components');
const modeGroups = computed<NavGroup[]>(() => (mode.value === 'components' ? componentGroups : blockGroups));

const flatten = (groups: NavGroup[]): SectionMap => groups.reduce((all, g) => ({ ...all, ...g.sections }), {});
const sections: SectionMap = { ...foundationSections, ...flatten(componentGroups), ...flatten(blockGroups) };

// "Blocks · Pages" eyebrow over the page title so deep pages stay oriented.
const activeContext = computed(() => {
    if (activeSection.value in foundationSections) return 'Foundations';
    for (const g of modeGroups.value) {
        if (activeSection.value in g.sections) return `${mode.value === 'components' ? 'Components' : 'Blocks'} · ${g.label}`;
    }
    return '';
});

const setMode = (next: 'components' | 'blocks'): void => {
    if (mode.value === next) return;
    mode.value = next;
    // Land on the first page of the newly chosen mode unless we're on a
    // foundation page, which exists in both.
    if (!(activeSection.value in foundationSections)) {
        const groups = next === 'components' ? componentGroups : blockGroups;
        navigateTo(Object.keys(groups[0].sections)[0]);
    }
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

    // A lone heading that just repeats the page title (single-block pages)
    // adds nothing as a sub-anchor - and stacked under the h1 it reads as a
    // stutter, so visually hide it too (sr-only keeps the document outline).
    if (list.length === 1 && list[0].text === sections[activeSection.value]?.title) {
        document.getElementById(list[0].id)?.classList.add('sr-only');
        headings.value = [];
    } else {
        headings.value = list;
    }

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
    sidebarOpen.value = false;
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
        <!-- Mobile top bar: the sidebar is off-canvas below md -->
        <div class="bg-primary-900 fixed inset-x-0 top-0 z-40 flex h-12 items-center gap-3 px-4 text-white md:hidden">
            <button aria-label="Open navigation" class="rounded p-1 hover:bg-white/10" @click="sidebarOpen = !sidebarOpen">
                <span class="block h-0.5 w-5 bg-white"></span>
                <span class="mt-1 block h-0.5 w-5 bg-white"></span>
                <span class="mt-1 block h-0.5 w-5 bg-white"></span>
            </button>
            <span class="text-sm font-bold">NB Components</span>
        </div>
        <!-- Backdrop while the mobile drawer is open -->
        <div v-if="sidebarOpen" class="fixed inset-0 z-40 bg-black/40 md:hidden" @click="sidebarOpen = false"></div>

        <!-- Sidebar Navigation -->
        <nav
            class="bg-primary-900 fixed top-0 left-0 z-50 flex h-full w-64 flex-col overflow-hidden text-white transition-transform duration-200 md:z-10 md:translate-x-0"
            :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
        >
            <ul class="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
                <li class="text-primary-100 mb-4 text-lg font-bold">NB Components</li>

                <li v-for="(section, key) in foundationSections" :key="key">
                    <button
                        @click="navigateTo(String(key))"
                        class="hover:bg-primary-800 block w-full rounded-md p-2 text-left transition-colors"
                        :class="{ 'bg-primary-700': activeSection === key }"
                    >
                        {{ section.title }}
                    </button>
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

                <!-- Components / Blocks switch: separator under the foundations,
                     then a segmented toggle deciding which list renders below. -->
                <li class="my-2 border-t border-white/10 pt-3" aria-hidden="true"></li>
                <li>
                    <div class="flex rounded-md bg-white/5 p-1 text-sm" role="tablist" aria-label="Documentation mode">
                        <button
                            role="tab"
                            :aria-selected="mode === 'components'"
                            @click="setMode('components')"
                            class="flex-1 rounded px-2 py-1.5 transition-colors"
                            :class="mode === 'components' ? 'bg-primary-600 text-white' : 'text-primary-100/70 hover:text-white'"
                        >
                            Components
                        </button>
                        <button
                            role="tab"
                            :aria-selected="mode === 'blocks'"
                            @click="setMode('blocks')"
                            class="flex-1 rounded px-2 py-1.5 transition-colors"
                            :class="mode === 'blocks' ? 'bg-primary-600 text-white' : 'text-primary-100/70 hover:text-white'"
                        >
                            Blocks
                        </button>
                    </div>
                </li>

                <template v-for="group in modeGroups" :key="group.label">
                    <li class="text-primary-100/50 mt-3 mb-0.5 px-2 text-[11px] font-semibold tracking-wider uppercase select-none">
                        {{ group.label }}
                    </li>
                    <li v-for="(section, key) in group.sections" :key="key">
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
                </template>
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
            class="mt-12 ml-0 flex-1 overflow-y-auto bg-gray-50 transition-colors md:mt-0 md:ml-64 dark:bg-gray-900"
            @scroll.passive="onMainScroll"
        >
            <div class="container mx-auto px-6 py-8">
                <!-- The title comes from the section registry so it can never drift
                     from the menu entry. Each page supplies its own description
                     underneath rather than repeating the heading. -->
                <header class="mb-8">
                    <p v-if="activeContext" class="text-primary-600 dark:text-primary-400 mb-1 text-xs font-semibold tracking-wider uppercase">
                        {{ activeContext }}
                    </p>
                    <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {{ sections[activeSection]?.title || 'Documentation' }}
                    </h1>
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
