<script setup lang="ts">
import DocComponentMeta from './HelperComponents/DocComponentMeta.vue';
import { ref } from 'vue';
import { NbIcon } from '../icons';
import {
    Modal,
    NewModal,
    PrimaryButton,
    SecondaryButton,
    DangerButton,
    Input,
    Checkbox,
    CodePreview,
    CollapsableSection,
    PropsTable, InlineCode } from '../index';
import { useForm } from '@inertiajs/vue3';
import DocDemoCard from './HelperComponents/DocDemoCard.vue';
import ConfirmDialogDoc from './sections/ConfirmDialogDoc.vue';

// Modal state management
const showBasic = ref(false);
const showFormModal = ref(false);
const showConfirmModal = ref(false);

// Legacy Modal state
const showLegacyModal = ref(false);

// Form for modal example
const modalForm = useForm({
    name: '',
    email: '',
    message: '',
    subscribe: false,
});

const handleSubmit = () => {
    console.log('Form submitted:', modalForm.data());
    showFormModal.value = false;
    modalForm.reset();
};

const handleConfirm = () => {
    console.log('Action confirmed');
    showConfirmModal.value = false;
};

// Code examples - NewModal is the canonical component.
const basicExamples = [
    '<NewModal v-model:open="open" title="Welcome">',
    '  <p>Body content lives in the default slot.</p>',
    '  <template #footer>',
    '    <SecondaryButton @click="open = false">Cancel</SecondaryButton>',
    '    <PrimaryButton @click="onConfirm">Got it</PrimaryButton>',
    '  </template>',
    '</NewModal>',
    '',
    '<!-- Custom header markup overrides the `title` prop -->',
    '<NewModal v-model:open="open">',
    '  <template #header>',
    '    <span class="text-red-600">Heads up</span>',
    '  </template>',
    '  <p>Default-slot body…</p>',
    '</NewModal>',
];

const confirmationExamples = [
    '<NewModal v-model:open="showConfirmModal" title="Confirm deletion">',
    '  <p class="text-gray-600 dark:text-gray-400">Are you sure? This cannot be undone.</p>',
    '  <template #footer>',
    '    <SecondaryButton @click="showConfirmModal = false">Cancel</SecondaryButton>',
    '    <DangerButton @click="handleConfirm">Delete account</DangerButton>',
    '  </template>',
    '</NewModal>',
];

const formExamples = [
    '<NewModal v-model:open="showFormModal" title="Contact us">',
    '  <form @submit.prevent="handleSubmit" class="space-y-4">',
    '    <Input :form="form" field="name" label="Name" required />',
    '    <Input :form="form" field="email" type="email" required />',
    '    <Input :form="form" field="message" type="textarea" :rows="4" />',
    '    <Checkbox :form="form" field="subscribe" label="Subscribe to newsletter" />',
    '  </form>',
    '  <template #footer>',
    '    <SecondaryButton type="button" @click="showFormModal = false">Cancel</SecondaryButton>',
    '    <SubmitButton :form="form" @click="handleSubmit">Send</SubmitButton>',
    '  </template>',
    '</NewModal>',
];

const legacyModalExample = [
    '<!-- Deprecated. Single default slot only. Prefer NewModal for new code. -->',
    '<Modal :show="open" @close="open = false">',
    '  <div class="p-6">',
    '    <h3 class="text-lg font-semibold">Title</h3>',
    '    <p>Body…</p>',
    '    <div class="mt-6 flex justify-end gap-3">',
    '      <SecondaryButton @click="open = false">Close</SecondaryButton>',
    '    </div>',
    '  </div>',
    '</Modal>',
];

// Props data for modals - verified against Modal.vue and NewModal.vue
const modalProps = [
    { prop: 'show', type: 'boolean', default: 'false', description: 'Controls modal visibility, paired with @close (there is no update:show, so v-model:show cannot close it)' },
    { prop: 'maxWidth', type: 'string', default: "'2xl'", description: 'sm, md, lg, xl, 2xl, 3xl-7xl, or percentage strings: 50%, 60%, 75%, 80%, 90%, 95%' },
    { prop: 'closeable', type: 'boolean', default: 'true', description: 'Allow closing via backdrop click or Escape key' },
    { prop: 'alignCenter', type: 'boolean', default: 'false', description: 'Vertically center the modal (default top-aligns)' },
    { prop: 'hideOverflow', type: 'boolean', default: 'true', description: 'Apply overflow-hidden to the modal container' },
    { prop: 'showBorder', type: 'boolean', default: 'false', description: 'Add the brand-coloured border around the modal' },
    { prop: 'resizable', type: 'boolean', default: 'false', description: 'Render edge/corner handles so the user can resize the modal' },
    { prop: 'backdropDuration', type: 'number', default: '200', description: 'Backdrop fade duration in ms' },
    { prop: 'modalDuration', type: 'number', default: '200', description: 'Modal enter/leave duration in ms' },
    { prop: 'modalCustomClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
    { prop: 'backdropCustomClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
];

const modalEvents = [
    { prop: '@close', type: 'event', default: '-', description: 'Fired when the user clicks the backdrop or presses Escape (only when closeable is true)' },
];

const newModalProps = [
    { prop: 'v-model:open', type: 'boolean', default: 'false', description: 'Two-way binding for open state', highlight: true },
    { prop: 'title', type: 'string', default: '-', description: 'Title rendered in DialogTitle (overridden by #header slot)' },
    { prop: 'description', type: 'string', default: '-', description: 'Sub-title rendered in DialogDescription (overridden by #description slot)' },
    { prop: 'defaultOpen', type: 'boolean', default: 'false', description: 'Open on mount' },
    { prop: 'resizable', type: 'boolean', default: 'false', description: 'Drag-resize the dialog from its bottom-right corner (native CSS resize; caps at 95vw / 90vh)' },
    { prop: 'show', type: 'boolean', default: '-', description: 'Open state for :show + @close call sites carried over from Modal (v-model:show works too)' },
    { prop: 'maxWidth', type: 'string', default: '600px', description: 'sm, md, lg, xl, 2xl-7xl, 50%, 60%, 75%, 80%, 90%, 95%, or any CSS length. With resizable it sets the starting width' },
    { prop: 'closeable', type: 'boolean', default: 'true', description: 'Allow closing via Escape, backdrop click and the close button (false also hides the button)' },
    { prop: 'hideOverflow', type: 'boolean', default: 'true', description: 'Keep content inside the panel (scrolls past 85vh). false lets non-portaled popups spill out' },
    { prop: 'alignTop', type: 'boolean', default: 'false', description: 'Top-align instead of centring, so growing content does not make the dialog jump' },
    { prop: 'showBorder', type: 'boolean', default: 'false', description: 'Add the brand-coloured border around the panel' },
    { prop: 'padded', type: 'boolean', default: 'true', description: 'Built-in panel padding. false when the slot brings its own' },
    { prop: 'backdropDuration', type: 'number', default: '-', description: 'Backdrop animation duration in ms (defaults to the theme motion tokens)' },
    { prop: 'modalDuration', type: 'number', default: '-', description: 'Panel animation duration in ms (defaults to the theme motion tokens)' },
    { prop: 'backdropCustomClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
];

const newModalEvents = [
    { prop: '@close', type: 'event', default: '-', description: 'Fired when the user dismisses the dialog (Escape, backdrop click or the close button), never when the parent closes it' },
];

const migrationExample = [
    '<!-- Before -->',
    '<Modal :show="open" @close="open = false" max-width="lg" modal-custom-class="text-sm">',
    '  <div class="p-6">…</div>',
    '</Modal>',
    '',
    '<!-- After: same props, rename the tag -->',
    '<NewModal :show="open" @close="open = false" max-width="lg" class="text-sm" align-top :padded="false">',
    '  <div class="p-6">…</div>',
    '</NewModal>',
];

const migrationRows = [
    { prop: ':show + @close', type: 'same', default: '-', description: 'Works as-is. v-model:open is the idiomatic form for new code' },
    { prop: 'maxWidth, closeable, hideOverflow, showBorder, resizable', type: 'same', default: '-', description: 'Same names and values' },
    { prop: 'backdropDuration, modalDuration, backdropCustomClass', type: 'same', default: '-', description: 'Same names and values' },
    { prop: 'modalCustomClass', type: 'renamed', default: '-', description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
    { prop: 'alignCenter', type: 'removed', default: '-', description: 'Centred is the default. Where alignCenter was absent, add align-top to keep the old position' },
    { prop: 'own padding in the slot', type: 'new prop', default: '-', description: 'Add :padded="false" so it is not padded twice' },
];

const newModalSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Main body content' },
    { prop: 'header', type: 'slot', default: '-', description: 'Custom header markup (replaces the `title` prop)' },
    { prop: 'description', type: 'slot', default: '-', description: 'Custom description markup (replaces the `description` prop)' },
    { prop: 'footer', type: 'slot', default: '-', description: 'Footer area, right-aligned at the bottom of the modal' },
    { prop: 'trigger', type: 'slot', default: '-', description: 'Element that opens the modal when clicked (uses Radix DialogTrigger)' },
];
</script>

<template>
    <div class="space-y-10">
        <header class="space-y-3">
            <div
                class="rounded-lg border border-blue-200 bg-blue-50/50 p-4 text-sm text-blue-900 dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-100"
            >
                <strong>NewModal</strong> is the canonical dialog - built on reka-ui's
                <InlineCode>Dialog</InlineCode>, drives state with
                <InlineCode>v-model:open</InlineCode>, and ships named
                <InlineCode>header</InlineCode> /
                <InlineCode>description</InlineCode> /
                <InlineCode>footer</InlineCode> /
                <InlineCode>trigger</InlineCode> slots. Use it for all new code. The older single-slot
                <InlineCode>Modal</InlineCode> is deprecated and lives at the bottom of this page.
            </div>
        </header>

        <section id="basic">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Basic dialog</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Pass a <InlineCode>title</InlineCode> for the header bar (or use the
                    <InlineCode>#header</InlineCode> slot for custom markup). Body goes in the default slot, action buttons
                    in <InlineCode>#footer</InlineCode>.
                </p>

                <div class="mb-6">
                    <PrimaryButton @click="showBasic = true">Open basic dialog</PrimaryButton>
                </div>

                <NewModal v-model:open="showBasic" title="Welcome to Our App">
                    <p class="text-gray-600 dark:text-gray-400">
                        This is a basic dialog demonstrating <InlineCode>title</InlineCode> + default slot +
                        <InlineCode>#footer</InlineCode>.
                    </p>
                    <template #footer>
                        <SecondaryButton @click="showBasic = false">Cancel</SecondaryButton>
                        <PrimaryButton @click="showBasic = false">Got it</PrimaryButton>
                    </template>
                </NewModal>

                <CodePreview :code="basicExamples" />
            </DocDemoCard>
        </section>

        <section id="confirmation">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Confirmation dialog</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">Use the <InlineCode>#header</InlineCode> slot when you need icon + title together.</p>

                <div class="mb-6">
                    <DangerButton @click="showConfirmModal = true">Delete account</DangerButton>
                </div>

                <NewModal v-model:open="showConfirmModal">
                    <template #header>
                        <span class="flex items-center gap-2">
                            <NbIcon name="$warning" class="h-5 w-5 text-red-600" />
                            Confirm deletion
                        </span>
                    </template>
                    <p class="text-gray-600 dark:text-gray-400">
                        Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
                    </p>
                    <template #footer>
                        <SecondaryButton @click="showConfirmModal = false">Cancel</SecondaryButton>
                        <DangerButton @click="handleConfirm">Delete account</DangerButton>
                    </template>
                </NewModal>

                <CodePreview :code="confirmationExamples" />
            </DocDemoCard>
        </section>

        <ConfirmDialogDoc />

        <section id="form">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Form dialog</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">Forms render inside the default slot. Keep buttons in the footer so they pin to the bottom.</p>

                <div class="mb-6">
                    <PrimaryButton @click="showFormModal = true">Open contact form</PrimaryButton>
                </div>

                <NewModal v-model:open="showFormModal" title="Contact us">
                    <form @submit.prevent="handleSubmit" class="space-y-4">
                        <Input :form="modalForm" field="name" label="Your name" required />
                        <Input :form="modalForm" field="email" type="email" label="Email" required />
                        <Input
                            :form="modalForm"
                            field="message"
                            type="textarea"
                            label="Message"
                            :rows="4"
                            placeholder="Tell us how we can help…"
                        />
                        <Checkbox :form="modalForm" field="subscribe" label="Subscribe to our newsletter" />
                    </form>
                    <template #footer>
                        <SecondaryButton type="button" @click="showFormModal = false">Cancel</SecondaryButton>
                        <PrimaryButton @click="handleSubmit">Send</PrimaryButton>
                    </template>
                </NewModal>

                <CodePreview :code="formExamples" />
            </DocDemoCard>
        </section>

        <section id="api">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">NewModal API</h3>
            <DocDemoCard>
                <CollapsableSection header="Props" :open="true">
                    <PropsTable :rows="newModalProps" />
                </CollapsableSection>

                <CollapsableSection header="Slots" class="mt-4">
                    <PropsTable :rows="newModalSlots" />
                </CollapsableSection>

                <CollapsableSection header="Events" class="mt-4">
                    <PropsTable :rows="newModalEvents" />
                </CollapsableSection>
            </DocDemoCard>
        </section>

        <section id="migration">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Migrating from Modal</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    NewModal takes every Modal prop, so most call sites only need the tag renamed. The differences:
                </p>
                <PropsTable :rows="migrationRows" />
                <CodePreview :code="migrationExample" class="mt-4" />
            </DocDemoCard>
        </section>

        <section id="deprecated">
            <h3 class="mb-4 flex items-center gap-2 border-b-2 border-amber-200 pb-2 text-xl font-semibold text-amber-700 dark:border-amber-700/60 dark:text-amber-400">
                Deprecated
                <span
                    class="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-amber-800 dark:bg-amber-900/40 dark:text-amber-200"
                >
                    Still works, no new features
                </span>
            </h3>

            <div class="rounded-lg border border-amber-200 bg-amber-50/40 p-6 dark:border-amber-900/40 dark:bg-amber-950/30">
                <p class="mb-4 text-sm text-amber-900 dark:text-amber-200">
                    The original <InlineCode>Modal</InlineCode> component is documented here for backwards reference only - it
                    will not be receiving further work. <strong>Migrate to NewModal for all new code</strong> (see <a href="#migration" class="underline">Migrating from Modal</a>). Modal exposes only a single default
                    slot (no named header/footer slots) and uses <InlineCode>:show + @close</InlineCode> instead of
                    <InlineCode>v-model:open</InlineCode>.
                </p>

                <div class="mb-4">
                    <SecondaryButton @click="showLegacyModal = true">Open legacy Modal</SecondaryButton>
                </div>

                <Modal :show="showLegacyModal" @close="showLegacyModal = false">
                    <div class="p-6">
                        <div class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Legacy Modal</div>
                        <p class="text-gray-600 dark:text-gray-400">All header, body and footer markup must be supplied via the single default slot.</p>
                        <div class="mt-6 flex justify-end gap-3">
                            <SecondaryButton @click="showLegacyModal = false">Close</SecondaryButton>
                        </div>
                    </div>
                </Modal>

                <CodePreview :code="legacyModalExample" />

                <CollapsableSection header="Modal Props (deprecated)" class="mt-6">
                    <PropsTable :rows="modalProps" />
                </CollapsableSection>

                <CollapsableSection header="Modal Events (deprecated)" class="mt-4">
                    <PropsTable :rows="modalEvents" />
                </CollapsableSection>
            </div>
        </section>

        <DocComponentMeta :names="['NewModal', 'Modal', 'ConfirmDialog']" />
    </div>
</template>
