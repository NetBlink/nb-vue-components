import {
    faChevronDown,
    faTimes,
    faCheckCircle,
    faTimesCircle,
    faExclamationTriangle,
    faInfoCircle,
    faSearch,
    faEye,
    faEyeSlash,
    faCircleQuestion,
    faPencil,
    faPenRuler,
    faPersonDigging,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { AliasName, IconLike, IconSet } from '../types';

/**
 * Drop-in alias preset that reproduces the v2.x visual: every internal alias
 * maps to its previous FontAwesome icon. Pair with `faSet` so `<NbIcon name="fa:home" />`
 * and `<NbIcon :name="faAnything" />` both work.
 */
export const faAliasPreset: Record<AliasName, IconLike> = {
    $expand: faChevronDown,
    $close: faTimes,
    $success: faCheckCircle,
    $error: faTimesCircle,
    $warning: faExclamationTriangle,
    $info: faInfoCircle,
    $search: faSearch,
    $eye: faEye,
    '$eye-off': faEyeSlash,
    $help: faCircleQuestion,
    $edit: faPencil,
    '$edit-alt': faPenRuler,
    $construction: faPersonDigging,
    $whatsapp: faWhatsapp,
};

/**
 * `<NbIcon name="fa:foo" />` routes to FontAwesomeIcon with `icon="foo"`. The user
 * is responsible for ensuring the icon is in FA's library (`library.add(...)`)
 * if they use the string form.
 */
export const faSet: IconSet = {
    component: FontAwesomeIcon,
};
