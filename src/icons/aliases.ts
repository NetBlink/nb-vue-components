import type { AliasName, IconLike } from './types';
import Expand from './svg/Expand.vue';
import Close from './svg/Close.vue';
import Success from './svg/Success.vue';
import ErrorIcon from './svg/ErrorIcon.vue';
import Warning from './svg/Warning.vue';
import Info from './svg/Info.vue';
import Search from './svg/Search.vue';
import Eye from './svg/Eye.vue';
import EyeOff from './svg/EyeOff.vue';
import Help from './svg/Help.vue';
import Edit from './svg/Edit.vue';
import EditAlt from './svg/EditAlt.vue';
import Construction from './svg/Construction.vue';
import Sun from './svg/Sun.vue';
import Moon from './svg/Moon.vue';

/**
 * Built-in alias defaults. `$whatsapp` intentionally has no default — users
 * who consume the components that reference it must map it explicitly via
 * `createNbIcons({ aliases: { $whatsapp: … } })`.
 */
export const defaultAliases: Record<AliasName, IconLike> = {
    $expand: Expand,
    $close: Close,
    $success: Success,
    $error: ErrorIcon,
    $warning: Warning,
    $info: Info,
    $search: Search,
    $eye: Eye,
    '$eye-off': EyeOff,
    $help: Help,
    $edit: Edit,
    '$edit-alt': EditAlt,
    $construction: Construction,
    $sun: Sun,
    $moon: Moon,
    // Brand icons have no default — see spec §5.
    $whatsapp: undefined as unknown as IconLike,
};
