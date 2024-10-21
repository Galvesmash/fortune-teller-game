import getters from './getters'
import actions from './actions'
import type { GeneralStore } from '@/types'

const state = (): GeneralStore => ({
  availableLocales: [
    'en',
    'pt-br'
  ],
  defaultLocale: 'en',
  locale: 'en',
  packageVersion: process.env.VUE_APP_VERSION || '0',
})

export default {
  namespaced: true,
  state,
  getters,
  actions
}
