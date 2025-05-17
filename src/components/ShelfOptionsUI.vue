<template>
    <div id="configurator-options-ui-container">
        <Fieldset :legend="$t('material')">
            <div class="flex flex-col gap-4">
                <div id="material-options" class="flex flex-col gap-2">
                    <span class="pl-0.5">{{ $t('type') }}</span>
                    <Select v-model="materialVal" inputId="material" :options="materials" optionDisabled="disabled"
                        optionLabel="label" class="w-full sm:w-40 min-w-min" />
                </div>
                <div class="flex flex-col gap-2">
                    <span class="pl-0.5">{{ $t('color') }}</span>
                    <div id="material-color-options" class="flex flex-row flex-wrap gap-1.5">
                        <button v-for="color in materialColors" @click.stop=""
                            :style="`background-color: ${color.code};`"
                            class="p-button p-button-icon-only p-component p-button-secondary p-button-outlined"
                            :class="{ disabled: !color.availability }" :disabled="!color.availability">
                        </button>
                    </div>
                </div>
            </div>
        </Fieldset>
        <Fieldset>
            <template #legend>
                <div class="flex items-center gap-2 p-fieldset-legend-label">
                    <span>{{ $t('otherOptions') }}</span>
                    <!-- <i class="pi pi-info-circle cursor-pointer"
                        style="font-size: 1rem; color: var(--p-surface-400)"></i> -->
                </div>
            </template>
            <div id="other-options" class="flex flex-col gap-4">
                <div id="backboard-options" class="flex items-center gap-2">
                    <Checkbox v-model="otherOptions.backboard" inputId="backboard" name="backboard" binary
                        @change="onBackboardChange" />
                    <label for="backboard">{{ $t('backboard') }}</label>
                </div>
                <div id="edge-options" class="flex flex-col gap-2">
                    <span class="pl-0.5">{{ $t('edgeFinish') }}</span>
                    <Select v-model="otherOptions.edge" inputId="edge" :options="edgeFinishOptions" optionLabel="label"
                        optionValue="value" placeholder="" class="w-full sm:w-40 min-w-min" @change="onEdgeChange" />
                </div>
            </div>
        </Fieldset>
        <Fieldset>
            <template #legend>
                <div class="flex items-center gap-2 p-fieldset-legend-label">
                    <span>{{ $t('lighting') }}</span>
                    <!-- <i class="pi pi-info-circle cursor-pointer"
                        style="font-size: 1rem; color: var(--p-surface-400)"></i> -->
                </div>
            </template>
            <div id="lighting-options" class="flex flex-wrap gap-2 pt-1">
                <Select v-model="lightingTypeVal" :showClear="isClearButtonVisible" inputId="lighting_type"
                    :options="lightingOptions" optionLabel="label" optionDisabled="isDisabled"
                    :placeholder="t('lightingType')" class="min-w-min" @change="handleLightingTypeChange" />
                <Select v-model="lightingVariantVal" inputId="lighting_variant" :options="lightingVariantOptions"
                    optionLabel="label" optionDisabled="isDisabled" :placeholder="t('lightingSize')"
                    :disabled="isVariantSelectDisabled" class=" min-w-min" />
                <Select v-model="lightingColorVal" inputId="lighting_color" :options="lightingColorOptions"
                    optionLabel="label" optionDisabled="isDisabled" :placeholder="t('lightingColor')"
                    :disabled="isColorSelectDisabled" class="min-w-min" />
            </div>
        </Fieldset>
    </div>
</template>
<script setup>
import { reactive, ref, watch, computed, onMounted } from "vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

/* Other options */
const otherOptions = ref({
    backboard: false,
    edge: 0
});

const edgeFinishOptions = ref([
    { name: "Without", label: computed(() => t('without')), value: 0 },
    { name: "Single edge", label: computed(() => t('singleEdge')), value: 1 },
    { name: "Double edge", label: computed(() => t('doubleEdge')), value: 2 }
]);

const onEdgeChange = (event) => {
    if (event.value === 2) {
        otherOptions.value.backboard = false;
    }
};

const onBackboardChange = () => {
    if (otherOptions.value.backboard && otherOptions.value.edge === 2) {
        otherOptions.value.edge = 1;
    }
};

/* Temporary Shelf Options Catalog */
/* Material options */
const materials = ref([
    { name: 'wood', label: computed(() => t('wood')), value: 'wood', availability: true, disabled: false },
    { name: 'mdf', label: computed(() => t('mdf')), value: 'mdf', availability: true, disabled: false },
    { name: 'plywood', label: computed(() => t('plywood')), value: 'plywood', availability: false, disabled: true },
    { name: 'metal', label: computed(() => t('metal')), value: 'metal', availability: false, disabled: true },
    { name: 'glass', label: computed(() => t('glass')), value: 'glass', availability: false, disabled: true },
]);
const materialVal = ref(materials.value[0]);
/* Material color options */
const materialColors = [
    { name: 'white', code: '#f8fafc', availability: true },
    { name: 'gray', code: '#e5e7eb', availability: true },
    { name: 'brown', code: '#a8a29e', availability: true },
    { name: 'yellow', code: '#facc15', availability: true },
    { name: 'red', code: '#f87171', availability: true },
    { name: 'purple', code: '#a78bfa', availability: true },
    { name: 'blue', code: '#60a5fa;', availability: true },
    { name: 'green', code: '#4ade80;', availability: true },
    { name: 'green', code: '#4ade80;', availability: false },
    { name: 'black', code: '#030712;', availability: true },
];
// Standardized lighting options
const lightingOptions = ref([
    { name: 'Without', label: computed(() => t('without')), isAvailable: true, isDisabled: false, isDefault: true },
    { name: 'ledStrip', label: computed(() => t('ledStrip')), isAvailable: true, isDisabled: false },
    { name: 'ledBar', label: computed(() => t('ledBar')), isAvailable: true, isDisabled: false },
    { name: 'ledChannel', label: computed(() => t('ledChannel')), isAvailable: true, isDisabled: false },
    { name: 'various', label: computed(() => t('various')), isAvailable: false, isDisabled: true },
]);
// Standardized lighting variant options
const lightingVariantOptions = ref([
    { name: 'size8', size: '8', label: computed(() => `8${t('mm')}`), isAvailable: true, isDisabled: false, isDefault: true },
    { name: 'size10', size: '10', label: computed(() => `10${t('mm')}`), isAvailable: true, isDisabled: false },
    { name: 'size12', size: '12', label: computed(() => `12${t('mm')}`), isAvailable: false, isDisabled: true },
    { name: 'various', label: computed(() => t('various')), isAvailable: false, isDisabled: true },
]);
// Standardized lighting color options
const lightingColorOptions = ref([
    { name: 'warm', label: computed(() => t('warm')), isAvailable: true, isDisabled: false, isDefault: true },
    { name: 'cold', label: computed(() => t('cold')), isAvailable: true, isDisabled: false },
    { name: 'neutral', label: computed(() => t('neutral')), isAvailable: true, isDisabled: false },
    { name: 'blue', label: computed(() => t('blue')), isAvailable: true, isDisabled: false },
    { name: 'red', label: computed(() => t('red')), isAvailable: true, isDisabled: false },
    { name: 'green', label: computed(() => t('green')), isAvailable: false, isDisabled: true },
    { name: 'RGB', label: computed(() => t('RGB')), isAvailable: true, isDisabled: false },
    { name: 'various', label: computed(() => t('various')), isAvailable: false, isDisabled: true },
]);

// Reactive state for selections
const lightingTypeVal = ref(lightingOptions.value.find(opt => opt.isDefault)); // Default to "Without"
const lightingVariantVal = ref(null);
const lightingColorVal = ref(null);

const isVariantSelectDisabled = computed(() => lightingTypeVal.value?.name === 'Without');
const isColorSelectDisabled = computed(() => lightingTypeVal.value?.name === 'Without');

// Compute if clear button should be visible
const isClearButtonVisible = computed(() => lightingTypeVal.value?.name !== 'Without');

// Handle lighting type changes
const handleLightingTypeChange = (event) => {
    const newValue = event.value;
    if (newValue === null) {
        // On clear, reset to default ("Without")
        lightingTypeVal.value = lightingOptions.value.find(opt => opt.isDefault);
    } else {
        lightingTypeVal.value = newValue;
    }

    // Reset or set defaults for variants and colors
    if (lightingTypeVal.value.name === 'Without') {
        lightingVariantVal.value = null;
        lightingColorVal.value = null;
    } else {
        // Set default variant and color for non-default lighting types
        lightingVariantVal.value = lightingVariantOptions.value.find(opt => opt.isDefault);
        lightingColorVal.value = lightingColorOptions.value.find(opt => opt.isDefault);
    }
};

</script>
<style></style>