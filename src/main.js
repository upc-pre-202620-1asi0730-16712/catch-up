import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/i18n.js";
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {Avatar, Button, SelectButton} from "primevue";

const primeUiLicenseKey = import.meta.env.VITE_PRIME_UI_LICENSE_KEY;

createApp(App)
    .use(i18n)
    .use(PrimeVue, {
        ripple: true,
        theme: { preset: Material },
        license: primeUiLicenseKey
    })
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-avatar', Avatar)
    .mount('#app')
