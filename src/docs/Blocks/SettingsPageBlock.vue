<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { Section, Input, Textarea, Checkbox, PrimaryButton, SecondaryButton, DangerButton, NewModal, CodePreview } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const sections = [
    { key: 'profile', label: 'Profile' },
    { key: 'security', label: 'Security' },
    { key: 'notifications', label: 'Notifications' },
    { key: 'danger', label: 'Danger Zone' },
];

const activeSection = ref('profile');

// Each card owns its own form — a save here never touches the other cards.
const profileForm = useForm({ name: 'Ada Lovelace', email: 'ada@example.com', bio: '' });
const passwordForm = useForm({ current_password: '', password: '', password_confirmation: '' });
const notifyForm = useForm({
    product_updates: true,
    weekly_digest: true,
    mentions: false,
    security_alerts: true,
    billing: true,
    marketing: false,
});

const savedLabel = ref('');

// ponytail: one fake-submit helper for all three forms, real apps call form.patch(...)
function fakeSubmit(form: { processing: boolean }, label: string) {
    form.processing = true;
    savedLabel.value = '';
    setTimeout(() => {
        form.processing = false;
        savedLabel.value = label;
    }, 900);
}

const notificationFields = [
    { field: 'product_updates', label: 'Product updates' },
    { field: 'weekly_digest', label: 'Weekly digest' },
    { field: 'mentions', label: 'Mentions & replies' },
    { field: 'security_alerts', label: 'Security alerts' },
    { field: 'billing', label: 'Billing receipts' },
    { field: 'marketing', label: 'Marketing emails' },
];

const showDelete = ref(false);
const deleteConfirmation = ref('');

function openDelete() {
    deleteConfirmation.value = '';
    showDelete.value = true;
}

function confirmDelete() {
    showDelete.value = false;
    savedLabel.value = 'Account deletion requested (demo only)';
}

const snippet = [
    '<div class="grid grid-cols-1 gap-6 lg:grid-cols-[14rem_1fr]">',
    '    <!-- Section nav -->',
    '    <nav class="space-y-1">',
    '        <a',
    '            v-for="item in sections"',
    '            :key="item.key"',
    '            href="#"',
    '            class="block rounded-md px-3 py-2 text-sm font-medium transition-colors"',
    '            :class="active === item.key',
    "                ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'",
    "                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700/50 dark:hover:text-gray-100'\"",
    '            @click.prevent="active = item.key"',
    '        >{{ item.label }}</a>',
    '    </nav>',
    '',
    '    <!-- Each card has its own form + its own save button -->',
    '    <div class="space-y-6">',
    '        <Section v-if="active === \'profile\'" header="Profile">',
    '            <form @submit.prevent="profileForm.patch(\'/settings/profile\')" class="space-y-1">',
    '                <Input :form="profileForm" field="name" label="Full name" required />',
    '                <Input :form="profileForm" field="email" type="email" label="Email" required />',
    '                <Textarea :form="profileForm" field="bio" label="Bio" :rows="3" />',
    '                <div class="flex justify-end pt-2">',
    '                    <PrimaryButton type="submit" :disabled="profileForm.processing">Save profile</PrimaryButton>',
    '                </div>',
    '            </form>',
    '        </Section>',
    '',
    '        <!-- Security repeats the same shape: passwordForm + three type="password" Inputs -->',
    '',
    '        <Section v-if="active === \'notifications\'" header="Notifications">',
    '            <form @submit.prevent="notifyForm.patch(\'/settings/notifications\')">',
    '                <div class="grid grid-cols-1 gap-x-6 sm:grid-cols-2">',
    '                    <Checkbox',
    '                        v-for="item in notificationFields"',
    '                        :key="item.field"',
    '                        :form="notifyForm"',
    '                        :field="item.field"',
    '                        noLabel',
    '                        :rightDescription="item.label"',
    '                    />',
    '                </div>',
    '                <div class="flex justify-end pt-2">',
    '                    <PrimaryButton type="submit" :disabled="notifyForm.processing">Save preferences</PrimaryButton>',
    '                </div>',
    '            </form>',
    '        </Section>',
    '',
    '        <Section v-if="active === \'danger\'" header="Danger Zone" class="ring-2 ring-red-400 dark:ring-red-700">',
    '            <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">Deleting your account is permanent.</p>',
    '            <DangerButton type="button" @click="showDelete = true">Delete account</DangerButton>',
    '        </Section>',
    '    </div>',
    '</div>',
    '',
    '<NewModal v-model="showDelete" title="Delete account" description="This cannot be undone.">',
    '    <Input v-model="confirmation" field="confirm" label="Type DELETE to confirm" />',
    '    <template #footer>',
    '        <SecondaryButton type="button" @click="showDelete = false">Cancel</SecondaryButton>',
    '        <DangerButton type="button" :disabled="confirmation !== \'DELETE\'" @click="destroy">Delete</DangerButton>',
    '    </template>',
    '</NewModal>',
];
</script>

<template>
    <section id="block-settings-page">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Settings Page</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A two-column account settings page: a vertical section nav on the left, and on the right a Section card per topic — each with
                its own form state and its own save button, so one save never submits the others. The Danger Zone card opens a NewModal that
                only enables its confirm button once you type <code class="rounded bg-gray-100 px-1 font-mono text-xs dark:bg-gray-900/60">DELETE</code>.
            </p>

            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-[14rem_1fr]">
                    <nav class="space-y-1">
                        <a
                            v-for="item in sections"
                            :key="item.key"
                            href="#"
                            class="block rounded-md px-3 py-2 text-sm font-medium transition-colors"
                            :class="
                                activeSection === item.key
                                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700/50 dark:hover:text-gray-100'
                            "
                            @click.prevent="activeSection = item.key"
                        >
                            {{ item.label }}
                        </a>
                    </nav>

                    <div class="space-y-6">
                        <Section v-if="activeSection === 'profile'" header="Profile">
                            <form @submit.prevent="fakeSubmit(profileForm, 'Profile saved')" class="space-y-1">
                                <Input v-model="profileForm.name" field="settings_name" label="Full name" required />
                                <Input v-model="profileForm.email" field="settings_email" type="email" label="Email" required />
                                <Textarea v-model="profileForm.bio" field="settings_bio" label="Bio" :rows="3" placeholder="A short bio" />
                                <div class="flex justify-end pt-2">
                                    <PrimaryButton type="submit" :disabled="profileForm.processing">
                                        {{ profileForm.processing ? 'Saving...' : 'Save profile' }}
                                    </PrimaryButton>
                                </div>
                            </form>
                        </Section>

                        <Section v-if="activeSection === 'security'" header="Security">
                            <form @submit.prevent="fakeSubmit(passwordForm, 'Password updated')" class="space-y-1">
                                <Input
                                    v-model="passwordForm.current_password"
                                    field="settings_current_password"
                                    type="password"
                                    label="Current password"
                                    required
                                />
                                <Input v-model="passwordForm.password" field="settings_password" type="password" label="New password" required />
                                <Input
                                    v-model="passwordForm.password_confirmation"
                                    field="settings_password_confirmation"
                                    type="password"
                                    label="Confirm new password"
                                    required
                                />
                                <div class="flex justify-end pt-2">
                                    <PrimaryButton type="submit" :disabled="passwordForm.processing">
                                        {{ passwordForm.processing ? 'Saving...' : 'Update password' }}
                                    </PrimaryButton>
                                </div>
                            </form>
                        </Section>

                        <Section v-if="activeSection === 'notifications'" header="Notifications">
                            <form @submit.prevent="fakeSubmit(notifyForm, 'Preferences saved')">
                                <div class="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                                    <Checkbox
                                        v-for="item in notificationFields"
                                        :key="item.field"
                                        v-model="notifyForm[item.field]"
                                        :field="`settings_${item.field}`"
                                        noLabel
                                        :rightDescription="item.label"
                                    />
                                </div>
                                <div class="flex justify-end pt-2">
                                    <PrimaryButton type="submit" :disabled="notifyForm.processing">
                                        {{ notifyForm.processing ? 'Saving...' : 'Save preferences' }}
                                    </PrimaryButton>
                                </div>
                            </form>
                        </Section>

                        <!-- ponytail: ring instead of border-red-* — Section already sets a gray border, and two
                             border-color utilities collide unpredictably in the generated CSS. -->
                        <Section v-if="activeSection === 'danger'" header="Danger Zone" class="ring-2 ring-red-400 dark:ring-red-700">
                            <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
                                Deleting your account removes every project, invoice and file it owns. This cannot be undone — export anything
                                you want to keep first.
                            </p>
                            <DangerButton type="button" @click="openDelete">Delete account</DangerButton>
                        </Section>

                        <p v-if="savedLabel" class="text-sm text-green-600 dark:text-green-400">{{ savedLabel }}</p>
                    </div>
                </div>
            </div>

            <NewModal v-model="showDelete" title="Delete account" description="This permanently removes your account and all its data.">
                <Input
                    v-model="deleteConfirmation"
                    field="settings_delete_confirmation"
                    label="Type DELETE to confirm"
                    placeholder="DELETE"
                    autocomplete="off"
                />
                <template #footer>
                    <SecondaryButton type="button" @click="showDelete = false">Cancel</SecondaryButton>
                    <DangerButton type="button" :disabled="deleteConfirmation !== 'DELETE'" @click="confirmDelete">
                        Delete account
                    </DangerButton>
                </template>
            </NewModal>

            <CodePreview :code="snippet" filename="SettingsPage.vue" />
        </DocDemoCard>
    </section>
</template>
