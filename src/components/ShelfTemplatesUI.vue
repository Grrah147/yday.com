<template>
    <div id="shelf-templates-ui-container" class="card w-full select-none">
        <Panel :header="$t('template')" toggleable>
            <Carousel :value="state.shelves" :numVisible="7" :numScroll="1" :responsiveOptions="responsiveOptions">
                <template #item="slotProps">
                    <div :id="slotProps.data.id"
                        class="carousel-item flex flex-col m-1 py-2 px-3 gap-2 justify-center border border-surface-200 dark:border-surface-700 rounded-md"
                        :class="{ 'carousel-item-selected build-from-scratch-item ring-1': slotProps.data.name === 'scratch' }">
                        <Tag v-if="slotProps.data.highlight" :value="slotProps.data.highlight"
                            :severity="getHighlightColor(slotProps.data.highlight)" class="absolute right-3 top-2" />
                        <div class="flex">
                            <div class="carousel-item-image-container mx-auto">
                                <ScratchIcon v-if="slotProps.data.name === 'scratch'" />
                                <img v-else :src="slotProps.data.image['3d']" :alt="slotProps.data.name"
                                    class="rounded" />
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="font-medium">{{ $t(slotProps.data.name) }}</div>
                            <div v-if="slotProps.data.name !== 'scratch'" class="flex justify-between items-center">
                                <div class="mt-0 font-semibold text-surface-500 dark:text-surface-400">
                                    {{ slotProps.data.price }} GEL
                                </div>
                                <div class="flex ml-auto gap-2">
                                    <Button icon="pi pi-pen-to-square" severity="secondary" outlined />
                                    <Button icon="pi pi-cart-arrow-down" severity="secondary" outlined />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </Panel>
    </div>
</template>
<script setup>
import { reactive, ref, onMounted } from "vue";
import ScratchIcon from './ScratchIcon.vue';
import axios from 'axios';

const state = reactive({
    shelves: [],
    isLoading: true
})

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:5000/shelves');
        state.shelves = response.data;
    } catch (error) {
        console.error('Error fetching templates', error);
    } finally {
        state.isLoading = false;
    }
})

const responsiveOptions = ref([
    { breakpoint: '1536px', numVisible: 6, numScroll: 1 },
    { breakpoint: '1400px', numVisible: 5, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 4, numScroll: 1 },
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
]);

const getHighlightColor = (highlight) => {
    switch (highlight) {
        case 'NEW': return 'secondary';
        case 'STANDARD': return 'success';
        case 'GLASS': return 'info';
        case 'WITH LIGHTING': return 'warn';
        case 'METAL': return 'danger';
        case 'highlight6': return 'contrast';
        default: return null;
    }
};
</script>
<style scoped>
#shelf-templates-ui-container {
    & .p-carousel {
        width: 100%;
    }

    & .carousel-item {
        position: relative;
        cursor: pointer;
        opacity: 0.8;

        &.build-from-scratch-item {
            height: 216px;
        }

        &:hover {
            opacity: 1;
        }
    }

    & .carousel-item-image-container {

        & img,
        & svg {
            width: 128px;
            height: 128px;
        }
    }
}
</style>