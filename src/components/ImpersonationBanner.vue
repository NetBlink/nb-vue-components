<script setup lang="ts">
/**
 * "You are signed in as …" strip for support staff acting as a user, with a way
 * back. It stays at the top while scrolling (under an EnvironmentBanner if there
 * is one) and pushes sticky headers down by its height.
 *
 * @part root - the strip
 * @part text - the message
 * @part action - the stop link or button
 */
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { useStackedBanner } from '../ui/banners';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface ImpersonationBannerProps {
    /** Who you are acting as */
    name: string;
    /** URL that ends impersonation (an Inertia link); without it a button emits `stop` */
    href?: string;
    /** HTTP method for `href`, e.g. 'delete' */
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete';
    /** Label of the stop action */
    stopLabel?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['ImpersonationBanner']>;
}

export interface ImpersonationBannerEmits {
    /** The stop button was clicked (when there is no `href`) */
    stop: [];
}

const props = withDefaults(defineProps<ImpersonationBannerProps>(), { href: undefined, method: 'get', stopLabel: 'Stop impersonating' });
const emit = defineEmits<ImpersonationBannerEmits>();
const { cls, attrs } = useUi('ImpersonationBanner', props);

const root = ref<HTMLElement>();
useStackedBanner(root, 'impersonation');
</script>

<template>
    <div
        ref="root"
        v-bind="attrs()"
        role="region"
        aria-label="Impersonation"
        :class="cls('root', 'sticky top-[var(--nb-environment-offset,0px)] z-40 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-gray-900 px-4 py-2 text-sm text-white ring-1 ring-white/10 dark:bg-black')"
    >
        <span :class="cls('text', 'font-medium')">You are signed in as <strong>{{ name }}</strong></span>
        <Link
            v-if="href"
            :href="href"
            :method="method"
            :as="method === 'get' ? 'a' : 'button'"
            :class="cls('action', 'focusable rounded bg-white/15 px-2.5 py-1 font-semibold hover:bg-white/25')"
        >
            {{ stopLabel }}
        </Link>
        <button v-else type="button" :class="cls('action', 'focusable rounded bg-white/15 px-2.5 py-1 font-semibold hover:bg-white/25')" @click="emit('stop')">
            {{ stopLabel }}
        </button>
    </div>
</template>
