<template>
    <div id="configurator-options-ui-container">
        <Fieldset :legend="$t('material')">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <span>{{ $t('materialType') }}</span>
                    <div id="material-options" class="options-container flex flex-row flex-wrap gap-2">
                        <button v-for="material in materials" @click.stop=""
                            class=" selected p-button p-component p-button-secondary p-button-outlined param"
                            :class="{ disabled: !material.availability }" :disabled="!material.availability">
                            {{ $t(material.name) }}
                        </button>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span>{{ $t('color') }}</span>
                    <div id="material-color-options" class="options-container flex flex-row flex-wrap gap-2">
                        <button v-for="color in materialColors" @click.stop=""
                            :style="`background-color: ${color.code};`"
                            class="p-button p-component p-button-secondary p-button-outlined param"
                            :class="{ disabled: !color.availability }" :disabled="!color.availability">
                        </button>
                    </div>
                </div>
            </div>
        </Fieldset>
        <Fieldset :legend="$t('otherOptions')">
            <div id="other-options" class="options-container flex flex-col flex-wrap gap-4">
                <div class="flex items-center gap-2 param" :class="{ 'selected': otherOptions.backboard }">
                    <Checkbox v-model="otherOptions.backboard" binary inputId="backboard" name="backboard"
                        @change="onBackboardChange" />
                    <label for="backboard">{{ $t('backboard') }}</label>
                </div>
                <div class="flex flex-col gap-2">
                    <span>{{ $t('edgeFinish') }}</span>
                    <div class="flex-wrap flex gap-4">
                        <div class="flex items-center gap-2 param" :class="{ 'selected': otherOptions.edge === 1 }">
                            <RadioButton v-model="otherOptions.edge" inputId="single_edge" name="edge" :value="1"
                                @change="onEdgeChange" />
                            <label for="single_edge">{{ $t('singleEdge') }}</label>
                        </div>
                        <div class="flex items-center gap-2 param" :class="{ 'selected': otherOptions.edge === 2 }">
                            <RadioButton v-model="otherOptions.edge" inputId="double_edge" name="edge" :value="2"
                                @change="onEdgeChange" />
                            <label for="double_edge">{{ $t('doubleEdge') }}</label>
                        </div>
                    </div>
                </div>
            </div>
        </Fieldset>
        <Fieldset>
            <template #legend>
                <div class="flex items-center gap-1.5 p-fieldset-legend-label">
                    <span>{{ $t('lighting') }}</span>
                    <i class="pi pi-info-circle cursor-pointer"
                        style="font-size: 1rem; color: var(--p-surface-400)"></i>
                </div>
            </template>
            <div id="lighting-options" class="options-container flex flex-wrap justify-start items-stretch gap-2">
                <FloatLabel class="w-full sm:w-56" variant="in">
                    <Select v-model="lightingVal" showClear inputId="lighting" :options="lighting"
                        optionDisabled="disabled" optionLabel="label" variant="filled" class="w-full text-sm py-0" />
                    <label for="lighting">{{ $t('lightingType') }}</label>
                </FloatLabel>
                <FloatLabel class="w-full sm:w-56" variant="in">
                    <Select v-model="lightingVariantVal" showClear inputId="lighting_variant"
                        :options="lightingVariants" optionDisabled="disabled" optionLabel="label" variant="filled"
                        class="w-full text-sm py-0" />
                    <label for="lighting_variant">{{ $t('lightingSize') }}</label>
                </FloatLabel>
                <FloatLabel class="w-full sm:w-56" variant="in">
                    <Select v-model="lightingColorVal" showClear inputId="lighting_color" :options="lightingColors"
                        optionDisabled="disabled" optionLabel="label" variant="filled" class="w-full text-sm py-0" />
                    <label for="lighting_color">{{ $t('lightingColor') }}</label>
                </FloatLabel>
            </div>
        </Fieldset>
    </div>
</template>
<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

/* Temporary Shelf Options Catalog */
/* Material options */
const materials = [
    { name: 'wood', availability: true },
    { name: 'mdf', availability: true },
    { name: 'plywood', availability: false },
    { name: 'metal', availability: false },
    { name: 'glass', availability: false },
];
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

/* Other options */
const otherOptions = ref({
    backboard: false,
    edge: 1,
    lighting: 0
});

const onBackboardChange = () => {
    if (otherOptions.value.backboard) {
        otherOptions.value.edge = 1;
    }
};

const onEdgeChange = () => {
    if (otherOptions.value.edge === 2) {
        otherOptions.value.backboard = false;
    }
};


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

const lightingColorVal = ref();
const lightingVariantVal = ref();
const lightingVal = ref();

</script>
<style></style>