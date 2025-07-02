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
import TableCollapse from './components/Tables/TableCollapse.vue';
import Collapse from './components/Collapse.vue';
import Tooltip from './components/Tooltip.vue';
import Button from './components/Button.vue';
import WarningButton from './components/WarningButton.vue';
import InfoButton from './components/InfoButton.vue';
import SuccessButton from './components/SuccessButton.vue';

// Helper components
import CodePreview from './components/CodePreview.vue';
import H2 from './HelperComponents/H2.vue';

const Componentsnb = {
    install(App) {
        // @ts-ignore
        for (const componentKey in components) {
            // @ts-ignore
            App.component(componentKey, components[componentKey]);
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
    // TABLES
    Table,
    Thead,
    Tbody,
    Th,
    Td,
    TrCollapse,
    TrCollapseHandler,
    TdCollapseHandler,
    TableCollapse,
    TrPlaceholder,
    TableItemCard,
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
    // Helper components
    CodePreview,
    H2,
    PropsTable,
    InputWrapper,
    UnderConstruction,
};
export * from './Helpers';
