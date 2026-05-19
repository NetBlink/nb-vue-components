import { createApp } from 'vue';
import DocsApp from './DocsApp.vue';
import '../main.css';

// Icon provider system ───────────────────────────────────────────────────────
//
// This file is the canonical "real-world" wiring a consumer would mirror:
// install the icon libraries you want, import only the specific icons you use,
// and pass them to createNbIcons.
//
// We register four providers here only because the IconsDoc page needs to flip
// between them live — a normal app would pick one.
//
// Iconify icons are registered PER-ICON via `addIcon` (tree-shakable, ~200B
// each) rather than `addCollection(...)` (which would pull every icon of every
// set — ~15MB extra in the dev build). The IconsDoc page documents both
// approaches.

import { createNbIcons } from '../icons';
import { faAliasPreset, faSet } from '../icons/presets/fa';

import { Icon as IconifyIcon, addIcon } from '@iconify/vue';

// --- Heroicons (per-icon imports) ---
import heroChevronDown      from '@iconify-icons/heroicons/chevron-down';
import heroXMark            from '@iconify-icons/heroicons/x-mark';
import heroCheckCircle      from '@iconify-icons/heroicons/check-circle';
import heroXCircle          from '@iconify-icons/heroicons/x-circle';
import heroExclamation      from '@iconify-icons/heroicons/exclamation-triangle';
import heroInfoCircle       from '@iconify-icons/heroicons/information-circle';
import heroMagnifier        from '@iconify-icons/heroicons/magnifying-glass';
import heroEye              from '@iconify-icons/heroicons/eye';
import heroEyeSlash         from '@iconify-icons/heroicons/eye-slash';
import heroQuestion         from '@iconify-icons/heroicons/question-mark-circle';
import heroPencil           from '@iconify-icons/heroicons/pencil';
import heroPencilSquare     from '@iconify-icons/heroicons/pencil-square';
import heroWrench           from '@iconify-icons/heroicons/wrench-screwdriver';
import heroSun              from '@iconify-icons/heroicons/sun';
import heroMoon             from '@iconify-icons/heroicons/moon';

addIcon('heroicons:chevron-down',         heroChevronDown);
addIcon('heroicons:x-mark',               heroXMark);
addIcon('heroicons:check-circle',         heroCheckCircle);
addIcon('heroicons:x-circle',             heroXCircle);
addIcon('heroicons:exclamation-triangle', heroExclamation);
addIcon('heroicons:information-circle',   heroInfoCircle);
addIcon('heroicons:magnifying-glass',     heroMagnifier);
addIcon('heroicons:eye',                  heroEye);
addIcon('heroicons:eye-slash',            heroEyeSlash);
addIcon('heroicons:question-mark-circle', heroQuestion);
addIcon('heroicons:pencil',               heroPencil);
addIcon('heroicons:pencil-square',        heroPencilSquare);
addIcon('heroicons:wrench-screwdriver',   heroWrench);
addIcon('heroicons:sun',                  heroSun);
addIcon('heroicons:moon',                 heroMoon);

// --- Material Symbols ---
import matExpandMore        from '@iconify-icons/material-symbols/expand-more';
import matClose             from '@iconify-icons/material-symbols/close';
import matCheckCircle       from '@iconify-icons/material-symbols/check-circle';
import matCancel            from '@iconify-icons/material-symbols/cancel';
import matWarning           from '@iconify-icons/material-symbols/warning';
import matInfo              from '@iconify-icons/material-symbols/info';
import matSearch            from '@iconify-icons/material-symbols/search';
import matVisibility        from '@iconify-icons/material-symbols/visibility';
import matVisibilityOff     from '@iconify-icons/material-symbols/visibility-off';
import matHelp              from '@iconify-icons/material-symbols/help';
import matEdit              from '@iconify-icons/material-symbols/edit';
import matEditNote          from '@iconify-icons/material-symbols/edit-note';
import matConstruction      from '@iconify-icons/material-symbols/construction';
import matLightMode         from '@iconify-icons/material-symbols/light-mode';
import matDarkMode          from '@iconify-icons/material-symbols/dark-mode';

addIcon('material-symbols:expand-more',     matExpandMore);
addIcon('material-symbols:close',           matClose);
addIcon('material-symbols:check-circle',    matCheckCircle);
addIcon('material-symbols:cancel',          matCancel);
addIcon('material-symbols:warning',         matWarning);
addIcon('material-symbols:info',            matInfo);
addIcon('material-symbols:search',          matSearch);
addIcon('material-symbols:visibility',      matVisibility);
addIcon('material-symbols:visibility-off',  matVisibilityOff);
addIcon('material-symbols:help',            matHelp);
addIcon('material-symbols:edit',            matEdit);
addIcon('material-symbols:edit-note',       matEditNote);
addIcon('material-symbols:construction',    matConstruction);
addIcon('material-symbols:light-mode',      matLightMode);
addIcon('material-symbols:dark-mode',       matDarkMode);

// --- Solar ---
import solArrowDown         from '@iconify-icons/solar/alt-arrow-down-linear';
import solCloseCircle       from '@iconify-icons/solar/close-circle-linear';
import solCheckCircle       from '@iconify-icons/solar/check-circle-linear';
import solCloseSquare       from '@iconify-icons/solar/close-square-linear';
import solDanger            from '@iconify-icons/solar/danger-triangle-linear';
import solInfoCircle        from '@iconify-icons/solar/info-circle-linear';
import solMagnifier         from '@iconify-icons/solar/magnifer-linear';
import solEye               from '@iconify-icons/solar/eye-linear';
import solEyeClosed         from '@iconify-icons/solar/eye-closed-linear';
import solQuestion          from '@iconify-icons/solar/question-circle-linear';
import solPen               from '@iconify-icons/solar/pen-linear';
import solPenNew            from '@iconify-icons/solar/pen-new-square-linear';
import solWrench            from '@iconify-icons/solar/sledgehammer-linear';
import solSun               from '@iconify-icons/solar/sun-linear';
import solMoon              from '@iconify-icons/solar/moon-linear';

addIcon('solar:alt-arrow-down-linear', solArrowDown);
addIcon('solar:close-circle-linear',   solCloseCircle);
addIcon('solar:check-circle-linear',   solCheckCircle);
addIcon('solar:close-square-linear',   solCloseSquare);
addIcon('solar:danger-triangle-linear', solDanger);
addIcon('solar:info-circle-linear',    solInfoCircle);
addIcon('solar:magnifer-linear',       solMagnifier);
addIcon('solar:eye-linear',            solEye);
addIcon('solar:eye-closed-linear',     solEyeClosed);
addIcon('solar:question-circle-linear', solQuestion);
addIcon('solar:pen-linear',            solPen);
addIcon('solar:pen-new-square-linear', solPenNew);
addIcon('solar:sledgehammer-linear',   solWrench);
addIcon('solar:sun-linear',            solSun);
addIcon('solar:moon-linear',           solMoon);

// One Iconify set definition reused for all three Iconify-backed providers.
const iconifySet = (prefix) => ({
    component: IconifyIcon,
    resolve: (name) => `${prefix}:${name}`,
});

const app = createApp(DocsApp);

app.use(
    createNbIcons({
        aliases: faAliasPreset,
        sets: {
            fa: faSet,
            heroicons: iconifySet('heroicons'),
            'material-symbols': iconifySet('material-symbols'),
            solar: iconifySet('solar'),
        },
        defaultSet: 'fa',
    })
);

app.mount('#app');
