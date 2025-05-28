export const Align = {
    START: 'start',
    CENTER: 'center',
    END: 'end',
} as const;

export type Align = (typeof Align)[keyof typeof Align];
