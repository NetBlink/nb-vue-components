<script setup lang="ts">
interface TrCollapseProps {
    collapse_id?: string;
}
defineProps<TrCollapseProps>();
</script>
<template>
    <tr>
        <td colspan="999">
            <div :id="collapse_id" class="!visible hidden" data-te-collapse-item>
                <slot />
            </div>
        </td>
    </tr>
</template>
