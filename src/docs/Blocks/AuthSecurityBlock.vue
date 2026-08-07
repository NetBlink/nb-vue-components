<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
import { Alert, CodePreview, Input, PrimaryButton } from '../../index';
import { NbIcon } from '../../icons';
import { faFingerprint, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faApple, faGithub, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

/* ------------------------------------------------------------------ *
 * 1. Two-factor code entry
 * ------------------------------------------------------------------ */
const digits = ref<string[]>(['', '', '', '', '', '']);
const boxes = ref<HTMLInputElement[]>([]);
const status = ref<'idle' | 'success' | 'error'>('idle');
const shaking = ref(false);
const useRecovery = ref(false);
const recoveryCode = ref('');

const codeComplete = computed(() => digits.value.every((d) => d !== ''));
const canSubmit = computed(() => (useRecovery.value ? recoveryCode.value.trim().length >= 4 : codeComplete.value));

function focusBox(index: number) {
    boxes.value[index]?.focus();
    boxes.value[index]?.select();
}

function onDigitInput(index: number, event: Event) {
    const el = event.target as HTMLInputElement;
    const char = el.value.replace(/\D/g, '').slice(-1);

    digits.value[index] = char;
    el.value = char;
    status.value = 'idle';

    if (char && index < 5) focusBox(index + 1);
}

function onDigitKeydown(index: number, event: KeyboardEvent) {
    if (event.key === 'Backspace' && !digits.value[index] && index > 0) {
        event.preventDefault();
        digits.value[index - 1] = '';
        focusBox(index - 1);
    }
    if (event.key === 'ArrowLeft' && index > 0) focusBox(index - 1);
    if (event.key === 'ArrowRight' && index < 5) focusBox(index + 1);
}

function onDigitPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;

    digits.value = digits.value.map((_, i) => pasted[i] ?? '');
    status.value = 'idle';
    nextTick(() => focusBox(Math.min(pasted.length, 5)));
}

function verifyCode() {
    if (!canSubmit.value) return;

    const ok = useRecovery.value ? recoveryCode.value.trim().length >= 4 : digits.value.join('') === '123456';
    status.value = ok ? 'success' : 'error';

    if (!ok) {
        shaking.value = true;
        setTimeout(() => (shaking.value = false), 450);
    }
}

function toggleRecovery() {
    useRecovery.value = !useRecovery.value;
    status.value = 'idle';
    digits.value = ['', '', '', '', '', ''];
    recoveryCode.value = '';
}

const twoFactorSnippet = [
    '<form class="space-y-4" @submit.prevent="form.post(route(\'two-factor.login\'))">',
    '    <!-- six auto-advancing boxes; max-w keeps them from stretching on wide cards -->',
    '    <div v-if="!useRecovery" class="flex justify-center gap-2" @paste="onPaste">',
    '        <input',
    '            v-for="(digit, i) in digits"',
    '            :key="i"',
    '            ref="boxes"',
    '            :value="digit"',
    '            type="text"',
    '            inputmode="numeric"',
    '            maxlength="1"',
    '            autocomplete="one-time-code"',
    '            :aria-label="`Digit ${i + 1}`"',
    '            class="h-12 w-full min-w-0 max-w-10 rounded-md border bg-white text-center text-lg font-semibold text-gray-800 focus:ring-2 focus:outline-none dark:bg-gray-900 dark:text-gray-100"',
    '            :class="form.errors.code',
    '                ? \'border-red-400 focus:border-red-500 focus:ring-red-500 dark:border-red-500\'',
    '                : \'border-gray-300 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600\'"',
    '            @input="onInput(i, $event)"',
    '            @keydown="onKeydown(i, $event)"',
    '        />',
    '    </div>',
    '',
    '    <!-- recovery variant swaps the boxes for a single Input -->',
    '    <Input v-else v-model="form.recovery_code" field="recovery_code" label="Recovery code" placeholder="xxxxxxxx-xxxxxxxx" />',
    '',
    '    <Alert v-if="form.errors.code" type="error" title="Invalid code">',
    '        That code is not valid or has expired. Try again.',
    '    </Alert>',
    '',
    '    <PrimaryButton type="submit" :disabled="!canSubmit" class="w-full justify-center">Verify</PrimaryButton>',
    '',
    '    <button type="button" class="w-full text-sm text-primary-600 hover:underline dark:text-primary-400" @click="useRecovery = !useRecovery">',
    '        {{ useRecovery ? \'Use your authenticator app instead\' : \'Use a recovery code\' }}',
    '    </button>',
    '</form>',
];

/* ------------------------------------------------------------------ *
 * 2. OAuth providers
 * ------------------------------------------------------------------ */
const providers = [
    { key: 'google', label: 'Google', icon: faGoogle, classes: 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700' },
    { key: 'github', label: 'GitHub', icon: faGithub, classes: 'border-gray-900 bg-gray-900 text-white hover:bg-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600' },
    { key: 'microsoft', label: 'Microsoft', icon: faMicrosoft, classes: 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700' },
    { key: 'apple', label: 'Apple', icon: faApple, classes: 'border-black bg-black text-white hover:bg-gray-800 dark:border-gray-200 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200' },
];

const lastProvider = ref<string | null>(null);
const oauthEmail = ref('');

const oauthSnippet = [
    '// setup:',
    'const providers = [',
    '    { key: \'google\', label: \'Google\', icon: faGoogle, classes: \'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700\' },',
    '    { key: \'github\', label: \'GitHub\', icon: faGithub, classes: \'border-gray-900 bg-gray-900 text-white hover:bg-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600\' },',
    '    { key: \'microsoft\', label: \'Microsoft\', icon: faMicrosoft, classes: \'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700\' },',
    '    { key: \'apple\', label: \'Apple\', icon: faApple, classes: \'border-black bg-black text-white hover:bg-gray-800 dark:border-gray-200 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200\' },',
    '];',
    '',
    '<!-- template -->',
    '<div class="space-y-3">',
    '    <a',
    '        v-for="provider in providers"',
    '        :key="provider.key"',
    '        :href="route(\'oauth.redirect\', provider.key)"',
    '        class="flex w-full items-center justify-center gap-3 rounded-md border px-4 py-2.5 text-sm font-medium transition"',
    '        :class="provider.classes"',
    '    >',
    '        <NbIcon :name="provider.icon" class="h-5 w-5 shrink-0" />',
    '        Continue with {{ provider.label }}',
    '    </a>',
    '</div>',
    '',
    '<div class="my-6 flex items-center gap-3">',
    '    <span class="h-px flex-1 bg-gray-200 dark:bg-gray-700" />',
    '    <span class="text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">or</span>',
    '    <span class="h-px flex-1 bg-gray-200 dark:bg-gray-700" />',
    '</div>',
    '',
    '<Input v-model="form.email" field="email" type="email" label="Email" required />',
];

/* ------------------------------------------------------------------ *
 * 3. Passkey sign-in (real feature detection)
 * ------------------------------------------------------------------ */
const passkeySupport = ref<'checking' | 'yes' | 'no'>('checking');
const passkeyDone = ref(false);

onMounted(async () => {
    try {
        const available =
            typeof window !== 'undefined' &&
            !!window.PublicKeyCredential &&
            (await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable());
        passkeySupport.value = available ? 'yes' : 'no';
    } catch {
        passkeySupport.value = 'no';
    }
});

function fakePasskeySignIn() {
    // Demo only - a real app would call navigator.credentials.get() here.
    passkeyDone.value = true;
    setTimeout(() => (passkeyDone.value = false), 3000);
}

const passkeySnippet = [
    'const supported = ref(false);',
    '',
    'onMounted(async () => {',
    '    try {',
    '        supported.value = !!window.PublicKeyCredential',
    '            && (await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable());',
    '    } catch {',
    '        supported.value = false;',
    '    }',
    '});',
    '',
    '<!-- template -->',
    '<PrimaryButton v-if="supported" type="button" class="w-full justify-center gap-2" @click="signInWithPasskey">',
    '    <NbIcon :name="faFingerprint" class="h-4 w-4" />',
    '    Sign in with a passkey',
    '</PrimaryButton>',
    '<p v-if="supported" class="mt-2 text-center text-xs text-green-600 dark:text-green-400">',
    '    Passkeys supported on this device',
    '</p>',
    '',
    '<p v-else class="text-center text-xs text-amber-600 dark:text-amber-400">',
    '    This device does not support passkeys -',
    '    <a href="/login" class="underline">sign in with your password</a>',
    '</p>',
];
</script>

<template>
    <section id="block-auth-security">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">2FA, OAuth &amp; Passkeys</h3>

        <!-- 1. Two-factor code entry ---------------------------------- -->
        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A two-factor challenge card: six auto-advancing single-character boxes that accept a pasted 6-digit code, a Verify button that
                stays disabled until the code is complete, and a toggle that swaps the boxes for a single recovery-code
                <code class="rounded bg-gray-100 px-1 text-xs dark:bg-gray-900/60">Input</code>. Try <strong>123456</strong> for success, anything else to see the error.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mx-auto w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                    <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/40">
                        <NbIcon :name="faShieldHalved" size="lg" class="text-primary-600 dark:text-primary-300" />
                    </div>

                    <h2 class="mb-1 text-center text-lg font-semibold text-gray-800 dark:text-gray-100">Two-factor authentication</h2>
                    <p class="mb-6 text-center text-sm text-gray-600 dark:text-gray-400">
                        {{ useRecovery ? 'Enter one of your emergency recovery codes.' : 'Enter the 6-digit code from your authenticator app.' }}
                    </p>

                    <form class="space-y-4" @submit.prevent="verifyCode">
                        <div v-if="!useRecovery" class="flex justify-center gap-2" :class="{ 'nb-shake': shaking }" @paste="onDigitPaste">
                            <input
                                v-for="(digit, i) in digits"
                                :key="i"
                                ref="boxes"
                                :value="digit"
                                type="text"
                                inputmode="numeric"
                                maxlength="1"
                                autocomplete="one-time-code"
                                :aria-label="`Digit ${i + 1}`"
                                class="h-12 w-full min-w-0 max-w-10 rounded-md border bg-white text-center text-lg font-semibold text-gray-800 focus:ring-2 focus:outline-none dark:bg-gray-900 dark:text-gray-100"
                                :class="status === 'error'
                                    ? 'border-red-400 focus:border-red-500 focus:ring-red-500 dark:border-red-500'
                                    : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600'"
                                @input="onDigitInput(i, $event)"
                                @keydown="onDigitKeydown(i, $event)"
                            />
                        </div>

                        <Input v-else v-model="recoveryCode" field="recovery_code" label="Recovery code" placeholder="xxxxxxxx-xxxxxxxx" />

                        <Alert v-if="status === 'success'" type="success" title="Verified">
                            Code accepted &mdash; redirecting to your dashboard.
                        </Alert>
                        <Alert v-else-if="status === 'error'" type="error" title="Invalid code">
                            That code is not valid or has expired. Try again.
                        </Alert>

                        <PrimaryButton type="submit" :disabled="!canSubmit" class="w-full justify-center">Verify</PrimaryButton>

                        <button
                            type="button"
                            class="w-full cursor-pointer text-center text-sm text-primary-600 hover:underline dark:text-primary-400"
                            @click="toggleRecovery"
                        >
                            {{ useRecovery ? 'Use your authenticator app instead' : 'Use a recovery code' }}
                        </button>
                    </form>
                </div>
            </div>
            <CodePreview :code="twoFactorSnippet" filename="TwoFactorChallenge.vue" />
        </DocDemoCard>

        <!-- 2. OAuth cluster ------------------------------------------ -->
        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A social sign-in cluster with brand icons and per-provider light and dark treatments, an &ldquo;or&rdquo; divider, and the email
                fallback below it.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mx-auto w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h2 class="mb-6 text-center text-lg font-semibold text-gray-800 dark:text-gray-100">Sign in to your account</h2>

                    <div class="space-y-3">
                        <button
                            v-for="provider in providers"
                            :key="provider.key"
                            type="button"
                            class="flex w-full cursor-pointer items-center justify-center gap-3 rounded-md border px-4 py-2.5 text-sm font-medium transition"
                            :class="provider.classes"
                            @click="lastProvider = provider.key"
                        >
                            <NbIcon :name="provider.icon" class="h-5 w-5 shrink-0" />
                            Continue with {{ provider.label }}
                        </button>
                    </div>

                    <p class="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
                        <template v-if="lastProvider">
                            In a real app this would navigate to
                            <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">route('oauth.redirect', '{{ lastProvider }}')</code>.
                        </template>
                        <template v-else>
                            Each button links to <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">route('oauth.redirect', provider)</code>.
                        </template>
                    </p>

                    <div class="my-6 flex items-center gap-3">
                        <span class="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
                        <span class="text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">or</span>
                        <span class="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
                    </div>

                    <div class="space-y-4">
                        <Input v-model="oauthEmail" field="email" type="email" label="Email" placeholder="you@example.com" />
                        <PrimaryButton type="button" class="w-full justify-center">Continue with Email</PrimaryButton>
                    </div>
                </div>
            </div>
            <CodePreview :code="oauthSnippet" filename="OAuthProviders.vue" />
        </DocDemoCard>

        <!-- 3. Passkey ------------------------------------------------- -->
        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A passkey sign-in card that really feature-detects WebAuthn on mount via
                <code class="rounded bg-gray-100 px-1 text-xs break-all dark:bg-gray-900/60">PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()</code>
                &mdash; what you see below reflects <em>this</em> browser. The button fakes success; it never calls
                <code class="rounded bg-gray-100 px-1 text-xs dark:bg-gray-900/60">navigator.credentials.get()</code>.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mx-auto w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                    <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/40">
                        <NbIcon :name="faFingerprint" size="lg" class="text-primary-600 dark:text-primary-300" />
                    </div>

                    <h2 class="mb-1 text-center text-lg font-semibold text-gray-800 dark:text-gray-100">Faster sign-in</h2>
                    <p class="mb-6 text-center text-sm text-gray-600 dark:text-gray-400">
                        Use your fingerprint, face or screen lock instead of a password.
                    </p>

                    <p v-if="passkeySupport === 'checking'" class="text-center text-xs text-gray-500 dark:text-gray-400">
                        Checking this device for passkey support&hellip;
                    </p>

                    <template v-else-if="passkeySupport === 'yes'">
                        <div v-if="passkeyDone" class="mb-3">
                            <Alert type="success" title="Signed in">Passkey accepted &mdash; welcome back.</Alert>
                        </div>

                        <PrimaryButton type="button" class="w-full justify-center gap-2" @click="fakePasskeySignIn">
                            <NbIcon :name="faFingerprint" class="h-4 w-4" />
                            Sign in with a passkey
                        </PrimaryButton>
                        <p class="mt-2 text-center text-xs text-green-600 dark:text-green-400">Passkeys supported on this device</p>
                    </template>

                    <p v-else class="text-center text-xs text-amber-600 dark:text-amber-400">
                        This device does not support passkeys &mdash;
                        <a href="#" class="underline hover:no-underline" @click.prevent>sign in with your password</a>
                    </p>
                </div>
            </div>
            <CodePreview :code="passkeySnippet" filename="PasskeySignIn.vue" />
        </DocDemoCard>
    </section>
</template>

<style scoped>
/* No Tailwind utility ships a shake; the wrong-code feedback needs one keyframe. */
@keyframes nb-shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-6px); }
    40%, 80% { transform: translateX(6px); }
}

.nb-shake {
    animation: nb-shake 0.4s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
    .nb-shake { animation: none; }
}
</style>
