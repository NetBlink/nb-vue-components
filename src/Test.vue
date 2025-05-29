<script setup>
// @ts-nocheck
import CodePreview from './components/CodePreview.vue';
import CollapsableSection from './components/CollapsableSection.vue';
import {
    Input,
    Section,
    RadioButton,
    FileDropZoneInput,
    DropdownSearchbar,
    Images,
    Td,
    InputLabel,
    SearchSelect,
    Select2ajax,
    Textarea,
    TextInput,
    TrCollapseHandler,
    TableItemCard,
    Alert,
    DescriptionList,
    DescriptionListItem,
    Dropdown,
    DropdownSeparator,
    LinkButton,
    Logs,
    Modal,
    Spinner,
} from './index';
import { SubmitButton, PrimaryButton, SecondaryButton, DangerButton } from './index';
import { useForm } from '@inertiajs/vue3';
import codePreview from './codePreview.json';
import Navigation from './Navigation.vue';
import H2 from './HelperComponents/H2.vue';
import Table from './components/Tables/Table.vue';
import Thead from './components/Tables/Thead.vue';
import Checkbox from './components/Forms/Checkbox.vue';
import Th from './components/Tables/Th.vue';
import InputError from './components/Forms/InputError.vue';
import DottedCarousel from './components/DottedCarousel.vue';
import SelectMultiple from './components/Forms/SelectMultiple.vue';
import { prefix } from '@fortawesome/free-brands-svg-icons';
import DropdownLink from './components/DropdownLink.vue';
import LinkDropdownButton from './components/LinkDropdownButton.vue';
import Stats from './components/Stats.vue';
import { ref } from 'vue';
import NewModal from './components/NewModal.vue';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    subscribe: '',
    img: '',
    checkbox: false,
    option: null,
    ba_country: '',
    note: '',
});

const modal = ref(false);
</script>
<template>
    <Navigation>
        <main class="content-container h-fit w-full bg-white py-8 pl-64">
            <Section class="mx-16 mb-8 text-center">
                <h1 class="text-xl">Components showcase</h1>
                <div class="bg-primary inline-block h-4 w-4 rounded-full" />
                Primary
                <div class="bg-accent inline-block h-4 w-4 rounded-full" />
                Accent
            </Section>

            <!-- * Input -->
            <div class="mb-40">
                <H2 title="Inputs" />

                <h3 id="input" class="gutters text-md mt-5 font-bold"># Input</h3>
                <div class="gutters bg-white py-2">
                    <div class="grid w-full grid-cols-3 gap-5 py-2">
                        <Input :form="form" field="name" />
                        <Input :form="form" field="name" disabled />
                        <Input :form="form" field="name2" noLabel />
                        <Input :form="form" field="name3" addon="Name" />
                        <Input :form="form" field="name4" submitBtn="Action" />
                        <Input :form="form" field="name5" whatsApp="#myUrl" />
                    </div>
                    <CodePreview :code="codePreview.Input" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>type</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>field</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>label</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>name</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>required</Td>
                            <Td>Boolean</Td>
                        </Tr>
                        <Tr>
                            <Td>disabled</Td>
                            <Td>Boolean</Td>
                        </Tr>
                        <Tr>
                            <Td>min</Td>
                            <Td>Number | String</Td>
                        </Tr>
                        <Tr>
                            <Td>max</Td>
                            <Td>Number | String</Td>
                        </Tr>
                        <Tr>
                            <Td>step</Td>
                            <Td>Number | String</Td>
                        </Tr>
                        <Tr>
                            <Td>form</Td>
                            <Td>Object</Td>
                        </Tr>
                        <Tr>
                            <Td>addon</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>placeholder</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>noLabel</Td>
                            <Td>Boolean</Td>
                        </Tr>
                        <Tr>
                            <Td>submitBtn</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>autofocus</Td>
                            <Td>Boolean</Td>
                        </Tr>
                        <Tr>
                            <Td>pattern</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>whatsApp</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>sublabel</Td>
                            <Td>String</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Switch -->
            <div class="my-40">
                <h3 id="switch" class="gutters text-md font-bold"># Switch</h3>

                <div class="gutters bg-white py-2">
                    <div class="flex items-center gap-4">
                        <Input v-bind:form="form" field="subscribe" type="checkbox" />
                        <Input v-bind:form="form" field="subscribe" type="checkbox" noLabel />
                        <Input v-bind:form="form" field="subscribe" type="checkbox" switchDescription="Description" label="MyLabel" />
                    </div>
                    <CodePreview :code="codePreview.Switch" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>switchDescription</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>noLabel</Td>
                            <Td>Boolean</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Checkbox -->
            <div class="my-40">
                <h3 id="checkbox" class="gutters text-md font-bold"># Checkbox</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex items-center gap-4">
                        <Checkbox value="value" v-model:checked="form.checkbox" />
                        <Checkbox value="value" @update:checked="(value) => (form.checkbox = value)" />
                        {{ form.checkbox ? 'checked' : 'notChecked' }}
                        <Checkbox checked />
                    </div>
                    <CodePreview :code="codePreview.Checkbox" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>checked</Td>
                            <Td>[Array, Boolean]</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>value</Td>
                            <Td>String</Td>
                            <Td>null</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * File Input -->
            <div class="my-40">
                <h3 id="file-input" class="gutters text-md font-bold"># File Input</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex items-center gap-4">
                        <FileDropZoneInput v-bind:form="form" field="img" />
                        <FileDropZoneInput v-bind:form="form" field="img" label="MyLabel" />
                    </div>
                    <CodePreview :code="codePreview.FileInput" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>accept</Td>
                            <Td>String</Td>
                            <Td>image/*</Td>
                        </Tr>
                        <Tr>
                            <Td>multiple</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>label</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>form</Td>
                            <Td>Object</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>field</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>required</Td>
                            <Td>Boolean</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>disabled</Td>
                            <Td>Boolean</Td>
                            <Td></Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Dropdown search bar -->
            <div class="my-40">
                <h3 id="dropdown-search-bar" class="gutters text-md font-bold"># Dropdown Search Bar</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex items-center gap-4">
                        <DropdownSearchbar :options="['my first option', 'my second option', 'some random option']" />
                        <DropdownSearchbar placeholder="find me" />
                    </div>
                    <CodePreview :code="codePreview.DropdownSearchBar" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>options</Td>
                            <Td>Array</Td>
                        </Tr>
                        <Tr>
                            <Td>label</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>placeholder</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Images -->
            <div class="my-40">
                <h3 id="images" class="gutters text-md font-bold"># Images</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex items-center gap-4">
                        <!--<Images
              :images="[{ id: 1, url: 'randomlink' }]"
              :itemType="'stock'"
              :itemId="1"
            />-->
                        Unknown solution encountered $page error
                        <span class="text-danger">fix needed</span>
                    </div>
                    <CodePreview :code="['----']" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>images</Td>
                            <Td>Object</Td>
                        </Tr>
                        <Tr>
                            <Td>itemType</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>itemId</Td>
                            <Td>Number</Td>
                        </Tr>
                        <Tr>
                            <Td>canUpload</Td>
                            <Td>Boolean</Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>endPoint</Td>
                            <Td>String</Td>
                            <Td>images.store</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Input Error -->
            <div class="my-40">
                <h3 id="input-error" class="gutters text-md font-bold"># Input Error</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex flex-col gap-4">
                        <textarea class="-mb-3">My input</textarea>
                        <InputError message="Something is wrong" />
                    </div>
                    <CodePreview :code="codePreview.InputError" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>message</Td>
                            <Td>String</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Input Label -->
            <div class="my-40">
                <h3 id="input-label" class="gutters text-md font-bold"># Input Label</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex flex-col gap-4">
                        <InputLabel value="My Label - 1" />
                        <InputLabel value="My Label - 2" :required="true" />
                        <InputLabel value="My Label - 3" sublabel="subLabel" />
                    </div>
                    <CodePreview :code="codePreview.InputLabel" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>value</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>sublabel</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>required</Td>
                            <Td>Boolean</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Radio Button -->
            <div class="my-40">
                <h3 id="radio-button" class="gutters text-md font-bold"># Radio Button</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex gap-4">
                        <RadioButton :value="null" v-model="form.option" id="radioDefault01" :isChecked="true" name="option" label="All" />
                        <RadioButton value="In Stock" v-model="form.option" id="radioDefault02" name="option" label="In Stock" />
                        <RadioButton value="eng_note" v-model="form.option" id="radioDefault03" name="option" label="With Engineer Notes" />
                    </div>
                    <CodePreview :code="codePreview.RadioButton" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>id</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>name</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>value</Td>
                            <Td>String | null</Td>
                        </Tr>
                        <Tr>
                            <Td>isChecked</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>modelValue</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>label</Td>
                            <Td>String</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * SearchSelect -->
            <div class="my-40">
                <h3 id="search-select" class="gutters text-md font-bold">
                    # Search Select --
                    <span class="text-danger">Fix needed</span>
                </h3>
                <div class="gutters py-2">
                    <div class="flex w-full gap-5 py-2">
                        <SearchSelect
                            class="mb-4"
                            :list="[1, 2, 3]"
                            v-model:form="form"
                            field="ba_country"
                            option-value="name"
                            option-text="name"
                            placeholder="Select Country"
                            label="Country"
                        />
                    </div>
                    <CodePreview :code="codePreview.SearchSelect" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                            <Th>Required</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>id</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>label</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>list</Td>
                            <Td>Array</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>optionValue</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>optionText</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>optionDisabled</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>placeholder</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>field</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>form</Td>
                            <Td>Object</Td>
                        </Tr>
                        <Tr>
                            <Td>modelValue</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td>noLabel</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>disabled</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>noForm</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Search 2 ajax -->
            <div class="my-40">
                <h3 id="search-2-ajax" class="gutters text-md font-bold">
                    # Search 2 ajax --
                    <span class="text-danger">Fix needed -- api endpoint missing</span>
                </h3>

                <div class="gutters py-2">
                    <div class="flex w-full gap-5 py-2">
                        <Select2ajax
                            class="mb-4"
                            id="ba_country"
                            label="Country"
                            field="ba_country"
                            :form="form"
                            modelValue="form.ba_country"
                            url="/api/countries"
                            placeholder="Select Country"
                        ></Select2ajax>
                    </div>
                    <CodePreview :code="codePreview.Buttons" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Element</Th>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>SubmitButton</Td>
                            <Td>type</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>disabled</Td>
                            <Td>Boolean</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>form</Td>
                            <Td>Object</Td>
                        </Tr>
                        <Tr>
                            <Td>PrimaryButton</Td>
                            <Td>type</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>disabled</Td>
                            <Td>Boolean</Td>
                        </Tr>
                        <Tr>
                            <Td>SecondaryButton</Td>
                            <Td>type</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>DangerButton</Td>
                            <Td>type</Td>
                            <Td>String</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * SelectMultiple -->
            <div class="my-40">
                <h3 id="select-multiple" class="gutters text-md font-bold">
                    # Select Multiple
                    <span class="text-warning">? not sure about that</span>
                </h3>
                <div class="gutters py-2">
                    <div class="flex w-full gap-5 py-2">
                        <SelectMultiple
                            id="ba_country"
                            label="Country"
                            :list="[
                                { id: 1, name: 'India' },
                                { id: 2, name: 'USA' },
                                { id: 3, name: 'UK' },
                            ]"
                            optionValue="id"
                            optionText="name"
                            placeholder="Select Country"
                            field="ba_country"
                            :form="form"
                        />
                    </div>
                    <CodePreview :code="codePreview.SelectMultiple" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                            <Th>Required</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>id</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>label</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>list</Td>
                            <Td>Array</Td>
                            <Td>[]</Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>optionValue</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>optionText</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>placeholder</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>field</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>form</Td>
                            <Td>Object</Td>
                        </Tr>
                        <Tr>
                            <Td>noLabel</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>isDisabled</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Textarea -->
            <div class="my-40">
                <h3 id="textarea" class="gutters text-md font-bold"># Textarea</h3>
                <div class="gutters py-2">
                    <Textarea :form="form" field="note" label="Note" rows="4" />
                    <CodePreview :code="codePreview.Textarea" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>field</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>label</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>required</Td>
                            <Td>Boolean</Td>
                        </Tr>
                        <Tr>
                            <Td>disabled</Td>
                            <Td>Boolean</Td>
                        </Tr>
                        <Tr>
                            <Td>form</Td>
                            <Td>Object</Td>
                        </Tr>
                        <Tr>
                            <Td>placeholder</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>noLabel</Td>
                            <Td>Boolean</Td>
                        </Tr>
                        <Tr>
                            <Td>autofocus</Td>
                            <Td>Boolean</Td>
                        </Tr>
                        <Tr>
                            <Td>modelValue</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>rows</Td>
                            <Td>Number</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Textinput -->
            <div class="my-40">
                <h3 id="text-input" class="gutters text-md font-bold"># Text Input</h3>
                <div class="gutters py-2">
                    <TextInput :form="form" field="name" label="Name" modelValue="myValue" />
                    <CodePreview :code="codePreview.TextInput" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>modelValue</Td>
                            <Td>String</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Buttons -->
            <div class="my-40">
                <H2 title="Buttons" />

                <div class="gutters py-2">
                    <div class="flex w-full gap-5 py-2">
                        <SubmitButton :form="form">Submit</SubmitButton>
                        <PrimaryButton>Primary</PrimaryButton>
                        <SecondaryButton>Secondary</SecondaryButton>
                        <DangerButton>Danger</DangerButton>
                        <LinkButton href="#mylink1">myLink button</LinkButton>
                        <LinkDropdownButton title="myLink Dropdown button">
                            <LinkDropdownButtonItem title="MyTitle" href="#myRoute" />
                        </LinkDropdownButton>
                    </div>
                    <CodePreview :code="codePreview.Buttons" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Element</Th>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>SubmitButton</Td>
                            <Td>type</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>disabled</Td>
                            <Td>Boolean</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>form</Td>
                            <Td>Object</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>PrimaryButton</Td>
                            <Td>type</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>disabled</Td>
                            <Td>Boolean</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>SecondaryButton</Td>
                            <Td>type</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>DangerButton</Td>
                            <Td>type</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>LinkButton</Td>
                            <Td>href</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>colourClasses</Td>
                            <Td>String</Td>
                            <Td>bg-primary text-white hover:bg-primary-700</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>target</Td>
                            <Td>String</Td>
                            <Td>_self</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>disabled</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>method</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>

                        <Tr>
                            <Td></Td>
                            <Td>data</Td>
                            <Td>Object</Td>
                            <Td></Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Sections -->
            <div class="my-40">
                <H2 title="Sections" />

                <div class="gutters bg-white py-2">
                    <Section class="mb-2" header="MySection" :open="true">My Section Data</Section>
                    <CodePreview :code="codePreview.Section" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>header</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>overflow</Td>
                            <Td>Boolean</Td>
                            <Td>true</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <div class="my-40">
                <div class="gutters bg-white py-2">
                    <CollapsableSection class="mb-2" header="MyCollapsibleSection" :open="true">My Section Data</CollapsableSection>
                    <CodePreview :code="codePreview.CollapsibleSection" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>header</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>open</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Table -->
            <div class="my-40">
                <H2 title="Table" />

                <div class="gutters bg-white py-2">
                    <Table
                        class="w-full"
                        :total="30"
                        :links="[
                            { url: '#table', label: 'label - 1' },
                            { url: '#table', label: 'label - 2' },
                            { url: '#table', label: 'label - 3' },
                            { url: '#table', label: 'label - 4' },
                        ]"
                        :sticky="true"
                    >
                        <Thead>
                            <Tr>
                                <Th>Header 1</Th>
                                <Th>Header 2</Th>
                                <Th>Header 3</Th>
                            </Tr>
                        </Thead>
                        <tbody>
                            <Tr>
                                <Td>Row 1 - Col 1</Td>
                                <Td>Row 1 - Col 2</Td>
                                <Td>Row 1 - Col 3</Td>
                            </Tr>
                            <Tr>
                                <Td>Row 2 - Col 1</Td>
                                <Td>Row 2 - Col 2</Td>
                                <Td>Row 2 - Col 3</Td>
                            </Tr>
                            <Tr>
                                <Td>Row 3 - Col 1</Td>
                                <Td>Row 3 - Col 2</Td>
                                <Td>Row 3 - Col 3</Td>
                            </Tr>
                            <TrCollapse>
                                <Td>Row 4 - Col 1</Td>
                                <Td>Row 4 - Col 2</Td>
                                <Td>Row 4 - Col 3</Td>
                            </TrCollapse>
                            <TrCollapseHandler>
                                <Td>Row 4 - Col 1</Td>
                                <Td>Row 4 - Col 2</Td>
                                <Td>Row 4 - Col 3</Td>
                            </TrCollapseHandler>
                        </tbody>
                    </Table>
                    <CodePreview :code="codePreview.Table" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Element</Th>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>Table</Td>
                            <Td>total</Td>
                            <Td>Number</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>links</Td>
                            <Td>Array</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>collapsable</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>collapse_id</Td>
                            <Td>String</Td>
                            <Td>collapse</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>sticky</Td>
                            <Td>Boolean</Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>overflow</Td>
                            <Td>Boolean</Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>Th</Td>
                            <Td>orderBy</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>TrCollapse</Td>
                            <Td>collapse_id</Td>
                            <Td>String</Td>
                            <Td>collapse</Td>
                        </Tr>
                        <Tr>
                            <Td>TrCollapseHandler</Td>
                            <Td>collapse_id</Td>
                            <Td>String</Td>
                            <Td>collapse</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * TableItemCard -->
            <div class="my-40">
                <H2 title="TableItemCard" />

                <div class="gutters bg-white py-2">
                    <TableItemCard
                        :itemId="{ id: 2, prefix: false }"
                        :pills="[{ text: 'myStatus' }]"
                        :options="[
                            {
                                text: 'No. Items: 342',
                            },
                            {
                                text: 'Sold: 23',
                            },
                        ]"
                        timeStamp="12.10.2024"
                        :title="{ text: 'Some Product Name' }"
                        extraText="my note"
                        :amount="{ text: 'Amount: ', amount: 23.45 }"
                    />
                    <CodePreview :code="codePreview.TableItemCard" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Inner Propertie</Th>
                            <Th>Inner Propertie Type</Th>
                            <Th>Inner Propertie Default</Th>
                            <Th>Inner Propertie Required</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>key</Td>
                            <Td>Number</Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>item</Td>
                            <Td>Object</Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>itemId</Td>
                            <Td>Object</Td>
                            <Td>id</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td>routeName</Td>
                            <Td>String</Td>
                            <Td>null</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td>routeData</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td>prefix</Td>
                            <Td>Boolean</Td>
                            <Td>true</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>extraText</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>title</Td>
                            <Td>Object</Td>
                            <Td>text</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td>href</Td>
                            <Td>String</Td>
                            <Td>null</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td>routeName</Td>
                            <Td>String</Td>
                            <Td>null</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td>routeData</Td>
                            <Td>String</Td>
                            <Td>null</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>pills</Td>
                            <Td>Array</Td>
                            <Td>text</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td>color</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>options</Td>
                            <Td>Object</Td>
                            <Td>text</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td>color</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td>routeName</Td>
                            <Td>String</Td>
                            <Td>null</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td>href</Td>
                            <Td>String</Td>
                            <Td>null</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td>routeData</Td>
                            <Td>String</Td>
                            <Td>null</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>timeStamp</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>amount</Td>
                            <Td>Object</Td>
                            <Td>text</Td>
                            <Td>String</Td>
                            <Td>Amount:</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td>amount</Td>
                            <Td>String</Td>
                            <Td>0.00</Td>
                            <Td>true</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Alert -->
            <div class="my-40">
                <H2 title="Alert" />

                <div class="gutters bg-white py-2">
                    <Alert>My alert message</Alert>
                    <CodePreview :code="codePreview.Alert" />
                </div>
            </div>

            <!-- * Description List -->
            <div class="my-40">
                <H2 title="DescriptionList" />

                <div class="gutters bg-white py-2">
                    <DescriptionList>
                        <DescriptionListItem editable>my description list</DescriptionListItem>
                        <DescriptionListItem editable label="my label" value="random" />
                    </DescriptionList>
                    <CodePreview :code="codePreview.DescriptionList" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Element</Th>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>DescriptionListItem</Td>
                            <Td>editable</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>label</Td>
                            <Td>String</Td>
                            <Td>''</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>value</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * DottedCarousel -->
            <div class="my-40">
                <H2 title="DottedCarousel" />

                <div class="gutters bg-white py-2">
                    <!--<DottedCarousel>dwadwa</DottedCarousel>-->
                    Uncaught TypeError: Cannot read properties of undefined (reading 'getBoundingClientRect')
                    <CodePreview :code="codePreview.DescriptionList" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>padding</Td>
                            <Td>Number</Td>
                            <Td>0</Td>
                        </Tr>
                        <Tr>
                            <Td>gap</Td>
                            <Td>Number</Td>
                            <Td>20</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Dropdown -->
            <div class="my-40">
                <H2 title="Dropdown" />

                <div class="gutters bg-white py-2">
                    <Dropdown align="start">
                        <template #trigger>
                            <PrimaryButton>Click me</PrimaryButton>
                        </template>
                        <template #content>
                            <DropdownLink href="#url1">item 1</DropdownLink>
                            <DropdownLink href="#url2">item 2</DropdownLink>
                            <DropdownLink href="#url3">item 3</DropdownLink>
                            <DropdownSeparator />
                            <DropdownLink href="#url4">item 4</DropdownLink>
                        </template>
                    </Dropdown>

                    <CodePreview :code="codePreview.Dropdown" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>align</Td>
                            <Td>'start' | 'center' | 'end'</Td>
                            <Td>start</Td>
                        </Tr>
                        <Tr>
                            <Td>alignOffset</Td>
                            <Td>number</Td>
                            <Td>5</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Logs -->
            <div class="my-40">
                <H2 title="Logs" />

                <div class="gutters bg-white py-2">
                    <Logs header="myLogs" :logs="{}" />
                    <CodePreview :code="codePreview.Logs" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>header</Td>
                            <Td>String</Td>
                            <Td>Logs</Td>
                        </Tr>
                        <Tr>
                            <Td>logs</Td>
                            <Td>Object</Td>
                            <Td></Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Modal -->
            <div class="my-40">
                <H2 title="Modal" />

                <div class="gutters bg-white py-2">
                    <SecondaryButton @click="modal = true">Open Modal</SecondaryButton>
                    <Modal :show="modal" @close="modal = false">
                        <div class="p-4">My modal content</div>
                    </Modal>
                    <NewModal>
                        <template #trigger><PrimaryButton>New Modal</PrimaryButton></template>
                        <template #header>Header</template>
                        <template #description>Description</template>
                        <template #footer>Footer</template>
                        <div class="p-4">My new modal content</div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ipsum laborum, itaque odit ex ab dolor illo quasi blanditiis aliquam commodi illum quae deleniti, hic saepe earum doloribus vel animi.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit illo inventore minus fuga quam incidunt quae eos reprehenderit deleniti! Voluptate totam, possimus fugiat fuga praesentium consequatur adipisci ea asperiores quibusdam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error odio suscipit quis neque, delectus qui aut cum quisquam distinctio omnis nesciunt ullam esse nam possimus atque laudantium vitae quidem accusamus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dolor voluptatibus fugit culpa assumenda eum natus voluptatum explicabo cumque ipsa dicta, quam nesciunt odit error porro officia accusamus debitis maiores?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit et sint culpa temporibus illum ratione autem eaque, soluta, quis non facilis officia blanditiis cumque nulla illo quod magni eveniet!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, nesciunt dolores rem perspiciatis animi dicta rerum odit repellat qui quo dolorem assumenda tempore minima suscipit. Voluptate, porro asperiores. Officia, laboriosam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste reprehenderit cumque repellendus inventore error temporibus amet numquam exercitationem quaerat sint atque accusantium tenetur nam ut praesentium fugiat maxime, sequi quas.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus modi possimus deserunt dolore ex reprehenderit perferendis eius voluptatum aut id. Incidunt fugiat minus atque harum, doloribus natus sequi laudantium itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, placeat possimus ipsa nam iusto necessitatibus ullam neque corrupti exercitationem voluptates quasi esse ab temporibus enim ipsum laborum, est iste? Inventore?
                    </NewModal>
                    <CodePreview :code="codePreview.Modal" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>show</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>maxWidth</Td>
                            <Td>String</Td>
                            <Td>2xl</Td>
                        </Tr>
                        <Tr>
                            <Td>closeable</Td>
                            <Td>Boolean</Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>hideOverflow</Td>
                            <Td>Boolean</Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>backdropDuration</Td>
                            <Td>Number</Td>
                            <Td>200</Td>
                        </Tr>
                        <Tr>
                            <Td>modalDuration</Td>
                            <Td>Number</Td>
                            <Td>200</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * NavCollapse -->
            <div class="my-40">
                <H2 title="NavCollapse" />

                <div class="gutters bg-white py-2">
                    <NavCollapse name="dwawda">What is this component for?</NavCollapse>
                    <CodePreview :code="[]" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>show</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>name</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Pagination -->
            <div class="my-40">
                <H2 title="Pagination" />

                <div class="gutters bg-white py-2">
                    <Pagination
                        :links="[
                            { url: '#table', label: 'label - 1' },
                            { url: '#table', label: 'label - 2' },
                            { url: '#table', label: 'label - 3' },
                            { url: '#table', label: 'label - 4' },
                        ]"
                    />
                    needs working on
                    <CodePreview :code="[]" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>show</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>name</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Spinner -->
            <div class="my-40">
                <H2 title="Spinner" />

                <div class="gutters bg-white py-2">
                    <Spinner />
                    <CodePreview :code="codePreview.Spinner" />
                </div>
            </div>

            <!-- * Stats -->
            <div class="my-40">
                <H2 title="Stats" />

                <div class="gutters bg-white py-2">
                    Uncaught ReferenceError: route is not defined
                    <!--<Stats statusName="/" :stats="[{ name: 'name1', value: 'value1', label: 'label1' }]" />-->
                    <CodePreview :code="codePreview.Spinner" />
                </div>
            </div>
        </main>
    </Navigation>
</template>
