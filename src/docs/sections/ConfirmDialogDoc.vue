<script setup lang="ts">
import { ref } from 'vue';
import { ConfirmDialog, confirm, SecondaryButton, DangerButton, CodePreview, CollapsableSection, PropsTable, InlineCode } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const result = ref('');

const deleteProject = async () => {
    const ok = await confirm({ title: 'Delete "Website redesign"?', description: 'Its tasks and files go too. This cannot be undone.', confirmLabel: 'Delete', danger: true });
    result.value = ok ? 'Deleted' : 'Kept';
};

const askTwice = async () => {
    const first = confirm({ title: 'First question', description: 'Answer this one first.' });
    const second = confirm({ title: 'Second question', description: 'Shows once the first is answered.' });
    result.value = `first: ${await first}, second: ${await second}`;
};

const code = [
    "import { confirm } from '@netblink/vue-components';",
    '',
    'async function destroy(invoice) {',
    "    if (!(await confirm({ title: `Delete invoice ${invoice.number}?`, confirmLabel: 'Delete', danger: true }))) return;",
    "    router.delete(route('invoices.destroy', invoice));",
    '}',
    '',
    '<!-- Nothing to add to the layout: <Toaster /> renders the dialog. -->',
    '<!-- Without a Toaster, place <ConfirmDialog /> once instead. -->',
];

const options = [
    { prop: 'title', type: 'string', default: '-', description: 'The question', required: true },
    { prop: 'description', type: 'string', default: '-', description: 'What happens if they confirm' },
    { prop: 'confirmLabel', type: 'string', default: "'Confirm'", description: 'Confirm button label' },
    { prop: 'cancelLabel', type: 'string', default: "'Cancel'", description: 'Cancel button label' },
    { prop: 'danger', type: 'boolean', default: 'false', description: 'Danger button, and Cancel gets the focus' },
];
</script>

<template>
    <section id="confirm-dialog">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Confirm</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                <InlineCode>await confirm(...)</InlineCode> asks a yes/no question and resolves <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode>.
                Esc, the close button and Cancel all answer no. Questions asked together queue up.
            </p>
            <div class="mb-6 flex flex-wrap items-center gap-3">
                <DangerButton type="button" @click="deleteProject">Delete project</DangerButton>
                <SecondaryButton type="button" @click="askTwice">Ask twice</SecondaryButton>
                <span class="text-sm text-gray-600 dark:text-gray-400" data-confirm-result>{{ result }}</span>
            </div>
            <!-- The docs pages don't mount a Toaster everywhere, so this page places the dialog itself. -->
            <ConfirmDialog />
            <CodePreview :code="code" />
            <CollapsableSection header="confirm() options" class="mt-6">
                <PropsTable :rows="options" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
