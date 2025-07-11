/**
 * Input utilities composable
 */

import { computed, type ComputedRef } from 'vue';

export function useInputUtils() {
    /**
     * Convert snake_case or kebab-case to Title Case
     */
    const ucwords = (text: string): string => {
        if (!text) return '';
        
        return text
            .split('_')
            .join(' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    /**
     * Generate a computed label from field name if no label provided
     */
    const getComputedLabel = (
        label: string | undefined,
        field: string | undefined
    ): ComputedRef<string> => {
        return computed(() => {
            if (label) return label;
            if (field) return ucwords(field);
            return '';
        });
    };

    /**
     * Generate computed name attribute
     */
    const getComputedName = (
        name: string | undefined,
        field: string | undefined
    ): ComputedRef<string> => {
        return computed(() => name ?? field ?? '');
    };

    /**
     * Generate computed autocomplete attribute
     */
    const getComputedAutocomplete = (
        autocomplete: string | null | undefined,
        field: string | undefined
    ): ComputedRef<string> => {
        return computed(() => autocomplete ?? field ?? '');
    };

    /**
     * Check if input type is a delegated type (handled by other components)
     */
    const isDelegatedType = (type: string | undefined): boolean => {
        const delegatedTypes = ['textarea', 'switch', 'checkbox'];
        return delegatedTypes.includes(type || '');
    };

    /**
     * Check if input type supports password toggle
     */
    const isPasswordType = (type: string | undefined): boolean => {
        return type === 'password';
    };

    /**
     * Check if input type is a select
     */
    const isSelectType = (type: string | undefined): boolean => {
        return type === 'select';
    };

    return {
        ucwords,
        getComputedLabel,
        getComputedName,
        getComputedAutocomplete,
        isDelegatedType,
        isPasswordType,
        isSelectType
    };
}
