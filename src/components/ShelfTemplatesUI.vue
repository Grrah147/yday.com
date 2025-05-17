<template>
    <div id="shelf-templates-ui-container" class="card w-full select-none">
        <Panel :header="$t('template')" toggleable collapsed>
            <Carousel :value="state.shelves" :numVisible="7" :numScroll="1" :responsiveOptions="responsiveOptions">
                <template #item="slotProps">
                    <div :id="slotProps.data.id"
                        class="shelf-template border border-surface-200 dark:border-surface-700 m-1 p-3 rounded-md"
                        :class="{ 'shelf-template-selected ring-1': slotProps.data.name === 'scratch' }">
                        <i class="check pi pi-check absolute top-4 left-4 invisible"></i>
                        <Tag v-if="slotProps.data.highlight" :value="slotProps.data.highlight"
                            :severity="getHighlightColor(slotProps.data.highlight)" class="absolute right-2 top-2" />
                        <div class="mb-2 flex">
                            <div class="relative shelf-image-container mx-auto">
                                <svg v-if="slotProps.data.name === 'scratch'" width="205" height="205"
                                    viewBox="0 0 54.239582 54.239583" version="1.1" id="scratch-svg"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
                                    <path
                                        d="m 32.841379,20.273711 q 0.06615,-0.06614 0.198437,-0.115755 0.132292,-0.04961 0.314192,-0.04961 0.181901,0 0.314192,0.06615 0.148828,0.04961 0.248047,0.132291 0.08268,0.09922 0.148828,0.248047 0.06614,0.148828 0.06614,0.314192 0.01654,0.165364 -0.03307,0.297655 -0.04961,0.132292 -0.132291,0.198438 v 0 l -7.242954,7.25949 -1.223696,0.115755 0.09922,-1.207159 7.242954,-7.259491 z m 2.100126,-0.992185 q -0.314192,-0.314192 -0.727603,-0.46302 -0.41341,-0.148828 -0.826821,-0.165364 -0.41341,-0.01654 -0.843358,0.132291 -0.41341,0.132292 -0.727602,0.46302 v 0 l -7.441392,7.441392 q -0.08268,0.09922 -0.148828,0.214973 -0.04961,0.115755 -0.06614,0.248047 l -0.181901,2.331636 q -0.01654,0.148827 0.03307,0.314192 0.06614,0.148828 0.1819,0.248046 0.115755,0.115755 0.264583,0.181901 0.148828,0.04961 0.314192,0.03307 l 2.348173,-0.214974 q 0.132291,-0.01654 0.248046,-0.06615 0.115755,-0.04961 0.198437,-0.148827 l 7.441392,-7.441392 q 0.330728,-0.330729 0.46302,-0.744139 0.132291,-0.429947 0.115755,-0.826821 -0.01654,-0.413411 -0.181901,-0.810285 -0.148828,-0.413411 -0.46302,-0.727603 z M 21.13359,20.108347 q -1.025259,0 -1.752862,0.727603 -0.727602,0.727603 -0.727602,1.752861 v 10.517167 q 0,1.025258 0.727602,1.752861 0.727603,0.727603 1.752862,0.727603 h 10.517166 q 1.025259,0 1.752862,-0.727603 0.727602,-0.727603 0.727602,-1.752861 v -5.258584 q 0,-0.297655 -0.214973,-0.512629 -0.214974,-0.214973 -0.512629,-0.214973 -0.297656,0 -0.51263,0.214973 -0.214973,0.214974 -0.214973,0.512629 v 5.258584 q 0,0.429947 -0.297656,0.727603 -0.297655,0.297655 -0.727603,0.297655 H 21.13359 q -0.429947,0 -0.727603,-0.297655 -0.297656,-0.297656 -0.297656,-0.727603 V 22.588811 q 0,-0.429947 0.297656,-0.727603 0.297656,-0.297655 0.727603,-0.297655 h 5.258583 q 0.297656,0 0.512629,-0.214974 0.214974,-0.214973 0.214974,-0.512629 0,-0.297656 -0.214974,-0.512629 -0.214973,-0.214974 -0.512629,-0.214974 z"
                                        aria-label="" />
                                </svg>
                                <img v-else :src="slotProps.data.image['3d']" :alt="slotProps.data.name"
                                    class="rounded" />
                            </div>
                        </div>
                        <div class="font-medium">{{ $t(slotProps.data.name) }}</div>
                        <div v-if="slotProps.data.name !== 'scratch'" class=" flex justify-between items-center">
                            <div class="mt-0 font-semibold text-surface-500 dark:text-surface-400">{{
                                slotProps.data.price }} GEL</div>
                            <div class="ml-auto">
                                <Button icon="pi pi-pen-to-square" severity="secondary" outlined />
                                <Button icon="pi pi-cart-arrow-down" severity="secondary" outlined class="ml-2" />
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

const getHighlightColor = (highlight) => {
    switch (highlight) {
        case 'NEW':
            return 'secondary';

        case 'STANDARD':
            return 'success';

        case 'GLASS':
            return 'info';

        case 'WITH LIGHTING':
            return 'warn';

        case 'METAL':
            return 'danger';

        case 'highlight6':
            return 'contrast';

        default:
            return null;
    }
};

const responsiveOptions = ref([
    {
        breakpoint: '1536px',
        numVisible: 6,
        numScroll: 1
    },
    {
        breakpoint: '1400px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

</script>
<style></style>