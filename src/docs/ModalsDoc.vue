<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
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
    PropsTable,
} from '../index';
import { useForm } from '@inertiajs/vue3';

// Modal state management
const showBasicModal = ref(false);
const showFormModal = ref(false);
const showConfirmModal = ref(false);
const showNewModal = ref(false);

// Form for modal example
const modalForm = useForm({
    name: '',
    email: '',
    message: '',
    subscribe: false,
});

const handleSubmit = () => {
    // Simulate form submission
    console.log('Form submitted:', modalForm.data());
    showFormModal.value = false;
    modalForm.reset();
};

const handleConfirm = () => {
    console.log('Action confirmed');
    showConfirmModal.value = false;
};

// Code examples — Modal has a single default slot; lay out header/body/footer
// inside that slot however you want.
const basicModalExamples = [
    '<Modal :show="showModal" @close="showModal = false">',
    '  <div class="p-6">',
    '    <h3 class="text-lg font-semibold">Modal Title</h3>',
    '    <p class="mt-2 text-gray-600">This is the modal content.</p>',
    '    <div class="mt-6 flex justify-end gap-3">',
    '      <SecondaryButton @click="showModal = false">Cancel</SecondaryButton>',
    '      <PrimaryButton @click="handleAction">Confirm</PrimaryButton>',
    '    </div>',
    '  </div>',
    '</Modal>',
];

const formModalExamples = [
    '<Modal :show="showFormModal" @close="showFormModal = false" maxWidth="lg">',
    '  <form @submit.prevent="handleSubmit" class="space-y-4 p-6">',
    '    <h3 class="text-lg font-semibold">Contact Form</h3>',
    '    <Input :form="form" field="name" label="Name" required />',
    '    <Input :form="form" field="email" type="email" label="Email" required />',
    '    <Input :form="form" field="message" type="textarea" :rows="4" />',
    '    <Checkbox :form="form" field="subscribe" label="Subscribe to newsletter" />',
    '    <div class="flex justify-end gap-3 pt-2">',
    '      <SecondaryButton type="button" @click="showFormModal = false">Cancel</SecondaryButton>',
    '      <SubmitButton :form="form">Send</SubmitButton>',
    '    </div>',
    '  </form>',
    '</Modal>',
];

const newModalExamples = [
    '<!-- NewModal: built on reka-ui Dialog, uses v-model:open -->',
    '<NewModal v-model:open="showNewModal" title="Enhanced Modal">',
    '  <p>Body content goes in the default slot.</p>',
    '  <template #footer>',
    '    <SecondaryButton @click="showNewModal = false">Close</SecondaryButton>',
    '  </template>',
    '</NewModal>',
    '',
    '<!-- With custom header markup -->',
    '<NewModal v-model:open="showNewModal">',
    '  <template #header>',
    '    <span class="text-red-600">Heads up</span>',
    '  </template>',
    '  <p>Default-slot body…</p>',
    '</NewModal>',
];

// Props data for modals — verified against Modal.vue and NewModal.vue
const modalProps = [
    { prop: 'show', type: 'boolean', default: 'false', description: 'Controls modal visibility (use v-model:show or :show + @close)' },
    { prop: 'maxWidth', type: 'string', default: "'2xl'", description: 'sm, md, lg, xl, 2xl, 3xl-7xl, or percentage strings: 50%, 60%, 75%, 80%, 90%, 95%' },
    { prop: 'closeable', type: 'boolean', default: 'true', description: 'Allow closing via backdrop click or Escape key' },
    { prop: 'alignCenter', type: 'boolean', default: 'false', description: 'Vertically center the modal (default top-aligns)' },
    { prop: 'hideOverflow', type: 'boolean', default: 'true', description: 'Apply overflow-hidden to the modal container' },
    { prop: 'showBorder', type: 'boolean', default: 'false', description: 'Add a coloured (pink) border around the modal' },
    { prop: 'resizable', type: 'boolean', default: 'false', description: 'Render edge/corner handles so the user can resize the modal' },
    { prop: 'backdropDuration', type: 'number', default: '200', description: 'Backdrop fade duration in ms' },
    { prop: 'modalDuration', type: 'number', default: '200', description: 'Modal enter/leave duration in ms' },
    { prop: 'modalCustomClass', type: 'string', default: "''", description: 'Extra classes for the modal panel' },
    { prop: 'backdropCustomClass', type: 'string', default: "''", description: 'Extra classes for the backdrop' },
];

const modalEvents = [
    { prop: '@close', type: 'event', default: '-', description: 'Fired when the user clicks the backdrop or presses Escape (only when closeable is true)' },
];

const newModalProps = [
    { prop: 'v-model:open', type: 'boolean', default: 'false', description: 'Two-way binding for open state', highlight: true },
    { prop: 'title', type: 'string', default: '-', description: 'Title rendered in DialogTitle (overridden by #header slot)' },
    { prop: 'description', type: 'string', default: '-', description: 'Sub-title rendered in DialogDescription (overridden by #description slot)' },
    { prop: 'defaultOpen', type: 'boolean', default: 'false', description: 'Open on mount' },
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
    <div class="space-y-12">
        <section id="basic-modal">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Basic Modal</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Clean, accessible modal dialogs with flexible content and customizable sizing.</p>

                <div class="mb-6">
                    <PrimaryButton @click="showBasicModal = true">Open Basic Modal</PrimaryButton>
                </div>

                <Modal :show="showBasicModal" @close="showBasicModal = false">
                    <div class="p-6">
                        <h3 class="mb-4 text-lg font-semibold text-gray-900">Welcome to Our App</h3>
                        <p class="mb-2 text-gray-600">This is a basic modal example demonstrating the core functionality of our modal component.</p>
                        <p class="text-gray-600">You can customize the content, styling, and behavior to fit your application's needs.</p>
                        <div class="mt-6 flex justify-end gap-3">
                            <SecondaryButton @click="showBasicModal = false">Cancel</SecondaryButton>
                            <PrimaryButton @click="showBasicModal = false">Got it</PrimaryButton>
                        </div>
                    </div>
                </Modal>

                <CodePreview :code="basicModalExamples" />

                <CollapsableSection header="Modal Props" class="mt-6">
                    <PropsTable :rows="modalProps" />
                </CollapsableSection>
            </div>
        </section>

        <section id="form-modal">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Form Modal</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Modal dialogs containing forms for user input, with proper validation and submission handling.</p>

                <div class="mb-6">
                    <PrimaryButton @click="showFormModal = true">Open Contact Form</PrimaryButton>
                </div>

                <Modal :show="showFormModal" @close="showFormModal = false" maxWidth="lg">
                    <form @submit.prevent="handleSubmit" class="space-y-4 p-6">
                        <h3 class="text-lg font-semibold text-gray-900">Contact Us</h3>
                        <Input :form="modalForm" field="name" label="Your Name" required />
                        <Input :form="modalForm" field="email" type="email" label="Email Address" required />
                        <Input
                            :form="modalForm"
                            field="message"
                            type="textarea"
                            label="Message"
                            :rows="4"
                            placeholder="Tell us how we can help..."
                        />
                        <Checkbox :form="modalForm" field="subscribe" label="Subscribe to our newsletter for updates" />
                        <div class="flex justify-end gap-3 pt-2">
                            <SecondaryButton type="button" @click="showFormModal = false">Cancel</SecondaryButton>
                            <PrimaryButton type="submit">Send Message</PrimaryButton>
                        </div>
                    </form>
                </Modal>

                <CodePreview :code="formModalExamples" />

                <p class="mt-6 text-sm text-gray-600">
                    Note: <code class="rounded bg-gray-100 px-1">Modal</code> exposes only a single default slot — render your own header,
                    body, and footer inside it. For named header / footer / description slots, use
                    <code class="rounded bg-gray-100 px-1">NewModal</code> below.
                </p>
            </div>
        </section>

        <section id="confirmation-modal">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Confirmation Modal</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Confirmation dialogs for destructive or important actions.</p>

                <div class="mb-6">
                    <DangerButton @click="showConfirmModal = true">Delete Account</DangerButton>
                </div>

                <NewModal v-model:open="showConfirmModal">
                    <div class="p-6">
                        <div class="mb-4 flex items-center">
                            <FontAwesomeIcon :icon="faExclamationTriangle" class="mr-3 h-6 w-6 text-red-600" />
                            <h3 class="text-lg font-semibold text-gray-900">Confirm Deletion</h3>
                        </div>

                        <p class="mb-6 text-gray-600">
                            Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
                        </p>

                        <div class="flex justify-end space-x-3">
                            <SecondaryButton @click="showConfirmModal = false">Cancel</SecondaryButton>
                            <DangerButton @click="handleConfirm">Delete Account</DangerButton>
                        </div>
                    </div>
                </NewModal>

                <CollapsableSection header="Modal Events" class="mt-6">
                    <PropsTable :rows="modalEvents" />
                </CollapsableSection>
            </div>
        </section>

        <section id="new-modal">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">NewModal Component</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    Built on reka-ui's headless <code class="rounded bg-gray-100 px-1">Dialog</code> primitives. Use
                    <code class="rounded bg-gray-100 px-1">v-model:open</code> for state, and the
                    <code class="rounded bg-gray-100 px-1">header</code> / <code class="rounded bg-gray-100 px-1">footer</code> /
                    <code class="rounded bg-gray-100 px-1">description</code> / <code class="rounded bg-gray-100 px-1">trigger</code> slots
                    for layout. Preferred for new code.
                </p>

                <div class="mb-6">
                    <PrimaryButton @click="showNewModal = true">Open New Modal</PrimaryButton>
                </div>

                <NewModal v-model:open="showNewModal">
                    <div class="p-6">
                        <h3 class="mb-4 text-lg font-semibold text-gray-900">Enhanced Modal Design</h3>
                        <p class="mb-4 text-gray-600">
                            This is the NewModal component featuring improved accessibility, better animations, and more flexible styling options.
                        </p>
                        <div class="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
                            <h4 class="mb-2 text-sm font-semibold text-blue-900">Key Features:</h4>
                            <ul class="space-y-1 text-sm text-blue-800">
                                <li>• Enhanced accessibility with proper ARIA attributes</li>
                                <li>• Smooth animations and transitions</li>
                                <li>• Better mobile responsiveness</li>
                                <li>• Improved focus management</li>
                            </ul>
                        </div>
                        <div class="flex justify-end space-x-3">
                            <SecondaryButton @click="showNewModal = false">Close</SecondaryButton>
                            <PrimaryButton @click="showNewModal = false">Looks Great!</PrimaryButton>
                        </div>
                    </div>
                </NewModal>

                <CodePreview :code="newModalExamples" />

                <CollapsableSection header="NewModal Props" class="mt-6">
                    <PropsTable :rows="newModalProps" />
                </CollapsableSection>

                <CollapsableSection header="NewModal Slots" class="mt-4">
                    <PropsTable :rows="newModalSlots" />
                </CollapsableSection>
            </div>
        </section>
    </div>
</template>
