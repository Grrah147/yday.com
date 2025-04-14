<template>
    <div id="not-found">
        <Card class="text-center w-lg">
            <template #title>
                <div class="flex flex-col gap-4 text-2xl">
                    <i class="pi pi-exclamation-triangle" style="font-size: 2.5rem"></i>
                    <span> {{ translations[language].notFoundTitle }} </span>
                </div>
            </template>
            <template #content>
                <p class="m-0"> {{ translations[language].notFoundContent }} </p>
            </template>
            <template #footer>
                <div class="p-4">
                    <Button asChild severity="contrast" v-slot="slotProps">
                        <RouterLink to="/" :class="slotProps.class"> {{
                            translations[language].goBack }}
                        </RouterLink>
                    </Button>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const { translations, language } = inject('language');
</script>

<style scoped>
#not-found {
    display: flex;
    justify-content: center;
}
</style>