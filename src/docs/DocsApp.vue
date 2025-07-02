<script setup lang="ts">
import { ref, computed } from 'vue';

// Import documentation components
import InputsDoc from './InputsDoc.vue';
import ButtonsDoc from './ButtonsDoc.vue';
import TablesDoc from './TablesDoc.vue';
import ModalsDoc from './ModalsDoc.vue';
import NavigationDoc from './NavigationDoc.vue';
import LayoutDoc from './LayoutDoc.vue';
import UtilityDoc from './UtilityDoc.vue';

// Current active section
const activeSection = ref('inputs');

// Available documentation sections
const sections = {
    inputs: { component: InputsDoc, title: 'Input Components' },
    buttons: { component: ButtonsDoc, title: 'Button Components' },
    tables: { component: TablesDoc, title: 'Table Components' },
    modals: { component: ModalsDoc, title: 'Modal Components' },
    navigation: { component: NavigationDoc, title: 'Navigation Components' },
    layout: { component: LayoutDoc, title: 'Layout Components' },
    utilities: { component: UtilityDoc, title: 'Utility Components' },
};

// Computed current component
const currentComponent = computed(() => {
    return sections[activeSection.value]?.component || InputsDoc;
});

// Navigation handler
const navigateTo = (section: string) => {
    activeSection.value = section;
};
</script>

<template>
    <div class="flex h-screen w-full">
        <!-- Sidebar Navigation -->
        <nav class="bg-primary-900 fixed top-0 left-0 z-10 h-full w-64 overflow-y-scroll text-white">
            <ul class="flex flex-col gap-2 p-4">
                <li class="text-primary-100 mb-4 text-lg font-bold">NB Components</li>

                <!-- Documentation Sections -->
                <li v-for="(section, key) in sections" :key="key">
                    <button
                        @click="navigateTo(key)"
                        class="hover:bg-primary-800 block w-full rounded-md p-2 text-left transition-colors"
                        :class="{ 'bg-primary-700': activeSection === key }"
                    >
                        {{ section.title }}
                    </button>
                </li>
            </ul>
        </nav>

        <!-- Main Content Area -->
        <main class="ml-64 flex-1 overflow-y-auto bg-gray-50">
            <div class="container mx-auto px-6 py-8">
                <!-- Header -->
                <header class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        {{ sections[activeSection]?.title || 'Documentation' }}
                    </h1>
                    <p class="mt-2 text-gray-600">Comprehensive component library documentation and examples</p>
                </header>

                <!-- Dynamic Content -->
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
