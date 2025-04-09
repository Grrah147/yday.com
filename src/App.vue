<template>
  <div id="app">
    <nav>
      <div class="nav-links">
        <router-link to="/">{{ translations[language].home }}</router-link>
        <router-link to="/buy">{{ translations[language].buy }}</router-link>
        <router-link to="/contact">{{ translations[language].contact }}</router-link>
      </div>
      <div class="lang-selector">
        <div class="dropdown" @click="toggleDropdown">
          <span :class="`flag-icon flag-icon-${flagMap[language]}`"></span>
          <div v-if="isOpen" class="dropdown-menu">
            <div v-for="(lang, code) in languages" :key="code" @click.stop="selectLanguage(code)">
              <span :class="`flag-icon flag-icon-${flagMap[code]}`"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import translations from './translations';

const language = ref('ka');
provide('language', { translations, language });

const languages = {
  en: 'English',
  ka: 'ქართული',
  ru: 'русский',
};
const flagMap = {
  en: 'gb',
  ka: 'ge',
  ru: 'ru',
};
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
const selectLanguage = (code) => {
  language.value = code;
  isOpen.value = false;
  // console.log(`Language switched to ${code}`);
};
</script>

<style>
#app {
  height: 100%;
  font-family: Arial, sans-serif;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  background: #f4f4f4;
  height: 60px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
  transition: text-shadow .3s;
}

nav a:hover,
nav a.router-link-exact-active {
  /* color: #2C3930;
  font-weight: bold; */
  text-shadow: 0 0 .8px #2C3930, 0 0 .1px #2C3930;
}

.lang-selector {
  margin-left: auto;
}

.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 1000;
}

.dropdown-menu div {
  padding: 5px;
}

.dropdown-menu div:hover {
  background: #f0f0f0;
}

.flag-icon {
  width: 24px;
  height: 24px;
  display: inline-block;
}
</style>