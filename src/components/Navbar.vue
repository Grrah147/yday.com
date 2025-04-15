<template>
    <div id="navbar" class="card">
        <Menubar :model="items">
            <template #start>
                <span
                    class="text-primary-500 dark:text-primary-400 text-2xl permanent-marker-regular px-3">YDay.com</span>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <router-link v-if="item.route" v-slot="{ href, navigate, isActive, isExactActive }" :to="item.route"
                    custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate" :active="isActive"
                        :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active', item.disabled && 'disabled']">
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
                    <Button :icon="ydAppDark ? 'pi pi-moon' : 'pi pi-sun'" variant="outlined" severity="secondary"
                        aria-label="Theme" @click="toggleDarkMode()" />
                    <Button type="button" variant="outlined" id="yd_language_switch_button" class="p-button-icon-only"
                        severity="secondary" aria-haspopup="true" aria-controls="yd_language_switch_dropdown_menu"
                        @click="toggleLanguageSwitchDropdownMenu">
                        <span :class="`flag-icon flag-icon-${flagMap[language]}`"></span>
                    </Button>
                    <Menu ref="languageSwitchDropdownMenu" id="yd_language_switch_dropdown_menu"
                        :model="languageSwitchDropdownMenuItems" :popup="true">
                        <template #item="{ item }">
                            <span :class="item.icon" />
                        </template>
                    </Menu>
                    <Button icon="pi pi-user" type="button" variant="outlined" severity="secondary" aria-haspopup="true"
                        aria-controls="user_account_overlay_dropdown_menu" @click="toggleUserAccountDropdownMenu">
                    </Button>
                    <Menu ref="userAccountDropdownMenu" id="user_account_overlay_dropdown_menu"
                        :model="userAccountDropdownMenuItems" :popup="true" />
                    <Button icon="pi pi-shopping-cart" variant="outlined" severity="secondary" aria-label="Theme"
                        @click="" />
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
        disabled: false,
    },
    {
        label: 'order',
        icon: 'pi pi-shopping-bag',
        route: '/order',
        disabled: false,
    },
    {
        label: 'contact',
        icon: 'pi pi-envelope',
        route: '/contact',
        disabled: false,
    },
    {
        label: 'vacancy',
        icon: 'pi pi-user-edit',
        route: '/vacancy',
        disabled: true,
    },
]);

/* Theme Switch */
const ydAppDark = ref(false);

function toggleDarkMode() {
    document.documentElement.classList.toggle('yd-app-dark');
    ydAppDark.value = !ydAppDark.value;
}

/* Language switch */
const { translations, language } = inject('language');

const flagMap = {
    en: 'gb',
    ka: 'ge',
    ru: 'ru',
};

const languageSwitchDropdownMenu = ref();

const languageSwitchDropdownMenuItems = ref([
    {
        icon: 'flag-icon flag-icon-gb',
        command: () => selectLanguage('en'),
    },
    {
        icon: 'flag-icon flag-icon-ge',
        command: () => selectLanguage('ka'),
    },
    {
        icon: 'flag-icon flag-icon-ru',
        command: () => selectLanguage('ru'),
    },
]);

const toggleLanguageSwitchDropdownMenu = (event) => {
    languageSwitchDropdownMenu.value.toggle(event);
};

const selectLanguage = (code) => {
    language.value = code;
};

/* User account dropdown menu */
const userAccountDropdownMenu = ref();

const userAccountDropdownMenuItems = ref([
    {
        label: 'nikoloz.u@gmail.com',
        items: [
            {
                label: 'Cart',
                icon: 'pi pi-shopping-cart'
            },
            {
                label: 'Order history',
                icon: 'pi pi-history'
            },
            {
                label: 'Sign out',
                icon: 'pi pi-sign-out'
            }
        ]
    }
]);

const toggleUserAccountDropdownMenu = (event) => {
    userAccountDropdownMenu.value.toggle(event);
};
</script>

<style scoped></style>
