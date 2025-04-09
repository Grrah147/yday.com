<template>
  <div class="home">
    <h1>{{ translations[language].welcome }}</h1>
    <p>{{ translations[language].intro }}</p>
    <router-link to="/buy"><button>{{ translations[language].configure }}</button></router-link>
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
.home { text-align: center; padding: 20px; }
button {
  padding: 10px 20px;
  background: #333;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.2s, background 0.3s;
  border-radius: 2px;
}
button:hover { background: #555; transform: scale(1.05); }
</style>