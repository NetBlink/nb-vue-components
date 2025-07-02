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

// Code examples
const basicModalExamples = [
    '<!-- Basic Modal Usage -->',
    '<Modal :show="showModal" @close="showModal = false">',
    '  <template #title>Modal Title</template>',
    '  <template #content>',
    '    <p>This is the modal content.</p>',
    '  </template>',
    '  <template #footer>',
    '    <SecondaryButton @click="showModal = false">Cancel</SecondaryButton>',
    '    <PrimaryButton @click="handleAction">Confirm</PrimaryButton>',
    '  </template>',
    '</Modal>',
];

const formModalExamples = [
    '<!-- Form Modal -->',
    '<Modal :show="showFormModal" @close="showFormModal = false" maxWidth="lg">',
    '  <template #title>Contact Form</template>',
    '  <template #content>',
    '    <form @submit.prevent="handleSubmit" class="space-y-4">',
    '      <Input :form="form" field="name" label="Name" required />',
    '      <Input :form="form" field="email" type="email" label="Email" required />',
    '      <Textarea :form="form" field="message" label="Message" :rows="4" />',
    '      <Checkbox :form="form" field="subscribe" label="Subscribe to newsletter" />',
    '    </form>',
    '  </template>',
    '  <template #footer>',
    '    <SecondaryButton @click="showFormModal = false">Cancel</SecondaryButton>',
    '    <PrimaryButton @click="handleSubmit">Send Message</PrimaryButton>',
    '  </template>',
    '</Modal>',
];

const newModalExamples = [
    '<!-- NewModal Component -->',
    '<NewModal v-model:open="showNewModal">',
    '  <div class="p-6">',
    '    <h3 class="text-lg font-semibold mb-4">Enhanced Modal</h3>',
    '    <p>This is the new modal component with improved styling.</p>',
    '    <div class="mt-6 flex justify-end space-x-3">',
    '      <SecondaryButton @click="showNewModal = false">Close</SecondaryButton>',
    '    </div>',
    '  </div>',
    '</NewModal>',
];

// Props data for modals
const modalProps = [
    { prop: 'show', type: 'boolean', default: 'false', description: 'Controls modal visibility' },
    { prop: 'maxWidth', type: 'string', default: "'md'", description: 'Maximum width: xs, sm, md, lg, xl, 2xl' },
    { prop: 'closeable', type: 'boolean', default: 'true', description: 'Whether modal can be closed by clicking overlay or escape key' },
    { prop: 'title', type: 'string', default: '-', description: 'Modal title (alternative to title slot)' },
];

const modalSlots = [
    { prop: 'title', type: 'slot', default: '-', description: 'Modal header/title content' },
    { prop: 'content', type: 'slot', default: '-', description: 'Main modal body content' },
    { prop: 'footer', type: 'slot', default: '-', description: 'Modal footer with action buttons' },
];

const modalEvents = [
    { prop: 'close', type: 'event', default: '-', description: 'Emitted when modal should be closed' },
    { prop: 'opened', type: 'event', default: '-', description: 'Emitted when modal has fully opened' },
    { prop: 'closed', type: 'event', default: '-', description: 'Emitted when modal has fully closed' },
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
                    <template #title>Welcome to Our App</template>
                    <template #content>
                        <p class="mb-4 text-gray-600">This is a basic modal example demonstrating the core functionality of our modal component.</p>
                        <p class="text-gray-600">You can customize the content, styling, and behavior to fit your application's needs.</p>
                    </template>
                    <template #footer>
                        <SecondaryButton @click="showBasicModal = false">Cancel</SecondaryButton>
                        <PrimaryButton @click="showBasicModal = false" class="ml-3">Got it</PrimaryButton>
                    </template>
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
                    <template #title>Contact Us</template>
                    <template #content>
                        <form @submit.prevent="handleSubmit" class="space-y-4">
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
                        </form>
                    </template>
                    <template #footer>
                        <SecondaryButton @click="showFormModal = false">Cancel</SecondaryButton>
                        <PrimaryButton @click="handleSubmit" class="ml-3">Send Message</PrimaryButton>
                    </template>
                </Modal>

                <CodePreview :code="formModalExamples" />

                <CollapsableSection header="Modal Slots" class="mt-6">
                    <PropsTable :rows="modalSlots" />
                </CollapsableSection>
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
                <p class="mb-4 text-gray-600">Enhanced modal component with improved styling and modern design patterns.</p>

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
            </div>
        </section>
    </div>
</template>
