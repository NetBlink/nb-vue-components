<script setup>
// @ts-nocheck
import { SearchSelect } from '../../index';
import { ref, onMounted } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
    },
    optionValue: {
        type: String,
        default: 'value',
    },
    optionText: {
        type: String,
        default: 'label',
    },
    optionDisabled: {
        type: String,
        default: 'disabled',
    },
    placeholder: {
        type: String,
    },
    field: String,
    form: Object,
    modelValue: {},
    noLabel: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    noForm: {
        type: Boolean,
        default: false,
    },
    required: Boolean,

    // ajax specific props
    url: {
        type: String,
        required: true,
    },
    queryParams: {
        type: Object,
    },
});

const emit = defineEmits(['update:modelValue']);
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
</script>

<template>
    <SearchSelect
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
