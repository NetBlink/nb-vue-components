<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../composables/useDarkMode';

// Import documentation components
import SetupDoc from './SetupDoc.vue';
import IconsDoc from './IconsDoc.vue';
import InputsDoc from './InputsDoc.vue';
import ButtonsDoc from './ButtonsDoc.vue';
import TablesDoc from './TablesDoc.vue';
import ModalsDoc from './ModalsDoc.vue';
import NavigationDoc from './NavigationDoc.vue';
import LayoutDoc from './LayoutDoc.vue';
import UtilityDoc from './UtilityDoc.vue';

// Current active section
const activeSection = ref<string>('setup');

// Available documentation sections — Setup ships first so newcomers can install before exploring.
const sections: Record<string, { component: any; title: string }> = {
    setup: { component: SetupDoc, title: 'Getting Started' },
    icons: { component: IconsDoc, title: 'Icons' },
    inputs: { component: InputsDoc, title: 'Input Components' },
    buttons: { component: ButtonsDoc, title: 'Button Components' },
    tables: { component: TablesDoc, title: 'Table Components' },
    modals: { component: ModalsDoc, title: 'Modal Components' },
    navigation: { component: NavigationDoc, title: 'Navigation Components' },
    layout: { component: LayoutDoc, title: 'Layout Components' },
    utilities: { component: UtilityDoc, title: 'Utility Components' },
};

// Dark-mode plumbing — drives the toggle and persists user choice.
const { isDark, toggle, initialize } = useDarkMode();
onMounted(() => {
    initialize();
});

const currentComponent = computed(() => sections[activeSection.value]?.component || SetupDoc);
const navigateTo = (section: string) => {
    activeSection.value = section;
};
</script>

<template>
    <div class="flex h-screen w-full">
        <!-- Sidebar Navigation -->
        <nav class="bg-primary-900 fixed top-0 left-0 z-10 flex h-full w-64 flex-col overflow-y-auto text-white">
            <ul class="flex flex-1 flex-col gap-2 p-4">
                <li class="text-primary-100 mb-4 text-lg font-bold">NB Components</li>

                <li v-for="(section, key) in sections" :key="key">
                    <button
                        @click="navigateTo(String(key))"
                        class="hover:bg-primary-800 block w-full rounded-md p-2 text-left transition-colors"
                        :class="{ 'bg-primary-700': activeSection === key }"
                    >
                        {{ section.title }}
                    </button>
                </li>
            </ul>

            <!-- Dark-mode toggle pinned to the bottom -->
            <div class="border-t border-white/10 p-4">
                <button
                    @click="toggle"
                    class="flex w-full items-center justify-between gap-2 rounded-md bg-white/5 px-3 py-2 text-sm transition-colors hover:bg-white/10"
                    :aria-pressed="isDark"
                    aria-label="Toggle dark mode"
                >
                    <span class="flex items-center gap-2">
                        <FontAwesomeIcon :icon="isDark ? faMoon : faSun" class="h-4 w-4" />
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
        <main class="ml-64 flex-1 overflow-y-auto bg-gray-50 transition-colors dark:bg-gray-900">
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
</style>
