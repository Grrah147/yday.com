<template>
    <div id="configurator-options-ui-container">
        <Fieldset :legend="$t('material')">
            <div class="flex flex-col gap-4">
                <div id="material-options" class="flex flex-col gap-2">
                    <span>{{ $t('type') }}</span>
                    <Select v-model="materialVal" inputId="material" :options="materials" optionDisabled="disabled"
                        optionLabel="label" class="w-full sm:w-56" />
                </div>
                <div class="flex flex-col gap-2">
                    <span>{{ $t('color') }}</span>
                    <div id="material-color-options" class="flex flex-row flex-wrap gap-1.5">
                        <button v-for="color in materialColors" @click.stop=""
                            :style="`background-color: ${color.code};`"
                            class="p-button p-component p-button-secondary p-button-outlined param"
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
                    <span>{{ $t('edgeFinish') }}</span>
                    <Select v-model="otherOptions.edge" inputId="edge" :options="edgeFinishOptions" optionLabel="label"
                        optionValue="value" placeholder="" class="w-full sm:w-56" @change="onEdgeChange" />
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
            <div id="lighting-options" class="flex flex-wrap gap-y-4 gap-x-2 pt-2">
                <floatLabel class="w-full sm:w-56" variant="on">
                    <Select v-model="lightingTypeVal" showClear inputId="lighting_type" :options="lighting"
                        optionDisabled="disabled" optionLabel="label" class="w-full" />
                    <label for="lighting_type">{{ $t('lightingType') }}</label>
                </floatLabel>
                <floatLabel class="w-full sm:w-56" variant="on">
                    <Select v-model="lightingVariantVal" inputId="lighting_variant" :options="lightingVariants"
                        optionDisabled="disabled" optionLabel="label" class="w-full" />
                    <label for="lighting_variant">{{ $t('lightingSize') }}</label>
                </floatLabel>
                <floatLabel class="w-full sm:w-56" variant="on">
                    <Select v-model="lightingColorVal" inputId="lighting_color" :options="lightingColors"
                        optionDisabled="disabled" optionLabel="label" class="w-full" />
                    <label for="lighting_color">{{ $t('lightingColor') }}</label>
                </floatLabel>
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
/* Lighting */
const lighting = ref([
    { name: 'ledStrip', label: computed(() => t('ledStrip')), available: true, disabled: false },
    { name: 'ledBar', label: computed(() => t('ledBar')), available: true, disabled: false },
    { name: 'ledChannel', label: computed(() => t('ledChannel')), available: true, disabled: false },
    { name: 'various', label: computed(() => t('various')), available: false, disabled: true },
]);
/* Lighting sizes */
const lightingVariants = ref([
    { name: '', size: '8', label: computed(() => '8' + t('mm')), code: '', availability: true, disabled: false },
    { name: '', size: '10', label: computed(() => '10' + t('mm')), code: '', availability: true, disabled: false },
    { name: '', size: '12', label: computed(() => '12' + t('mm')), code: '', availability: false, disabled: true },
    { name: 'various', label: computed(() => t('various')), available: false, disabled: true }
]);
/* Lighting colors */
const lightingColors = ref([
    { name: 'warm', label: computed(() => t('warm')), code: '', availability: true, disabled: false },
    { name: 'cold', label: computed(() => t('cold')), code: '', availability: true, disabled: false },
    { name: 'neutral', label: computed(() => t('neutral')), code: '', availability: true, disabled: false },
    { name: 'blue', label: computed(() => t('blue')), code: '', availability: true, disabled: false },
    { name: 'red', label: computed(() => t('red')), code: '', availability: true, disabled: false },
    { name: 'green', label: computed(() => t('green')), code: '', availability: false, disabled: true },
    { name: 'RGB', label: computed(() => t('RGB')), code: '', availability: true, disabled: false },
    { name: 'various', label: computed(() => t('various')), available: false, disabled: true }
]);

const lightingTypeVal = ref();
const lightingVariantVal = ref();
const lightingColorVal = ref();

</script>
<style></style>