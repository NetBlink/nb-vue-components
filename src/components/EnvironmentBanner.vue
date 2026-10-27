<script setup lang="ts">
/**
 * A slim strip saying which environment you're in (local, staging, pre-live, ...)
 * so nobody mistakes a test system for the real one. Renders nothing on
 * production. It stays at the top while scrolling and pushes sticky headers down.
 *
 * @part root - the strip
 * @part label - the environment name
 */
import { computed, ref } from 'vue';
import { useNbConfig } from '../ui/config';
import { useStackedBanner } from '../ui/banners';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface EnvironmentBannerProps {
    /** The environment name, typically your APP_ENV */
    environment: string;
    /** Text after the name. Default "environment" */
    message?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['EnvironmentBanner']>;
}

const props = withDefaults(defineProps<EnvironmentBannerProps>(), { message: 'environment' });
const { cls, attrs } = useUi('EnvironmentBanner', props);
const config = useNbConfig();

const name = computed(() => props.environment.trim().toLowerCase());
const hidden = computed(() => ['production', 'prod', 'live', ...(config.environment.productionNames ?? []).map((n) => n.toLowerCase())].includes(name.value));

const COLOURS: Record<string, string> = {
    local: 'bg-sky-600 text-white',
    dev: 'bg-sky-600 text-white',
    development: 'bg-sky-600 text-white',
    staging: 'bg-amber-400 text-gray-900',
    'pre-live': 'bg-accent-600 text-white',
    prelive: 'bg-accent-600 text-white',
    uat: 'bg-accent-600 text-white',
};
const colour = computed(() => COLOURS[name.value] ?? 'bg-gray-700 text-white');

const root = ref<HTMLElement>();
useStackedBanner(root, 'environment');
</script>

<template>
    <div
        v-if="!hidden"
        ref="root"
        v-bind="attrs()"
        role="note"
        :class="cls('root', 'sticky top-0 z-50 px-4 py-1 text-center text-xs font-semibold tracking-wide', colour)"
    >
        <span :class="cls('label', 'uppercase')">{{ environment }}</span> {{ message }}
    </div>
</template>
