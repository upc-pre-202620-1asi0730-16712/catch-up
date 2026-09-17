import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/i18n.js";
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {Avatar, Button, SelectButton} from "primevue";

const primeUiLicenseKey = "eyJpZCI6ImFmM2U5YjFlLTM4NzEtNGU2MS1iNDk1LTViMTA5YzY2OTBhNiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODk1Njk3NjUsImV4cCI6MTgyMTEwNTc2NX0.pRhfdy6wjsRrLJsQxIbwhpJHcgCsPc4uvUJgHrioOC7TaXn0ZM_6aTi-9d3a9toGCy-yzbO12aO4in6xkJyZBQ";

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
