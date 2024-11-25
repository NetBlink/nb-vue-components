<script setup>
const emit = defineEmits();

const props = defineProps({
    stats: Object,
    statusName: {
        type: String,
        default: null,
    },
    customContainerClass: {
        type: String,
        default: '',
    },
    customStatClass: {
        type: String,
        default: '',
    },
    customStatLabelClass: {
        type: String,
        default: '',
    },
    customStatValueClass: {
        type: String,
        default: '',
    },
});

const onClick = (status) => {
    if (ifSelected(status)) {
        status = null;
    }
    emit('updateSearch', status);
};

const ifSelected = (status) => {
    if (props.statusName != null) {
        return route().params[props.statusName] == status;
    }
    return route().params.status == status;
};
</script>

<template>
    <div>
        <div class="flex flex-wrap gap-2 lg:flex-nowrap" :class="{ [customContainerClass]: customContainerClass }">
            <div
                v-for="s in stats"
                class="flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow"
                :class="{
                    'border-primary bg-primary-50 shadow-primary-50': ifSelected(s.name),
                    [customStatClass]: customStatClass,
                }"
                @click="onClick(s.name)"
                :key="s.value"
            >
                <div>
                    <div class="h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2">
                        <h5 class="text-xl font-medium leading-tight text-neutral-800" :class="{ [customStatValueClass]: customStatValueClass }">
                            {{ s.value }}
                        </h5>
                    </div>
                </div>
                <div class="flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2" :class="{ [customStatLabelClass]: customStatLabelClass }">
                    {{ s.label ?? s.name }}
                </div>
            </div>
        </div>
    </div>
</template>
