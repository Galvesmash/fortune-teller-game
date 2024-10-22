import type { GeneralStore } from '@/types'

export default {
  appVersion: (state: GeneralStore) => {
    return state.availableLocales
  },

  getDefaultLocale: (state: GeneralStore) => {
    return state.defaultLocale
  },

  getLocale: (state: GeneralStore) => {
    return state.locale
  }
}
