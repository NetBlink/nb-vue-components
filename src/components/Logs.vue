<script setup lang="ts">
/**
 * Logs - activity timeline wrapped in a collapsible section.
 *
 * @prop {string}  header - heading text in the section header bar
 * @prop {Object}  logs - Laravel-style paginated result `{ total, data[], links? }`
 * @prop {boolean} open - start expanded
 * @part root - the `CollapsableSection` card
 */
import { LogsContent, CollapsibleSection } from '../index';
import type { NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface LogsProps {
    /** Heading text in the section header bar */
    header?: string;
    /** Laravel-style paginated result `{ total, data[], links? }` */
    logs?: Record<string, any>;
    /** Start expanded */
    open?: boolean;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Logs']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<LogsProps>(), {
    header: 'Logs',
    open: false,
});

const { cls, attrs } = useUi('Logs', props);
</script>
<template>
    <CollapsibleSection v-bind="attrs()" :motion="motion" :class="cls('root')" :header="header" :open="open">
        <LogsContent :logs="logs" />
    </CollapsibleSection>
</template>
