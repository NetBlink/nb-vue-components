<script setup lang="ts">
/**
 * Feature-rich Select component with API search, multiple selection, and grouping
 *
 * @component
 *
 * @prop {Object} form - Inertia form object
 * @prop {string} field - Field name in the form object
 * @prop {string} label - Label text displayed above select
 * @prop {Array} options - Array of options [{value, label, disabled?, group?}, ...]
 * @prop {string} placeholder - Placeholder text
 * @prop {boolean} multiple - Enable multiple selection
 * @prop {boolean} searchable - Enable search functionality
 * @prop {boolean} apiSearch - Enable API-based search
 * @prop {string} apiUrl - API endpoint for search (when apiSearch is true)
 * @prop {string} apiSearchParam - Query parameter name for API search (default: 'q')
 * @prop {Function} apiTransform - Function to transform API response to options format
 * @prop {boolean} grouping - Enable option grouping
 * @prop {boolean} clearable - Allow clearing selection
 * @prop {number} minSearchLength - Minimum characters to trigger search (default: 2)
 * @prop {number} searchDelay - Debounce delay for search in ms (default: 300)
 * @prop {boolean} required - Whether the field is required
 * @prop {boolean} disabled - Whether the select is disabled
 * @prop {boolean} noLabel - Whether to hide the label
 * @prop {string} tooltip - Tooltip text shown next to label
 * @prop {any} modelValue - Direct value binding (alternative to form/field)
 * @prop {string} optionValue - Property name for option value (default: 'value')
 * @prop {string} optionLabel - Property name for option label (default: 'label')
 * @prop {string} optionGroup - Property name for option group (default: 'group')
 */

import { computed, ref, watch, nextTick, onMounted } from 'vue';
import { InputWrapper, Spinner } from '../../index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

interface SelectOption {
    [key: string]: any;
    value?: any;
    label?: string;
    disabled?: boolean;
    group?: string;
}

interface SelectProps {
    /** Form object containing field values and errors */
    form?: {
        [key: string]: any;
        errors?: { [key: string]: string };
    };
    /** Field name for form binding */
    field?: string;
    /** Label text displayed above select */
    label?: string;
    /** Array of options */
    options?: SelectOption[];
    /** Placeholder text */
    placeholder?: string;
    /** Enable multiple selection */
    multiple?: boolean;
    /** Enable search functionality */
    searchable?: boolean;
    /** Enable API-based search */
    apiSearch?: boolean;
    /** API endpoint for search */
    apiUrl?: string;
    /** Query parameter name for API search */
    apiSearchParam?: string;
    /** Function to transform API response */
    apiTransform?: (response: any) => SelectOption[];
    /** Enable option grouping */
    grouping?: boolean;
    /** Allow clearing selection */
    clearable?: boolean;
    /** Minimum characters to trigger search */
    minSearchLength?: number;
    /** Debounce delay for search in ms */
    searchDelay?: number;
    /** Whether the field is required */
    required?: boolean;
    /** Whether the select is disabled */
    disabled?: boolean;
    /** Whether to hide the label */
    noLabel?: boolean;
    /** Tooltip text shown next to label */
    tooltip?: string;
    /** Direct value binding */
    modelValue?: any;
    /** Property name for option value */
    optionValue?: string;
    /** Property name for option label */
    optionLabel?: string;
    /** Property name for option group */
    optionGroup?: string;
    /** Custom CSS classes */
    customClass?: string;
}

interface SelectEmits {
    /** Emitted when the select value changes */
    'update:modelValue': [value: any];
    /** Emitted when search is performed */
    search: [query: string];
    /** Emitted when options are loaded from API */
    optionsLoaded: [options: SelectOption[]];
}

const props = withDefaults(defineProps<SelectProps>(), {
    form: undefined,
    field: undefined,
    label: undefined,
    options: () => [],
    placeholder: 'Select an option...',
    multiple: false,
    searchable: false,
    apiSearch: false,
    apiUrl: undefined,
    apiSearchParam: 'q',
    apiTransform: (response: any) => response,
    grouping: false,
    clearable: false,
    minSearchLength: 2,
    searchDelay: 300,
    required: false,
    disabled: false,
    noLabel: false,
    tooltip: undefined,
    modelValue: undefined,
    optionValue: 'value',
    optionLabel: 'label',
    optionGroup: 'group',
    customClass: '',
});

const emit = defineEmits<SelectEmits>();

// Local state
const isOpen = ref(false);
const searchQuery = ref('');
const isLoading = ref(false);
const searchTimeout = ref<number | null>(null);
const localOptions = ref<SelectOption[]>([...props.options]);
const dropdownRef = ref<HTMLElement>();
const searchInputRef = ref<HTMLInputElement>();

// Computed value that works with both form/field and v-model patterns
const value = computed({
    get() {
        if (props.modelValue !== undefined) {
            return props.modelValue;
        }
        return props.form && props.field ? props.form[props.field] : props.multiple ? [] : undefined;
    },
    set(newValue) {
        if (props.modelValue !== undefined) {
            emit('update:modelValue', newValue);
        } else if (props.form && props.field) {
            props.form[props.field] = newValue;
        }
    },
});

// Helper functions to get option properties
const getOptionValue = (option: SelectOption) => option[props.optionValue];
const getOptionLabel = (option: SelectOption) => option[props.optionLabel];
const getOptionGroup = (option: SelectOption) => option[props.optionGroup];

// Computed error message
const errorMessage = computed(() => {
    if (props.form?.errors && props.field) {
        return props.form.errors[props.field];
    }
    return undefined;
});

// Computed label text
const labelText = computed(() => {
    if (props.label) return props.label;
    if (props.field) {
        return props.field
            .split('_')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    return '';
});

// Generate unique ID
const selectId = computed(() => props.field || `select-${Math.random().toString(36).substr(2, 9)}`);

// Filtered options based on search
const filteredOptions = computed(() => {
    if (!props.searchable || !searchQuery.value) {
        return localOptions.value;
    }

    const query = searchQuery.value.toLowerCase();
    return localOptions.value.filter((option) => getOptionLabel(option).toLowerCase().includes(query));
});

// Grouped options
const groupedOptions = computed(() => {
    if (!props.grouping) {
        return { ungrouped: filteredOptions.value };
    }

    const groups: Record<string, SelectOption[]> = {};

    filteredOptions.value.forEach((option) => {
        const group = getOptionGroup(option) || 'ungrouped';
        if (!groups[group]) {
            groups[group] = [];
        }
        groups[group].push(option);
    });

    return groups;
});

// Selected options for display
const selectedOptions = computed(() => {
    if (!value.value) return [];

    const values = props.multiple ? value.value : [value.value];
    return localOptions.value.filter((option) => values.includes(getOptionValue(option)));
});

// Display text for selected values
const displayText = computed(() => {
    if (!selectedOptions.value.length) {
        return props.placeholder;
    }

    if (props.multiple) {
        return selectedOptions.value.map((option) => getOptionLabel(option)).join(', ');
    }

    return getOptionLabel(selectedOptions.value[0]);
});

// API search function
const performApiSearch = async (query: string) => {
    if (!props.apiSearch || !props.apiUrl) return;

    isLoading.value = true;

    try {
        const url = new URL(props.apiUrl);
        url.searchParams.set(props.apiSearchParam, query);

        const response = await fetch(url.toString());
        const data = await response.json();

        const transformedOptions = props.apiTransform ? props.apiTransform(data) : data;
        localOptions.value = transformedOptions;

        emit('optionsLoaded', transformedOptions);
    } catch (error) {
        console.error('API search error:', error);
    } finally {
        isLoading.value = false;
    }
};

// Handle search input
const handleSearch = (query: string) => {
    searchQuery.value = query;
    emit('search', query);

    if (props.apiSearch && query.length >= props.minSearchLength) {
        if (searchTimeout.value) {
            clearTimeout(searchTimeout.value);
        }

        searchTimeout.value = setTimeout(() => {
            performApiSearch(query);
        }, props.searchDelay);
    }
};

// Toggle option selection
const toggleOption = (option: SelectOption) => {
    if (option.disabled) return;

    const optionValue = getOptionValue(option);

    if (props.multiple) {
        const currentValues = value.value || [];
        const index = currentValues.indexOf(optionValue);

        if (index > -1) {
            value.value = currentValues.filter((_: any, i: number) => i !== index);
        } else {
            value.value = [...currentValues, optionValue];
        }
    } else {
        value.value = optionValue;
        isOpen.value = false;
    }
};

// Remove selected option (for multiple)
const removeOption = (option: SelectOption, event: Event) => {
    event.stopPropagation();

    if (props.multiple) {
        const optionValue = getOptionValue(option);
        value.value = value.value.filter((v: any) => v !== optionValue);
    }
};

// Clear all selections
const clearSelection = (event: Event) => {
    event.stopPropagation();
    value.value = props.multiple ? [] : undefined;
};

// Check if option is selected
const isSelected = (option: SelectOption) => {
    const optionValue = getOptionValue(option);
    if (props.multiple) {
        return (value.value || []).includes(optionValue);
    }
    return value.value === optionValue;
};

// Toggle dropdown
const toggleDropdown = () => {
    if (props.disabled) return;

    isOpen.value = !isOpen.value;

    if (isOpen.value && props.searchable) {
        nextTick(() => {
            searchInputRef.value?.focus();
        });
    }
};

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

// Watch for options changes
watch(
    () => props.options,
    (newOptions) => {
        localOptions.value = [...newOptions];
    },
    { immediate: true }
);

// Setup click outside listener
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

// Cleanup
const cleanup = () => {
    document.removeEventListener('click', handleClickOutside);
    if (searchTimeout.value) {
        clearTimeout(searchTimeout.value);
    }
};

// Cleanup on unmount
import { onUnmounted } from 'vue';
onUnmounted(cleanup);
</script>

<template>
    <InputWrapper
        :field="field"
        :label="labelText"
        :tooltip="tooltip"
        :required="required"
        :noLabel="noLabel"
        :form="form"
        :error="errorMessage"
        :htmlFor="selectId"
    >
        <div class="relative" ref="dropdownRef">
            <!-- Select Button -->
            <button
                type="button"
                :id="selectId"
                @click="toggleDropdown"
                :disabled="disabled"
                class="focusable focus:border-primary-500 focus:ring-primary-500 relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pr-10 pl-3 text-left shadow-sm transition-colors focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
                :class="[
                    customClass,
                    {
                        'border-red-500 focus:border-red-500 focus:ring-red-500': errorMessage,
                        'border-primary-500 ring-primary-500 ring-2': isOpen,
                    },
                ]"
            >
                <div class="flex flex-wrap gap-1">
                    <!-- Multiple selection tags -->
                    <template v-if="multiple && selectedOptions.length">
                        <span
                            v-for="option in selectedOptions"
                            :key="getOptionValue(option)"
                            class="bg-primary-100 text-primary-800 inline-flex items-center gap-1 rounded px-2 py-1 text-xs"
                        >
                            {{ getOptionLabel(option) }}
                            <button type="button" @click="removeOption(option, $event)" class="hover:text-primary-600 transition-colors">
                                <FontAwesomeIcon :icon="faTimes" class="h-3 w-3" />
                            </button>
                        </span>
                    </template>

                    <!-- Single selection or placeholder -->
                    <span v-else class="block truncate" :class="{ 'text-gray-500': !selectedOptions.length }">
                        {{ displayText }}
                    </span>
                </div>

                <!-- Clear button -->
                <button
                    v-if="clearable && selectedOptions.length"
                    type="button"
                    @click="clearSelection"
                    class="absolute inset-y-0 right-8 flex items-center pr-2 text-gray-400 transition-colors hover:text-gray-600"
                >
                    <FontAwesomeIcon :icon="faTimes" class="h-4 w-4" />
                </button>

                <!-- Dropdown chevron -->
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <FontAwesomeIcon
                        :icon="faChevronDown"
                        class="h-4 w-4 text-gray-400 transition-transform duration-200"
                        :class="{ 'rotate-180': isOpen }"
                    />
                </div>
            </button>

            <!-- Dropdown -->
            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
            >
                <div v-show="isOpen" class="absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg">
                    <!-- Search input -->
                    <div v-if="searchable" class="border-b border-gray-200 p-2">
                        <div class="relative">
                            <FontAwesomeIcon :icon="faSearch" class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                                ref="searchInputRef"
                                type="text"
                                v-model="searchQuery"
                                @input="handleSearch(searchQuery)"
                                placeholder="Search options..."
                                class="focus:border-primary-500 focus:ring-primary-500 w-full rounded border border-gray-300 py-2 pr-3 pl-10 text-sm focus:ring-2 focus:ring-offset-0"
                            />
                        </div>
                    </div>

                    <!-- Loading state -->
                    <div v-if="isLoading" class="flex items-center justify-center p-4">
                        <Spinner class="h-5 w-5" />
                        <span class="ml-2 text-sm text-gray-600">Loading...</span>
                    </div>

                    <!-- Options -->
                    <div v-else class="max-h-60 overflow-auto">
                        <template v-if="grouping">
                            <div v-for="(groupOptions, groupName) in groupedOptions" :key="groupName">
                                <div
                                    v-if="groupName !== 'ungrouped'"
                                    class="bg-gray-50 px-3 py-2 text-xs font-semibold tracking-wide text-gray-500 uppercase"
                                >
                                    {{ groupName }}
                                </div>
                                <button
                                    v-for="option in groupOptions"
                                    :key="getOptionValue(option)"
                                    type="button"
                                    @click="toggleOption(option)"
                                    :disabled="option.disabled"
                                    class="relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                                    :class="{
                                        'bg-primary-100 text-primary-900': isSelected(option),
                                        'text-gray-900': !isSelected(option),
                                    }"
                                >
                                    <span class="block truncate">{{ getOptionLabel(option) }}</span>
                                    <span v-if="isSelected(option)" class="text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                        ✓
                                    </span>
                                </button>
                            </div>
                        </template>

                        <!-- Non-grouped options -->
                        <template v-else>
                            <button
                                v-for="option in filteredOptions"
                                :key="getOptionValue(option)"
                                type="button"
                                @click="toggleOption(option)"
                                :disabled="option.disabled"
                                class="relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                                :class="{
                                    'bg-primary-100 text-primary-900': isSelected(option),
                                    'text-gray-900': !isSelected(option),
                                }"
                            >
                                <span class="block truncate">{{ getOptionLabel(option) }}</span>
                                <span v-if="isSelected(option)" class="text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4">✓</span>
                            </button>
                        </template>

                        <!-- No options message -->
                        <div v-if="!filteredOptions.length" class="px-3 py-2 text-center text-sm text-gray-500">No options found</div>
                    </div>
                </div>
            </transition>
        </div>
    </InputWrapper>
</template>
