<template>
    <div id="configurator-options-ui-container">
        <Fieldset :legend="$t('material')">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <span>{{ $t('materialType') }}</span>
                    <div id="material-options" class="options-container flex flex-row flex-wrap gap-2">
                        <button v-for="material in materials" @click.stop=""
                            class="p-button p-component p-button-secondary p-button-outlined param"
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
            <div id="lighting-options" class="options-container flex flex-col flex-wrap gap-4">
                <div class="flex flex-col gap-2">
                    <span>{{ $t('lightingType') }}</span>
                    <div class="flex-wrap flex gap-4">
                        <div class="flex items-center gap-2 param" :class="{ 'selected': otherOptions.lighting === 0 }">
                            <RadioButton v-model="otherOptions.lighting" inputId="no_lighting" name="light" :value="0"
                                @change="" />
                            <label for="no_lighting">{{ $t('noLighting') }}</label>
                        </div>
                        <div class="flex items-center gap-2 param" :class="{ 'selected': otherOptions.lighting === 1 }">
                            <RadioButton v-model="otherOptions.lighting" inputId="led_strip" name="light" :value="1"
                                @change="" />
                            <label for="led_strip">{{ $t('ledStrip') }}</label>
                        </div>
                        <div class="flex items-center gap-2 param disabled"
                            :class="{ 'selected': otherOptions.lighting === 2 }">
                            <RadioButton v-model="otherOptions.lighting" inputId="led_bar" name="light" :value="2"
                                @change="" disabled />
                            <label for="led_bar">{{ $t('ledBar') }}</label>
                        </div>
                        <div class="flex items-center gap-2 param disabled"
                            :class="{ 'selected': otherOptions.lighting === 3 }">
                            <RadioButton v-model="otherOptions.lighting" inputId="led_channel" name="light" :value="3"
                                @change="" disabled />
                            <label for="led_channel">{{ $t('ledChannel') }}</label>
                        </div>
                        <div class="flex items-center gap-2 param disabled"
                            :class="{ 'selected': otherOptions.lighting === 4 }">
                            <RadioButton v-model="otherOptions.lighting" inputId="various_lighting" name="light"
                                :value="4" @change="" disabled />
                            <label for="various_lighting">{{ $t('various') }}</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span>{{ $t('lightingColor') }}</span>
                    <div id="lighting-colors" class="options-container flex flex-row flex-wrap gap-2">
                        <button v-for="light in lightingColors" @click.stop=""
                            class="p-button p-component p-button-secondary p-button-outlined param"
                            :class="{ disabled: !light.availability }" :disabled="!light.availability">
                            {{ $t(light.name) }}
                        </button>
                        <button @click.stop=""
                            class="p-button p-component p-button-secondary p-button-outlined param disabled" disabled>
                            {{ $t('various') }}
                        </button>
                    </div>
                </div>
            </div>
        </Fieldset>
    </div>
</template>
<script setup>
import { reactive, ref, onMounted } from "vue";

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
/* Lighting colors */
const lightingColors = [
    { name: 'warm', code: '', availability: true },
    { name: 'cold', code: '', availability: true },
    { name: 'neutral', code: '', availability: true },
    { name: 'blue', code: '', availability: true },
    { name: 'red', code: '', availability: true },
    { name: 'green', code: '', availability: false },
    { name: 'RGB', code: '', availability: true },
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

</script>
<style>
& #configurator-options-ui-container {
    & #material-color-options {
        & button {
            width: 24px;
            height: 24px;
        }
    }

    & .param,
    & input {
        color: var(--p-button-outlined-secondary-color);

        &.selected,
        &.active,
        &.checked,
        &:hover:not(.disabled) {
            color: var(--p-fieldset-color);
        }
    }
}
</style>