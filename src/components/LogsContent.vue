<script setup lang="ts">
/**
 * Renders a paginated Laravel activity-log payload as a vertical timeline, with a per-entry
 * icon, the formatted event, old → new value diffs and the causer's name. It shows a
 * `Spinner` while `logs` is undefined and appends its own `Pagination` from `logs.links`;
 * the causer is linked via `causerRoute` through the host app's Ziggy `route()` helper and
 * degrades to plain text when that route or helper is missing.
 *
 * @part root - the wrapper (or the spinner row while loading)
 * @slot empty - replaces the empty message
 * @part empty - the line shown when there are no entries
 * @part list - the timeline `<ol>`
 * @part marker - the round icon on the timeline
 * @part card - each entry's card
 * @part meta - the event and date row
 * @part change - each "field: old -> new" line
 * @part details - the description details
 */
// @ts-nocheck
import { Pagination } from '../index';
import { Spinner } from '../index';
import Link from '../overrides/InertiaLink';
import NbIcon from '../icons/NbIcon.vue';
import { getRoute } from '../Helpers';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface LogsContentProps {
    /** Laravel-style paginated result `{ total, data[], links? }` */
    logs?: Record<string, any>;
    /** Route name used to link a log entry's causer. Set to null to never link. */
    causerRoute?: string | null;
    /** Shown when there are no entries. Default `'No Data'` */
    emptyMessage?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['LogsContent']>;
}

const props = withDefaults(defineProps<LogsContentProps>(), {
    causerRoute: 'users.show',
    emptyMessage: 'No Data',
});

const { cls, attrs } = useUi('LogsContent', props);

// Resolved once in setup. Null when the app exposes no route() helper - the
// causer then renders as plain text rather than throwing during render.
const route = getRoute();

const causerHref = (causer) => {
    if (!route || !props.causerRoute || !causer?.id) return null;
    try {
        return route(props.causerRoute, causer.id);
    } catch {
        // Unknown route name in the host app - degrade rather than break the log.
        return null;
    }
};
</script>
<template>
    <div v-if="logs == undefined" v-bind="attrs()" :class="cls('root', 'flex w-full items-center justify-center')">
        <Spinner />
    </div>
    <div v-else v-bind="attrs()" :class="cls('root', 'mt-1')" id="logs">
        <p v-if="!logs.total" :class="cls('empty', 'text-center text-sm text-gray-500 dark:text-gray-400')">
            <slot name="empty">{{ emptyMessage }}</slot>
        </p>
        <ol v-else :class="cls('list', 'ml-3 border-l-2 border-primary-300 dark:border-primary-800')">
            <li v-for="item in logs.data" :key="item.id">
                <div class="flex-start w-full md:flex">
                    <div :class="cls('marker', '-ml-[13px] flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs text-white ring-4 ring-white dark:ring-gray-900')">
                        <NbIcon :name="item.icon" />
                    </div>
                    <div :class="cls('card', 'mb-3 ml-2 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 shadow-sm dark:border-gray-700 dark:bg-gray-800/60')">
                        <div :class="cls('meta', 'mb-1 flex flex-wrap justify-between gap-x-2')">
                            <span class="text-sm text-gray-500 dark:text-gray-400">
                                {{ item.event_formatted }}
                                <span v-if="item.reference" class="mx-0.5 text-sm font-semibold text-primary-600 dark:text-primary-300">{{ item.reference }}</span>
                                {{ ' ' }}
                                <template v-if="item.causer">
                                    <Link
                                        v-if="causerHref(item.causer)"
                                        :href="causerHref(item.causer)"
                                        class="text-sm text-primary-600 hover:underline dark:text-primary-300"
                                    >
                                        ({{ item.causer.first_name }})
                                    </Link>
                                    <span v-else class="text-sm text-primary-600 dark:text-primary-300">({{ item.causer.first_name }})</span>
                                </template>
                            </span>
                            <span class="text-sm text-gray-500 dark:text-gray-400">{{ item.created_date_full }}</span>
                        </div>
                        <!-- gap-x-1 + the arrow keep "old → new" legible; without them the
                             struck-through old value ran straight into the new one. -->
                        <p
                            v-for="(c, field) in item.changes_formatted"
                            :key="field"
                            :class="cls('change', 'mb-0 flex flex-wrap items-baseline gap-x-1 text-sm text-gray-700 dark:text-gray-300')"
                        >
                            <span class="font-medium">{{ field }}:</span>
                            <template v-if="c.old">
                                <span class="text-gray-400 line-through dark:text-gray-500">{{ c.old }}</span>
                                <span class="text-gray-400 dark:text-gray-500">&rarr;</span>
                            </template>
                            <span>{{ c.new }}</span>
                        </p>
                        <p v-if="item.description_details" :class="cls('details', 'text-sm text-gray-700 dark:text-gray-300')" v-html="item.description_details" />
                    </div>
                </div>
            </li>
        </ol>
        <Pagination v-if="logs.links" class="mt-6" :links="logs.links" :logs="true" />
    </div>
</template>
