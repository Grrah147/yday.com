<template>
    <div id="configurator-container"
        class="rounded flex-auto flex flex-col gap-2 py-2 justify-center items-start font-medium">
        <ShelfTemplates />
        <div class="card">
            <Panel toggleable>
                <template #header>
                    <div class="flex items-center gap-2">
                        <span> {{ $t('configurator') }} </span>
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
                </template>
                <div id="configurator-scene-container" class="bg-surface-100 dark:bg-surface-950 p-4 mt-2 rounded">
                    <div class="card">
                        <Toolbar>
                            <template #start>
                                <Button icon="pi pi-cog" severity="secondary" text
                                    @click="toggleConfiguratorSettingsMenu" />
                                <Menu ref="configuratorSettingsMenu" id="config_menu"
                                    :model="configuratorSettingsMenuItems" popup />
                                <Button icon="pi pi-minus" class="mr-2" severity="secondary" text />
                                <Button icon="pi pi-lightbulb" class="mr-2" severity="secondary" text />

                            </template>

                            <template #center>
                            </template>

                            <template #end>
                                <div class="flex flex-wrap gap-2">
                                    <Button icon="pi pi-box" label="3D View" severity="primary" />
                                    <Button icon="pi pi-info-circle" label="" severity="secondary" />
                                    <!-- <SplitButton label="Save" :model="configuratorSceneToolbarItems"></SplitButton> -->
                                </div>
                            </template>
                        </Toolbar>
                    </div>
                    <Message severity="error" hidden>Error Message</Message>
                </div>
                <Fieldset :legend="$t('material')">
                    <div id="materials" class="configurator-options-container flex flex-row flex-wrap gap-2">
                        <div v-for="material in materials" @click.stop=""
                            class="param border-surface-200 dark:border-surface-700 border rounded"
                            :class="{ disabled: !material.availability }">
                            {{ $t(material.name) }}
                        </div>
                    </div>
                </Fieldset>
                <Fieldset :legend="$t('color')">
                    <div id="colors" class="configurator-options-container flex flex-row flex-wrap gap-2">
                        <div v-for="color in colors" @click.stop="" :style="`background-color: ${color.code};`"
                            class="param border-surface-200 dark:border-surface-700 border rounded"
                            :class="{ disabled: !color.availability }">
                        </div>
                    </div>
                </Fieldset>
                <Fieldset :legend="$t('otherOptions')">
                    <div id="finish" class="configurator-options-container flex flex-col flex-wrap gap-4">
                        <div class="flex items-center gap-2">
                            <Checkbox v-model="finish.backboard" binary inputId="backboard" name="backboard"
                                @change="onBackboardChange" />
                            <label for="backboard"> {{ $t('backboard') }} </label>
                        </div>

                        <div class="flex flex-col gap-2">
                            <span> {{ $t('edgeFinish') }} </span>
                            <div class="flex-wrap flex gap-4">
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="finish.edge" inputId="singleEdge" name="edge" :value="1"
                                        @change="onEdgeChange" />
                                    <label for="singleEdge"> {{ $t('singleEdge') }} </label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="finish.edge" inputId="doubleEdge" name="edge" :value="2"
                                        @change="onEdgeChange" />
                                    <label for="doubleEdge"> {{ $t('doubleEdge') }} </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fieldset>
            </Panel>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue';
import ShelfTemplates from './ShelfTemplates.vue'
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

/* Settings */
const configuratorSettingsMenu = ref(null);

const configuratorSettingsMenuItems = computed(() => [
    {
        label: t('refresh'), // Dynamic translation
        icon: 'pi pi-refresh',
        // command: () => console.log('Refresh clicked'),
    },
]);

/* Scene toolbar */
const configuratorSceneView = ref(false);

const toggleConfiguratorSettingsMenu = (event) => {
    configuratorSettingsMenu.value.toggle(event);
};

const configuratorSceneToolbarItems = ref([
    {
        label: 'Update',
        icon: 'pi pi-refresh'
    },
    {
        label: 'Delete',
        icon: 'pi pi-times'
    }
])

/* Config */
/* Materials */
const materials = [
    { name: 'wood', availability: true },
    { name: 'mdf', availability: true },
    { name: 'plywood', availability: false },
    { name: 'metal', availability: false },
    { name: 'glass', availability: false },
];
/* Colors */
const colors = [
    { name: 'white', code: '#f8fafc', availability: true },
    { name: 'gray', code: '#e5e7eb', availability: true },
    { name: 'brown', code: '#a8a29e', availability: true },
    { name: 'yellow', code: '#facc15', availability: true },
    { name: 'red', code: '#f87171', availability: true },
    { name: 'purple', code: '#a78bfa', availability: true },
    { name: 'blue', code: '#60a5fa;', availability: true },
    { name: 'green', code: '#4ade80;', availability: true },
    { name: 'black', code: '#030712;', availability: true },
];
/* Finish */
const finish = ref(
    {
        backboard: false,
        edge: 1
    }
);

const onBackboardChange = () => {
    if (finish.value.backboard) {
        finish.value.edge = 1;
    }
};

const onEdgeChange = () => {
    if (finish.value.edge === 2) {
        finish.value.backboard = false;
    }
};
</script>
<style scoped></style>