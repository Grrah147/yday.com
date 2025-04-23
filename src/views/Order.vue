<template>
  <div id="order" class="card">
    <Stepper value="1" linear>
      <StepItem value="1">
        <Step> {{ translations[language].configureShelf }} </Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col">
            <Configurator />
          </div>
          <div class="py-2">
            <Button :label="translations[language].order" @click="activateCallback('2')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="2">
        <Step> {{ translations[language].orderDetails }} </Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              Content II</div>
          </div>
          <div class="flex py-2 gap-2">
            <Button label="Back" severity="secondary" @click="activateCallback('1')" />
            <Button label="Next" @click="activateCallback('3')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="3">
        <Step> {{ translations[language].payment }} </Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              Content III</div>
          </div>
          <div class="py-2">
            <Button label="Back" severity="secondary" @click="activateCallback('2')" />
          </div>
        </StepPanel>
      </StepItem>
    </Stepper>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import Configurator from '../components/Configurator.vue'

const { translations, language } = inject('language');
</script>

<style scoped></style>