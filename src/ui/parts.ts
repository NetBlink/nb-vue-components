import type { NbClassValue } from './merge';

/**
 * Part names per component: the keys `:ui` and the app-wide `ui` config accept.
 * Each component documents its parts with `@part` tags; the docs generator
 * checks that those tags and this map agree.
 */
export interface NbParts {
    // Buttons
    Button: 'root';
    PrimaryButton: 'root';
    SecondaryButton: 'root';
    DangerButton: 'root';
    WarningButton: 'root';
    InfoButton: 'root';
    SuccessButton: 'root';
    SubmitButton: 'root' | 'content' | 'loader' | 'spinner';
    LinkButton: 'root';
    // Forms
    InputLabel: 'root' | 'icon' | 'sublabel' | 'required';
    InputError: 'root' | 'message';
    TextInput: 'root';
    InputWrapper: 'root' | 'label' | 'error';
    Input: 'root' | 'label' | 'group' | 'input' | 'addon' | 'button' | 'toggle' | 'error';
    Textarea: 'root' | 'label' | 'group' | 'addon' | 'input' | 'button' | 'error';
    Switch: 'root' | 'label' | 'field' | 'description' | 'input' | 'thumb' | 'error';
    Checkbox: 'root' | 'label' | 'field' | 'description' | 'input' | 'error';
    Select: 'root' | 'label' | 'input' | 'placeholder' | 'error';
    SimpleSelect: 'root' | 'header' | 'label' | 'input' | 'error';
    RichSelect:
        | 'root'
        | 'label'
        | 'trigger'
        | 'tag'
        | 'tagButton'
        | 'value'
        | 'clear'
        | 'icon'
        | 'content'
        | 'search'
        | 'searchIcon'
        | 'searchInput'
        | 'loading'
        | 'list'
        | 'groupLabel'
        | 'item'
        | 'check'
        | 'empty'
        | 'error';
    SearchSelect: 'root' | 'label' | 'input' | 'error';
    Select2ajax: 'root' | 'label' | 'input' | 'error';
    SelectMultiple: 'root' | 'label' | 'trigger' | 'icon' | 'content' | 'list' | 'item' | 'check' | 'error';
    DropdownSearchbar: 'root';
    FileDropZoneInput: 'root' | 'zone' | 'content' | 'label' | 'error';
    Images: 'root' | 'zone' | 'content' | 'previews' | 'preview' | 'remove' | 'button' | 'status' | 'error' | 'gallery';
    RadioButton: 'root' | 'input' | 'label';
    // Tables
    Table: 'root' | 'count' | 'container' | 'table' | 'pagination';
    Thead: 'root';
    Tbody: 'root' | 'empty';
    Th: 'root' | 'content' | 'sort' | 'icon';
    Td: 'root' | 'label';
    Tr: 'root';
    TrPlaceholder: 'row' | 'bar';
    TrCollapse: 'root' | 'content';
    TrCollapseHandler: 'root';
    TdCollapseHandler: 'root';
    TableItemCard: 'root' | 'header' | 'meta' | 'pill' | 'title' | 'note' | 'options' | 'option' | 'amount';
    EnhancedTable: 'root' | 'row';
    // Overlays
    NewModal: 'overlay' | 'content' | 'title' | 'description' | 'spacer' | 'footer' | 'close';
    Modal: 'root' | 'overlay' | 'content';
    Dropdown: 'trigger' | 'content';
    DropdownLink: 'item' | 'link';
    DropdownSeparator: 'root';
    LinkDropdownButton: 'trigger' | 'icon' | 'content' | 'list';
    LinkDropdownButtonItem: 'root' | 'link';
    Tooltip: 'content' | 'arrow';
    Toaster: 'root' | 'toast';
    Toast: 'root' | 'icon' | 'body' | 'title' | 'description' | 'action' | 'close';
    // Navigation, collapse, tabs
    NavLink: 'root' | 'icon' | 'label';
    ResponsiveNavLink: 'root';
    NavCollapse: 'root' | 'trigger' | 'icon' | 'label' | 'chevron' | 'content' | 'list';
    Collapse: 'root' | 'trigger' | 'label' | 'icon' | 'content' | 'body';
    CollapsableSection: 'root' | 'trigger' | 'header' | 'icon' | 'content' | 'body';
    Tabs: 'root' | 'list' | 'trigger' | 'icon' | 'badge' | 'indicator';
    Tab: 'root';
    Pagination: 'root' | 'list' | 'link' | 'activeLink' | 'disabledLink';
    // Data display
    Alert: 'root' | 'icon' | 'content' | 'title' | 'body' | 'dismiss';
    Stats: 'root' | 'stat' | 'value' | 'valueText' | 'label' | 'labelText' | 'underline' | 'chip' | 'trend' | 'ping';
    DataTile: 'root' | 'value' | 'icon' | 'valueText' | 'label' | 'labelText' | 'underline' | 'chip' | 'trend' | 'ping';
    DescriptionList: 'root' | 'list';
    DescriptionListItem: 'root' | 'term' | 'required' | 'details' | 'row' | 'value' | 'actions' | 'edit';
    DottedCarousel: 'root' | 'track' | 'dots' | 'indicator' | 'dot';
    GravatarImg: 'root';
    Logs: 'root';
    LogsContent: 'root' | 'empty' | 'list' | 'marker' | 'card' | 'meta' | 'change' | 'details';
    Section: 'root' | 'header' | 'title' | 'body';
    UnderConstruction: 'root' | 'card' | 'icon' | 'title' | 'message';
    Spinner: 'root';
    CodePreview: 'root' | 'header' | 'filename' | 'copy' | 'pre';
    PropsTable: 'root' | 'empty';
    H2: 'root' | 'title';
    IconCircle: 'root' | 'icon';
    Badge: 'root' | 'dot' | 'label';
    Avatar: 'root' | 'image' | 'initials' | 'status';
    AvatarGroup: 'root' | 'item' | 'more';
    IconButton: 'root' | 'icon';
    Card: 'root' | 'header' | 'title' | 'description' | 'actions' | 'body' | 'footer';
    Breadcrumbs: 'root' | 'list' | 'item' | 'link' | 'current' | 'separator';
    PageHeader: 'root' | 'breadcrumbs' | 'back' | 'main' | 'title' | 'description' | 'meta' | 'actions';
    EmptyState: 'root' | 'icon' | 'title' | 'description' | 'actions';
    Progress: 'root' | 'header' | 'label' | 'value' | 'track' | 'bar';
    Skeleton: 'root' | 'line' | 'circle';
    Stepper: 'root' | 'step' | 'marker' | 'label' | 'description' | 'connector';
    Timeline: 'root' | 'item' | 'marker' | 'connector' | 'content' | 'title' | 'time' | 'description';
    SubNav: 'root' | 'list' | 'item' | 'badge' | 'indicator';
    CopyButton: 'root' | 'icon' | 'status';
}

export type NbComponentName = keyof NbParts;

/** Per-part classes for one component, as `:ui` takes them. */
export type UiProp<P extends string> = Partial<Record<P, NbClassValue>>;

/** The app-wide `ui` config: house styles per component and part. */
export type NbUiConfig = { [C in NbComponentName]?: Partial<Record<NbParts[C], string>> };

/*
 * Values a variant prop accepts. Each is an interface rather than a union so an
 * app that registers its own value in the `variants` config can widen the prop
 * type with module augmentation:
 *
 *   declare module '@netblink/vue-components' {
 *       interface ButtonThemes { brand: true }
 *   }
 */
export interface ButtonThemes {
    primary: true;
    secondary: true;
    danger: true;
    warning: true;
    info: true;
    success: true;
    'no-style': true;
}
export interface ButtonSizes {
    xs: true;
    sm: true;
    md: true;
    lg: true;
}
export interface AlertTypes {
    success: true;
    error: true;
    warning: true;
    info: true;
}
/** The colour vocabulary shared by Badge, IconCircle and the other status-coloured components. */
export interface NbColorVariants {
    neutral: true;
    primary: true;
    accent: true;
    success: true;
    warning: true;
    danger: true;
    info: true;
}
export interface DataTileThemes {
    primary: true;
    secondary: true;
    danger: true;
    warning: true;
    info: true;
    success: true;
}
export interface SpinnerSizes {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
}
export interface TrVariants {
    default: true;
    success: true;
    warning: true;
    danger: true;
    info: true;
}
export interface SectionVariants {
    default: true;
    outlined: true;
    minimal: true;
}
export interface TabsVariants {
    underline: true;
    pills: true;
}

/** A variant value: a class string for the component's main part, or classes per part. */
export type NbVariantValue<P extends string> = string | Partial<Record<P, string>>;

type VariantMap<P extends string, K extends string> = Partial<Record<K, NbVariantValue<P>>> & Record<string, NbVariantValue<P>>;

/** The app-wide `variants` config: new or redefined values for props that pick from a class map. */
export interface NbVariantsConfig {
    Button?: { theme?: VariantMap<'root', keyof ButtonThemes & string>; size?: VariantMap<'root', keyof ButtonSizes & string> };
    LinkButton?: { theme?: VariantMap<'root', keyof ButtonThemes & string> };
    Alert?: { type?: VariantMap<'root' | 'icon' | 'dismiss', keyof AlertTypes & string> };
    DataTile?: { theme?: VariantMap<'icon' | 'valueText' | 'underline' | 'selected', keyof DataTileThemes & string> };
    Spinner?: { size?: VariantMap<'root', keyof SpinnerSizes & string> };
    Tr?: { variant?: VariantMap<'root', keyof TrVariants & string> };
    Section?: { variant?: VariantMap<'root', keyof SectionVariants & string> };
    Tabs?: { variant?: VariantMap<'list' | 'trigger' | 'indicator', keyof TabsVariants & string> };
    Toast?: { type?: VariantMap<'icon', 'success' | 'error' | 'warning' | 'info' | 'progress'> };
    IconCircle?: { variant?: VariantMap<'root' | 'icon', keyof NbColorVariants & string> };
    Badge?: { variant?: VariantMap<'root' | 'dot', keyof NbColorVariants & string> };
    IconButton?: { theme?: VariantMap<'root', string>; size?: VariantMap<'root' | 'icon', 'xs' | 'sm' | 'md' | 'lg'> };
    Progress?: { theme?: VariantMap<'root', keyof NbColorVariants & string> };
    SubNav?: { variant?: VariantMap<'list' | 'item' | 'marker' | 'indicator', 'pills' | 'underline' | 'segmented'> };
}
