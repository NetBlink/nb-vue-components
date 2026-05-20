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
import Button from './components/Button.vue';
import WarningButton from './components/WarningButton.vue';
import InfoButton from './components/InfoButton.vue';
import SuccessButton from './components/SuccessButton.vue';
import DataTile from './components/DataTile.vue';

// Helper components
import CodePreview from './components/CodePreview.vue';
import H2 from './HelperComponents/H2.vue';

/**
 * Plugin install options for `app.use(Componentsnb, { … })`.
 */
export interface ComponentsnbOptions {
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
import { createNbIcons } from './icons/createNbIcons';
import { NB_ICONS_KEY } from './icons/inject';

const Componentsnb = {
    install(App: any, options: ComponentsnbOptions = {}) {
        // @ts-ignore
        for (const componentKey in components) {
            // @ts-ignore
            App.component(componentKey, components[componentKey]);
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
    Button,
    DataTile,
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
