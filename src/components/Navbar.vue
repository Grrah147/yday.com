<template>
    <div id="navbar" class="card">
        <Menubar :model="items">
            <template #start>
                <router-link to="/" activeClass="" exactActiveClass="">
                    <span
                        class="text-primary-500 dark:text-primary-400 text-2xl permanent-marker-regular px-3">YDay.com</span>
                </router-link>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <router-link v-if="item.route" v-slot="{ href, navigate, isActive, isExactActive }" :to="item.route"
                    custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate" :active="isActive"
                        :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active', item.disabled && 'disabled', 'border', 'border-surface-200', 'dark:border-surface-700']">
                        <span :class="item.icon" />
                        <span>{{ $t(item.label) }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple class="flex items-center" v-bind="props.action">
                    <span>{{ $t(item.label) }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut"
                        class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                            item.shortcut }}</span>
                    <i v-if="hasSubmenu"
                        :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]" />
                </a>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <Button type="button" variant="outlined" id="language_switch_button" class="p-button-icon-only"
                        severity="secondary" aria-haspopup="true" aria-controls="language_switch_dropdown_menu"
                        @click="toggleLanguageSwitchDropdownMenu">
                        <span :class="`flag-icon flag-icon-${flagMap[locale]}`"></span>
                    </Button>
                    <Menu ref="languageSwitchDropdownMenu" id="language_switch_dropdown_menu"
                        :model="languageSwitchDropdownMenuItems" :popup="true">
                        <template #item="{ item }">
                            <span :class="item.icon" />
                        </template>
                    </Menu>
                    <Button :icon="ydAppDark ? 'pi pi-moon' : 'pi pi-sun'" variant="outlined" severity="secondary"
                        aria-label="Theme" @click="toggleDarkMode()" />
                    <Button icon="pi pi-user" type="button" variant="outlined" severity="secondary" aria-haspopup="true"
                        aria-controls="user_account_overlay_dropdown_menu" @click="toggleUserAccountDropdownMenu" />
                    <Menu ref="userAccountDropdownMenu" id="user_account_overlay_dropdown_menu"
                        :model="userAccountDropdownMenuItems" :popup="true" />
                    <Button icon="pi pi-shopping-cart" variant="outlined" severity="secondary" aria-label="Cart"
                        @click="" />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// Menu items
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

// Theme Switch
const ydAppDark = ref(true);
function toggleDarkMode() {
    document.documentElement.classList.toggle('yd-app-dark');
    ydAppDark.value = !ydAppDark.value;
}

// Language switch
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
    locale.value = code; // Update Vue I18n locale
};

// User account dropdown menu
const userAccountDropdownMenu = ref();
const userAccountDropdownMenuItems = ref([
    {
        label: 'nikoloz.u@gmail.com', // user email or phone number.
        items: [
            {
                label: computed(() => t('account')),
                icon: 'pi pi-user',
            },
            {
                label: computed(() => t('orderHistory')),
                icon: 'pi pi-history',
            },
            {
                label: computed(() => t('cart')),
                icon: 'pi pi-shopping-cart',
            },
            {
                label: computed(() => t('signOut')),
                icon: 'pi pi-sign-out',
            },
        ],
    },
]);

const toggleUserAccountDropdownMenu = (event) => {
    userAccountDropdownMenu.value.toggle(event);
};
</script>

<style scoped></style>