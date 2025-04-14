<template>
  <card id="home">
    <template #content>
      <div class="px-6 md:px-12 lg:px-20 py-20 text-center">
        <div class="flex flex-col gap-6 md:gap-10 lg:gap-10">
          <div class="flex flex-col items-center gap-4">
            <div class="font-bold text-3xl leading-tight">
              <span class="text-surface-900 dark:text-surface-0"> {{ translations[language].welcome }} </span>
              <span class="text-primary-500 dark:text-primary-400 permanent-marker-regular"> YDay.com</span>
            </div>
            <div class="text-surface-500 dark:text-surface-400 leading-tight whitespace-pre"> {{
              translations[language].intro }}
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="w-full rounded-md p-4">
              <span
                class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                <i class="pi pi-pen-to-square !text-2xl lg:!text-3xl text-primary-500 dark:text-primary-400" />
              </span>
              <div class="flex flex-col gap-1">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight"> {{
                  translations[language].ydAdv1 }}
                </div>
                <p class="text-surface-500 dark:text-surface-400 leading-normal"> {{ translations[language].ydAdv1Desc
                }} </p>
              </div>
            </div>
            <div class="w-full rounded-md p-4">
              <span
                class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                <i class="pi pi-shopping-bag !text-2xl lg:!text-3xl text-primary-500 dark:text-primary-400" />
              </span>
              <div class="flex flex-col gap-1">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight"> {{
                  translations[language].ydAdv2 }}
                </div>
                <p class="text-surface-500 dark:text-surface-400 leading-normal"> {{ translations[language].ydAdv2Desc
                }} </p>
              </div>
            </div>
            <div class="w-full rounded-md p-4">
              <span
                class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                <i class="pi pi-hourglass !text-2xl lg:!text-3xl text-primary-500 dark:text-primary-400" />
              </span>
              <div class="flex flex-col gap-1">
                <div class="text-surface-900 dark:text-surface-0  text-xl font-medium leading-tight"> {{
                  translations[language].ydAdv3 }}
                </div>
                <p class="text-surface-500 dark:text-surface-400 leading-normal"> {{ translations[language].ydAdv3Desc
                }} </p>
              </div>
            </div>
            <div class="w-full rounded-md p-4">
              <span
                class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                <i class="pi pi-truck !text-2xl lg:!text-3xl text-primary-500 dark:text-primary-400" />
              </span>
              <div class="flex flex-col gap-1">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight"> {{
                  translations[language].ydAdv4 }}
                </div>
                <p class="text-surface-500 dark:text-surface-400 leading-normal"> {{ translations[language].ydAdv4Desc
                }} </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center gap-4">
            <Button asChild v-slot="slotProps">
              <RouterLink to="/order" :class="slotProps.class" class="p-button-lg">
                <span class="p-button-label"> {{ translations[language].order }} </span>
                <span class="p-button-icon pi pi-chevron-right"></span>
              </RouterLink>
            </Button>
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

<style scoped>
#home {
  flex: 1;
}
</style>