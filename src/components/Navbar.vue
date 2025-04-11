<template>
    <div id="navbar" class="card">
        <Menubar :model="items">
            <template #start>
                <span class="text-primary-500 dark:text-primary-400 yday-logo permanent-marker-regular">YDay.com</span>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <router-link v-if="item.route" v-slot="{ href, navigate, isActive, isExactActive }" :to="item.route"
                    custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate" :active="isActive"
                        :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
                        <span :class="item.icon" />
                        <span>{{ translations[language][item.label] }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple class="flex items-center" v-bind="props.action">
                    <span>{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut"
                        class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                            item.shortcut }}</span>
                    <i v-if="hasSubmenu"
                        :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
                </a>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <div class="lang-selector p-menubar-item">
                        <div class="dropdown p-menubar-item-content" @click="toggleDropdown">
                            <span :class="`flag-icon flag-icon-${flagMap[language]}`"></span>
                            <div v-if="isOpen" class="dropdown-menu">
                                <div v-ripple v-for="(lang, code) in languages" :key="code"
                                    @click.stop="selectLanguage(code)">
                                    <span :class="`flag-icon flag-icon-${flagMap[code]}`"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref, inject } from "vue";

const items = ref([
    {
        label: 'home',
        icon: 'pi pi-home',
        route: '/',
    },
    {
        label: 'order',
        icon: 'pi pi-shopping-bag',
        route: '/order',
    },
    {
        label: 'contact',
        icon: 'pi pi-envelope',
        route: '/contact',
    }
]);

/* Language Switch */
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
/* - */
</script>

<style scoped>
#navbar {
    display: flex;
}

#navbar .p-menubar {
    flex: 1;
}

.yday-logo {
    font-size: 24px;
}

.router-link-active,
.router-link-exact-active {
    color: var(--p-menubar-item-focus-color);
    background: var(--p-menubar-item-focus-background);
    border-radius: var(--p-menubar-base-item-border-radius);
}

.dropdown {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding: var(--p-menubar-item-padding);
    gap: var(--p-menubar-item-gap);
    user-select: none;
    outline: 0 none;
    filter: grayscale(20%);
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    padding: var(--p-menubar-submenu-padding);
    background: var(--p-menubar-submenu-background);
    border: 1px solid var(--p-menubar-submenu-border-color);
    box-shadow: var(--p-menubar-submenu-shadow);
    border-radius: var(--p-menubar-submenu-border-radius);
    gap: var(--p-menubar-submenu-gap);
}

.dropdown-menu div {
    padding: var(--p-menubar-item-padding);
    border-radius: var(--p-menubar-base-item-border-radius);
}

.dropdown-menu div:hover {
    color: var(--p-menubar-item-focus-color);
    background: var(--p-menubar-item-focus-background);
}

.flag-icon {
    width: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
}
</style>
