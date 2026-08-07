<script setup>
/**
 * Renders a paginated Laravel activity-log payload as a vertical timeline, with a per-entry
 * icon, the formatted event, old → new value diffs and the causer's name. It shows a
 * `Spinner` while `logs` is undefined and appends its own `Pagination` from `logs.links`;
 * the causer is linked via `causerRoute` through the host app's Ziggy `route()` helper and
 * degrades to plain text when that route or helper is missing.
 */
// @ts-nocheck
import { Pagination } from '../index';
import { Spinner } from '../index';
import Link from '../overrides/InertiaLink';
import NbIcon from '../icons/NbIcon.vue';
import { getRoute } from '../Helpers';

const props = defineProps({
    logs: Object,
    /** Route name used to link a log entry's causer. Set to null to never link. */
    causerRoute: { type: String, default: 'users.show' },
});

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
    <div v-if="logs == undefined" class="flex w-full items-center justify-center">
        <Spinner />
    </div>
    <div v-else class="mt-1" id="logs">
        <p v-if="!logs.total" class="text-center text-gray-500 dark:text-gray-400">No Data</p>
        <ol v-else class="ml-3 border-l-2 border-primary-300 dark:border-primary-800">
            <li v-for="item in logs.data" :key="item.id">
                <div class="flex-start w-full md:flex">
                    <div class="-ml-[13px] flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs text-white ring-4 ring-white dark:ring-gray-900">
                        <NbIcon :name="item.icon" />
                    </div>
                    <div class="mb-3 ml-2 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
                        <div class="mb-1 flex flex-wrap justify-between gap-x-2">
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
                            class="mb-0 flex flex-wrap items-baseline gap-x-1 text-sm text-gray-700 dark:text-gray-300"
                        >
                            <span class="font-medium">{{ field }}:</span>
                            <template v-if="c.old">
                                <span class="text-gray-400 line-through dark:text-gray-500">{{ c.old }}</span>
                                <span class="text-gray-400 dark:text-gray-500">&rarr;</span>
                            </template>
                            <span>{{ c.new }}</span>
                        </p>
                        <p v-if="item.description_details" class="text-sm text-gray-700 dark:text-gray-300" v-html="item.description_details" />
                    </div>
                </div>
            </li>
        </ol>
        <Pagination v-if="logs.links" class="mt-6" :links="logs.links" :logs="true" />
    </div>
</template>
