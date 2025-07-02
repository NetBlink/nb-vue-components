<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { InputLabel, InputError } from '../../index';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
    },
    list: {
        type: Array,
        required: true,
        default: () => [],
    },
    optionValue: {
        type: String,
        required: true,
    },
    optionText: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
    },
    field: String,
    form: Object,
    noLabel: {
        type: Boolean,
        default: false,
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:modelValue']);

const ucwords = (text) => {
    let res = [];
    text.split('_')
        .join(' ')
        .split(' ')
        .map(function (v) {
            res.push(v[0].toUpperCase() + v.slice(1));
        });
    return res.join(' ');
};

const click = (item) => {
    let values = props.form[props.field] ?? [];
    let value = item[props.optionValue].toString();

    try {
        if (values.includes(value)) {
            values = values.filter((v) => v !== value);
        } else {
            values.push(value);
        }

        props.form[props.field] = values;
        emit('update:modelValue', values);
    } catch (e) {
        console.error(e);
    }
};

const isSelected = (item) => {
    return props.form[props.field]?.includes(item[props.optionValue].toString());
};

const getSelectedItems = () => {
    return props.list.filter((item) => isSelected(item));
};
</script>

<template>
    <div class="w-full">
        <InputLabel v-if="!noLabel && (label || field)" :for="id ?? field" :value="ucwords(label ?? field)" />
        <div class="model-list relative flex w-full min-w-[10rem]" data-te-dropdown-ref :id="id ?? field">
            <button
                class="aria-expanded:border-accent-500 aria-expanded:outline-accent-500 flex h-10 w-full items-center justify-between rounded border border-gray-300 px-3 py-2 pr-5 text-base leading-normal whitespace-nowrap shadow outline outline-1 outline-transparent transition duration-150 ease-in-out aria-expanded:rounded-b-none motion-reduce:transition-none"
                type="button"
                data-te-dropdown-toggle-ref
                data-te-auto-close="outside"
                data-te-dropdown-animation="off"
                aria-expanded="false"
                :disabled="isDisabled"
            >
                <span v-if="getSelectedItems().length > 0">{{ getSelectedItems().length }} selected</span>
                <span v-else>
                    {{ placeholder }}
                </span>
                <span class="ml-2 w-2">
                    <FontAwesomeIcon :icon="faChevronDown" class="h-5 w-5" />
                </span>
            </button>
            <div class="absolute z-1000 -mt-1! hidden min-w-full bg-white data-te-dropdown-show:block" data-te-dropdown-menu-ref>
                <ul
                    class="float-left m-0 box-border max-h-80 min-w-full list-none overflow-auto rounded rounded-t-none border border-t-0 border-gray-300 bg-clip-padding text-left text-base shadow"
                >
                    <li
                        v-for="item of list"
                        @click="click(item)"
                        :key="item[optionValue]"
                        class="flex w-full min-w-full cursor-pointer items-center justify-start border-t border-gray-50 px-4 py-3 text-sm leading-4 font-normal hover:bg-[rgba(0,0,0,.03)]"
                    >
                        <div class="mr-2 -ml-2 h-4 w-4 rounded border" :class="isSelected(item) ? 'bg-primary' : 'bg-white'"></div>
                        {{ item[optionText] }}
                    </li>
                </ul>
            </div>
        </div>
        <InputError :message="form.errors[field]" />
    </div>
</template>
