<template>
  <card id="contact">
    <template #content>
      <div class="px-6 md:px-12 lg:px-20 py-20">
        <div class="flex flex-col gap-6 md:gap-10 lg:gap-10">
          <div class="flex flex-col gap-4">
            <div class="font-bold text-3xl leading-tight">
              <span class="text-primary-500 dark:text-primary-400 permanent-marker-regular"> YDay.com</span>
            </div>
            <div class="font-bold text-3xl leading-tight">
              <span class="text-surface-900 dark:text-surface-0"> {{
                translations[language].contactUs }} </span>
            </div>
            <div class="text-surface-500 dark:text-surface-400 text-lg leading-tight whitespace-pre-wrap"> {{
              translations[language].intro }}
            </div>
          </div>
          <div class="flex flex-col gap-4 text-surface-900 dark:text-surface-0 text-lg leading-tight">
            <div class="flex flex-row items-center gap-4">
              <i class="pi pi-phone" style="font-size: 1.5rem"></i>
              <span>+995 598 282 060</span>
            </div>
            <div class="flex flex-row items-center gap-4">
              <i class="pi pi-map-marker" style="font-size: 1.5rem"></i>
              <span> {{
                translations[language].address }} </span>
            </div>
            <div class="flex flex-row items-center gap-4">
              <i class="pi pi-envelope" style="font-size: 1.5rem"></i>
              <span>info@yday.com</span>
            </div>
            <div class="flex flex-row items-center gap-4">
              <i class="pi pi-instagram" style="font-size: 1.5rem"></i>
              <span>@yday.com</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const { translations, language } = inject('language');
    return { translations, language };
  },
};
</script>

<style scoped></style>