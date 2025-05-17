<template>
    <div id="fabric-scene-container" class="w-full h-full relative">
        <div id="fabric-toolbar" class="flex absolute w-full flex-row justify-between align-middle">
            <div id="tools" class="flex flex-col md:flex-row justify-start p-2 gap-1 rounded-md">
                <Button id="default_cursor_component" icon="pi pi-file-edit" severity="secondary" text />
                <Button id="frame_component" icon="pi pi-expand" severity="secondary" text />
                <Button id="plank_h_component" icon="pi pi-arrows-h" severity="secondary" text />
                <Button id="plank_v_component" icon="pi pi-arrows-v" severity="secondary" text />
                <Button id="plank_any_component" icon="pi pi-arrow-up-right-and-arrow-down-left-from-center"
                    severity="secondary" text />
                <Button id="wine_rack_component" icon="pi pi-hourglass" severity="secondary" text />
                <Button id="led_component" icon="pi pi-lightbulb" severity="secondary" text />
            </div>
            <div class="flex flex-row self-start p-2 gap-1">
                <Button id="configurator_refresh" icon="pi pi-cog" severity="secondary" text
                    @click="toggleConfiguratorSettingsMenu" />
                <Menu ref="configuratorSettingsMenu" id="configurator_menu" :model="configuratorSettingsMenuItems"
                    popup />
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

/* Settings */
const configuratorSettingsMenu = ref(null);

const configuratorSettingsMenuItems = computed(() => [
    {
        label: computed(() => t('refresh')),
        icon: 'pi pi-refresh',
    },
]);

const toggleConfiguratorSettingsMenu = (event) => {
    configuratorSettingsMenu.value.toggle(event);
};

</script>
<style scoped>
#fabric-scene-container {
    & #fabric-toolbar {
        & #tools {
            background: var(--p-content-background);
            border: 1px solid var(--p-content-border-color);
            color: var(--p-content-color);
        }
    }
}
</style>
