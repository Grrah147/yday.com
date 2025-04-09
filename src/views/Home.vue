<template>
  <div class="home">
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </div>
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