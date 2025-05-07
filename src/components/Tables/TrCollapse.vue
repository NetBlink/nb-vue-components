<script setup>
defineProps({
    collapse_id: {
        type: String,
        default: 'collapse',
    },
});
</script>
<template>
    <tr>
        <td colspan="999">
            <div :id="collapse_id" class="visible! hidden" data-te-collapse-item>
                <slot />
            </div>
        </td>
    </tr>
</template>
