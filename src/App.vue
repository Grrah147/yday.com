<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import { ref, provide } from 'vue';
import translations from './translations';
import Navbar from '../src/components/Navbar.vue'

const language = ref('ka');
provide('language', { translations, language });
</script>

<style></style>