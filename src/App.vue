<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';

import { ref, provide } from 'vue';
import translations from './translations';

const language = ref('ka');
provide('language', { translations, language });
</script>

<style>
#app {
  height: 100%;
  font-family: Arial, sans-serif;
}
</style>