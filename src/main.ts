import * as Vue from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';
import i18n from './i18n';
import VueAxios from 'vue-axios';
import './assets/sass/style.scss';

Vue.createApp(App)
  .use(store)
  .use(i18n)
  .use(VueAxios, axios)
  .mount('#app');