<script setup>
/**
 * Logs - activity timeline wrapped in a collapsible section.
 *
 * @prop {string}  header - heading text in the section header bar
 * @prop {Object}  logs - Laravel-style paginated result `{ total, data[], links? }`
 * @prop {boolean} open - start expanded
 * @part root - the `CollapsableSection` card
 */
import { LogsContent, CollapsibleSection } from '../index';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

const props = defineProps({
    header: { default: 'Logs' },
    logs: Object,
    open: { type: Boolean, default: false },
    /** Classes per part, merged over the defaults */
    ui: {
        type: /** @type {import('vue').PropType<import('../ui/parts').UiProp<import('../ui/parts').NbParts['Logs']>>} */ (Object),
        default: undefined,
    },
});

const { cls, attrs } = useUi('Logs', props);
</script>
<template>
    <CollapsibleSection v-bind="attrs()" :class="cls('root')" :header="header" :open="open">
        <LogsContent :logs="logs" />
    </CollapsibleSection>
</template>
