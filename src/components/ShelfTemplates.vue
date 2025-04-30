<template>
    <div class="card">
        <Panel :header="$t('template')" toggleable collapsed>
            <Carousel :value="state.shelves" :numVisible="7" :numScroll="1" :responsiveOptions="responsiveOptions">
                <template #item="slotProps">
                    <div :id="slotProps.data.id"
                        class="shelf-template border border-surface-200 dark:border-surface-700 m-2 p-4 rounded">
                        <div class="mb-4 flex">
                            <div class="relative mx-auto">
                                <img :src="'http://localhost:5173/src/assets/images/' + slotProps.data.image.customer3d"
                                    :alt="slotProps.data.name" class="rounded" />
                                <Tag v-if="slotProps.data.highlight" :value="slotProps.data.highlight"
                                    :severity="getHighlightColor(slotProps.data.highlight)" class="absolute"
                                    style="left:5px; top: 5px" />
                            </div>
                        </div>
                        <div class="font-medium">{{ $t(slotProps.data.name) }}</div>
                        <div class="flex justify-between items-center">
                            <!-- <div class="mt-0 font-semibold text-surface-500 dark:text-surface-400">{{
                        slotProps.data.price }} GEL</div> -->
                            <!-- <span>
                        <Button icon="pi pi-heart" severity="secondary" outlined />
                        <Button icon="pi pi-shopping-cart" class="ml-2" />
                      </span> -->
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

/* --- */

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

/* --- */

// const getHighlightColor = (highlight) => {
//     switch (highlight) {
//         case 'highlight1':
//             return 'secondary';

//         case 'highlight2':
//             return 'success';

//         case 'highlight3':
//             return 'info';

//         case 'highlight4':
//             return 'warn';

//         case 'highlight5':
//             return 'danger';

//         case 'highlight6':
//             return 'contrast';

//         case 'highlight7':
//             return 'danger';

//         default:
//             return null;
//     }
// };

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
<style scoped></style>