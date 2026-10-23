import fs from 'node:fs/promises';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
import MagicString from 'magic-string';

const traverse = ((_traverse as any).default ?? _traverse) as typeof _traverse;

interface Options {
    file: string;
    dryRun: boolean;
    summary: { manualReviewItems: { file: string; line: number; reason: string }[] };
}

const PRESET_IMPORT = `import { createNbIcons } from '@netblink/vue-components/icons';
import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';`;

const PRESET_USE = `
app.use(createNbIcons({
    aliases: faAliasPreset,
    sets: { fa: faSet },
    defaultSet: 'fa',
}));`;

/**
 * Inject the createNbIcons FA preset into the entry file.
 * Returns true if the file was changed (or would be changed in dry-run).
 *
 * Idempotent: if `createNbIcons` is already imported, do nothing.
 */
export async function transformEntry(opts: Options): Promise<boolean> {
    const source = await fs.readFile(opts.file, 'utf8');
    if (source.includes('createNbIcons')) return false; // already migrated

    const ast = parse(source, { sourceType: 'module', plugins: ['typescript'] });

    let nbImportEnd = -1;
    let appUseCallEnd = -1;
    let appVarName: string | null = null;

    traverse(ast, {
        ImportDeclaration(path) {
            if (path.node.source.value === '@netblink/vue-components') {
                nbImportEnd = path.node.end ?? -1;
            }
        },
        CallExpression(path) {
            const callee = path.node.callee;
            if (
                callee.type === 'MemberExpression' &&
                callee.property.type === 'Identifier' &&
                callee.property.name === 'use' &&
                callee.object.type === 'Identifier'
            ) {
                const args = path.node.arguments;
                if (
                    args.length === 1 &&
                    args[0].type === 'Identifier' &&
                    /^Nb/i.test(args[0].name) // NbVueComponents or similar
                ) {
                    appUseCallEnd = path.node.end ?? -1;
                    appVarName = callee.object.name;
                }
            }
        },
    });

    if (nbImportEnd < 0 || appUseCallEnd < 0 || !appVarName) {
        opts.summary.manualReviewItems.push({
            file: opts.file,
            line: 1,
            reason: 'Could not locate `app.use(NbVueComponents)` to inject createNbIcons. Add the snippet manually.',
        });
        return false;
    }

    const ms = new MagicString(source);
    // Insert the import right after the last @netblink/vue-components import.
    ms.appendRight(nbImportEnd, `\n${PRESET_IMPORT}`);
    // Insert the app.use() call right after the existing app.use(NbVueComponents) statement.
    // We need to include the trailing semicolon if present, so look ahead one character.
    const afterCall = source[appUseCallEnd] === ';' ? appUseCallEnd + 1 : appUseCallEnd;
    const useBlock = PRESET_USE.replace(/\napp\.use/g, `\n${appVarName}.use`);
    ms.appendRight(afterCall, useBlock);

    if (!opts.dryRun) {
        await fs.writeFile(opts.file, ms.toString(), 'utf8');
    }
    return true;
}
