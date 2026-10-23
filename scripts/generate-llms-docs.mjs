#!/usr/bin/env node
/**
 * Generates the AI-facing documentation (llms.txt + llms-full.txt) by parsing
 * the component sources, so the reference can never drift from the code.
 *
 * Run: npm run nb:docs:llms (library maintainers only)
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, basename, dirname } from 'node:path';
import { mkdirSync } from 'node:fs';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const COMPONENTS = join(ROOT, 'src/components');
const BLOCKS = join(ROOT, 'src/docs/Blocks');
const META_OUT = join(ROOT, 'src/docs/generated/component-meta.json');

// ---------------------------------------------------------------- utilities

const walk = (dir) =>
    readdirSync(dir).flatMap((entry) => {
        const full = join(dir, entry);
        return statSync(full).isDirectory() ? walk(full) : [full];
    });

/** Strip the leading `*` gutter from a JSDoc/block comment body. */
const cleanComment = (raw) =>
    raw
        .split('\n')
        .map((l) => l.replace(/^\s*\*ن?/, '').replace(/^\s*\*/, '').trim())
        .filter((l) => !l.startsWith('@'))
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();

// --------------------------------------------------------------- extraction

/** The first block comment in <script setup> is the component description. */
function extractDescription(src) {
    const m = src.match(/<script[^>]*>\s*\/\*\*([\s\S]*?)\*\//);
    if (!m) return '';
    const body = m[1]
        .split('\n')
        .map((l) => l.replace(/^\s*\*?/, '').trim())
        .filter((l) => !l.startsWith('@'))
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
    // Drop only a leading "Name - " restatement (separator required). Forms like
    // "Submit Button component with loading state" read fine and are left alone.
    return body.replace(/^[A-Z][\w\s]*?\s*[-–—:]\s+/, '').trim();
}

/**
 * `interface XProps { /** doc *\/ name?: type; }`, the modern style used by
 * 46 of the components.
 */
function parseInterfaceProps(src) {
    const iface = src.match(/interface\s+\w*Props\s*\{([\s\S]*?)\n\}/);
    if (!iface) return [];
    const body = iface[1];
    const props = [];
    // Split on entries, keeping any preceding block comment attached.
    const re = /(?:\/\*\*([\s\S]*?)\*\/\s*)?(?:\/\/\s*(.*)\n\s*)?(\w+)(\?)?\s*:\s*([^;\n]+);/g;
    let m;
    while ((m = re.exec(body))) {
        const [, block, line, name, optional, type] = m;
        props.push({
            name,
            type: type.trim(),
            required: !optional,
            description: block ? cleanComment(block) : (line || '').trim(),
        });
    }
    return props;
}

/** `defineProps({ name: { type: X, default: Y } })`, the 10 older components. */
function parseObjectProps(src) {
    const block = src.match(/defineProps\(\{([\s\S]*?)\n\}\)/);
    if (!block) return [];
    const props = [];
    const re = /(?:\/\*\*([\s\S]*?)\*\/\s*)?(\w+)\s*:\s*\{([\s\S]*?)\n\s{4}\}/g;
    let m;
    while ((m = re.exec(block[1]))) {
        const [, doc, name, body] = m;
        // `ui: { type: /** @type {PropType<UiProp<...>>} */ (Object) }` - report the shape, not the cast.
        const type = name === 'ui' ? 'UiProp' : (body.match(/type:\s*([^,\n]+)/) || [])[1] || 'unknown';
        const def = (body.match(/default:\s*([^,\n]+)/) || [])[1];
        const required = /required:\s*true/.test(body);
        props.push({
            name,
            type: type.trim().replace(/\[|\]/g, ''),
            required,
            default: def ? def.trim() : undefined,
            description: doc ? cleanComment(doc) : '',
        });
    }
    return props;
}

/** Defaults declared via `withDefaults(..., { name: value })`. */
function parseDefaults(src) {
    const m = src.match(/withDefaults\([\s\S]*?,\s*\{([\s\S]*?)\n\}\s*\)/);
    if (!m) return {};
    const out = {};
    const re = /^\s{4}(\w+)\s*:\s*(.+?),?\s*$/gm;
    let d;
    while ((d = re.exec(m[1]))) out[d[1]] = d[2].replace(/,$/, '').trim();
    return out;
}

/** JSDoc `@prop {type} name - description` lines, used as a description fallback. */
function parseJsdocProps(src) {
    const out = {};
    // `[name=default]` and bare `name` forms; the bracket group must not be
    // greedy or it swallows the description that follows the dash.
    const re = /@prop\s*\{([^}]*)\}\s*(?:\[(\w+)[^\]]*\]|(\w+))\s*-?\s*(.*)/g;
    let m;
    while ((m = re.exec(src))) {
        const name = m[2] || m[3];
        out[name] = { type: m[1].trim(), description: (m[4] || '').trim() };
    }
    return out;
}

function parseSlots(src) {
    const named = new Set();
    for (const m of src.matchAll(/<slot\s+name="([^"]+)"/g)) named.add(m[1]);
    for (const m of src.matchAll(/\$slots\.(\w+)/g)) named.add(m[1]);
    for (const m of src.matchAll(/@slot\s+(\w+)/g)) named.add(m[1]);
    if (/<slot\s*(\/|>)/.test(src) || /<slot\s+v-/.test(src)) named.add('default');
    // Descriptions from `@slot name - text`
    const docs = {};
    for (const m of src.matchAll(/@slot\s+(\w+)\s*-\s*(.*)/g)) docs[m[1]] = m[2].trim();
    return [...named].sort().map((name) => ({ name, description: docs[name] || '' }));
}

function parseEmits(src) {
    const m = src.match(/defineEmits(?:<\{([\s\S]*?)\}>)?\(\s*(\[[\s\S]*?\])?/);
    if (!m) return [];
    const out = new Set();
    if (m[1]) for (const e of m[1].matchAll(/\(e:\s*'([^']+)'/g)) out.add(e[1]);
    if (m[2]) for (const e of m[2].matchAll(/'([^']+)'/g)) out.add(e[1]);
    return [...out];
}

/** `@part name - description` lines: the parts `:ui` accepts. */
function parseParts(src) {
    return [...src.matchAll(/@part\s+(\w+)\s*-\s*(.*)/g)].map((m) => ({ name: m[1], description: m[2].trim() }));
}

/** `@motion level - description` lines (`all` describes every level). */
function parseMotion(src) {
    return [...src.matchAll(/@motion\s+(off|simple|smooth|fancy|all)\s*-\s*(.*)/g)].map((m) => ({ level: m[1], description: m[2].trim() }));
}

/** The registry in src/ui/parts.ts, component name to part names. */
function parsePartsRegistry() {
    const src = readFileSync(join(ROOT, 'src/ui/parts.ts'), 'utf8');
    const body = src.slice(src.indexOf('export interface NbParts {'), src.indexOf('export type NbComponentName'));
    const out = {};
    for (const m of body.matchAll(/(\w+):\s*((?:\s*\|?\s*'\w+')+);/g)) out[m[1]] = [...m[2].matchAll(/'(\w+)'/g)].map((p) => p[1]);
    return out;
}

/** The part that receives `class`: the `classPart` passed to useUi, else root. */
function parseClassPart(src) {
    const m = src.match(/useUi\(\s*'\w+'[^)]*classPart:\s*'(\w+)'/);
    return m ? m[1] : 'root';
}

function parseModel(src) {
    const out = [];
    for (const m of src.matchAll(/defineModel(?:<[^>]*>)?\(\s*(?:'([^']+)')?/g)) out.push(m[1] || 'modelValue');
    return out;
}

// ------------------------------------------------------------------ collect

const EXCLUDE = new Set(['index.js']);
const files = walk(COMPONENTS).filter((f) => f.endsWith('.vue') && !EXCLUDE.has(basename(f)));

const components = files
    .map((file) => {
        const src = readFileSync(file, 'utf8');
        const name = basename(file, '.vue');
        const jsdoc = parseJsdocProps(src);
        const defaults = parseDefaults(src);
        let props = parseInterfaceProps(src);
        if (!props.length) props = parseObjectProps(src);
        props = props.map((p) => ({
            ...p,
            default: p.default ?? defaults[p.name],
            description: p.description || jsdoc[p.name]?.description || '',
        }));
        return {
            name,
            path: relative(ROOT, file),
            description: extractDescription(src),
            props,
            slots: parseSlots(src),
            emits: parseEmits(src),
            models: parseModel(src),
            uiName: (src.match(/useUi\(\s*'(\w+)'/) || [])[1],
            parts: parseParts(src),
            classPart: parseClassPart(src),
            motion: parseMotion(src),
        };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

// The H2 helper lives outside src/components but is exported like the rest.
{
    const file = join(ROOT, 'src/HelperComponents/H2.vue');
    const src = readFileSync(file, 'utf8');
    components.push({
        name: 'H2',
        path: relative(ROOT, file),
        description: extractDescription(src),
        props: parseInterfaceProps(src),
        slots: parseSlots(src),
        emits: parseEmits(src),
        models: parseModel(src),
        uiName: 'H2',
        parts: parseParts(src),
        classPart: parseClassPart(src),
        motion: parseMotion(src),
    });
    components.sort((a, b) => a.name.localeCompare(b.name));
}

// Parts tags must match the typed registry, so the docs can't drift from `:ui`.
const registry = parsePartsRegistry();
const drift = [];
for (const c of components) {
    if (!c.uiName) continue;
    const declared = (registry[c.uiName] || []).slice().sort().join(',');
    const tagged = c.parts.map((p) => p.name).sort().join(',');
    if (declared !== tagged) drift.push(`${c.name}: @part tags [${tagged}] vs NbParts [${declared}]`);
}
if (drift.length) {
    console.error('Parts drift between @part tags and src/ui/parts.ts:\n  ' + drift.join('\n  '));
    process.exit(1);
}

/** What every component without its own @motion tags does. */
const DEFAULT_MOTION = [{ level: 'all', description: 'only hover and focus colour transitions, which `off` makes instant' }];

// Exported names, so we only document the public surface.
const indexSrc = readFileSync(join(ROOT, 'src/index.ts'), 'utf8');
const exportBlock = indexSrc.slice(indexSrc.indexOf('export {'));
const exported = new Set([...exportBlock.matchAll(/\b([A-Z]\w+)\b/g)].map((m) => m[1]));
const publicComponents = components.filter((c) => exported.has(c.name));

// Blocks become the "recipes" index.
const blocks = existsSync(BLOCKS)
    ? readdirSync(BLOCKS)
          .filter((f) => f.endsWith('.vue'))
          .map((f) => {
              const src = readFileSync(join(BLOCKS, f), 'utf8');
              const title = (src.match(/<h3[^>]*>\s*([^<]+)/) || [])[1]?.replace(/&amp;/g, '&').trim() || basename(f, '.vue');
              const intro = (src.match(/<p class="mb-4 text-gray-600[^"]*">\s*([\s\S]*?)<\/p>/) || [])[1] || '';
              const clean = intro
                  .replace(/<[^>]+>/g, '')
                  .replace(/-/g, '-')
                  .replace(/&amp;/g, '&')
                  .replace(/\s+/g, ' ')
                  .trim();
              const used = [...new Set([...src.matchAll(/<([A-Z]\w+)/g)].map((m) => m[1]))].filter((n) => exported.has(n));
              return { file: f, title, summary: clean, used };
          })
          .sort((a, b) => a.title.localeCompare(b.title))
    : [];

// ------------------------------------------------------------------- render

const table = (rows, headers) => {
    if (!rows.length) return '';
    const lines = [`| ${headers.join(' | ')} |`, `| ${headers.map(() => '---').join(' | ')} |`];
    for (const r of rows) lines.push(`| ${r.join(' | ')} |`);
    return lines.join('\n');
};

const esc = (s = '') => String(s).replace(/\|/g, '\\|').replace(/\n/g, ' ');

function renderComponent(c) {
    const out = [`### ${c.name}`, ''];
    if (c.description) out.push(c.description, '');
    if (c.models.length) out.push(`**v-model:** ${c.models.map((m) => (m === 'modelValue' ? '`v-model`' : `\`v-model:${m}\``)).join(', ')}`, '');
    if (c.props.length) {
        out.push(
            table(
                c.props.map((p) => [
                    `\`${p.name}\``,
                    `\`${esc(p.type)}\``,
                    p.default !== undefined ? `\`${esc(p.default)}\`` : p.required ? '**required**' : '-',
                    esc(p.description),
                ]),
                ['Prop', 'Type', 'Default', 'Description']
            ),
            ''
        );
    }
    if (c.slots.length) out.push(`**Slots:** ${c.slots.map((s) => `\`${s.name}\`${s.description ? `, ${s.description}` : ''}`).join(', ')}`, '');
    if (c.emits.length) out.push(`**Emits:** ${c.emits.map((e) => `\`${e}\``).join(', ')}`, '');
    if (c.parts.length) {
        out.push(
            `**Parts** (\`:ui\` keys; \`class\` goes to \`${c.classPart}\`):`,
            '',
            table(
                c.parts.map((p) => [`\`${p.name}\``, esc(p.description)]),
                ['Part', 'Element']
            ),
            ''
        );
    }
    const motion = c.motion.length ? c.motion : DEFAULT_MOTION;
    out.push(`**Motion:** ${motion.map((m) => `${m.level === 'all' ? 'all levels' : `\`${m.level}\``}: ${m.description}`).join('; ')}.`, '');
    return out.join('\n');
}

const GUIDE = readFileSync(join(ROOT, 'scripts/llms-preamble.md'), 'utf8');

// --- llms.txt : the short index -------------------------------------------
const shortDoc = [
    GUIDE.trim(),
    '',
    '## Component index',
    '',
    'Full API for every component (props, defaults, slots, emits) is in `llms-full.txt`.',
    '',
    publicComponents.map((c) => `- **${c.name}**${c.description ? `, ${c.description.split('. ')[0]}.` : ''}`).join('\n'),
    '',
    '## Ready-made page compositions',
    '',
    'The docs site ships runnable "blocks", whole page patterns built only from these components.',
    'Source: `src/docs/Blocks/*.vue`. Each contains a live demo plus the copy-paste snippet.',
    '',
    blocks.map((b) => `- **${b.title}** (\`${b.file}\`), ${b.summary || 'composition'}`).join('\n'),
    '',
].join('\n');

// --- llms-full.txt : everything -------------------------------------------
const fullDoc = [
    GUIDE.trim(),
    '',
    '---',
    '',
    '# Component API reference',
    '',
    `Generated from source (${publicComponents.length} exported components). Do not edit by hand, run \`npm run docs:llms\`.`,
    '',
    publicComponents.map(renderComponent).join('\n'),
    '',
    '---',
    '',
    '# Page composition recipes',
    '',
    'Each block below is a complete, working page pattern in `src/docs/Blocks/`. Read the file for the full markup;',
    'every one contains a live demo and a `CodePreview` snippet that is the consumer-ready version.',
    '',
    blocks
        .map((b) => [`### ${b.title}`, '', b.summary, '', `Source: \`src/docs/Blocks/${b.file}\``, '', `Uses: ${b.used.map((u) => `\`${u}\``).join(', ')}`, ''].join('\n'))
        .join('\n'),
].join('\n');

// Parts and motion for the docs pages, generated rather than hand-written.
const meta = Object.fromEntries(
    publicComponents.map((c) => [c.name, { parts: c.parts, classPart: c.classPart, motion: c.motion.length ? c.motion : DEFAULT_MOTION }])
);
mkdirSync(dirname(META_OUT), { recursive: true });
writeFileSync(META_OUT, JSON.stringify(meta, null, 4) + '\n');

writeFileSync(join(ROOT, 'llms.txt'), shortDoc);
writeFileSync(join(ROOT, 'llms-full.txt'), fullDoc);

const undocumented = publicComponents.filter((c) => !c.description).map((c) => c.name);
console.log(`llms.txt        ${shortDoc.length} bytes`);
console.log(`llms-full.txt   ${fullDoc.length} bytes`);
console.log(`components      ${publicComponents.length} public / ${components.length} total`);
console.log(`blocks          ${blocks.length}`);
if (undocumented.length) console.log(`no description  ${undocumented.length}: ${undocumented.join(', ')}`);
