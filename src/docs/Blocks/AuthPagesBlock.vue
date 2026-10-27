<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import { Input, Checkbox, PrimaryButton, SecondaryButton, Alert, Card, EmptyState, CodePreview } from '../../index';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// Register card demo state
const registerForm = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

function submitRegister() {
    registerForm.processing = true;
    setTimeout(() => {
        registerForm.processing = false;
    }, 1200);
}

const registerSnippet = [
    '<Card title="Create your account" class="mx-auto w-full max-w-md" :ui="{ title: \'text-xl\' }">',
    '    <form @submit.prevent="form.post(\'/register\')" class="space-y-4">',
    '        <Input :form="form" field="name" label="Full Name" required autofocus />',
    '        <Input :form="form" field="email" type="email" label="Email" required />',
    '        <Input :form="form" field="password" type="password" label="Password" required />',
    '        <Input :form="form" field="password_confirmation" type="password" label="Confirm Password" required />',
    '        <Checkbox :form="form" field="terms" required>',
    '            <template #rightDescription>',
    '                <span class="ml-1 text-sm text-gray-600 dark:text-gray-400">',
    '                    I agree to the <a href="/terms" class="text-primary-600 dark:text-primary-400 hover:underline">Terms of Service</a>',
    '                </span>',
    '            </template>',
    '        </Checkbox>',
    '',
    '        <PrimaryButton type="submit" :disabled="form.processing" class="w-full justify-center">',
    '            {{ form.processing ? \'Creating account...\' : \'Create Account\' }}',
    '        </PrimaryButton>',
    '',
    '        <p class="text-center text-sm text-gray-600 dark:text-gray-400">',
    '            Already registered?',
    '            <a href="/login" class="text-primary-600 dark:text-primary-400 hover:underline">Log in</a>',
    '        </p>',
    '    </form>',
    '</Card>',
];

// Forgot-password card demo state
const forgotForm = useForm({ email: '' });
const forgotSent = ref(false);

function submitForgot() {
    forgotForm.processing = true;
    setTimeout(() => {
        forgotForm.processing = false;
        forgotSent.value = true;
    }, 1200);
}

const forgotSnippet = [
    '<Card',
    '    title="Forgot your password?"',
    '    :description="sent ? undefined : \'No problem. Enter your email and we\\\'ll send you a link to reset it.\'"',
    '    class="mx-auto w-full max-w-md"',
    '    :ui="{ title: \'text-xl\' }"',
    '>',
    '    <template v-if="!sent">',
    '        <form @submit.prevent="form.post(\'/forgot-password\', { onSuccess: () => (sent = true) })" class="space-y-4">',
    '            <Input :form="form" field="email" type="email" label="Email" required autofocus />',
    '            <PrimaryButton type="submit" :disabled="form.processing" class="w-full justify-center">',
    '                {{ form.processing ? \'Sending...\' : \'Email Password Reset Link\' }}',
    '            </PrimaryButton>',
    '        </form>',
    '    </template>',
    '',
    '    <Alert v-else type="success" title="Check your inbox">',
    '        We have emailed your password reset link.',
    '    </Alert>',
    '</Card>',
];

// Members-only gate demo (no state needed, static composition)
const gateSnippet = [
    '<Card padding="none" class="mx-auto w-full max-w-md">',
    '    <EmptyState :icon="faLock" title="Members Only" description="Create a free account or sign in to view this resource.">',
    '        <PrimaryButton type="button" @click="router.visit(\'/register\')">Create Account</PrimaryButton>',
    '        <SecondaryButton type="button" @click="router.visit(\'/login\')">Sign In</SecondaryButton>',
    '    </EmptyState>',
    '</Card>',
];
</script>

<template>
    <section id="block-auth-pages">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Auth Pages</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A registration card composed from Input and Checkbox, with a terms-of-service agreement and a link back to the login page.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <Card title="Create your account" class="mx-auto w-full max-w-md" :ui="{ title: 'text-xl' }">
                    <form @submit.prevent="submitRegister" class="space-y-4">
                        <Input v-model="registerForm.name" field="name" label="Full Name" required autofocus />
                        <Input v-model="registerForm.email" field="email" type="email" label="Email" required />
                        <Input v-model="registerForm.password" field="password" type="password" label="Password" required />
                        <Input v-model="registerForm.password_confirmation" field="password_confirmation" type="password" label="Confirm Password" required />
                        <Checkbox v-model="registerForm.terms" field="terms" required>
                            <template #rightDescription>
                                <span class="ml-1 text-sm text-gray-600 dark:text-gray-400">
                                    I agree to the <a href="#" class="text-primary-600 dark:text-primary-400 hover:underline" @click.prevent>Terms of Service</a>
                                </span>
                            </template>
                        </Checkbox>

                        <PrimaryButton type="submit" :disabled="registerForm.processing" class="w-full justify-center">
                            {{ registerForm.processing ? 'Creating account...' : 'Create Account' }}
                        </PrimaryButton>

                        <p class="text-center text-sm text-gray-600 dark:text-gray-400">
                            Already registered?
                            <a href="#" class="text-primary-600 dark:text-primary-400 hover:underline" @click.prevent>Log in</a>
                        </p>
                    </form>
                </Card>
            </div>
            <CodePreview :code="registerSnippet" filename="RegisterCard.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A forgot-password card with a single email field. Submitting swaps the form for a success Alert confirming the reset link was sent.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <Card
                    title="Forgot your password?"
                    :description="forgotSent ? undefined : 'No problem. Enter your email and we\'ll send you a link to reset it.'"
                    class="mx-auto w-full max-w-md"
                    :ui="{ title: 'text-xl' }"
                >
                    <template v-if="!forgotSent">
                        <form @submit.prevent="submitForgot" class="space-y-4">
                            <Input v-model="forgotForm.email" field="email" type="email" label="Email" required autofocus />
                            <PrimaryButton type="submit" :disabled="forgotForm.processing" class="w-full justify-center">
                                {{ forgotForm.processing ? 'Sending...' : 'Email Password Reset Link' }}
                            </PrimaryButton>
                        </form>
                    </template>

                    <Alert v-else type="success" title="Check your inbox">
                        We have emailed your password reset link.
                    </Alert>
                </Card>
            </div>
            <CodePreview :code="forgotSnippet" filename="ForgotPasswordCard.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A members-only gate: an <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">EmptyState</code> with a lock icon, explanatory copy, and dual calls to action for creating an account or signing in.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <Card padding="none" class="mx-auto w-full max-w-md">
                    <EmptyState :icon="faLock" title="Members Only" description="Create a free account or sign in to view this resource.">
                        <PrimaryButton type="button" @click.prevent>Create Account</PrimaryButton>
                        <SecondaryButton type="button" @click.prevent>Sign In</SecondaryButton>
                    </EmptyState>
                </Card>
            </div>
            <CodePreview :code="gateSnippet" filename="MembersOnlyGate.vue" />
        </DocDemoCard>
    </section>
</template>
