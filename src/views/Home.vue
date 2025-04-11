<template>
  <card id="home" class="bg-surface-0 dark:bg-surface-950">
    <template #content>
      <div class="bg-surface-0 dark:bg-surface-950 px-6 md:px-12 lg:px-20 py-20 text-center">
        <div class="flex flex-col gap-6 md:gap-10 lg:gap-10">
          <div class="flex flex-col items-center gap-4">
            <div class="font-bold text-3xl leading-tight">
              <span class="text-surface-900 dark:text-surface-0">თაროების ონლაინ მაღაზია, </span>
              <span class="text-primary-500 dark:text-primary-400 permanent-marker-regular">YDay.com</span>
            </div>
            <div class="text-surface-500 dark:text-surface-400 text-lg leading-tight">ჩვენ გთავაზობთ მაღალი ხარისხის,
              სხვადასხვა
              ფუნქციისა და დანიშნულების მქონე, მრავალფეროვან თაროებს,
              თქვენ შეძლებთ შეიძინოთ თარო, რომელიც ზუსტად იქნება მორგებული თქვენს საჭიროებაზე, სივრცეზე, და სტილზე,
              თქვენი
              სახლისა თუ ოფისისთვის.</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="w-full rounded-md p-4">
              <span
                class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                <i class="pi pi-pen-to-square !text-2xl lg:!text-3xl text-primary-500 dark:text-primary-400" />
              </span>
              <div class="flex flex-col gap-1">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">ინოვაციური
                  კონფიგურატორი
                </div>
                <p class="text-surface-500 dark:text-surface-400 leading-normal">ჩვენი ინოვაციური ონლაინ კონფიგურატორის
                  მეშვეობით თქვენ შეძლებთ შექმნათ თქვენი იდეალური თარო.</p>
              </div>
            </div>
            <div class="w-full rounded-md p-4">
              <span
                class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                <i class="pi pi-shopping-bag !text-2xl lg:!text-3xl text-primary-500 dark:text-primary-400" />
              </span>
              <div class="flex flex-col gap-1">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">ონლაინ შეკვეთა და
                  გადახდა
                </div>
                <p class="text-surface-500 dark:text-surface-400 leading-normal">თქვენ შეძლებთ სახლიდან გაუსვლელად,
                  ჩვენი
                  ვებ-საიტის
                  მეშვეობით გააკეთოთ შეკვეთა.</p>
              </div>
            </div>
            <div class="w-full rounded-md p-4">
              <span
                class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                <i class="pi pi-hourglass !text-2xl lg:!text-3xl text-primary-500 dark:text-primary-400" />
              </span>
              <div class="flex flex-col gap-1">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">სწრაფი დამზადება
                </div>
                <p class="text-surface-500 dark:text-surface-400 leading-normal">უმოკლეს ვადებში მოხდება თქვენი შეკვეთის
                  დამუშავება და დამზადება.</p>
              </div>
            </div>
            <div class="w-full rounded-md p-4">
              <span
                class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                <i class="pi pi-truck !text-2xl lg:!text-3xl text-primary-500 dark:text-primary-400" />
              </span>
              <div class="flex flex-col gap-1">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">უფუასო მიტანა და
                  მონტაჟი
                </div>
                <p class="text-surface-500 dark:text-surface-400 leading-normal">თქვენ შეძლებთ ისარგებლოთ უფასო მიტანისა
                  და მონტაჟის სერვისით, უსწრაფეს ვადებში.</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center gap-4">
            <Button asChild v-slot="slotProps">
              <RouterLink to="/order" :class="slotProps.class" class="p-button-lg">
                <span class="p-button-label">შეუკვეთე</span>
                <span class="p-button-icon pi pi-angle-double-right"></span>
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
  background-color: var(--p-surface-0);
}

#home.dark\:bg-surface-950 {
  @media (prefers-color-scheme: dark) {
    background-color: var(--p-surface-950);
  }
}
</style>
