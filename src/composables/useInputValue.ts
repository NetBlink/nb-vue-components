/**
 * Input value management composable
 */

import { ref, watch, onMounted, type Ref } from 'vue';
import type { InertiaForm, InputChangeEvent, UseInputValueReturn } from '../components/Forms/types';

export function useInputValue(
    field: string | undefined,
    form: InertiaForm | undefined,
    modelValue: Ref<any>,
    emit: (event: 'changed' | 'update:modelValue', ...args: any[]) => void
): UseInputValueReturn {
    const value = ref<any>();
    const prevValue = ref<any>();
    const noForm = ref<boolean>(false);
    const isSettingSilently = ref<boolean>(false);

    onMounted(() => {
        noForm.value = !form;
        value.value = noForm.value ? modelValue.value : (form && field ? form[field] : null);
    });

    watch(
        () => value.value,
        (val, oldval) => {
            if (val === oldval) return;
            
            if (noForm.value) {
                modelValue.value = val;
            } else {
                if (form && field) {
                    form[field] = val;
                }
            }
            
            prevValue.value = oldval;
            emit('update:modelValue', val);

            if (isSettingSilently.value) {
                isSettingSilently.value = false;
                return;
            }
            
            const changeEvent: InputChangeEvent = { 
                value: val, 
                old_value: oldval 
            };
            emit('changed', changeEvent);
        }
    );

    watch(
        () => (field && form ? form[field] : null),
        (val) => {
            value.value = noForm.value ? modelValue.value : val;
        },
        { deep: true }
    );

    watch(
        () => modelValue.value,
        (val) => {
            value.value = val;
        }
    );

    const setValueSilently = (val: any) => {
        isSettingSilently.value = true;
        value.value = val;
    };

    const getPreviousValue = () => {
        return prevValue.value;
    };

    return {
        value,
        prevValue,
        noForm,
        setValueSilently,
        getPreviousValue
    };
}
