<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { Input, Checkbox, Select, Textarea, PrimaryButton, SecondaryButton, CodePreview } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// Login/auth card demo state
const loginForm = useForm({
    email: '',
    password: '',
    remember: false,
});

function submitLogin() {
    loginForm.processing = true;
    setTimeout(() => {
        loginForm.processing = false;
    }, 1200);
}

const loginSnippet = [
    '<div class="mx-auto w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">',
    '    <h2 class="mb-6 text-xl font-semibold text-gray-800 dark:text-gray-100">Sign in to your account</h2>',
    '',
    '    <form @submit.prevent="form.post(\'/login\')" class="space-y-4">',
    '        <Input :form="form" field="email" type="email" label="Email" required autofocus />',
    '        <Input :form="form" field="password" type="password" label="Password" required />',
    '        <Checkbox :form="form" field="remember" noLabel rightDescription="Remember me" />',
    '',
    '        <div class="flex flex-wrap items-center justify-between gap-3 pt-2">',
    '            <a href="/forgot-password" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 text-sm">',
    '                Forgot your password?',
    '            </a>',
    '            <SecondaryButton type="submit" :disabled="form.processing">',
    '                {{ form.processing ? \'Signing in...\' : \'Log in\' }}',
    '            </SecondaryButton>',
    '        </div>',
    '    </form>',
    '</div>',
];

// Two-column settings form demo state
const settingsForm = useForm({
    name: '',
    email: '',
    timezone: '',
    language: '',
    bio: '',
});

function submitSettings() {
    settingsForm.processing = true;
    setTimeout(() => {
        settingsForm.processing = false;
    }, 1200);
}

const settingsSnippet = [
    '<form @submit.prevent="form.patch(\'/settings\')" class="space-y-6">',
    '    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">',
    '        <Input :form="form" field="name" label="Full Name" required />',
    '        <Input :form="form" field="email" type="email" label="Email" required />',
    '',
    '        <Select :form="form" field="timezone" label="Timezone" placeholder="Select a timezone" :options="[',
    '            { value: \'utc\', label: \'UTC\' },',
    '            { value: \'est\', label: \'Eastern Time\' },',
    '            { value: \'pst\', label: \'Pacific Time\' },',
    '        ]" />',
    '        <Select :form="form" field="language" label="Language" placeholder="Select a language" :options="[',
    '            { value: \'en\', label: \'English\' },',
    '            { value: \'es\', label: \'Spanish\' },',
    '        ]" />',
    '',
    '        <div class="md:col-span-2">',
    '            <Textarea :form="form" field="bio" label="Bio" :rows="4" placeholder="Tell us a bit about yourself" />',
    '        </div>',
    '    </div>',
    '',
    '    <div class="flex flex-wrap justify-end gap-2">',
    '        <SecondaryButton type="button">Cancel</SecondaryButton>',
    '        <PrimaryButton type="submit" :disabled="form.processing">',
    '            {{ form.processing ? \'Saving...\' : \'Save Changes\' }}',
    '        </PrimaryButton>',
    '    </div>',
    '</form>',
];
</script>

<template>
    <section id="block-forms">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Form Layouts</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A centered login card composed from Input, Checkbox, and SecondaryButton, with a forgot-password link and a submit button
                disabled while the form is processing.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mx-auto w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h2 class="mb-6 text-xl font-semibold text-gray-800 dark:text-gray-100">Sign in to your account</h2>

                    <form @submit.prevent="submitLogin" class="space-y-4">
                        <Input v-model="loginForm.email" field="email" type="email" label="Email" required />
                        <Input v-model="loginForm.password" field="password" type="password" label="Password" required />
                        <Checkbox v-model="loginForm.remember" field="remember" noLabel rightDescription="Remember me" />

                        <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
                            <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 text-sm" @click.prevent>
                                Forgot your password?
                            </a>
                            <SecondaryButton type="submit" :disabled="loginForm.processing">
                                {{ loginForm.processing ? 'Signing in...' : 'Log in' }}
                            </SecondaryButton>
                        </div>
                    </form>
                </div>
            </div>
            <CodePreview :code="loginSnippet" filename="LoginCard.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A two-column settings form using Input, Select, and Textarea in a responsive grid, with a right-aligned save cluster.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <form @submit.prevent="submitSettings" class="space-y-6">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Input v-model="settingsForm.name" field="name" label="Full Name" required />
                        <Input v-model="settingsForm.email" field="email" type="email" label="Email" required />

                        <Select
                            v-model="settingsForm.timezone"
                            field="timezone"
                            label="Timezone"
                            placeholder="Select a timezone"
                            :options="[
                                { value: 'utc', label: 'UTC' },
                                { value: 'est', label: 'Eastern Time' },
                                { value: 'pst', label: 'Pacific Time' },
                            ]"
                        />
                        <Select
                            v-model="settingsForm.language"
                            field="language"
                            label="Language"
                            placeholder="Select a language"
                            :options="[
                                { value: 'en', label: 'English' },
                                { value: 'es', label: 'Spanish' },
                            ]"
                        />

                        <div class="md:col-span-2">
                            <Textarea v-model="settingsForm.bio" field="bio" label="Bio" :rows="4" placeholder="Tell us a bit about yourself" />
                        </div>
                    </div>

                    <div class="flex flex-wrap justify-end gap-2">
                        <SecondaryButton type="button">Cancel</SecondaryButton>
                        <PrimaryButton type="submit" :disabled="settingsForm.processing">
                            {{ settingsForm.processing ? 'Saving...' : 'Save Changes' }}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
            <CodePreview :code="settingsSnippet" filename="SettingsForm.vue" />
        </DocDemoCard>
    </section>
</template>
