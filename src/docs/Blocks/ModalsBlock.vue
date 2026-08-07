<script setup lang="ts">
import { reactive, ref } from 'vue';
import { NbIcon } from '../../icons';
import { faDownload, faPlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import {
    CodePreview,
    DangerButton,
    FileDropZoneInput,
    Input,
    NewModal,
    PrimaryButton,
    RadioButton,
    SecondaryButton,
    Switch,
} from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// Every demo form is a plain reactive stand-in for Inertia's useForm: the
// components only need `errors` plus the bound fields, and nothing here posts.
const showCreate = ref(false);
const createForm = reactive({ name: '', email: '', role: '', notes: '', errors: {} as Record<string, string> });

const showExport = ref(false);
const exportForm = reactive({ scope: 'page', format: 'csv', filters: true, errors: {} as Record<string, string> });

const showUpload = ref(false);
const uploadForm = reactive({ name: '', file: null as File | null, errors: {} as Record<string, string> });

const showDelete = ref(false);
const lastAction = ref('');

// Refs unwrap in templates, so a modal ref can't be passed in as an argument -
// only one of these is ever open, so closing all four is the honest short version.
const submit = (label: string) => {
    lastAction.value = label;
    showCreate.value = showExport.value = showUpload.value = showDelete.value = false;
};

const formSnippet = [
    '<PrimaryButton @click="showCreate = true">',
    '    <NbIcon :name="faPlus" class="mr-2 h-3 w-3" />',
    '    New User',
    '</PrimaryButton>',
    '',
    '<NewModal v-model:open="showCreate" title="New user" description="Invite a teammate to this workspace.">',
    '    <div class="space-y-4">',
    '        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">',
    '            <Input :form="form" field="name" label="Full name" required />',
    '            <Input :form="form" field="email" type="email" label="Email" required />',
    '        </div>',
    '        <Input :form="form" field="role" type="select" label="Role">',
    '            <option value="">Select a role…</option>',
    '            <option value="admin">Admin</option>',
    '            <option value="editor">Editor</option>',
    '            <option value="viewer">Viewer</option>',
    '        </Input>',
    '        <Input :form="form" field="notes" type="textarea" label="Notes" :rows="3" />',
    '    </div>',
    '',
    '    <template #footer>',
    '        <SecondaryButton :disabled="form.processing" @click="showCreate = false">Cancel</SecondaryButton>',
    '        <PrimaryButton :disabled="form.processing" @click="form.post(\'/users\')">Create</PrimaryButton>',
    '    </template>',
    '</NewModal>',
];

const exportSnippet = [
    '<SecondaryButton @click="showExport = true">',
    '    <NbIcon :name="faDownload" class="mr-2 h-3 w-3" />',
    '    Export',
    '</SecondaryButton>',
    '',
    '<NewModal v-model:open="showExport" title="Export data" description="Choose what to include in the download.">',
    '    <div class="space-y-4">',
    '        <fieldset>',
    '            <legend class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Scope</legend>',
    '            <div class="space-y-2">',
    '                <RadioButton :form="form" field="scope" value="page" label="Current page" />',
    '                <RadioButton :form="form" field="scope" value="filtered" label="Filtered results" />',
    '                <RadioButton :form="form" field="scope" value="all" label="All records" />',
    '            </div>',
    '        </fieldset>',
    '',
    '        <fieldset>',
    '            <legend class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Format</legend>',
    '            <div class="space-y-2">',
    '                <RadioButton :form="form" field="format" value="csv" label="CSV" />',
    '                <RadioButton :form="form" field="format" value="xlsx" label="Excel (.xlsx)" />',
    '                <RadioButton :form="form" field="format" value="pdf" label="PDF" />',
    '            </div>',
    '        </fieldset>',
    '',
    '        <Switch :form="form" field="filters" label="Apply current filters" rightDescription="Yes" />',
    '',
    '        <p class="rounded bg-gray-100 px-3 py-2 text-sm text-gray-600 dark:bg-gray-900/60 dark:text-gray-400">',
    '            Exporting <span class="font-medium">{{ form.scope }}</span> as',
    '            <span class="font-medium">{{ form.format }}</span>.',
    '        </p>',
    '    </div>',
    '',
    '    <template #footer>',
    '        <SecondaryButton @click="showExport = false">Cancel</SecondaryButton>',
    '        <PrimaryButton @click="form.post(\'/exports\')">Download</PrimaryButton>',
    '    </template>',
    '</NewModal>',
];

const uploadSnippet = [
    '<SecondaryButton @click="showUpload = true">',
    '    <NbIcon :name="faUpload" class="mr-2 h-3 w-3" />',
    '    Upload',
    '</SecondaryButton>',
    '',
    '<NewModal v-model:open="showUpload" title="Upload document">',
    '    <div class="space-y-4">',
    '        <Input :form="form" field="name" label="Document name" required />',
    '        <FileDropZoneInput :form="form" field="file" accept=".pdf,.csv" label="PDF or CSV, up to 10 MB" />',
    '    </div>',
    '',
    '    <template #footer>',
    '        <SecondaryButton :disabled="form.processing" @click="showUpload = false">Cancel</SecondaryButton>',
    '        <PrimaryButton :disabled="form.processing || !form.file" @click="form.post(\'/documents\')">',
    '            {{ form.processing ? \'Uploading…\' : \'Upload\' }}',
    '        </PrimaryButton>',
    '    </template>',
    '</NewModal>',
];

const dangerSnippet = [
    '<DangerButton @click="showDelete = true">',
    '    <NbIcon :name="faTrash" class="mr-2 h-3 w-3" />',
    '    Delete',
    '</DangerButton>',
    '',
    '<NewModal v-model:open="showDelete" class="max-w-md" title="Delete project?"',
    '    description="This removes the project and all of its runs. It cannot be undone.">',
    '    <template #footer>',
    '        <SecondaryButton @click="showDelete = false">Cancel</SecondaryButton>',
    '        <DangerButton @click="form.delete(\'/projects/1\')">Delete project</DangerButton>',
    '    </template>',
    '</NewModal>',
];

const showResizable = ref(false);
const resizableSnippet = [
    '<SecondaryButton @click="showResizable = true">Open resizable</SecondaryButton>',
    '',
    '<!-- `resizable` adds a native drag handle to the bottom-right corner;',
    '     the dialog is clamped between 320x160 and 95vw x 90vh -->',
    '<NewModal v-model:open="showResizable" resizable title="Release notes">',
    '    <p>Drag the bottom-right corner to grow or shrink this dialog.</p>',
    '</NewModal>',
];
</script>

<template>
    <section id="block-modals">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
            Modal Recipes
        </h3>
        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                Five ready-made <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">NewModal</code> compositions — create form, export options, upload, danger confirm and a
                resizable dialog — built from Input, RadioButton, Switch, FileDropZoneInput and the button family.
            </p>

            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="flex flex-wrap gap-2">
                    <PrimaryButton @click="showCreate = true">
                        <NbIcon :name="faPlus" class="mr-2 h-3 w-3" />
                        New User
                    </PrimaryButton>
                    <SecondaryButton @click="showExport = true">
                        <NbIcon :name="faDownload" class="mr-2 h-3 w-3" />
                        Export
                    </SecondaryButton>
                    <SecondaryButton @click="showUpload = true">
                        <NbIcon :name="faUpload" class="mr-2 h-3 w-3" />
                        Upload
                    </SecondaryButton>
                    <SecondaryButton @click="showResizable = true">Resizable</SecondaryButton>
                    <DangerButton @click="showDelete = true">
                        <NbIcon :name="faTrash" class="mr-2 h-3 w-3" />
                        Delete
                    </DangerButton>
                </div>
                <p v-if="lastAction" class="mt-3 text-sm text-gray-600 dark:text-gray-400">Last action: {{ lastAction }}</p>
            </div>

            <!-- 1. Create / edit form modal -->
            <NewModal v-model:open="showCreate" title="New user" description="Invite a teammate to this workspace.">
                <div class="space-y-4">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Input :form="createForm" field="name" label="Full name" placeholder="Ada Lovelace" required />
                        <Input :form="createForm" field="email" type="email" label="Email" placeholder="ada@example.com" required />
                    </div>
                    <Input :form="createForm" field="role" type="select" label="Role">
                        <option value="">Select a role…</option>
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                        <option value="viewer">Viewer</option>
                    </Input>
                    <Input :form="createForm" field="notes" type="textarea" label="Notes" :rows="3" placeholder="Optional" />
                </div>
                <template #footer>
                    <SecondaryButton @click="showCreate = false">Cancel</SecondaryButton>
                    <PrimaryButton @click="submit('Created user')">Create</PrimaryButton>
                </template>
            </NewModal>

            <!-- 2. Export options modal -->
            <NewModal v-model:open="showExport" title="Export data" description="Choose what to include in the download.">
                <div class="space-y-4">
                    <fieldset>
                        <legend class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Scope</legend>
                        <div class="space-y-2">
                            <RadioButton :form="exportForm" field="scope" value="page" label="Current page" />
                            <RadioButton :form="exportForm" field="scope" value="filtered" label="Filtered results" />
                            <RadioButton :form="exportForm" field="scope" value="all" label="All records" />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Format</legend>
                        <div class="space-y-2">
                            <RadioButton :form="exportForm" field="format" value="csv" label="CSV" />
                            <RadioButton :form="exportForm" field="format" value="xlsx" label="Excel (.xlsx)" />
                            <RadioButton :form="exportForm" field="format" value="pdf" label="PDF" />
                        </div>
                    </fieldset>

                    <Switch :form="exportForm" field="filters" label="Apply current filters" rightDescription="Yes" />

                    <p class="rounded bg-gray-100 px-3 py-2 text-sm text-gray-600 dark:bg-gray-900/60 dark:text-gray-400">
                        Exporting <span class="font-medium">{{ exportForm.scope }}</span> as
                        <span class="font-medium">{{ exportForm.format }}</span>.
                    </p>
                </div>
                <template #footer>
                    <SecondaryButton @click="showExport = false">Cancel</SecondaryButton>
                    <PrimaryButton @click="submit('Exported ' + exportForm.scope + ' as ' + exportForm.format)">
                        Download
                    </PrimaryButton>
                </template>
            </NewModal>

            <!-- 3. Upload modal -->
            <NewModal v-model:open="showUpload" title="Upload document">
                <div class="space-y-4">
                    <Input :form="uploadForm" field="name" label="Document name" placeholder="Q3 invoices" required />
                    <FileDropZoneInput :form="uploadForm" field="file" accept=".pdf,.csv" label="PDF or CSV, up to 10 MB" />
                </div>
                <template #footer>
                    <SecondaryButton @click="showUpload = false">Cancel</SecondaryButton>
                    <PrimaryButton :disabled="!uploadForm.file" @click="submit('Uploaded document')">Upload</PrimaryButton>
                </template>
            </NewModal>

            <!-- 4. Danger confirm -->
            <NewModal
                v-model:open="showDelete"
                class="max-w-md"
                title="Delete project?"
                description="This removes the project and all of its runs. It cannot be undone."
            >
                <template #footer>
                    <SecondaryButton @click="showDelete = false">Cancel</SecondaryButton>
                    <DangerButton @click="submit('Deleted project')">Delete project</DangerButton>
                </template>
            </NewModal>

            <!-- 5. Resizable -->
            <NewModal v-model:open="showResizable" resizable title="Release notes">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                    Drag the bottom-right corner to grow or shrink this dialog. The size is clamped between 320&times;160
                    and 95vw&times;90vh.
                </p>
            </NewModal>

            <CodePreview :code="formSnippet" filename="Create form modal" />
            <CodePreview :code="exportSnippet" filename="Export options modal" />
            <CodePreview :code="uploadSnippet" filename="Upload modal" />
            <CodePreview :code="dangerSnippet" filename="Danger confirm modal" />
            <CodePreview :code="resizableSnippet" filename="Resizable modal" />
        </DocDemoCard>
    </section>
</template>
