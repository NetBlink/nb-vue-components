export type SetKey = 'fa' | 'hero' | 'material' | 'solar';

export interface SetConfig {
    /** Friendly name. */
    label: string;
    /** The preset import line for the entry file. */
    importLine: string;
    /** The `createNbIcons({...})` call registering the preset. */
    call: string;
    /** Hint shown in the CLI summary so the user knows what peer deps to install. */
    installCmd: string;
}

export const ICONS_IMPORT = "import { createNbIcons } from '@netblink/vue-components/icons';";

export const SET_CONFIGS: Record<SetKey, SetConfig> = {
    fa: {
        label: 'FontAwesome',
        importLine: "import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';",
        call: "createNbIcons({ aliases: faAliasPreset, sets: { fa: faSet }, defaultSet: 'fa' })",
        installCmd:
            'npm install @fortawesome/vue-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons',
    },
    hero: {
        label: 'Heroicons',
        importLine: "import { heroiconsAliasPreset, heroiconsSet } from '@netblink/vue-components/icons/heroicons';",
        call: 'createNbIcons({ aliases: heroiconsAliasPreset, sets: { heroicons: heroiconsSet } })',
        installCmd: 'npm install @iconify/vue @iconify-json/heroicons',
    },
    material: {
        label: 'Google Material Symbols',
        importLine: "import { materialAliasPreset, materialSet } from '@netblink/vue-components/icons/material';",
        call: "createNbIcons({ aliases: materialAliasPreset, sets: { 'material-symbols': materialSet } })",
        installCmd: 'npm install @iconify/vue @iconify-json/material-symbols',
    },
    solar: {
        label: 'Solar',
        importLine: "import { solarAliasPreset, solarSet } from '@netblink/vue-components/icons/solar';",
        call: 'createNbIcons({ aliases: solarAliasPreset, sets: { solar: solarSet } })',
        installCmd: 'npm install @iconify/vue @iconify-json/solar',
    },
};

/** Aliases the FA preset maps (3.0.1). */
export const FA_ALIASES = [
    'expand', 'close', 'success', 'error', 'warning', 'info', 'search', 'eye', 'eye-off',
    'help', 'edit', 'edit-alt', 'construction', 'sun', 'moon', 'whatsapp',
];

/** FA packages the FA preset needs, with the library's peer ranges. */
export const FA_PEERS: Record<string, string> = {
    '@fortawesome/fontawesome-svg-core': '^6.4.0',
    '@fortawesome/free-brands-svg-icons': '^6.4.0',
    '@fortawesome/free-regular-svg-icons': '^6.4.0',
    '@fortawesome/free-solid-svg-icons': '^6.4.0',
    '@fortawesome/vue-fontawesome': '^3.0.3',
};
