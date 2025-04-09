<template>
  <div class="contact">
    <h1>{{ translations[language].about }}</h1>
    <p>{{ translations[language].aboutText }}</p>
    <h2>{{ translations[language].contactUs }}</h2>
    <div class="contact-details">
      <p><i class="fas fa-phone"></i> {{ translations[language].phone }}</p>
      <p><i class="fas fa-map-marker-alt"></i> {{ translations[language].address }}</p>
      <p><i class="fas fa-envelope"></i> {{ translations[language].email }}</p>
      <p><i class="fab fa-instagram"></i> {{ translations[language].instagram }}</p>
    </div>
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

<style scoped>
.contact { padding: 20px; max-width: 600px; margin: 0 auto; }
.contact-details { display: flex; flex-direction: column; gap: 10px; }
.contact-details p { display: flex; align-items: center; gap: 10px; margin:2px; }
.contact-details i { width: 20px; text-align: center; }
</style>