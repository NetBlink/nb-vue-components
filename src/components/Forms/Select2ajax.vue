<script setup lang="ts">
/**
 * Server-backed version of `SearchSelect`: it wraps that component and fills the option
 * list by requesting `url` with the current search term, appending further pages as the
 * user scrolls the dropdown to the bottom. Reach for it when the option set is too large
 * to ship to the client; use `SearchSelect` for a static list, or `RichSelect` if you want
 * API search plus multiple selection and grouping in one component.
 *
 * @part root - the wrapper `<div>` (rendered by `SearchSelect`)
 * @part label - the `InputLabel`
 * @part input - the search select control
 * @part error - the `InputError`
 */
// @ts-nocheck
import { SearchSelect } from '../../index';
import type { NbParts, UiProp } from '../../ui/parts';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });
import { ref, onMounted } from 'vue';

export interface Select2ajaxProps {
    id: string;
    label?: string;
    optionValue?: string;
    optionText?: string;
    optionDisabled?: string;
    placeholder?: string;
    field?: string;
    form?: Record<string, any>;
    modelValue?: any;
    noLabel?: boolean;
    disabled?: boolean;
    noForm?: boolean;
    required?: boolean;
    /** Endpoint queried with `term` and `page` */
    url: string;
    /** Extra query parameters sent with every request */
    queryParams?: Record<string, any>;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Select2ajax']>;
}

const props = withDefaults(defineProps<Select2ajaxProps>(), {
    optionValue: 'value',
    optionText: 'label',
    optionDisabled: 'disabled',
    noLabel: false,
    disabled: false,
    noForm: false,
    required: false,
});

export interface Select2ajaxEmits {
    (e: 'update:modelValue', value: any): void;
    (e: 'changed', value: any): void;
}

const emit = defineEmits<Select2ajaxEmits>();

const { cls, attrs } = useUi('Select2ajax', props);
const list = ref([]);
const page = ref(1);
const canIncreasePage = ref(true);
const lastScrollTop = ref(0);
const term = ref('');
const currentValue = ref(props.form?.[props.field] || props.modelValue);
const lastValue = ref(currentValue.value);
const displayText = ref(null);

const onUpdate = (value) => {
    lastValue.value = currentValue.value;
    currentValue.value = value;
    emit('update:modelValue', value);
    emit('changed', value);

    if (!value) {
        // user just reseted the value, clear the search and placeholder
        searchChange('');
        displayText.value = null;
    }
};

const searchChange = (_term) => {
    if (_term == '') {
        if (currentValue.value && currentValue.value !== lastValue.value) {
            // user selected a value from the list
            return;
        }
    }

    page.value = 1;
    lastScrollTop.value = 0;
    term.value = _term;
    fetchList();
};

const fetchList = async (appendAjaxId = false) => {
    const params = new URLSearchParams();
    params.append('term', term.value);
    params.append('page', page.value);

    if (props.queryParams) {
        Object.keys(props.queryParams).forEach((key) => {
            params.append(key, props.queryParams[key]);
        });
    }

    if (appendAjaxId) {
        if (currentValue.value) {
            params.append('ajax_id', currentValue.value);
        }
    }

    const response = await fetch(`${props.url}?${params.toString()}`);
    const results = await response.json();
    canIncreasePage.value = results.current_page < results.last_page;

    if (page.value === 1) {
        list.value = results.data;

        if (currentValue.value) {
            const found = list.value.find((item) => item[props.optionValue] == currentValue.value);
            displayText.value = found ? found[props.optionText] : null;
        }

        return;
    }

    list.value = list.value.concat(results.data);
};

onMounted(() => {
    fetchList(true);

    const menu = document.getElementById(props.id).parentNode.querySelector('.menu');
    menu?.addEventListener(
        'scroll',
        (e) => {
            if (e.target.scrollTop > lastScrollTop.value) {
                if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
                    if (canIncreasePage.value) {
                        page.value++;
                        fetchList();
                    }
                }
            }
        },
        {
            passive: true,
        }
    );
});

const getCurrentOption = () => {
    return list.value.find((item) => item[props.optionValue] == currentValue.value);
};
defineExpose({ getCurrentOption });
</script>

<template>
    <SearchSelect
        v-bind="attrs()"
        :ui="{ root: cls('root'), label: cls('label'), input: cls('input'), error: cls('error') }"
        :id="id"
        :label="label"
        :list="list"
        :optionValue="optionValue"
        :optionText="optionText"
        :optionDisabled="optionDisabled"
        :placeholder="displayText ?? placeholder"
        :field="field"
        :form="form"
        :modelValue="currentValue"
        :noLabel="noLabel"
        :disabled="disabled"
        :noForm="noForm"
        :required="required"
        @update:modelValue="($event) => onUpdate($event)"
        @searchchange="searchChange"
        :filterPredicate="(a, b) => true"
    ></SearchSelect>
</template>
