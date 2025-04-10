<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="mx-auto max-w-x1 px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block size-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex shrink-0 items-center">
                        <span class="permanent-marker-regular text-indigo-300">YDay.com</span>
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <router-link v-for="item in navigation" :key="item.name" :to="item.href"
                                :class="['text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']">
                                {{ translations[language][item.name] }}
                            </router-link>
                        </div>
                    </div>

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
            </div>
        </div>
        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                    :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
/* Language Switch */
import { inject, ref } from 'vue';

const { translations, language } = inject('language');

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
};
/* --- */
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'home', href: '/' },
    { name: 'buy', href: '/buy' },
    { name: 'contact', href: '/contact' },
]
</script>

<style>
nav a:hover,
nav a.router-link-exact-active {
    background-color: var(--color-gray-900);
    color: var(--color-white);
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
    vertical-align: middle;
}
</style>