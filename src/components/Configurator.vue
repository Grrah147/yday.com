<template>
    <div id="configurator-container"
        class="flex-auto flex flex-col justify-center items-start gap-2 py-2 font-medium rounded">
        <ShelfTemplatesUI />
        <div class="card w-full">
            <Panel toggleable>
                <template #header>
                    <div class="flex items-center gap-2 p-panel-title">
                        <span>{{ $t('configurator') }}</span>
                    </div>
                </template>
                <template #icons></template>
                <div id="configurator-scene-container"
                    class="w-full h-[500px] relative p-4 bg-surface-200 dark:bg-surface-950 rounded-md">
                    <ThreeScene v-if="threeScene" />
                    <FabricScene v-else />
                    <div class="absolute bottom-4 right-4">
                        <Button id="scene-view-btn" :label="threeScene ? $t('twoDV') : $t('threeDV')"
                            :icon="threeScene ? 'pi pi-pen-to-square' : 'pi pi-box'" @click="threeScene = !threeScene"
                            severity="primary" />
                    </div>
                </div>
                <ShelfOptionsUI />
                <template #footer>
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <div class="flex items-center gap-2">
                            <Button id="configurator-shelf-info-panel-btn" icon="pi pi-info-circle"
                                :label="$t('fullDetails')" severity="secondary"
                                @click="configuratorShelfInfoPanel = true" />
                        </div>
                        <span class="configurator-shelf-price text-surface-500 dark:text-surface-400">{{ $t('price') +
                            ' ' + '345' +
                            ' ' +
                            $t('gel') }}
                        </span>
                    </div>
                </template>
            </Panel>
        </div>
        <ShelfInfo v-model:visible="configuratorShelfInfoPanel" />
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import ShelfTemplatesUI from './ShelfTemplatesUI.vue';
import FabricScene from './FabricScene.vue';
import ThreeScene from './ThreeScene.vue';
import ShelfOptionsUI from './ShelfOptionsUI.vue';
import ShelfInfo from './ShelfInfo.vue';

const { t } = useI18n();

const threeScene = ref(false);
const configuratorShelfInfoPanel = ref(false);

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
const selectedMaterial = ref('wood');

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
</script>

<style></style>