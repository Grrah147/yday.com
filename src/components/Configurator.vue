<template>
    <div id="configurator-container"
        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex flex-col gap-2 p-2 justify-center items-start font-medium">
        <div class="card">
            <Panel header="შაბლონები" toggleable collapsed>
                <Carousel :value="state.templates" :numVisible="5" :numScroll="1"
                    :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <div class="border border-surface-200 dark:border-surface-700 m-2 p-4">
                            <div class="mb-4 flex">
                                <div class="relative mx-auto">
                                    <img :src="'http://localhost:5173/src/assets/images/' + slotProps.data.image"
                                        :alt="slotProps.data.name" class="rounded" />
                                    <!-- <Tag :value="slotProps.data.inventoryStatus"
                          :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute"
                          style="left:5px; top: 5px" /> -->
                                </div>
                            </div>
                            <div class="font-medium">{{ slotProps.data.name }}</div>
                            <div class="flex justify-between items-center">
                                <!-- <div class="mt-0 font-semibold text-surface-500 dark:text-surface-400">{{
                        slotProps.data.price }} GEL</div> -->
                                <!-- <span>
                        <Button icon="pi pi-heart" severity="secondary" outlined />
                        <Button icon="pi pi-shopping-cart" class="ml-2" />
                      </span> -->
                            </div>
                        </div>
                    </template>
                </Carousel>
            </Panel>
        </div>
        <div class="card">
            <Panel toggleable>
                <template #header>
                    <div class="flex items-center gap-2">
                        <span class="font-bold">კონფიგურატორი</span>
                    </div>
                </template>
                <template #footer>
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <div class="flex items-center gap-2">
                            <!-- <Button icon="pi pi-bookmark" severity="secondary" rounded text></Button> -->
                        </div>
                        <span class="text-surface-500 dark:text-surface-400">ფასი: 345 ლარი</span>
                    </div>
                </template>
                <template #icons>
                    <!-- <div class="card flex justify-center"> -->
                    <SelectButton v-model="sceneTypeValue" :options="sceneTypeOptions" />
                    <!-- </div> -->
                    <Button icon="pi pi-save" severity="secondary" text></Button>
                    <Button icon="pi pi-cog" severity="secondary" text @click="toggleConfiguratorSettingsMenu" />
                    <Menu ref="configuratorSettingsMenu" id="config_menu" :model="configuratorSettingsMenuItems"
                        popup />
                </template>
                <div id="configurator-scene-container" class="bg-surface-100 dark:bg-surface-950">
                </div>
                <Fieldset legend="მატერია">
                    <div id="materials" class="configurator-options-container flex flex-row flex-wrap gap-2">
                        <div v-for="material in materials" @click.stop=""
                            class="border-surface-200 dark:border-surface-700 border rounded"
                            :class="{ disabled: !material.availability }">
                            {{ material.name }}
                        </div>
                    </div>
                </Fieldset>
                <Fieldset legend="ფერი">
                    <div id="colors" class="configurator-options-container flex flex-row flex-wrap gap-2">
                        <div v-for="color in colors" @click.stop="" :style="`background-color: ${color.code};`"
                            class="border-surface-200 dark:border-surface-700 border rounded"
                            :class="{ disabled: !color.availability }">
                        </div>
                    </div>
                </Fieldset>
            </Panel>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
const { translations, language } = inject('language');

/* Template selector */
import { reactive, ref, onMounted } from "vue";
import axios from 'axios';

const state = reactive({
    templates: [],
    isLoading: true
})

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:5000/templates');
        state.templates = response.data;
    } catch (error) {
        console.error('Error fetching templates', error);
    } finally {
        state.isLoading = false;
    }
})

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

/* Configurator */
/* Scene type */
const sceneTypeValue = ref('2D');
const sceneTypeOptions = ref(['2D', '3D']);

/* Settings */
const configuratorSettingsMenu = ref(null);

const configuratorSettingsMenuItems = ref([
    {
        label: 'Refresh',
        icon: 'pi pi-refresh'
    },
]);

const toggleConfiguratorSettingsMenu = (event) => {
    configuratorSettingsMenu.value.toggle(event);
};
/* Config */

/* Materials */
const materials = [
    { name: 'Wood', availability: true },
    { name: 'MDF', availability: true },
    { name: 'Plywood', availability: false },
    { name: 'Metal', availability: false },
    { name: 'Glass', availability: false },
];
/* Colors */
const colors = [
    { name: 'white', code: '#f8fafc', availability: true },
    { name: 'gray', code: '#e5e7eb', availability: true },
    { name: 'brown', code: '#a8a29e', availability: true },
    { name: 'yellow', code: '#facc15', availability: true },
    { name: 'red', code: '#f87171', availability: true },
    { name: 'purple', code: '#a78bfa', availability: false },
    { name: 'blue', code: '#60a5fa;', availability: true },
    { name: 'green', code: '#4ade80;', availability: true },
    { name: 'black', code: '#111827;', availability: true },
];
</script>

<style scoped></style>