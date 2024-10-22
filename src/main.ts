import * as Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import './assets/sass/style.scss';
import { createPinia } from 'pinia'

const pinia = createPinia()

Vue.createApp(App)
  .use(pinia)
  .use(i18n)
  .mount('#app');