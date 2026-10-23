import prompts from 'prompts';

export type Decision = 'keep' | 'adopt';

export interface Choice {
    id: string;
    title: string;
    keep: string;
    adopt: string;
    sites: number;
    default: Decision;
}

export class Chooser {
    constructor(private opts: { interactive: boolean; preset?: Record<string, Decision> }) {}

    choose = async (c: Choice): Promise<Decision> => {
        const preset = this.opts.preset?.[c.id];
        if (preset) return preset;
        if (!this.opts.interactive) return c.default;
        const { decision } = await prompts({
            type: 'select',
            name: 'decision',
            message: `${c.title} (${c.sites} site${c.sites === 1 ? '' : 's'})`,
            choices: [
                { title: `keep: ${c.keep}`, value: 'keep' },
                { title: `adopt: ${c.adopt}`, value: 'adopt' },
            ],
            initial: c.default === 'keep' ? 0 : 1,
        });
        if (!decision) throw new Error('aborted');
        return decision;
    };
}
