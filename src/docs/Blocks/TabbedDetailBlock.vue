<script setup lang="ts">
/**
 * Blocks / Tabbed Detail Page - record-detail composition: page header row with
 * status pill + destructive action, then a Section holding tabbed panes where the
 * Info pane edits inline through a useForm-backed DescriptionList.
 */
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { faBan, faCirclePlay, faPenToSquare, faRotate } from '@fortawesome/free-solid-svg-icons';
import { NbIcon } from '../../icons';
import { Section, Tabs, Tab, DescriptionList, DescriptionListItem, Input, Logs, SecondaryButton, DangerButton, CodePreview } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const tab = ref('info');
const suspended = ref(false);

const form = useForm({
    name: 'Vending Unit 04',
    location: 'Building B - Canteen',
    contact_email: 'ops@example.com',
});

// The list exposes stopEditing() - close every open row once the "save" lands.
const list = ref<{ stopEditing: () => void } | null>(null);
const saved = ref(false);

// No .post in docs demos: promote the current values to defaults so isDirty clears,
// exactly as a successful Inertia submit would.
const save = () => {
    form.defaults();
    form.reset();
    list.value?.stopEditing();
    saved.value = true;
    setTimeout(() => (saved.value = false), 2000);
};

const logs = {
    total: 2,
    data: [
        {
            id: 1,
            icon: faPenToSquare,
            event_formatted: 'Updated',
            reference: 'Vending Unit 04',
            created_date_full: '12 Mar 2025 14:02',
            changes_formatted: { Location: { old: 'Building A - Lobby', new: 'Building B - Canteen' } },
        },
        {
            id: 2,
            icon: faCirclePlay,
            event_formatted: 'Created',
            reference: 'Vending Unit 04',
            created_date_full: '02 Mar 2025 09:31',
            description_details: 'Registered by the provisioning job.',
        },
    ],
};

const snippet = [
    '<div class="mb-4 flex flex-wrap items-center justify-between gap-3">',
    '  <div class="flex items-center gap-3">',
    '    <h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">{{ device.name }}</h2>',
    '    <span class="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">',
    '      {{ device.status }}',
    '    </span>',
    '  </div>',
    '  <DangerButton type="button" size="sm" @click="suspend">',
    '    <NbIcon :name="faBan" class="mr-2 h-4 w-4" />',
    '    Suspend',
    '  </DangerButton>',
    '</div>',
    '',
    '<Section>',
    '  <Tabs',
    '    :tabs="[{ value: \'info\', label: \'Info\' }, { value: \'logs\', label: \'Activity\', badge: device.logs.total }]"',
    '    v-model="tab"',
    '    class="mb-4"',
    '  >',
    '    <Tab value="info">',
    '      <div class="mb-2 flex h-9 items-center justify-end">',
    '        <SecondaryButton v-if="form.isDirty" type="button" size="sm" @click="form.patch(route(\'devices.update\', device.id))">',
    '          Save changes',
    '        </SecondaryButton>',
    '      </div>',
    '      <DescriptionList :form="form" stopEditOnSubmit>',
    '        <DescriptionListItem label="Name" editable>',
    '          {{ form.name }}',
    '          <template #edit><Input :form="form" field="name" noLabel /></template>',
    '        </DescriptionListItem>',
    '        <DescriptionListItem label="Location" editable>',
    '          {{ form.location }}',
    '          <template #edit><Input :form="form" field="location" noLabel /></template>',
    '        </DescriptionListItem>',
    '        <DescriptionListItem label="Contact" editable>',
    '          {{ form.contact_email }}',
    '          <template #edit><Input :form="form" field="contact_email" type="email" noLabel /></template>',
    '        </DescriptionListItem>',
    '        <DescriptionListItem label="Serial" :value="device.serial" />',
    '      </DescriptionList>',
    '    </Tab>',
    '',
    '    <Tab value="logs">',
    '      <Logs :logs="device.logs" header="Activity" open />',
    '    </Tab>',
    '  </Tabs>',
    '</Section>',
];
</script>

<template>
    <section id="block-tabbed-detail">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Tabbed Detail Page</h3>
        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A record-detail page: title row with a status pill and a destructive action, then a
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60 dark:text-gray-200">Section</code> holding
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60 dark:text-gray-200">Tabs</code>/<code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60 dark:text-gray-200">Tab</code> panes -
                an inline-edit <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60 dark:text-gray-200">DescriptionList</code> bound to
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60 dark:text-gray-200">useForm()</code> whose Save button only appears while the form is dirty, plus a
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60 dark:text-gray-200">Logs</code> timeline.
            </p>

            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <h2 class="text-xl leading-tight font-semibold text-gray-800 dark:text-gray-200">{{ form.name }}</h2>
                        <span
                            class="rounded-full px-2.5 py-0.5 text-xs font-medium"
                            :class="
                                suspended
                                    ? 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300'
                                    : 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
                            "
                        >
                            {{ suspended ? 'Suspended' : 'Online' }}
                        </span>
                    </div>
                    <DangerButton type="button" size="sm" @click="suspended = !suspended">
                        <NbIcon :name="suspended ? faRotate : faBan" class="mr-2 h-4 w-4" />
                        {{ suspended ? 'Reactivate' : 'Suspend' }}
                    </DangerButton>
                </div>

                <Section>
                    <Tabs
                        :tabs="[
                            { value: 'info', label: 'Info' },
                            { value: 'logs', label: 'Activity', badge: logs.total },
                        ]"
                        v-model="tab"
                        class="mb-4"
                    >
                        <Tab value="info">
                            <div class="mb-2 flex h-9 items-center justify-end gap-3">
                                <span v-if="saved" class="text-sm text-green-600 dark:text-green-400">Saved</span>
                                <SecondaryButton v-if="form.isDirty" type="button" size="sm" @click="save">Save changes</SecondaryButton>
                            </div>

                            <DescriptionList ref="list" :form="form">
                                <DescriptionListItem label="Name" editable>
                                    {{ form.name }}
                                    <template #edit>
                                        <Input :form="form" field="name" noLabel />
                                    </template>
                                </DescriptionListItem>

                                <DescriptionListItem label="Location" editable>
                                    {{ form.location }}
                                    <template #edit>
                                        <Input :form="form" field="location" noLabel />
                                    </template>
                                </DescriptionListItem>

                                <DescriptionListItem label="Contact" editable>
                                    {{ form.contact_email }}
                                    <template #edit>
                                        <Input :form="form" field="contact_email" type="email" noLabel />
                                    </template>
                                </DescriptionListItem>

                                <DescriptionListItem label="Serial" value="VU-04-8871-XA" />
                            </DescriptionList>
                        </Tab>

                        <Tab value="logs">
                            <Logs :logs="logs" header="Activity" open />
                        </Tab>
                    </Tabs>
                </Section>
            </div>

            <CodePreview :code="snippet" />
        </DocDemoCard>
    </section>
</template>
