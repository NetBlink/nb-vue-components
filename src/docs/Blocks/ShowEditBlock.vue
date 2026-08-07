<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import { Input, Select, Textarea, Alert, NewModal, PrimaryButton, SecondaryButton, DangerButton, CodePreview } from '../../index';
import { NbIcon } from '../../icons';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// The persisted record. Read mode renders this; edit mode edits a copy of it.
const record = ref({
    name: 'Northwind Trading BV',
    email: 'billing@northwind.example',
    vat: 'NL0012 3456 B01',
    plan: 'business',
    status: 'active',
    notes: 'Prefers consolidated monthly invoicing. Contact via the billing address only.',
});

// Label + help description per field, shared by both modes so the two views never drift.
const fields = [
    { key: 'name', label: 'Company name', description: 'The public name shown on invoices.' },
    { key: 'email', label: 'Billing email', description: 'Where invoices and payment reminders are sent.' },
    { key: 'vat', label: 'VAT number', description: 'Used to apply the reverse-charge rule inside the EU.' },
    { key: 'plan', label: 'Plan', description: 'Determines seat limits and support response times.' },
] as const;

const planOptions = [
    { value: 'starter', label: 'Starter' },
    { value: 'business', label: 'Business' },
    { value: 'enterprise', label: 'Enterprise' },
];

const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'suspended', label: 'Suspended' },
];

const mode = ref<'read' | 'edit'>('read');
const saved = ref(false);
const confirmDiscard = ref(false);

const form = useForm({ ...record.value });

const planLabel = computed(() => planOptions.find((option) => option.value === record.value.plan)?.label ?? record.value.plan);
const displayValue = (key: string) => (key === 'plan' ? planLabel.value : (record.value as Record<string, string>)[key]);

function startEdit() {
    saved.value = false;
    mode.value = 'edit';
}

function discard() {
    form.reset();
    confirmDiscard.value = false;
    mode.value = 'read';
}

function cancelEdit() {
    if (form.isDirty) {
        confirmDiscard.value = true;
        return;
    }
    discard();
}

function save() {
    form.processing = true;
    setTimeout(() => {
        record.value = { ...record.value, ...(form.data() as typeof record.value) };
        form.defaults();
        form.processing = false;
        mode.value = 'read';
        saved.value = true;
    }, 900);
}

const readSnippet = [
    '<div class="flex flex-wrap items-start justify-between gap-4 border-b border-gray-200 pb-4 dark:border-gray-700">',
    '    <div>',
    '        <h1 class="text-xl font-semibold text-gray-800 dark:text-gray-100">{{ customer.name }}</h1>',
    '        <span',
    '            class="mt-1 inline-flex rounded-full px-2 py-0.5 text-xs font-medium"',
    '            :class="customer.status === \'active\' ? \'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200\' : \'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200\'"',
    '        >',
    '            {{ customer.status }}',
    '        </span>',
    '    </div>',
    '    <div class="flex gap-2">',
    '        <PrimaryButton type="button" size="sm" @click="editing = true">Edit</PrimaryButton>',
    '        <DangerButton type="button" size="sm" @click="router.delete(`/customers/${customer.id}`)">Delete</DangerButton>',
    '    </div>',
    '</div>',
    '',
    '<Alert type="success" class="mt-4" dismissible v-model="saved">Customer details were updated.</Alert>',
    '',
    '<dl class="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">',
    '    <div v-for="field in fields" :key="field.key">',
    '        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ field.label }}</dt>',
    '        <dd class="mt-1 text-sm text-gray-900 dark:text-gray-100">{{ customer[field.key] }}</dd>',
    '        <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">{{ field.description }}</p>',
    '    </div>',
    '',
    '    <div class="sm:col-span-2">',
    '        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Internal notes</dt>',
    '        <dd class="mt-1 text-sm text-gray-900 dark:text-gray-100">{{ customer.notes }}</dd>',
    '        <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">Only visible to your team, never shown to the customer.</p>',
    '    </div>',
    '</dl>',
];

const editSnippet = [
    '<form @submit.prevent="form.put(`/customers/${customer.id}`, { onSuccess: () => (editing = false) })">',
    '    <div class="grid gap-x-6 gap-y-4 sm:grid-cols-2">',
    '        <div>',
    '            <Input :form="form" field="name" label="Company name" required autofocus />',
    '            <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">The public name shown on invoices.</p>',
    '        </div>',
    '        <div>',
    '            <Input :form="form" field="email" type="email" label="Billing email" required />',
    '            <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">Where invoices and payment reminders are sent.</p>',
    '        </div>',
    '        <div>',
    '            <Input :form="form" field="vat" label="VAT number" />',
    '            <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">Used to apply the reverse-charge rule inside the EU.</p>',
    '        </div>',
    '        <div>',
    '            <Select :form="form" field="plan" label="Plan" :options="planOptions" />',
    '            <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">Determines seat limits and support response times.</p>',
    '        </div>',
    '        <div>',
    '            <Select :form="form" field="status" label="Status" :options="statusOptions" />',
    '            <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">Suspended accounts keep their data but cannot sign in.</p>',
    '        </div>',
    '',
    '        <div class="sm:col-span-2">',
    '            <Textarea :form="form" field="notes" label="Internal notes" :rows="3" />',
    '            <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">Only visible to your team.</p>',
    '        </div>',
    '    </div>',
    '',
    '    <div class="mt-6 flex flex-wrap items-center justify-end gap-2 border-t border-gray-200 pt-4 dark:border-gray-700">',
    '        <span v-if="form.isDirty" class="mr-auto text-xs text-gray-500 dark:text-gray-400">Unsaved changes</span>',
    '        <SecondaryButton type="button" @click="cancel">Cancel</SecondaryButton>',
    '        <PrimaryButton type="submit" :disabled="form.processing">',
    '            {{ form.processing ? \'Saving...\' : \'Save changes\' }}',
    '        </PrimaryButton>',
    '    </div>',
    '</form>',
    '',
    '<!-- cancel() opens this instead of discarding when form.isDirty -->',
    '<NewModal v-model="confirmDiscard" title="Discard changes?" description="Your edits will be lost.">',
    '    <template #footer>',
    '        <SecondaryButton type="button" @click="confirmDiscard = false">Keep editing</SecondaryButton>',
    '        <DangerButton type="button" @click="form.reset(); confirmDiscard = false; editing = false">Discard</DangerButton>',
    '    </template>',
    '</NewModal>',
];
</script>

<template>
    <section id="block-show-edit">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Show &amp; Edit Page</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A CRUD resource page that swaps the whole page between a read view and an edit view. Read mode is a two-column description list where every
                field carries a help line; edit mode turns the same fields into Input, Select and Textarea with the same help lines as hints. Cancelling with
                unsaved changes asks for confirmation in a NewModal.
            </p>

            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mx-auto w-full max-w-3xl rounded-lg border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-700 dark:bg-gray-800">
                    <!-- Page header -->
                    <div class="flex flex-wrap items-start justify-between gap-4 border-b border-gray-200 pb-4 dark:border-gray-700">
                        <div>
                            <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100">{{ record.name }}</h2>
                            <span
                                class="mt-2 inline-flex rounded-full px-2 py-0.5 text-xs font-medium"
                                :class="
                                    record.status === 'active'
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200'
                                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200'
                                "
                            >
                                {{ record.status === 'active' ? 'Active' : 'Suspended' }}
                            </span>
                        </div>

                        <div class="flex gap-2" v-if="mode === 'read'">
                            <PrimaryButton type="button" size="sm" @click="startEdit">
                                <NbIcon :name="faPen" class="mr-2 h-3 w-3" />
                                Edit
                            </PrimaryButton>
                            <DangerButton type="button" size="sm" @click.prevent>
                                <NbIcon :name="faTrash" class="mr-2 h-3 w-3" />
                                Delete
                            </DangerButton>
                        </div>
                        <span v-else class="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">Editing</span>
                    </div>

                    <!-- Read mode -->
                    <template v-if="mode === 'read'">
                        <Alert type="success" class="mt-4" dismissible v-model="saved">Customer details were updated.</Alert>

                        <dl class="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                            <div v-for="field in fields" :key="field.key">
                                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ field.label }}</dt>
                                <dd class="mt-1 text-sm text-gray-900 dark:text-gray-100">{{ displayValue(field.key) }}</dd>
                                <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">{{ field.description }}</p>
                            </div>

                            <div class="sm:col-span-2">
                                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Internal notes</dt>
                                <dd class="mt-1 text-sm text-gray-900 dark:text-gray-100">{{ record.notes }}</dd>
                                <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">Only visible to your team, never shown to the customer.</p>
                            </div>
                        </dl>
                    </template>

                    <!-- Edit mode -->
                    <form v-else @submit.prevent="save" class="mt-6">
                        <div class="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                            <div>
                                <Input :form="form" field="name" label="Company name" required autofocus />
                                <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">The public name shown on invoices.</p>
                            </div>
                            <div>
                                <Input :form="form" field="email" type="email" label="Billing email" required />
                                <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">Where invoices and payment reminders are sent.</p>
                            </div>
                            <div>
                                <Input :form="form" field="vat" label="VAT number" />
                                <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">Used to apply the reverse-charge rule inside the EU.</p>
                            </div>
                            <div>
                                <Select :form="form" field="plan" label="Plan" :options="planOptions" />
                                <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">Determines seat limits and support response times.</p>
                            </div>
                            <div>
                                <Select :form="form" field="status" label="Status" :options="statusOptions" />
                                <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">Suspended accounts keep their data but cannot sign in.</p>
                            </div>
                            <div class="sm:col-span-2">
                                <Textarea :form="form" field="notes" label="Internal notes" :rows="3" />
                                <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">Only visible to your team, never shown to the customer.</p>
                            </div>
                        </div>

                        <div class="mt-6 flex flex-wrap items-center justify-end gap-2 border-t border-gray-200 pt-4 dark:border-gray-700">
                            <span v-if="form.isDirty" class="mr-auto text-xs text-gray-500 dark:text-gray-400">Unsaved changes</span>
                            <SecondaryButton type="button" @click="cancelEdit">Cancel</SecondaryButton>
                            <PrimaryButton type="submit" :disabled="form.processing">
                                {{ form.processing ? 'Saving...' : 'Save changes' }}
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>

            <NewModal v-model="confirmDiscard" title="Discard changes?" description="You have unsaved edits on this customer. Closing the editor will lose them.">
                <template #footer>
                    <SecondaryButton type="button" @click="confirmDiscard = false">Keep editing</SecondaryButton>
                    <DangerButton type="button" @click="discard">Discard</DangerButton>
                </template>
            </NewModal>

            <CodePreview :code="readSnippet" filename="Show.vue — read mode" />
            <CodePreview :code="editSnippet" filename="Show.vue — edit mode" />
        </DocDemoCard>
    </section>
</template>
