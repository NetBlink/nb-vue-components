/**
 * Password toggle composable
 */

import { ref, type Ref } from 'vue';
import type { UsePasswordToggleReturn } from '../components/Forms/types';

export function usePasswordToggle(
    initialType: string = 'password'
): UsePasswordToggleReturn {
    const displayType = ref<string>(initialType);

    const togglePassword = () => {
        displayType.value = displayType.value === 'password' ? 'text' : 'password';
    };

    return {
        displayType,
        togglePassword
    };
}
