<template>
    <div id="configurator-container"
        class="rounded flex-auto flex flex-col gap-2 py-2 justify-center items-start font-medium">
        <ShelfTemplates />
        <div class="card">
            <Panel toggleable>
                <template #header>
                    <div class="flex items-center gap-2">
                        <span>{{ $t('configurator') }}</span>
                    </div>
                </template>
                <template #icons></template>
                <div id="configurator-scene-container" class="bg-surface-200 dark:bg-surface-950 p-2 mt-2 rounded">
                    <div class="card">
                        <div class="flex flex-row justify-start p-2 gap-2">
                            <Button icon="pi pi-minus" severity="secondary" />
                            <Button icon="pi pi-lightbulb" severity="secondary" />
                            <Button icon="pi pi-cog" severity="secondary" @click="toggleConfiguratorSettingsMenu"
                                class="ml-auto" />
                            <Menu ref="configuratorSettingsMenu" id="config_menu" :model="configuratorSettingsMenuItems"
                                popup />
                        </div>
                    </div>
                    <div class="card">
                        <div class="flex flex-row justify-between p-2 gap-2">
                            <Button icon="pi pi-box" :label="$t('tdv')" severity="primary" />
                            <Button icon="pi pi-info-circle" label="" severity="secondary"
                                @click="configuratorInfoPanel = true" />
                        </div>
                    </div>
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
                            :class="{ disabled: !color.availability }"></div>
                    </div>
                </Fieldset>
                <Fieldset :legend="$t('otherOptions')">
                    <div id="finish" class="configurator-options-container flex flex-col flex-wrap gap-4">
                        <div class="flex items-center gap-2">
                            <Checkbox v-model="finish.backboard" binary inputId="backboard" name="backboard"
                                @change="onBackboardChange" />
                            <label for="backboard">{{ $t('backboard') }}</label>
                        </div>

                        <div class="flex flex-col gap-2">
                            <span>{{ $t('edgeFinish') }}</span>
                            <div class="flex-wrap flex gap-4">
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="finish.edge" inputId="singleEdge" name="edge" :value="1"
                                        @change="onEdgeChange" />
                                    <label for="singleEdge">{{ $t('singleEdge') }}</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="finish.edge" inputId="doubleEdge" name="edge" :value="2"
                                        @change="onEdgeChange" />
                                    <label for="doubleEdge">{{ $t('doubleEdge') }}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fieldset>
                <template #footer>
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <div class="flex items-center gap-2"></div>
                        <span class="text-surface-500 dark:text-surface-400">{{ $t('price') + ' ' + '345' + ' ' +
                            $t('gel') }}
                        </span>
                    </div>
                </template>
            </Panel>
        </div>
        <div class="card">
            <Drawer v-model:visible="configuratorInfoPanel" :header="$t('shelfDetails')" position="bottom"
                style="height: auto">
                <div id="shelf-information-panel">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip
                        ex
                        ea commodo consequat.
                    </p>
                </div>
            </Drawer>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import ShelfTemplates from './ShelfTemplates.vue';

const { t } = useI18n();

/* Error handling */
const emit = defineEmits(['update:error']);

const ERROR_TYPES = {
    NONE: 'NONE',
    MIN_SIZE: 'MIN_SIZE',
    TOUCH_POINTS: 'TOUCH_POINTS',
    INVALID_MATERIAL: 'INVALID_MATERIAL',
};

const ERROR_MESSAGES = {
    [ERROR_TYPES.MIN_SIZE]: 'wrongFormatMessage1',
    [ERROR_TYPES.TOUCH_POINTS]: 'wrongFormatMessage2',
    [ERROR_TYPES.INVALID_MATERIAL]: 'wrongFormatMessage3',
};

// Configurator state (example: dimensions and touch points)
const dimensions = ref({
    width: 50,
    height: 50,
    depth: 30,
});
const touchPoints = ref(2);
const selectedMaterial = ref('d');

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

const validate = () => {
    if (dimensions.value.width < 30 || dimensions.value.height < 30 || dimensions.value.depth < 20) {
        emit('update:error', ERROR_MESSAGES[ERROR_TYPES.MIN_SIZE]);
        return;
    }
    if (touchPoints.value < 2) {
        emit('update:error', ERROR_MESSAGES[ERROR_TYPES.TOUCH_POINTS]);
        return;
    }
    if (!['wood', 'mdf', 'plywood'].includes(selectedMaterial.value)) {
        emit('update:error', ERROR_MESSAGES[ERROR_TYPES.INVALID_MATERIAL]);
        return;
    }
    emit('update:error', null);
};

const debouncedValidate = debounce(validate, 300);

watch(
    [dimensions, touchPoints, selectedMaterial],
    () => {
        debouncedValidate();
    },
    { immediate: true, deep: true }
);

/* Settings */
const configuratorSettingsMenu = ref(null);

const configuratorSettingsMenuItems = computed(() => [
    {
        label: computed(() => t('refresh')),
        icon: 'pi pi-refresh',
    },
]);

/* Scene toolbar */
const configuratorSceneView = ref(false);
const configuratorInfoPanel = ref(false);

const toggleConfiguratorSettingsMenu = (event) => {
    configuratorSettingsMenu.value.toggle(event);
};


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
const finish = ref({
    backboard: false,
    edge: 1,
});

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