import FortuneTellerGame from '@/components/Fortune/FortuneGame.vue';

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("v-fortune-teller-game", FortuneTellerGame);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

FortuneTellerGame.install = install;

export default FortuneTellerGame;