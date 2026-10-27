<script setup lang="ts">
/**
 * The row above a list: a search box, your filter controls (default slot) and a
 * "Clear filters" action that shows while anything is filtered. Pair it with
 * `useQueryFilters()` so the filters live in the URL.
 *
 * @part root - the row
 * @part search - the search `Input`
 * @part filters - the wrapper around your controls
 * @part clear - the clear button
 * @motion off - the clear button appears instantly
 * @motion simple - the clear button fades quickly
 * @motion smooth - the clear button fades in and out
 * @motion fancy - the clear button scales in on a spring
 */
import Input from './Forms/Input.vue';
import SecondaryButton from './SecondaryButton.vue';
import NbTransition from './NbTransition.vue';
import type { MotionLevel } from '../ui/motion';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface FilterBarProps {
    /** Search text (`v-model:search`); omit to hide the search box */
    search?: string;
    /** Placeholder of the search box */
    placeholder?: string;
    /** Show "Clear filters" (pass `isFiltered` from useQueryFilters) */
    filtered?: boolean;
    /** Label of the clear button */
    clearLabel?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['FilterBar']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

export interface FilterBarEmits {
    'update:search': [value: string];
    /** "Clear filters" was clicked (call `reset()` from useQueryFilters) */
    clear: [];
}

const props = withDefaults(defineProps<FilterBarProps>(), { search: undefined, placeholder: 'Search…', filtered: false, clearLabel: 'Clear filters' });
const emit = defineEmits<FilterBarEmits>();

const { cls, attrs, level } = useUi('FilterBar', props);
</script>

<template>
    <div v-bind="attrs()" role="search" :class="cls('root', 'flex flex-wrap items-end gap-2')">
        <div v-if="search !== undefined" class="w-full sm:w-64">
            <Input
                type="search"
                name="search"
                no-label
                :placeholder="placeholder"
                :model-value="search"
                :aria-label="placeholder"
                :class="cls('search')"
                @update:model-value="emit('update:search', String($event ?? ''))"
            />
        </div>
        <div v-if="$slots.default" :class="cls('filters', 'flex flex-wrap items-end gap-2')"><slot /></div>
        <NbTransition :preset="level === 'fancy' ? 'scale' : 'fade'" :motion="level">
            <SecondaryButton v-if="filtered" type="button" size="sm" :class="cls('clear', 'mb-0.5')" @click="emit('clear')">{{ clearLabel }}</SecondaryButton>
        </NbTransition>
    </div>
</template>
