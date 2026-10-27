<script setup lang="ts">
/**
 * Navigation between sibling pages (Inertia links) that looks like `Tabs`: `pills`,
 * `underline` or a full-width `segmented` strip, with the same sliding active marker
 * from `smooth` up. The active item is taken from each item's `active` flag, or
 * matched against the current page URL (the longest matching `href` wins, so a
 * section's sub-pages keep their parent highlighted). For switching panels on one
 * page, use `Tabs`.
 *
 * @part root - the `<nav>` landmark
 * @part list - the strip holding the links
 * @part item - each link
 * @part badge - the count next to a label
 * @part indicator - the sliding active marker (smooth and fancy motion only)
 * @motion off - the active marker moves instantly
 * @motion simple - the active marker moves instantly
 * @motion smooth - the active marker slides between items
 * @motion fancy - the active marker slides on a spring
 */
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import Link from '../overrides/InertiaLink';
import { peekInertiaPage } from '../Helpers';
import { levelAtLeast, type MotionLevel } from '../ui/motion';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface SubNavItem {
    label: string;
    href: string;
    active?: boolean;
    badge?: string | number;
}

export interface SubNavProps {
    /** The links */
    items: SubNavItem[];
    /** Look */
    variant?: 'pills' | 'underline' | 'segmented';
    /** Accessible name of the navigation landmark */
    label?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['SubNav']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<SubNavProps>(), {
    variant: 'pills',
    label: 'Section navigation',
});

const { cls, attrs, variant, level } = useUi('SubNav', props);

// Same base and variant classes as Tabs, keyed on data-state, so the two read as one family.
const ITEM_BASE =
    'focusable inline-flex cursor-pointer items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-hidden';

const PILLS = {
    list: 'inline-flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800',
    item: 'rounded-md px-3 py-1.5 text-gray-600 hover:text-gray-900 data-[state=active]:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 dark:data-[state=active]:text-gray-100',
    marker: 'data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700',
    indicator: 'top-1 bottom-1 rounded-md bg-white shadow-sm dark:bg-gray-700',
};

const VARIANTS: Record<string, { list: string; item: string; marker: string; indicator: string }> = {
    pills: PILLS,
    segmented: { ...PILLS, list: 'flex w-full items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800', item: `${PILLS.item} flex-1` },
    underline: {
        list: 'flex items-center gap-1 border-b border-gray-200 dark:border-gray-700',
        item: '-mb-px rounded-t-md border-b-2 border-transparent px-4 py-2 text-gray-500 hover:border-gray-300 hover:text-gray-800 data-[state=active]:text-primary-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:data-[state=active]:text-primary-300',
        marker: 'data-[state=active]:border-primary-500 dark:data-[state=active]:border-primary-400',
        indicator: '-bottom-px h-0.5 bg-primary-500 dark:bg-primary-400',
    },
};

const variantClasses = computed(() => variant<'list' | 'item' | 'marker' | 'indicator'>('variant', VARIANTS, props.variant, 'list'));

const path = (href: string) => {
    try {
        return new URL(href, 'http://x').pathname.replace(/\/+$/, '') || '/';
    } catch {
        return href;
    }
};

const currentPath = computed(() => {
    if (props.items.some((item) => item.active !== undefined)) return '';
    const url = peekInertiaPage()?.url ?? (typeof window !== 'undefined' ? window.location.pathname : '');
    return path(url);
});

const activeIndex = computed(() => {
    const flagged = props.items.findIndex((item) => item.active);
    if (flagged !== -1 || props.items.some((item) => item.active !== undefined)) return flagged;
    let best = -1;
    let bestLength = -1;
    props.items.forEach((item, index) => {
        const p = path(item.href);
        const matches = currentPath.value === p || (p !== '/' && currentPath.value.startsWith(`${p}/`));
        if (matches && p.length > bestLength) [best, bestLength] = [index, p.length];
    });
    return best;
});

// Sliding marker: measured on the client after mount, like Tabs; the first paint draws the marker on the item.
const mounted = ref(false);
const list = ref<HTMLElement | null>(null);
const links = ref<HTMLElement[]>([]);
const box = ref({ left: 0, width: 0 });

const sliding = computed(() => mounted.value && levelAtLeast(level.value, 'smooth') && activeIndex.value !== -1);

const measure = () => {
    const raw = links.value[activeIndex.value] as unknown as { $el?: HTMLElement } | HTMLElement | undefined;
    const el = (raw && '$el' in raw ? raw.$el : raw) as HTMLElement | undefined;
    if (el) box.value = { left: el.offsetLeft, width: el.offsetWidth };
};

let observer: ResizeObserver | null = null;
onMounted(() => {
    measure();
    requestAnimationFrame(() => (mounted.value = true));
    if (typeof ResizeObserver !== 'undefined' && list.value) {
        observer = new ResizeObserver(measure);
        observer.observe(list.value);
    }
});
onBeforeUnmount(() => observer?.disconnect());
watch(activeIndex, () => nextTick(measure));

// With the sliding indicator an item drops its own marker and sits above it; its hover border must not cover the indicator.
const itemClasses = computed(() => [ITEM_BASE, variantClasses.value.item, sliding.value ? 'relative z-10 data-[state=active]:hover:border-transparent dark:data-[state=active]:hover:border-transparent' : variantClasses.value.marker]);
</script>

<template>
    <nav v-bind="attrs()" :aria-label="label" :class="cls('root')">
        <div ref="list" :class="cls('list', variantClasses.list, sliding && 'relative')">
            <Link
                v-for="(item, index) in items"
                :key="item.href"
                ref="links"
                :href="item.href"
                :data-state="index === activeIndex ? 'active' : 'inactive'"
                :aria-current="index === activeIndex ? 'page' : undefined"
                :class="cls('item', itemClasses)"
            >
                {{ item.label }}
                <span
                    v-if="item.badge !== undefined"
                    :class="cls('badge', 'rounded-full bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-200')"
                >
                    {{ item.badge }}
                </span>
            </Link>
            <span
                v-if="sliding"
                :class="
                    cls(
                        'indicator',
                        'absolute left-0 transition-[width,translate]',
                        level === 'fancy' ? 'duration-500 ease-(--ease-spring)' : 'duration-300 ease-(--ease-emphasised)',
                        variantClasses.indicator,
                    )
                "
                :style="{ width: `${box.width}px`, translate: `${box.left}px 0` }"
                aria-hidden="true"
            />
        </div>
    </nav>
</template>
