<script setup lang="ts">
import { ref, computed } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { Input, Select, RadioButton, Checkbox, Alert, PrimaryButton, SecondaryButton, CodePreview } from '../../index';
import { NbIcon } from '../../icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const steps = [
    { label: 'Account', hint: 'Your login details' },
    { label: 'Company', hint: 'About your business' },
    { label: 'Review', hint: 'Confirm and submit' },
];

const step = ref(1);
const submitted = ref(false);

const form = useForm({
    name: '',
    email: '',
    password: '',
    company: '',
    business_type: '',
    size: '',
    confirmed: false,
});

const businessTypes = [
    { value: 'sole_trader', label: 'Sole trader' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'limited', label: 'Limited company' },
    { value: 'nonprofit', label: 'Non-profit' },
];

const sizes = [
    { value: '1-10', label: '1 - 10 employees' },
    { value: '11-50', label: '11 - 50 employees' },
    { value: '51+', label: '51+ employees' },
];

// ponytail: label lookups are one-liners, no map needed for 4 items
const businessTypeLabel = computed(() => businessTypes.find((t) => t.value === form.business_type)?.label || '-');
const sizeLabel = computed(() => sizes.find((s) => s.value === form.size)?.label || '-');

const reviewRows = computed(() => [
    { label: 'Name', value: form.name || '-' },
    { label: 'Email', value: form.email || '-' },
    { label: 'Password', value: form.password ? '•'.repeat(form.password.length) : '-' },
    { label: 'Company', value: form.company || '-' },
    { label: 'Business type', value: businessTypeLabel.value },
    { label: 'Company size', value: sizeLabel.value },
]);

function next() {
    if (step.value < steps.length) step.value++;
}

function back() {
    if (step.value > 1) step.value--;
}

function submit() {
    form.processing = true;
    setTimeout(() => {
        form.processing = false;
        form.reset();
        submitted.value = true;
        step.value = 1;
    }, 900);
}

const circleClass = (index: number) => {
    const n = index + 1;
    if (n < step.value) return 'bg-emerald-500 text-white ring-emerald-500 dark:bg-emerald-500 dark:ring-emerald-400';
    if (n === step.value) return 'bg-primary-600 ring-primary-600 text-white dark:bg-primary-500 dark:ring-primary-400';
    return 'bg-white text-gray-400 ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:ring-gray-600';
};

const railClass = (index: number) =>
    index + 1 < step.value ? 'bg-emerald-500 dark:bg-emerald-500' : 'bg-gray-200 dark:bg-gray-700';

const snippet = [
    '<script setup>',
    'import { ref, computed } from \'vue\';',
    'import { useForm } from \'@inertiajs/vue3\';',
    'import { Alert, Checkbox, Input, PrimaryButton, RadioButton, SecondaryButton, Select } from \'@netblink/vue-components\';',
    'import { NbIcon } from \'@netblink/vue-components/icons\';',
    'import { faCheck } from \'@fortawesome/free-solid-svg-icons\';',
    '',
    'const step = ref(1);',
    'const submitted = ref(false);',
    'const form = useForm({ name: \'\', email: \'\', password: \'\', company: \'\', business_type: \'\', size: \'\', confirmed: false });',
    '',
    'const steps = [',
    '    { label: \'Account\', hint: \'Your login details\' },',
    '    { label: \'Company\', hint: \'About your business\' },',
    '    { label: \'Review\', hint: \'Confirm and submit\' },',
    '];',
    'const businessTypes = [{ value: \'sole_trader\', label: \'Sole trader\' }, { value: \'limited\', label: \'Limited company\' }];',
    'const sizes = [{ value: \'1-10\', label: \'1 - 10 employees\' }, { value: \'51+\', label: \'51+ employees\' }];',
    '',
    'const reviewRows = computed(() => [',
    '    { label: \'Name\', value: form.name || \'-\' },',
    '    { label: \'Email\', value: form.email || \'-\' },',
    '    { label: \'Password\', value: form.password ? \'•\'.repeat(form.password.length) : \'-\' },',
    '    { label: \'Company\', value: form.company || \'-\' },',
    '    { label: \'Business type\', value: businessTypes.find((t) => t.value === form.business_type)?.label || \'-\' },',
    '    { label: \'Company size\', value: sizes.find((s) => s.value === form.size)?.label || \'-\' },',
    ']);',
    '<\/script>',
    '',
    '<template>',
    '    <!-- Stepper -->',
    '    <ol class="mb-8 flex items-start">',
    '        <li v-for="(s, i) in steps" :key="s.label" class="flex flex-1 items-center last:flex-none">',
    '            <div class="flex flex-col items-center">',
    '                <span',
    '                    class="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ring-2"',
    '                    :class="i + 1 < step ? \'bg-emerald-500 text-white ring-emerald-500\'',
    '                        : i + 1 === step ? \'bg-primary-600 text-white ring-primary-600\'',
    '                        : \'bg-white text-gray-400 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600\'"',
    '                >',
    '                    <NbIcon v-if="i + 1 < step" :name="faCheck" class="h-3.5 w-3.5" />',
    '                    <template v-else>{{ i + 1 }}</template>',
    '                </span>',
    '                <span class="mt-2 text-xs font-medium text-gray-700 dark:text-gray-300">{{ s.label }}</span>',
    '                <span class="hidden text-xs text-gray-500 sm:block dark:text-gray-400">{{ s.hint }}</span>',
    '            </div>',
    '            <span',
    '                v-if="i < steps.length - 1"',
    '                class="mx-3 mt-4 h-0.5 flex-1 self-start"',
    '                :class="i + 1 < step ? \'bg-emerald-500\' : \'bg-gray-200 dark:bg-gray-700\'"',
    '            />',
    '        </li>',
    '    </ol>',
    '',
    '    <Alert v-if="submitted" type="success" title="Account created" dismissible class="mb-6" @dismiss="submitted = false">',
    '        Your workspace is ready.',
    '    </Alert>',
    '',
    '    <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">',
    '        <form @submit.prevent="form.post(route(\'register.store\'), { onSuccess: () => (submitted = true) })" class="space-y-4">',
    '            <template v-if="step === 1">',
    '                <Input :form="form" field="name" label="Full Name" required autofocus />',
    '                <Input :form="form" field="email" type="email" label="Email" required />',
    '                <Input :form="form" field="password" type="password" label="Password" required />',
    '            </template>',
    '',
    '            <template v-if="step === 2">',
    '                <Input :form="form" field="company" label="Company Name" required />',
    '                <Select :form="form" field="business_type" label="Business Type" placeholder="Select a type" :options="businessTypes" />',
    '                <div>',
    '                    <span class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">Company Size</span>',
    '                    <div class="space-y-2">',
    '                        <RadioButton v-for="s in sizes" :key="s.value" :form="form" field="size" :value="s.value" :label="s.label" />',
    '                    </div>',
    '                </div>',
    '            </template>',
    '',
    '            <template v-if="step === 3">',
    '                <dl class="divide-y divide-gray-200 dark:divide-gray-700">',
    '                    <div v-for="row in reviewRows" :key="row.label" class="flex items-center justify-between gap-4 py-2 text-sm">',
    '                        <dt class="text-gray-500 dark:text-gray-400">{{ row.label }}</dt>',
    '                        <dd class="truncate font-medium text-gray-800 dark:text-gray-100">{{ row.value }}</dd>',
    '                    </div>',
    '                </dl>',
    '                <Checkbox :form="form" field="confirmed" noLabel rightDescription="The details above are correct" />',
    '            </template>',
    '',
    '            <div class="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">',
    '                <SecondaryButton v-if="step > 1" type="button" @click="step--">Back</SecondaryButton>',
    '                <span v-else />',
    '                <PrimaryButton v-if="step < 3" type="button" @click="step++">Next</PrimaryButton>',
    '                <PrimaryButton v-else type="submit" :disabled="!form.confirmed || form.processing">',
    '                    {{ form.processing ? \'Creating...\' : \'Create Account\' }}',
    '                </PrimaryButton>',
    '            </div>',
    '        </form>',
    '    </div>',
    '</template>',
];
</script>

<template>
    <section id="block-wizard">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Multi-Step Form</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A three-step wizard: a horizontal stepper with connector rails that fill as you advance, over a single form split across
                Account, Company, and Review steps. Composes Input, Select, RadioButton, Checkbox, Alert, and the button pair, one
                <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">useForm</code> holds every field, and steps switch with
                <code class="rounded bg-gray-100 px-1 text-sm dark:bg-gray-900/60">v-if</code> on a step ref.
            </p>

            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mx-auto w-full max-w-2xl">
                    <Alert v-if="submitted" type="success" title="Account created" dismissible class="mb-6" @dismiss="submitted = false">
                        Your workspace is ready. The form has been reset back to step one.
                    </Alert>

                    <!-- Stepper -->
                    <ol class="mb-8 flex items-start">
                        <li v-for="(s, i) in steps" :key="s.label" class="flex flex-1 items-center last:flex-none">
                            <div class="flex flex-col items-center">
                                <span
                                    class="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ring-2 transition-colors"
                                    :class="circleClass(i)"
                                >
                                    <NbIcon v-if="i + 1 < step" :name="faCheck" class="h-3.5 w-3.5" />
                                    <template v-else>{{ i + 1 }}</template>
                                </span>
                                <span class="mt-2 text-xs font-medium text-gray-700 dark:text-gray-300">{{ s.label }}</span>
                                <span class="hidden text-xs text-gray-500 sm:block dark:text-gray-400">{{ s.hint }}</span>
                            </div>
                            <span
                                v-if="i < steps.length - 1"
                                class="mx-3 mt-4 h-0.5 flex-1 self-start transition-colors"
                                :class="railClass(i)"
                            />
                        </li>
                    </ol>

                    <!-- Card -->
                    <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                        <form @submit.prevent="submit" class="space-y-4">
                            <template v-if="step === 1">
                                <Input v-model="form.name" field="name" label="Full Name" required />
                                <Input v-model="form.email" field="email" type="email" label="Email" required />
                                <Input v-model="form.password" field="password" type="password" label="Password" required />
                            </template>

                            <template v-if="step === 2">
                                <Input v-model="form.company" field="company" label="Company Name" required />
                                <Select
                                    v-model="form.business_type"
                                    field="business_type"
                                    label="Business Type"
                                    placeholder="Select a type"
                                    :options="businessTypes"
                                />
                                <div>
                                    <span class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">Company Size</span>
                                    <div class="space-y-2">
                                        <RadioButton
                                            v-for="s in sizes"
                                            :key="s.value"
                                            v-model="form.size"
                                            field="size"
                                            name="wizard_size"
                                            :value="s.value"
                                            :label="s.label"
                                        />
                                    </div>
                                </div>
                            </template>

                            <template v-if="step === 3">
                                <dl class="divide-y divide-gray-200 dark:divide-gray-700">
                                    <div v-for="row in reviewRows" :key="row.label" class="flex items-center justify-between gap-4 py-2 text-sm">
                                        <dt class="text-gray-500 dark:text-gray-400">{{ row.label }}</dt>
                                        <dd class="truncate font-medium text-gray-800 dark:text-gray-100">{{ row.value }}</dd>
                                    </div>
                                </dl>
                                <Checkbox v-model="form.confirmed" field="confirmed" noLabel rightDescription="The details above are correct" />
                            </template>

                            <div class="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
                                <SecondaryButton v-if="step > 1" type="button" @click="back">Back</SecondaryButton>
                                <span v-else />
                                <PrimaryButton v-if="step < steps.length" type="button" @click="next">Next</PrimaryButton>
                                <PrimaryButton v-else type="submit" :disabled="!form.confirmed || form.processing">
                                    {{ form.processing ? 'Creating...' : 'Create Account' }}
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <CodePreview :code="snippet" filename="RegisterWizard.vue" />
        </DocDemoCard>
    </section>
</template>
