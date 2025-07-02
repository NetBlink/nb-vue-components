export const Align = {
    START: 'start',
    CENTER: 'center',
    END: 'end',
} as const;

export type Align = (typeof Align)[keyof typeof Align];

export const ComponentTheme = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    DANGER: 'danger',
    WARNING: 'warning',
    INFO: 'info',
    SUCCESS: 'success',
    NO_STYLE: 'no-style',
} as const;

export type ComponentTheme =
    (typeof ComponentTheme)[keyof typeof ComponentTheme];
