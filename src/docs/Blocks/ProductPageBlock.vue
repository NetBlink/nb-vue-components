<script setup lang="ts">
import { computed, ref } from 'vue';
import { PrimaryButton, SecondaryButton, Table, Thead, Tbody, Th, Td, Tr, Tabs, Tab, Toaster, toast, CodePreview } from '../../index';
import { NbIcon } from '../../icons';
import { faStar, faHeart, faMinus, faPlus, faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const colors = [
    { value: 'graphite', label: 'Graphite', swatch: 'bg-gray-700', gradient: 'from-gray-500 to-gray-800' },
    { value: 'sand', label: 'Sand', swatch: 'bg-amber-300', gradient: 'from-amber-200 to-amber-500' },
    { value: 'ocean', label: 'Ocean', swatch: 'bg-primary-500', gradient: 'from-primary-300 to-primary-700' },
    { value: 'moss', label: 'Moss', swatch: 'bg-green-600', gradient: 'from-green-400 to-green-700' },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const activeColor = ref(colors[2].value);
const activeSize = ref('M');
const activeImage = ref(0);
const quantity = ref(1);
const wishlisted = ref(false);

const selectedColor = computed(() => colors.find((c) => c.value === activeColor.value) ?? colors[0]);

const price = 89;
const compareAt = 129;
const discount = Math.round((1 - price / compareAt) * 100);
const rating = 4;
const reviewCount = 128;

function addToCart() {
    toast.success(`${quantity.value} × Alpine Shell Jacket added to your cart`, {
        description: `${selectedColor.value.label} · Size ${activeSize.value}`,
        action: { label: 'View cart', onClick: () => toast.info('Opening your cart…') },
    });
}

function toggleWishlist() {
    wishlisted.value = !wishlisted.value;
    if (wishlisted.value) toast.info('Saved to your wishlist', { description: 'Alpine Shell Jacket' });
    else toast('Removed from your wishlist');
}

const specs = [
    { label: 'Material', value: '3-layer recycled nylon shell' },
    { label: 'Waterproofing', value: '20,000 mm / fully taped seams' },
    { label: 'Weight', value: '415 g (size M)' },
    { label: 'Fit', value: 'Regular, articulated sleeves' },
    { label: 'Care', value: 'Machine wash cold, tumble dry low' },
];

const reviews = [
    { author: 'Marta K.', stars: 5, title: 'Kept me dry all week', body: 'Wore it through four days of rain in the Alps and never felt damp. Packs down small enough for a day bag.' },
    { author: 'Tom R.', stars: 4, title: 'Great, sizing runs large', body: 'Excellent build quality. I normally wear an L and the M fits perfectly, so consider sizing down.' },
    { author: 'Priya S.', stars: 5, title: 'Worth the price', body: 'The pit zips and helmet-compatible hood make it genuinely usable in the mountains, not just on the street.' },
];

const tabs = [
    { value: 'description', label: 'Description' },
    { value: 'specifications', label: 'Specifications' },
    { value: 'reviews', label: 'Reviews', badge: reviews.length },
];

const activeTab = ref('description');

const snippet = [
    '<div class="grid gap-8 lg:grid-cols-2">',
    '    <!-- Gallery -->',
    '    <div>',
    '        <img :src="images[activeImage]" :alt="product.name" class="aspect-square w-full rounded-lg object-cover" />',
    '        <div class="mt-3 grid grid-cols-4 gap-3">',
    '            <button',
    '                v-for="(image, i) in images"',
    '                :key="image"',
    '                type="button"',
    '                class="aspect-square overflow-hidden rounded-md ring-2 ring-offset-2 dark:ring-offset-gray-800"',
    '                :class="activeImage === i ? \'ring-primary-500\' : \'ring-transparent\'"',
    '                @click="activeImage = i"',
    '            >',
    '                <img :src="image" alt="" class="h-full w-full object-cover" />',
    '            </button>',
    '        </div>',
    '    </div>',
    '',
    '    <!-- Details -->',
    '    <div>',
    '        <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">{{ product.name }}</h1>',
    '        <div class="mt-4 flex items-baseline gap-3">',
    '            <span class="text-3xl font-bold text-gray-900 dark:text-gray-100">€{{ product.price }}</span>',
    '            <span class="text-gray-500 line-through dark:text-gray-400">€{{ product.compareAt }}</span>',
    '            <span class="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300">',
    '                -{{ product.discount }}%',
    '            </span>',
    '        </div>',
    '',
    '        <div class="mt-6 flex gap-2">',
    '            <button v-for="color in product.colors" :key="color.value" type="button" :title="color.label"',
    '                class="h-8 w-8 rounded-full ring-2 ring-offset-2 dark:ring-offset-gray-800"',
    '                :class="[color.swatch, activeColor === color.value ? \'ring-primary-500\' : \'ring-transparent\']"',
    '                @click="activeColor = color.value" />',
    '        </div>',
    '',
    '        <div class="mt-6 flex flex-wrap gap-2">',
    '            <button v-for="size in product.sizes" :key="size" type="button"',
    '                class="rounded-md border px-3 py-1.5 text-sm font-medium"',
    '                :class="activeSize === size',
    '                    ? \'border-primary-500 bg-primary-50 text-primary-700 dark:border-primary-400 dark:bg-primary-900/30 dark:text-primary-300\'',
    '                    : \'border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300\'"',
    '                @click="activeSize = size">',
    '                {{ size }}',
    '            </button>',
    '        </div>',
    '',
    '        <div class="mt-6 flex flex-wrap items-center gap-3">',
    '            <div class="flex items-center rounded-md border border-gray-300 dark:border-gray-600">',
    '                <button type="button" class="px-3 py-2" @click="quantity = Math.max(1, quantity - 1)">',
    '                    <NbIcon :name="faMinus" size="sm" />',
    '                </button>',
    '                <span class="w-10 text-center font-medium">{{ quantity }}</span>',
    '                <button type="button" class="px-3 py-2" @click="quantity += 1">',
    '                    <NbIcon :name="faPlus" size="sm" />',
    '                </button>',
    '            </div>',
    '            <PrimaryButton type="button" @click="addToCart">Add to cart</PrimaryButton>',
    '            <SecondaryButton type="button" @click="toggleWishlist">',
    '                <NbIcon :name="faHeart" size="sm" :class="wishlisted ? \'mr-2 text-red-500\' : \'mr-2\'" />',
    '                {{ wishlisted ? \'Saved\' : \'Save\' }}',
    '            </SecondaryButton>',
    '        </div>',
    '    </div>',
    '</div>',
    '',
    '<Tabs v-model="activeTab" :tabs="tabs" class="mt-10 overflow-x-auto">',
    '    <Tab value="description">{{ product.description }}</Tab>',
    '    <Tab value="specifications">',
    '        <Table :show-pagination="false" size="sm">',
    '            <Thead><tr><Th>Attribute</Th><Th>Value</Th></tr></Thead>',
    '            <Tbody>',
    '                <Tr v-for="spec in product.specs" :key="spec.label">',
    '                    <Td label="Attribute" class="font-medium">{{ spec.label }}</Td>',
    '                    <Td label="Value">{{ spec.value }}</Td>',
    '                </Tr>',
    '            </Tbody>',
    '        </Table>',
    '    </Tab>',
    '    <Tab value="reviews">…</Tab>',
    '</Tabs>',
    '',
    '<!-- once, in your root layout -->',
    '<Toaster position="bottom-right" />',
];
</script>

<template>
    <section id="block-product-page">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Product Page</h3>

        <Toaster position="bottom-right" />

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                An e-commerce product detail page: gallery with thumbnails, variant and size pickers, a quantity stepper, PrimaryButton /
                SecondaryButton actions that raise a real toast through Toaster, and a Tabs section holding the description, a Table of
                specifications and the review list.
            </p>

            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="rounded-lg border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-700 dark:bg-gray-800">
                    <div class="grid gap-8 lg:grid-cols-2">
                        <!-- Gallery -->
                        <div>
                            <div
                                class="flex aspect-square w-full items-end rounded-lg bg-gradient-to-br p-4"
                                :class="selectedColor.gradient"
                            >
                                <span class="rounded-md bg-black/40 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                                    {{ selectedColor.label }} · view {{ activeImage + 1 }}
                                </span>
                            </div>

                            <div class="mt-3 grid grid-cols-4 gap-3">
                                <button
                                    v-for="i in 4"
                                    :key="i"
                                    type="button"
                                    class="aspect-square cursor-pointer rounded-md bg-gradient-to-br ring-2 ring-offset-2 transition dark:ring-offset-gray-800"
                                    :class="[selectedColor.gradient, activeImage === i - 1 ? 'ring-primary-500' : 'ring-transparent']"
                                    :aria-label="`View ${i}`"
                                    @click="activeImage = i - 1"
                                />
                            </div>
                        </div>

                        <!-- Details -->
                        <div>
                            <nav class="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                <a href="#" class="hover:text-gray-700 dark:hover:text-gray-200" @click.prevent>Shop</a>
                                <NbIcon :name="faChevronRight" size="12px" />
                                <a href="#" class="hover:text-gray-700 dark:hover:text-gray-200" @click.prevent>Outerwear</a>
                                <NbIcon :name="faChevronRight" size="12px" />
                                <span class="text-gray-700 dark:text-gray-300">Alpine Shell Jacket</span>
                            </nav>

                            <h1 class="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">Alpine Shell Jacket</h1>

                            <div class="mt-2 flex items-center gap-2">
                                <div class="flex items-center gap-0.5">
                                    <NbIcon
                                        v-for="star in 5"
                                        :key="star"
                                        :name="faStar"
                                        size="sm"
                                        :class="star <= rating ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'"
                                    />
                                </div>
                                <span class="text-sm text-gray-600 dark:text-gray-400">{{ rating }}.0 · {{ reviewCount }} reviews</span>
                            </div>

                            <div class="mt-4 flex items-baseline gap-3">
                                <span class="text-3xl font-bold text-gray-900 dark:text-gray-100">€{{ price }}</span>
                                <span class="text-gray-500 line-through dark:text-gray-400">€{{ compareAt }}</span>
                                <span class="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300">
                                    -{{ discount }}%
                                </span>
                            </div>

                            <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
                                A packable three-layer waterproof shell for wet-weather days on the trail, taped seams, pit zips and a
                                helmet-compatible hood, in a fit that still works over a jumper in town.
                            </p>

                            <div class="mt-6">
                                <p class="mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase dark:text-gray-300">
                                    Colour: <span class="font-normal text-gray-500 dark:text-gray-400">{{ selectedColor.label }}</span>
                                </p>
                                <div class="flex gap-2">
                                    <button
                                        v-for="color in colors"
                                        :key="color.value"
                                        type="button"
                                        :title="color.label"
                                        :aria-label="color.label"
                                        class="h-8 w-8 cursor-pointer rounded-full ring-2 ring-offset-2 transition dark:ring-offset-gray-800"
                                        :class="[color.swatch, activeColor === color.value ? 'ring-primary-500' : 'ring-transparent']"
                                        @click="activeColor = color.value"
                                    />
                                </div>
                            </div>

                            <div class="mt-6">
                                <p class="mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase dark:text-gray-300">Size</p>
                                <div class="flex flex-wrap gap-2">
                                    <button
                                        v-for="size in sizes"
                                        :key="size"
                                        type="button"
                                        class="cursor-pointer rounded-md border px-3 py-1.5 text-sm font-medium transition"
                                        :class="
                                            activeSize === size
                                                ? 'border-primary-500 bg-primary-50 text-primary-700 dark:border-primary-400 dark:bg-primary-900/30 dark:text-primary-300'
                                                : 'border-gray-300 text-gray-700 hover:border-gray-400 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500'
                                        "
                                        @click="activeSize = size"
                                    >
                                        {{ size }}
                                    </button>
                                </div>
                            </div>

                            <div class="mt-6 flex flex-wrap items-center gap-3">
                                <div class="flex items-center rounded-md border border-gray-300 dark:border-gray-600">
                                    <button
                                        type="button"
                                        class="cursor-pointer px-3 py-2 text-gray-600 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40 dark:text-gray-400 dark:hover:text-gray-100"
                                        :disabled="quantity <= 1"
                                        aria-label="Decrease quantity"
                                        @click="quantity = Math.max(1, quantity - 1)"
                                    >
                                        <NbIcon :name="faMinus" size="sm" />
                                    </button>
                                    <span class="w-10 text-center text-sm font-medium text-gray-900 dark:text-gray-100">{{ quantity }}</span>
                                    <button
                                        type="button"
                                        class="cursor-pointer px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                                        aria-label="Increase quantity"
                                        @click="quantity += 1"
                                    >
                                        <NbIcon :name="faPlus" size="sm" />
                                    </button>
                                </div>

                                <PrimaryButton type="button" @click="addToCart">Add to cart</PrimaryButton>
                                <SecondaryButton type="button" @click="toggleWishlist">
                                    <NbIcon :name="faHeart" size="sm" :class="wishlisted ? 'mr-2 text-red-500' : 'mr-2'" />
                                    {{ wishlisted ? 'Saved' : 'Save' }}
                                </SecondaryButton>
                            </div>

                            <p class="mt-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <span class="h-2 w-2 rounded-full bg-green-500"></span>
                                In stock, ships within 24 hours
                            </p>
                        </div>
                    </div>

                    <Tabs v-model="activeTab" :tabs="tabs" class="mt-10 overflow-x-auto">
                        <Tab value="description">
                            <div class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                <p>
                                    The Alpine Shell is built for days that start dry and end sideways. A three-layer recycled nylon face
                                    fabric keeps weather out while the backer moves moisture away, so you stay comfortable climbing as well
                                    as standing still.
                                </p>
                                <ul class="space-y-1">
                                    <li v-for="feature in ['Fully taped seams', 'Two-way pit zips', 'Helmet-compatible hood', 'Packs into its own chest pocket']" :key="feature" class="flex items-center gap-2">
                                        <NbIcon :name="faCheck" size="sm" class="text-green-600 dark:text-green-400" />
                                        {{ feature }}
                                    </li>
                                </ul>
                            </div>
                        </Tab>

                        <Tab value="specifications">
                            <Table :show-pagination="false" size="sm">
                                <Thead>
                                    <tr>
                                        <Th>Attribute</Th>
                                        <Th>Value</Th>
                                    </tr>
                                </Thead>
                                <Tbody>
                                    <Tr v-for="spec in specs" :key="spec.label">
                                        <Td label="Attribute" class="font-medium">{{ spec.label }}</Td>
                                        <Td label="Value">{{ spec.value }}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Tab>

                        <Tab value="reviews">
                            <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                                <li v-for="review in reviews" :key="review.author" class="py-4 first:pt-0 last:pb-0">
                                    <div class="flex items-center gap-2">
                                        <div class="flex items-center gap-0.5">
                                            <NbIcon
                                                v-for="star in 5"
                                                :key="star"
                                                :name="faStar"
                                                size="sm"
                                                :class="star <= review.stars ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'"
                                            />
                                        </div>
                                        <span class="text-sm font-semibold text-gray-800 dark:text-gray-100">{{ review.title }}</span>
                                    </div>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ review.body }}</p>
                                    <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">{{ review.author }} · verified buyer</p>
                                </li>
                            </ul>
                        </Tab>
                    </Tabs>
                </div>
            </div>

            <CodePreview :code="snippet" filename="ProductPage.vue" />
        </DocDemoCard>
    </section>
</template>
