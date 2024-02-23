import * as Vue from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './assets/sass/style.scss';

Vue.createApp(App)
  .use(store)
  .use(VueAxios, axios)
  .mount('#app');

// app.use(VueAxios, axios)