<template>
  <div id="order" class="card">
    <Stepper value="1" linear>
      <StepItem value="1">
        <Step>დააკონფიგურე შენი თარო</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col">
            <div id="yday-configurator-container"
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex flex-col gap-2 p-2 justify-center items-start font-medium">
              <div class="card">
                <Panel header="შაბლონები" toggleable>
                  <Carousel :value="state.templates" :numVisible="5" :numScroll="1"
                    :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                      <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
                        <div class="mb-4 flex">
                          <div class="relative mx-auto">
                            <img :src="'http://localhost:5173/src/assets/images/' + slotProps.data.image"
                              :alt="slotProps.data.name" class="rounded" />
                            <!-- <Tag :value="slotProps.data.inventoryStatus"
                          :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute"
                          style="left:5px; top: 5px" /> -->
                          </div>
                        </div>
                        <div class="font-medium">{{ slotProps.data.name }}</div>
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
              <div class="card">
                <Panel toggleable>
                  <template #header>
                    <div class="flex items-center gap-2">
                      <span class="font-bold">კონფიგურატორი</span>
                    </div>
                  </template>
                  <template #footer>
                    <div class="flex flex-wrap items-center justify-between gap-4">
                      <div class="flex items-center gap-2">
                        <div class="card flex justify-center">
                          <SelectButton v-model="sceneTypeValue" :options="sceneTypeOptions" />
                        </div>
                        <!-- <Button icon="pi pi-bookmark" severity="secondary" rounded text></Button> -->
                      </div>
                      <!-- <span class="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span> -->
                      <Button icon="pi pi-save" severity="secondary" rounded text></Button>
                    </div>
                  </template>
                  <template #icons>
                    <Button icon="pi pi-cog" severity="secondary" rounded text
                      @click="toggleConfiguratorSettingsMenu" />
                    <Menu ref="configuratorSettingsMenu" id="config_menu" :model="configuratorSettingsMenuItems"
                      popup />
                  </template>
                  <div id="configurator-scene-container" class="bg-surface-100 dark:bg-surface-950"></div>
                </Panel>
              </div>
            </div>
          </div>
          <div class="py-6">
            <Button label="შეკვეთა" @click="activateCallback('2')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="2">
        <Step>შეკვეთის დეტალები</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              Content II</div>
          </div>
          <div class="flex py-6 gap-2">
            <Button label="Back" severity="secondary" @click="activateCallback('1')" />
            <Button label="Next" @click="activateCallback('3')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="3">
        <Step>გადახდა</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              Content III</div>
          </div>
          <div class="py-6">
            <Button label="Back" severity="secondary" @click="activateCallback('2')" />
          </div>
        </StepPanel>
      </StepItem>
    </Stepper>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const { translations, language } = inject('language');

/* Template selector */
import { reactive, ref, onMounted } from "vue";
import axios from 'axios';

const state = reactive({
  templates: [],
  isLoading: true
})

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/templates');
    state.templates = response.data;
  } catch (error) {
    console.error('Error fetching templates', error);
  } finally {
    state.isLoading = false;
  }
})

const responsiveOptions = ref([
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

const getSeverity = (status) => {
  switch (status) {
    case 'INSTOCK':
      return 'success';

    case 'LOWSTOCK':
      return 'warn';

    case 'OUTOFSTOCK':
      return 'danger';

    default:
      return null;
  }
};

/* Configurator */
/* Scene type */
const sceneTypeValue = ref('2D');
const sceneTypeOptions = ref(['2D', '3D']);

/* Configurator settings */
const configuratorSettingsMenu = ref(null);

const configuratorSettingsMenuItems = ref([
  {
    label: 'Refresh',
    icon: 'pi pi-refresh'
  },
]);

const toggleConfiguratorSettingsMenu = (event) => {
  configuratorSettingsMenu.value.toggle(event);
};
</script>

<style scoped></style>