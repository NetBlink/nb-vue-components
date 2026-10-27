import PropsTable from './components/PropsTable.vue';
import InputWrapper from './components/InputWrapper.vue';
import UnderConstruction from './components/UnderConstruction.vue';
import Checkbox from './components/Forms/Checkbox.vue';
import Input from './components/Forms/Input.vue';
import InputError from './components/Forms/InputError.vue';
import InputLabel from './components/Forms/InputLabel.vue';
import TextInput from './components/Forms/TextInput.vue';
import Textarea from './components/Forms/Textarea.vue';
import Switch from './components/Forms/Switch.vue';
import Select from './components/Forms/Select.vue';
import RichSelect from './components/Forms/RichSelect.vue';
import DropdownSearchbar from './components/Forms/DropdownSearchbar.vue';
import SearchSelect from './components/Forms/SearchSelect.vue';
import Select2ajax from './components/Forms/Select2ajax.vue';
import FileDropZoneInput from './components/Forms/FileDropZoneInput.vue';
import Images from './components/Forms/Images.vue';
import RadioButton from './components/Forms/RadioButton.vue';
import SubmitButton from './components/Forms/SubmitButton.vue';
import SelectMultiple from './components/Forms/SelectMultiple.vue';
import SimpleSelect from './components/Forms/SimpleSelect.vue';
import Table from './components/Tables/Table.vue';
import Thead from './components/Tables/Thead.vue';
import Tbody from './components/Tables/Tbody.vue';
import Th from './components/Tables/Th.vue';
import Td from './components/Tables/Td.vue';
import TrCollapseHandler from './components/Tables/TrCollapseHandler.vue';
import TrCollapse from './components/Tables/TrCollapse.vue';
import TrPlaceholder from './components/Tables/TrPlaceholder.vue';
import TableItemCard from './components/Tables/TableItemCard.vue';
import Alert from './components/Alert.vue';
import CollapsableSection from './components/CollapsableSection.vue';
import Dropdown from './components/Dropdown.vue';
import DropdownLink from './components/DropdownLink.vue';
import DropdownSeparator from './components/DropdownSeparator.vue';
import LinkButton from './components/LinkButton.vue';
import LinkDropdownButton from './components/LinkDropdownButton.vue';
import LinkDropdownButtonItem from './components/LinkDropdownButtonItem.vue';
import Logs from './components/Logs.vue';
import LogsContent from './components/LogsContent.vue';
import Modal from './components/Modal.vue';
import NewModal from './components/NewModal.vue';
import NavLink from './components/NavLink.vue';
import Pagination from './components/Pagination.vue';
import PrimaryButton from './components/PrimaryButton.vue';
import DangerButton from './components/DangerButton.vue';
import ResponsiveNavLink from './components/ResponsiveNavLink.vue';
import SecondaryButton from './components/SecondaryButton.vue';
import Section from './components/Section.vue';
import Spinner from './components/Spinner.vue';
import Stats from './components/Stats.vue';
import NavCollapse from './components/NavCollapse.vue';
import DescriptionList from './components/DescriptionList.vue';
import DescriptionListItem from './components/DescriptionListItem.vue';
import DottedCarousel from './components/DottedCarousel.vue';
import GravatarImg from './components/GravatarImg.vue';
import TdCollapseHandler from './components/Tables/TdCollapseHandler.vue';
import Tr from './components/Tables/Tr.vue';
import EnhancedTable from './components/Tables/EnhancedTable.vue';
import Collapse from './components/Collapse.vue';
import Tooltip from './components/Tooltip.vue';
import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';
import Toast from './components/Toast.vue';
import Toaster from './components/Toaster.vue';
import Button from './components/Button.vue';
import WarningButton from './components/WarningButton.vue';
import InfoButton from './components/InfoButton.vue';
import SuccessButton from './components/SuccessButton.vue';
import DataTile from './components/DataTile.vue';
import IconCircle from './components/IconCircle.vue';
import Badge from './components/Badge.vue';
import Avatar from './components/Avatar.vue';
import AvatarGroup from './components/AvatarGroup.vue';
import IconButton from './components/IconButton.vue';
import Card from './components/Card.vue';
import Breadcrumbs from './components/Breadcrumbs.vue';
import PageHeader from './components/PageHeader.vue';
import EmptyState from './components/EmptyState.vue';
import Progress from './components/Progress.vue';
import Skeleton from './components/Skeleton.vue';
import Stepper from './components/Stepper.vue';
import Timeline from './components/Timeline.vue';
import SubNav from './components/SubNav.vue';
import CopyButton from './components/CopyButton.vue';
import NbTransition from './components/NbTransition.vue';
import NbTransitionGroup from './components/NbTransitionGroup.vue';
import AttachmentList from './components/AttachmentList.vue';
import FilterBar from './components/FilterBar.vue';
import ConfirmDialog from './components/ConfirmDialog.vue';
import StarRating from './components/StarRating.vue';
import Divider from './components/Divider.vue';
import ContentLoader from './components/ContentLoader.vue';
import InlineCode from './components/InlineCode.vue';

// Helper components
import CodePreview from './components/CodePreview.vue';
import H2 from './HelperComponents/H2.vue';

/**
 * Plugin install options for `app.use(Componentsnb, { … })`.
 */
export interface ComponentsnbOptions extends NbStyleOptions {
    /**
     * Dark-mode bootstrap. Default: `false` - colours are unchanged.
     *
     * - `'class'` - initialise the {@link useDarkMode} composable; respects a
     *   previously-persisted user choice (and falls back to OS preference at
     *   first load), but does not subscribe to OS changes thereafter. Use when
     *   you want to drive dark mode entirely from a UI toggle.
     * - `'system'` - same as `'class'`, plus subscribes to
     *   `prefers-color-scheme` so the OS-level switch flips the app live
     *   until the user makes an explicit choice (which then wins).
     * - `false` (default) - do not touch dark mode at all.
     */
    darkMode?: 'class' | 'system' | false;
    /** Override the element that receives the `.dark` class (default: `document.documentElement`). */
    darkModeTarget?: HTMLElement;
    /** Override the localStorage key (default: `'nb-vue-components:dark'`). Pass `false` to disable persistence. */
    darkModeStorageKey?: string | false;
}

import { useDarkMode } from './composables/useDarkMode';
import { createNbConfig, NB_CONFIG_KEY, type NbStyleOptions } from './ui/config';
import { configureMotion, hydrateMotion } from './ui/motion';
import { createNbIcons } from './icons/createNbIcons';
import { NB_ICONS_KEY } from './icons/inject';

/**
 * Everything `app.use(Componentsnb)` registers globally. Mirrors the named
 * exports below; the two lists are the price of wanting both global
 * registration and tree-shakable named imports.
 */
const components = {
    // FORMS
    Checkbox, Input, InputError, InputLabel, TextInput, Textarea, Switch, Select, RichSelect,
    DropdownSearchbar, SearchSelect, Select2ajax, FileDropZoneInput, Images, RadioButton,
    SubmitButton, SelectMultiple, SimpleSelect,
    // TABLES
    Table, Thead, Tbody, Th, Td, TrCollapse, TrCollapseHandler, TdCollapseHandler, TrPlaceholder,
    TableItemCard, Tr, EnhancedTable,
    // COMPONENTS
    Alert, CollapsableSection, CollapsibleSection: CollapsableSection, Dropdown, DropdownLink,
    DropdownSeparator, GravatarImg, LinkButton, LinkDropdownButton, LinkDropdownButtonItem, Logs,
    LogsContent, Modal, NewModal, NavLink, Pagination, PrimaryButton, DangerButton, WarningButton,
    InfoButton, SuccessButton, ResponsiveNavLink, SecondaryButton, Section, Spinner, Stats,
    NavCollapse, DescriptionList, DescriptionListItem, DottedCarousel, Collapse, Tooltip, Tabs, Tab,
    Toast, Toaster, Button, DataTile, IconCircle,
    Badge, Avatar, AvatarGroup, IconButton, Card, Breadcrumbs, PageHeader, EmptyState, Progress, Skeleton, Stepper, Timeline, SubNav, CopyButton, NbTransition, NbTransitionGroup, AttachmentList, FilterBar, ConfirmDialog, StarRating, Divider, ContentLoader, InlineCode,
    // Helper components
    CodePreview, H2, PropsTable, InputWrapper, UnderConstruction,
};

const Componentsnb = {
    install(App: any, options: ComponentsnbOptions = {}) {
        for (const [name, component] of Object.entries(components)) {
            App.component(name, component);
        }

        // Auto-install a default icon registry if the host hasn't already
        // installed one (via `app.use(createNbIcons({...}))`). This keeps
        // zero-config consumers working: NbIcon renders the shipped inline
        // SVGs out of the box.
        // @ts-ignore - Vue's App type doesn't expose _context publicly.
        const alreadyHasRegistry = App._context?.provides?.[NB_ICONS_KEY as unknown as string];
        if (!alreadyHasRegistry) {
            App.use(createNbIcons());
        }

        // Styling and motion config. Always provided, so components share one
        // merger instead of each falling back to the default.
        App.provide(NB_CONFIG_KEY, createNbConfig(options));
        configureMotion(options.motion);

        // The stored motion choice and the OS reduced-motion preference are read
        // after mounting, so a server-rendered page hydrates against the same classes.
        const mount = App.mount;
        App.mount = (...args: any[]) => {
            const vm = mount.apply(App, args);
            hydrateMotion();
            return vm;
        };

        // Opt-in dark-mode bootstrap. Pure no-op unless the host passes `darkMode`.
        if (options.darkMode) {
            const dm = useDarkMode({
                target: options.darkModeTarget,
                storageKey: options.darkModeStorageKey,
            });
            dm.initialize();
            if (options.darkMode === 'system') {
                dm.setupSystemPreference();
            }
        }
    },
};

export default Componentsnb;
export {
    // FORMS
    Checkbox,
    Input,
    InputError,
    InputLabel,
    TextInput,
    Textarea,
    Switch,
    Select,
    RichSelect,
    DropdownSearchbar,
    SearchSelect,
    Select2ajax,
    FileDropZoneInput,
    Images,
    RadioButton,
    SubmitButton,
    SelectMultiple,
    SimpleSelect,
    // TABLES
    Table,
    Thead,
    Tbody,
    Th,
    Td,
    TrCollapse,
    TrCollapseHandler,
    TdCollapseHandler,
    TrPlaceholder,
    TableItemCard,
    Tr,
    EnhancedTable,
    // COMPONENTS
    Alert,
    CollapsableSection,
    CollapsableSection as CollapsibleSection,
    Dropdown,
    DropdownLink,
    DropdownSeparator,
    GravatarImg,
    LinkButton,
    LinkDropdownButton,
    LinkDropdownButtonItem,
    Logs,
    LogsContent,
    Modal,
    NewModal,
    NavLink,
    Pagination,
    PrimaryButton,
    DangerButton,
    WarningButton,
    InfoButton,
    SuccessButton,
    ResponsiveNavLink,
    SecondaryButton,
    Section,
    Spinner,
    Stats,
    NavCollapse,
    DescriptionList,
    DescriptionListItem,
    DottedCarousel,
    Collapse,
    Tooltip,
    Tabs,
    Tab,
    Toast,
    Toaster,
    Button,
    DataTile,
    IconCircle,
    Badge,
    Avatar,
    AvatarGroup,
    IconButton,
    Card,
    Breadcrumbs,
    PageHeader,
    EmptyState,
    Progress,
    Skeleton,
    Stepper,
    Timeline,
    SubNav,
    CopyButton,
    NbTransition,
    NbTransitionGroup,
    InlineCode,
    ContentLoader,
    Divider,
    StarRating,
    ConfirmDialog,
    FilterBar,
    AttachmentList,
    // Helper components
    CodePreview,
    H2,
    PropsTable,
    InputWrapper,
    UnderConstruction,
};
export * from './Helpers';
export * from './composables/useTable';
export * from './composables';
export * from './components/Tables/types';
export * from './components/Forms/types';

// Icon provider system - v3.0.0
export { NbIcon, createNbIcons, useNbIcons, defaultAliases } from './icons';
export type { AliasName, IconLike, IconSet, NbIconsOptions, RawSvg, SetPrefixed } from './icons';

// Styling, variants and motion - v4.0.0
export * from './ui';

// Props and emits types, for typed wrappers (see the Customizing docs page).
export type { AlertProps, AlertEmits } from './components/Alert.vue';
export type { ButtonProps } from './components/Button.vue';
export type { CodePreviewProps } from './components/CodePreview.vue';
export type { CollapsableSectionProps } from './components/CollapsableSection.vue';
export type { CollapseProps } from './components/Collapse.vue';
export type { DangerButtonProps } from './components/DangerButton.vue';
export type { DataTileProps } from './components/DataTile.vue';
export type { IconCircleProps } from './components/IconCircle.vue';
export type { BadgeProps } from './components/Badge.vue';
export type { AvatarProps } from './components/Avatar.vue';
export type { AvatarGroupProps } from './components/AvatarGroup.vue';
export type { IconButtonProps, IconButtonEmits } from './components/IconButton.vue';
export type { CardProps, CardEmits } from './components/Card.vue';
export type { BreadcrumbsProps, BreadcrumbItem } from './components/Breadcrumbs.vue';
export type { PageHeaderProps } from './components/PageHeader.vue';
export type { EmptyStateProps } from './components/EmptyState.vue';
export type { ProgressProps } from './components/Progress.vue';
export type { SkeletonProps } from './components/Skeleton.vue';
export type { StepperProps, StepperEmits, StepperStep, StepState } from './components/Stepper.vue';
export type { TimelineProps, TimelineItem } from './components/Timeline.vue';
export type { SubNavProps, SubNavItem } from './components/SubNav.vue';
export type { CopyButtonProps, CopyButtonEmits } from './components/CopyButton.vue';
export type { NbTransitionProps } from './components/NbTransition.vue';
export type { NbTransitionGroupProps } from './components/NbTransitionGroup.vue';
export type { AttachmentListProps, AttachmentListEmits, AttachmentItem } from './components/AttachmentList.vue';
export type { FilterBarProps, FilterBarEmits } from './components/FilterBar.vue';
export type { ConfirmDialogProps } from './components/ConfirmDialog.vue';
export type { StarRatingProps, StarRatingEmits } from './components/StarRating.vue';
export type { DividerProps } from './components/Divider.vue';
export type { ContentLoaderProps } from './components/ContentLoader.vue';
export type { InlineCodeProps } from './components/InlineCode.vue';
export type { DescriptionListProps } from './components/DescriptionList.vue';
export type { DescriptionListItemProps, DescriptionListItemEmits } from './components/DescriptionListItem.vue';
export type { DottedCarouselProps } from './components/DottedCarousel.vue';
export type { DropdownProps } from './components/Dropdown.vue';
export type { DropdownLinkProps } from './components/DropdownLink.vue';
export type { DropdownSeparatorProps } from './components/DropdownSeparator.vue';
export type { CheckboxEmits, CheckboxProps } from './components/Forms/Checkbox.vue';
export type { DropdownSearchbarProps } from './components/Forms/DropdownSearchbar.vue';
export type { FileDropZoneInputProps, FileDropZoneInputEmits, FileDropInitialFile, FileDropUpload } from './components/Forms/FileDropZoneInput.vue';
export type { ImagesProps } from './components/Forms/Images.vue';
export type { InputErrorProps } from './components/Forms/InputError.vue';
export type { InputLabelProps } from './components/Forms/InputLabel.vue';
export type { RadioButtonEmits, RadioButtonProps } from './components/Forms/RadioButton.vue';
export type { RichSelectProps, RichSelectEmits } from './components/Forms/RichSelect.vue';
export type { SearchSelectProps, SearchSelectEmits } from './components/Forms/SearchSelect.vue';
export type { SelectProps, SelectEmits } from './components/Forms/Select.vue';
export type { Select2ajaxProps, Select2ajaxEmits } from './components/Forms/Select2ajax.vue';
export type { SelectMultipleProps, SelectMultipleEmits } from './components/Forms/SelectMultiple.vue';
export type { SimpleSelectProps, SimpleSelectEmits } from './components/Forms/SimpleSelect.vue';
export type { SubmitButtonProps } from './components/Forms/SubmitButton.vue';
export type { SwitchProps, SwitchEmits } from './components/Forms/Switch.vue';
export type { TextInputEmits, TextInputProps } from './components/Forms/TextInput.vue';
export type { TextareaProps, TextareaEmits } from './components/Forms/Textarea.vue';
export type { GravatarImgProps } from './components/GravatarImg.vue';
export type { InfoButtonProps } from './components/InfoButton.vue';
export type { InputWrapperProps } from './components/InputWrapper.vue';
export type { LinkButtonProps } from './components/LinkButton.vue';
export type { LinkDropdownButtonProps } from './components/LinkDropdownButton.vue';
export type { LinkDropdownButtonItemProps } from './components/LinkDropdownButtonItem.vue';
export type { LogsProps } from './components/Logs.vue';
export type { LogsContentProps } from './components/LogsContent.vue';
export type { ModalProps, ModalEmits } from './components/Modal.vue';
export type { NavCollapseProps } from './components/NavCollapse.vue';
export type { NavLinkProps } from './components/NavLink.vue';
export type { NewModalProps, NewModalEmits } from './components/NewModal.vue';
export type { PaginationProps, PaginationEmits } from './components/Pagination.vue';
export type { PrimaryButtonProps } from './components/PrimaryButton.vue';
export type { PropsTableProps } from './components/PropsTable.vue';
export type { ResponsiveNavLinkProps } from './components/ResponsiveNavLink.vue';
export type { SecondaryButtonProps } from './components/SecondaryButton.vue';
export type { SectionProps } from './components/Section.vue';
export type { SpinnerProps } from './components/Spinner.vue';
export type { StatsProps, StatsEmits } from './components/Stats.vue';
export type { SuccessButtonProps } from './components/SuccessButton.vue';
export type { TabProps } from './components/Tab.vue';
export type { EnhancedTableProps, EnhancedTableEmits } from './components/Tables/EnhancedTable.vue';
export type { TableItemCardProps } from './components/Tables/TableItemCard.vue';
export type { TbodyProps } from './components/Tables/Tbody.vue';
export type { TdCollapseHandlerProps } from './components/Tables/TdCollapseHandler.vue';
export type { ThProps } from './components/Tables/Th.vue';
export type { TrEmits } from './components/Tables/Tr.vue';
export type { TrCollapseProps } from './components/Tables/TrCollapse.vue';
export type { TrCollapseHandlerProps } from './components/Tables/TrCollapseHandler.vue';
export type { TrPlaceholderProps } from './components/Tables/TrPlaceholder.vue';
export type { TabItem, TabsProps } from './components/Tabs.vue';
export type { ToastProps, ToastEmits } from './components/Toast.vue';
export type { ToasterProps } from './components/Toaster.vue';
export type { TooltipProps } from './components/Tooltip.vue';
export type { UnderConstructionProps } from './components/UnderConstruction.vue';
export type { WarningButtonProps } from './components/WarningButton.vue';
export type { H2Props } from './HelperComponents/H2.vue';
export type {
    TableProps,
    TableHeaderProps as TheadProps,
    TableHeaderCellProps,
    TableCellProps as TdProps,
    TableRowProps as TrProps,
} from './components/Tables/types';
