<template>
  <Card id="contact">
    <template #content>
      <div class="px-6 md:px-12 lg:px-20 py-20">
        <div class="flex flex-col gap-6 md:gap-10 lg:gap-10">
          <div class="flex flex-col gap-4">
            <div class="font-bold text-3xl leading-tight">
              <span class="text-primary-500 dark:text-primary-400 permanent-marker-regular">YDay.com</span>
            </div>
            <div class="font-bold text-3xl leading-tight">
              <span class="text-surface-900 dark:text-surface-0">{{ $t('contactUs') }}</span>
            </div>
            <div class="text-surface-500 dark:text-surface-400 text-lg leading-tight whitespace-pre-wrap">
              {{ $t('intro') }}
            </div>
          </div>
          <div class="flex flex-col gap-4 text-surface-900 dark:text-surface-0 text-lg leading-tight">
            <div class="flex flex-row items-center gap-4">
              <i class="pi pi-phone" style="font-size: 1.5rem"></i>
              <span>{{ $t('phone') }}</span>
            </div>
            <div class="flex flex-row items-center gap-4">
              <i class="pi pi-map-marker" style="font-size: 1.5rem"></i>
              <span>{{ $t('address') }}</span>
            </div>
            <div class="flex flex-row items-center gap-4">
              <i class="pi pi-envelope" style="font-size: 1.5rem"></i>
              <span>{{ $t('email') }}</span>
            </div>
            <div class="flex flex-row items-center gap-4">
              <i class="pi pi-twitter" style="font-size: 1.5rem"></i>
              <span>{{ $t('twitter') }}</span>
            </div>
            <div class="flex flex-row items-center gap-4">
              <i class="pi pi-instagram" style="font-size: 1.5rem"></i>
              <span>{{ $t('instagram') }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
</script>

<style scoped></style>