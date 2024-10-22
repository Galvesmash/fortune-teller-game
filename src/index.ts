import { App, Plugin } from 'vue'
import FortuneTellerGame from './components/FortuneGame.vue'

function install(app: App): void {
  if ((install as any).installed) return
  (install as any).installed = true
  app.component('fortune-teller-game', FortuneTellerGame)
}

const plugin: Plugin = {
  install
}

let GlobalVue: any = null

if (typeof window !== 'undefined' && (window as any).Vue) {
  GlobalVue = (window as any).Vue
} else if (typeof globalThis !== 'undefined' && (globalThis as any).Vue) {
  GlobalVue = (globalThis as any).Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

(FortuneTellerGame as any).install = install

export default FortuneTellerGame
