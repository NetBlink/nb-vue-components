<script setup lang="ts">
import { Avatar, AvatarGroup, CodePreview, CollapsableSection, PropsTable } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const team = ['Maria Lopez', 'Tom Becker', 'Aisha Khan', 'Jonas Weber', 'Lena Fischer', 'Ravi Patel', 'Chen Wei'];
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

const code = [
    '<Avatar name="Maria Lopez" />',
    '<Avatar src="/img/tom.jpg" name="Tom Becker" status="online" />',
    '<Avatar name="Aisha Khan" size="lg" square />',
    '',
    '<AvatarGroup :max="4" size="sm">',
    '    <Avatar v-for="member in team" :key="member.id" :name="member.name" :src="member.photo" size="sm" />',
    '</AvatarGroup>',
];

const props = [
    { prop: 'src', type: 'string', default: '-', description: 'Picture URL. A missing or broken picture falls back to initials' },
    { prop: 'name', type: 'string', default: "''", description: 'Full name: the initials, the tint and the accessible label' },
    { prop: 'alt', type: 'string', default: 'name', description: 'Alternative text for the picture' },
    { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Size' },
    { prop: 'status', type: "'online' | 'offline' | 'busy' | 'away'", default: '-', description: 'Presence dot' },
    { prop: 'square', type: 'boolean', default: 'false', description: 'Rounded square instead of a circle' },
];
const groupProps = [
    { prop: 'max', type: 'number', default: '-', description: 'Avatars to show before the "+N" bubble' },
    { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Size of the "+N" bubble and the overlap; match it to the avatars' },
];
</script>

<template>
    <section id="avatar">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Avatar and AvatarGroup</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                A user picture, or their initials on a tint picked from the name, so the same person keeps the same colour everywhere.
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">AvatarGroup</code> stacks several and folds the rest into a "+N" bubble.
            </p>

            <div class="mb-6 flex flex-wrap items-end gap-4">
                <Avatar v-for="(size, i) in sizes" :key="size" :name="team[i]" :size="size" />
                <Avatar name="Tom Becker" status="online" />
                <Avatar name="Aisha Khan" status="busy" />
                <Avatar name="Jonas Weber" status="away" square />
                <!-- an undecodable image: shows the fallback without a network 404 -->
                <Avatar src="data:image/png;base64,AA==" name="Broken Picture" status="offline" />
            </div>

            <div class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Group</div>
            <div class="mb-6 flex flex-wrap items-center gap-8">
                <AvatarGroup :max="4" size="sm">
                    <Avatar v-for="member in team" :key="member" :name="member" size="sm" />
                </AvatarGroup>
                <AvatarGroup>
                    <Avatar v-for="member in team.slice(0, 3)" :key="member" :name="member" />
                </AvatarGroup>
            </div>

            <CodePreview :code="code" />
            <CollapsableSection header="Avatar Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
            <CollapsableSection header="AvatarGroup Props" class="mt-4">
                <PropsTable :rows="groupProps" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
