<template>
    <div id="not-found">
        <Card class="text-center w-lg">
            <template #title>
                <div class="flex flex-col gap-4 text-2xl">
                    <i class="pi pi-exclamation-triangle" style="font-size: 2.5rem"></i>
                    <span> {{ $t('notFoundTitle') }} </span>
                </div>
            </template>
            <template #content>
                <p class="m-0"> {{ $t('notFoundContent') }} </p>
            </template>
            <template #footer>
                <div class="p-4">
                    <Button asChild severity="contrast" v-slot="slotProps">
                        <RouterLink to="/" :class="slotProps.class"> {{
                            $t('goBack') }}
                        </RouterLink>
                    </Button>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
</script>

<style scoped>
#not-found {
    display: flex;
    justify-content: center;
}
</style>