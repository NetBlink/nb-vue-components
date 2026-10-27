<script setup lang="ts">
import { ref } from 'vue';
import { EnvironmentBanner, ImpersonationBanner, PageHeader, Switch, Select, CodePreview, CollapsableSection, PropsTable, InlineCode } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const showEnv = ref(false);
const showImpersonation = ref(false);
const environment = ref('staging');
const stopped = ref(0);

const code = [
    '<!-- Layout: APP_ENV and the impersonation state shared from Laravel -->',
    '<EnvironmentBanner :environment="$page.props.app_env" />',
    '<ImpersonationBanner',
    '    v-if="$page.props.impersonating"',
    '    :name="$page.props.auth.user.name"',
    "    :href=\"route('impersonate.leave')\"",
    '/>',
    '<PageHeader sticky title="Orders" />  <!-- sits below both banners -->',
    '',
    '// app.js: names your app uses for production, on top of production, prod and live',
    "app.use(Componentsnb, { environment: { productionNames: ['main'] } });",
];

const envProps = [
    { prop: 'environment', type: 'string', default: '-', description: 'The environment name, e.g. APP_ENV; production names render nothing', required: true },
    { prop: 'message', type: 'string', default: "'environment'", description: 'Text after the name' },
];
const impProps = [
    { prop: 'name', type: 'string', default: '-', description: 'Who you are acting as', required: true },
    { prop: 'href', type: 'string', default: '-', description: 'URL that ends impersonation; without it, a button emits stop' },
    { prop: 'method', type: "'get' | 'post' | 'put' | 'patch' | 'delete'", default: "'get'", description: 'HTTP method for href' },
    { prop: 'stopLabel', type: 'string', default: "'Stop impersonating'", description: 'Label of the stop action' },
];
</script>

<template>
    <section id="banners">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Environment and impersonation banners</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                Strips that stay at the top of the page: which environment you're in (nothing on production), and who you're signed in as. They stack, and a
                <InlineCode>sticky</InlineCode> PageHeader moves down below them. Switch them on and scroll this page.
            </p>
            <div class="mb-4 flex flex-wrap items-end gap-6">
                <Switch v-model="showEnv" no-label right-description="Environment banner" />
                <div class="w-40"><Select v-model="environment" name="demo_env" no-label :options="['local', 'staging', 'pre-live', 'production']" /></div>
                <Switch v-model="showImpersonation" no-label right-description="Impersonation banner" />
                <span v-if="stopped" class="text-sm text-gray-500 dark:text-gray-400">stop clicked {{ stopped }}×</span>
            </div>
            <Teleport to="body">
                <div class="fixed inset-x-0 top-0 z-50" data-demo-banners>
                    <EnvironmentBanner v-if="showEnv" :environment="environment" />
                    <ImpersonationBanner v-if="showImpersonation" name="Ada Lovelace" @stop="stopped++" />
                </div>
            </Teleport>
            <PageHeader sticky title="Orders" description="A sticky header: it sits below the banners." class="mb-6 rounded-md border border-gray-200 px-4 dark:border-gray-700" />
            <CodePreview :code="code" />
            <CollapsableSection header="EnvironmentBanner Props" class="mt-6">
                <PropsTable :rows="envProps" />
            </CollapsableSection>
            <CollapsableSection header="ImpersonationBanner Props" class="mt-4">
                <PropsTable :rows="impProps" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
