<template>
    <div class="flex h-screen w-full">
        <nav class="bg-primary-900 fixed top-0 left-0 z-10 h-full w-64 overflow-y-scroll text-white">
            <ul class="flex flex-col gap-2 p-4">
                <li class="text-primary font-bold">NB Components</li>
                <li>
                    <a href="#inputs" class="hover:bg-primary-800 block rounded-md p-2">Inputs</a>
                </li>
                <li class="ml-2">
                    <a href="#input" class="hover:bg-primary-800 block rounded-md p-2">Input</a>
                </li>
                <li class="ml-2">
                    <a href="#switch" class="hover:bg-primary-800 block rounded-md p-2">Switch</a>
                </li>
                <li class="ml-2">
                    <a href="#checkbox" class="hover:bg-primary-800 block rounded-md p-2">Checkbox</a>
                </li>
                <li class="ml-2">
                    <a href="#file-input" class="hover:bg-primary-800 block rounded-md p-2">File Input</a>
                </li>
                <li class="ml-2">
                    <a href="#dropdown-search-bar" class="hover:bg-primary-800 block rounded-md p-2">Dropdown Search Bar</a>
                </li>
                <li class="ml-2">
                    <a href="#images" class="hover:bg-primary-800 block rounded-md p-2">Images</a>
                </li>
                <li class="ml-2">
                    <a href="#input-error" class="hover:bg-primary-800 block rounded-md p-2">Input Error</a>
                </li>
                <li class="ml-2">
                    <a href="#input-label" class="hover:bg-primary-800 block rounded-md p-2">Input Label</a>
                </li>
                <li class="ml-2">
                    <a href="#radio-button" class="hover:bg-primary-800 block rounded-md p-2">Radio Button</a>
                </li>
                <li class="ml-2">
                    <a href="#search-select" class="hover:bg-primary-800 block rounded-md p-2">Search Select</a>
                </li>
                <li class="ml-2">
                    <a href="#search-2-ajax" class="hover:bg-primary-800 block rounded-md p-2">Search 2 ajax</a>
                </li>
                <li class="ml-2">
                    <a href="#select-multiple" class="hover:bg-primary-800 block rounded-md p-2">Select Multiple</a>
                </li>
                <li class="ml-2">
                    <a href="#textarea" class="hover:bg-primary-800 block rounded-md p-2">Textarea</a>
                </li>
                <li class="ml-2">
                    <a href="#text-input" class="hover:bg-primary-800 block rounded-md p-2">Text Input</a>
                </li>

                <li>
                    <a href="#buttons" class="hover:bg-primary-800 block rounded-md p-2">Buttons</a>
                </li>
                <li>
                    <a href="#sections" class="hover:bg-primary-800 block rounded-md p-2">Sections</a>
                </li>
                <li>
                    <a href="#table" class="hover:bg-primary-800 block rounded-md p-2">Table</a>
                </li>
                <li>
                    <a href="#tableitemcard" class="hover:bg-primary-800 block rounded-md p-2">TableItemCard</a>
                </li>
                <li>
                    <a href="#alert" class="hover:bg-primary-800 block rounded-md p-2">Alert</a>
                </li>
                <li>
                    <a href="#descriptionlist" class="hover:bg-primary-800 block rounded-md p-2">Description List</a>
                </li>
                <li>
                    <a href="#dottedcarousel" class="hover:bg-primary-800 block rounded-md p-2">DottedCarousel</a>
                </li>
                <li>
                    <a href="#dropdown" class="hover:bg-primary-800 block rounded-md p-2">Dropdown</a>
                </li>
                <li>
                    <a href="#logs" class="hover:bg-primary-800 block rounded-md p-2">Logs</a>
                </li>
                <li>
                    <a href="#modal" class="hover:bg-primary-800 block rounded-md p-2">Modal</a>
                </li>
                <li>
                    <a href="#navcollapse" class="hover:bg-primary-800 block rounded-md p-2">NavCollapse</a>
                </li>
                <li>
                    <a href="#pagination" class="hover:bg-primary-800 block rounded-md p-2">Pagination</a>
                </li>
                <li>
                    <a href="#spinner" class="hover:bg-primary-800 block rounded-md p-2">Spinner</a>
                </li>
                <li>
                    <a href="#stats" class="hover:bg-primary-800 block rounded-md p-2">Stats</a>
                </li>
            </ul>
        </nav>
        <div class="max-w-full">
            <slot />
        </div>
    </div>
</template>
