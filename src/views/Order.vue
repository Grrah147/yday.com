<template>
  <div id="order" class="card">
    <Stepper value="1" linear>
      <StepItem value="1">
        <Step>{{ $t('configureShelf') }}</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col">
            <Configurator @update:error="updateError" />
          </div>
          <div class="flex py-2 gap-2">
            <Button :label="$t('orderIt')" icon="pi pi-shopping-bag" iconPos="right"
              @click="proceed('order', activateCallback)" />
            <Button :label="$t('addToCart')" icon="pi pi-cart-arrow-down" iconPos="right" severity="secondary"
              @click="proceed('cart', activateCallback)" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="2">
        <Step>{{ $t('orderDetails') }}</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              Content II
            </div>
          </div>
          <div class="flex py-2 gap-2">
            <Button :label="$t('back')" severity="secondary" @click="activateCallback('1')" />
            <Button :label="$t('next')" @click="activateCallback('3')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="3">
        <Step>{{ $t('payment') }}</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              Content III
            </div>
          </div>
          <div class="py-2">
            <Button :label="$t('back')" severity="secondary" @click="activateCallback('2')" />
          </div>
        </StepPanel>
      </StepItem>
    </Stepper>
    <div class="configurator-warning-message-container card flex justify-center">
      <Toast position="bottom-center" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Configurator from '../components/Configurator.vue';
import { useToast } from 'primevue/usetoast';

const { t } = useI18n();
const toast = useToast();

const errorMessage = ref(null);

const updateError = (message) => {
  errorMessage.value = message;
};

const showWarn = () => {
  if (!errorMessage.value) return;

  toast.add({
    severity: 'warn',
    summary: computed(() => t('wrongFormat')),
    detail: computed(() => t(errorMessage.value)),
  });
};

const proceed = (action, activateCallback) => {
  if (errorMessage.value) {
    showWarn();
    return;
  }

  if (action === 'order') {
    activateCallback('2');
  } else if (action === 'cart') {
    // Add to cart functionality
    //
    // toast.add({
    //   severity: 'success',
    //   summary: 'Success',
    //   detail: 'Shelf added to cart.',
    //   life: 3000,
    // });
  }
};
</script>

<style scoped></style>