/**
 * Form integration composable
 */

import { computed, type ComputedRef } from 'vue';
import type { InertiaForm, UseFormIntegrationReturn } from '../components/Forms/types';

export function useFormIntegration(
    form: InertiaForm | undefined,
    field: string | undefined,
    error: string | undefined
): UseFormIntegrationReturn {
    const hasFormErrors = computed<boolean>(() => {
        return !!(error || (form?.errors && field && form.errors[field]));
    });

    const formError = computed<string | null>(() => {
        if (error) return error;
        if (form?.errors && field && form.errors[field]) {
            return form.errors[field];
        }
        return null;
    });

    const updateFormValue = (value: any) => {
        if (form && field) {
            form[field] = value;
        }
    };

    return {
        hasFormErrors,
        formError,
        updateFormValue
    };
}
