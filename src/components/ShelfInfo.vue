<template>
    <div class="card w-full">
        <Drawer v-model:visible="toggleShelfInfo" :header="$t('shelfDetails')" position="bottom" style="height: auto">
            <div id="configurator-shelf-info-panel">
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
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
    visible: Boolean,
});

const emit = defineEmits(['update:visible']);

const toggleShelfInfo = computed({
    get: () => props.visible,
    set: (val) => emit('update:visible', val),
});

</script>
<style></style>
