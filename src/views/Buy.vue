<template>
  <div class="buy">
  </div>
</template>

<script setup>
import { inject } from 'vue';

const { translations, language } = inject('language');
</script>

<style scoped>
.buy {
  text-align: center;
  padding: 20px;
}
</style>