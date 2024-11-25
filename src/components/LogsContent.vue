<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus, faPencil, faCalendar, faBoxArchive, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Pagination } from '../index';
import { Spinner } from '../index';
import Link from '../overrides/InertiaLink';

library.add(faPlus, faPencil, faCalendar, faBoxArchive, faSpinner);

const props = defineProps({
    logs: Object,
});
</script>
<template>
    <div v-if="logs == undefined" class="flex w-full items-center justify-center">
        <Spinner />
    </div>
    <div v-else class="mt-1" id="logs">
        <p v-if="!logs.total" class="text-center">No Data</p>
        <ol v-else class="ml-3 border-l-2 border-primary">
            <li v-for="item in logs.data" :key="item.id">
                <div class="flex-start w-full md:flex">
                    <div class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white">
                        <FontAwesomeIcon v-bind:icon="item.icon" />
                    </div>
                    <div class="mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5">
                        <div class="mb-1 flex justify-between">
                            <span class="text-sm text-neutral-500">
                                {{ item.event_formatted }}
                                <span v-if="item.reference" class="text-bold mr-0.5 text-sm text-primary-500">{{ item.reference }}</span>
                                <template v-if="item.causer">
                                    <Link v-if="item.causer.id" :href="route('users.show', item.causer.id)" class="text-sm text-primary-500">
                                        ({{ item.causer.first_name }})
                                    </Link>
                                    <span v-else class="text-sm text-primary-500">({{ item.causer.first_name }})</span>
                                </template>
                            </span>
                            <span class="text-sm text-neutral-500">{{ item.created_date_full }}</span>
                        </div>
                        <p v-for="(c, field) in item.changes_formatted" :key="field" class="mb-0 text-neutral-700">
                            <span class="font-medium">{{ field }}:</span>
                            <span v-if="c.old" class="line-through">{{ c.old }}</span>
                            {{ c.new }}
                        </p>
                        <p v-if="item.description_details" class="text-neutral-700" v-html="item.description_details" />
                    </div>
                </div>
            </li>
        </ol>
        <Pagination v-if="logs.links" class="mt-6" :links="logs.links" :logs="true" />
    </div>
</template>
