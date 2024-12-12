<script setup>
// @ts-nocheck
import { useForm } from '@inertiajs/vue3';
import Link from '../../overrides/InertiaLink';
import { InputError, PrimaryButton } from '../../index';
import { useDropzone } from 'vue3-dropzone';
import { ref, reactive } from 'vue';
import { getInertiaRouter } from '@/Helpers';
const router = getInertiaRouter();

const props = defineProps({
    images: Object,
    itemType: String,
    itemId: Number,
    canUpload: {
        type: Boolean,
        default: true,
    },
    endPoint: { type: String, default: 'images.store' },
});

const form = useForm({
    image: [],
});

function submit() {
    let formData = new FormData();
    form.image.forEach((image, index) => {
        formData.append(`image[${index}]`, image.file);
    });
    formData.append('item_type', props.itemType);
    formData.append('item_id', props.itemId);
    router.post(route(props.endPoint), formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        _method: 'post',
        forceFormData: true,
        onFinish: () => {
            form.recentlySuccessful = true;
            form.image = [];
        },
    });
}
function saveFiles(files) {
    files.forEach((file) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            form.image.push({ file: file, dataUrl: e.target.result });
        };
        reader.readAsDataURL(file);
    });
}
const onDrop = (acceptFiles, rejectReasons) => {
    if (rejectReasons && rejectReasons.length > 0) {
        console.error(rejectReasons);
        return;
    }
    saveFiles(acceptFiles);
};
function removeImage(index) {
    form.image.splice(index, 1);
}
const { getRootProps, getInputProps, ...rest } = useDropzone({
    onDrop,
    multiple: true,
    accept: 'image/*',
});
</script>
<template>
    <form @submit.prevent="submit" class="w-full" v-if="canUpload">
        <div class="flex w-full">
            <div
                class="w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary"
                :class="{ 'border-primary-400 bg-primary-100': dragEneted }"
            >
                <div class="p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" v-bind="getRootProps()">
                    <input v-bind="getInputProps()" />
                    <span v-if="isDragActive">Drop the files here ...</span>
                    <span v-else>Drag 'n' drop images here</span>
                </div>
                <div v-if="form.image.length > 0" class="flex flex-wrap gap-2 p-4">
                    <div class="relative cursor-pointer select-none" v-for="(image, index) in form.image" @click="removeImage(index)" :key="index">
                        <div class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white">
                            -
                        </div>
                        <img :src="image.dataUrl" class="h-auto max-w-[150px]" />
                    </div>
                </div>
            </div>
            <PrimaryButton class="inline rounded-l-none" :class="{ 'cursor-not-allowed': form.image.length == 0 }" :disabled="form.image.length == 0">
                Upload
            </PrimaryButton>
            <progress v-if="form.progress" :value="form.progress.percentage" max="100">{{ form.progress.percentage }}%</progress>
        </div>

        <InputError v-if="$page.props.errors.image" class="mt-2" :message="$page.props.errors.image" />
        <div class="flex items-center gap-4">
            <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out">
                <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Images uploaded.</p>
            </Transition>
        </div>
    </form>
    <div v-if="images.length" class="mt-2">
        <hr />
        <div class="container mx-auto px-5 py-2 lg:px-8 lg:pt-8">
            <div class="-m-1 flex flex-wrap md:-m-2">
                <div v-for="image in images" class="flex w-1/3 flex-wrap">
                    <div class="h-full w-full p-1 shadow md:p-2">
                        <img alt="gallery" class="block h-auto w-auto rounded-lg object-cover object-center" :src="image.url" />
                        <Link
                            :href="route('images.delete', image.id)"
                            method="delete"
                            class="mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700"
                            as="button"
                            v-if="canUpload"
                        >
                            Delete Image
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
