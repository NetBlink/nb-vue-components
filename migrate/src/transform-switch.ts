import fs from 'node:fs/promises';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
import MagicString from 'magic-string';

const traverse = ((_traverse as any).default ?? _traverse) as typeof _traverse;

export type SetKey = 'fa' | 'hero' | 'material' | 'solar';

interface SetConfig {
    /** Single line: the import statement we want in the entry file. */
    importLine: string;
    /** Multi-line: the app.use(createNbIcons({...})) call. `${app}` is the Vue app variable. */
    useBlock: (appVar: string) => string;
    /** Hint shown in the CLI summary so the user knows what peer deps to install. */
    installCmd: string;
    /** Friendly name. */
    label: string;
}

export const SET_CONFIGS: Record<SetKey, SetConfig> = {
    fa: {
        label: 'FontAwesome',
        importLine: "import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';",
        useBlock: (app) =>
            `${app}.use(createNbIcons({
    aliases: faAliasPreset,
    sets: { fa: faSet },
    defaultSet: 'fa',
}));`,
        installCmd:
            'npm install @fortawesome/vue-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons',
    },
    hero: {
        label: 'Heroicons',
        importLine:
            "import { heroiconsAliasPreset, heroiconsSet } from '@netblink/vue-components/icons/heroicons';",
        useBlock: (app) =>
            `${app}.use(createNbIcons({
    aliases: heroiconsAliasPreset,
    sets: { heroicons: heroiconsSet },
}));`,
        installCmd: 'npm install @iconify/vue @iconify-json/heroicons',
    },
    material: {
        label: 'Google Material Symbols',
        importLine:
            "import { materialAliasPreset, materialSet } from '@netblink/vue-components/icons/material';",
        useBlock: (app) =>
            `${app}.use(createNbIcons({
    aliases: materialAliasPreset,
    sets: { 'material-symbols': materialSet },
}));`,
        installCmd: 'npm install @iconify/vue @iconify-json/material-symbols',
    },
    solar: {
        label: 'Solar',
        importLine: "import { solarAliasPreset, solarSet } from '@netblink/vue-components/icons/solar';",
        useBlock: (app) =>
            `${app}.use(createNbIcons({
    aliases: solarAliasPreset,
    sets: { solar: solarSet },
}));`,
        installCmd: 'npm install @iconify/vue @iconify-json/solar',
    },
};

const PRESET_IMPORT_RE = /@netblink\/vue-components\/icons\/(?:fa|heroicons|material|solar)$/;

interface Options {
    file: string;
    dryRun: boolean;
    target: SetKey;
}

interface SwitchResult {
    changed: boolean;
    appVar: string | null;
}

/**
 * Rewrite an existing `createNbIcons({...})` call in the entry file to use a
 * different preset. Replaces all preset imports + every app.use(createNbIcons(...))
 * call with the chosen target preset's wiring.
 *
 * If no existing createNbIcons setup is found, throws — switch presumes the
 * project has already been migrated by `nb-vue-components-migrate` (without
 * sub-command).
 */
export async function transformSwitch(opts: Options): Promise<SwitchResult> {
    const source = await fs.readFile(opts.file, 'utf8');
    const config = SET_CONFIGS[opts.target];

    const ast = parse(source, { sourceType: 'module', plugins: ['typescript'] });

    const importRanges: { start: number; end: number }[] = [];
    const useCallRanges: { start: number; end: number; appVar: string }[] = [];
    let hasCreateNbIconsImport = false;
    let createNbIconsImportEnd = -1;

    traverse(ast, {
        ImportDeclaration(path) {
            const src = path.node.source.value;
            if (PRESET_IMPORT_RE.test(src)) {
                importRanges.push({ start: path.node.start ?? 0, end: path.node.end ?? 0 });
            }
            if (src === '@netblink/vue-components/icons') {
                hasCreateNbIconsImport = true;
                createNbIconsImportEnd = path.node.end ?? -1;
            }
        },
        ExpressionStatement(path) {
            const expr = path.node.expression;
            if (
                expr.type === 'CallExpression' &&
                expr.callee.type === 'MemberExpression' &&
                expr.callee.property.type === 'Identifier' &&
                expr.callee.property.name === 'use' &&
                expr.callee.object.type === 'Identifier' &&
                expr.arguments.length === 1 &&
                expr.arguments[0].type === 'CallExpression' &&
                expr.arguments[0].callee.type === 'Identifier' &&
                expr.arguments[0].callee.name === 'createNbIcons'
            ) {
                useCallRanges.push({
                    start: path.node.start ?? 0,
                    end: path.node.end ?? 0,
                    appVar: expr.callee.object.name,
                });
            }
        },
    });

    if (useCallRanges.length === 0) {
        throw new Error(
            'No `app.use(createNbIcons(...))` call found in the entry file. Run `nb-vue-components-migrate` (without arguments) first to set up the icon provider.'
        );
    }

    const appVar = useCallRanges[0].appVar;
    const ms = new MagicString(source);

    // 1) Drop every existing preset import.
    for (const range of importRanges) {
        const end = source[range.end] === '\n' ? range.end + 1 : range.end;
        ms.remove(range.start, end);
    }

    // 2) Replace the FIRST createNbIcons call in place; remove any duplicates.
    //    Replacing in-place preserves source ordering so the icon provider is
    //    still registered before app.mount().
    const [first, ...rest] = useCallRanges;
    ms.overwrite(first.start, first.end, config.useBlock(appVar));
    for (const range of rest) {
        const end = source[range.end] === '\n' ? range.end + 1 : range.end;
        ms.remove(range.start, end);
    }

    // 3) Insert the new import. Place it right after the createNbIcons import
    //    (the one from '@netblink/vue-components/icons'). If there isn't one,
    //    insert at the top of the file.
    const importInsertAt = hasCreateNbIconsImport && createNbIconsImportEnd > 0 ? createNbIconsImportEnd : 0;
    ms.appendRight(importInsertAt, `\n${config.importLine}`);

    if (!opts.dryRun) await fs.writeFile(opts.file, ms.toString(), 'utf8');

    return { changed: true, appVar };
}
