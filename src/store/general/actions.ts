import { useGeneralStore } from '@/store'

export default {
  resetGeneral() {
    const store = useGeneralStore()

    store.locale = 'en'
  },

  setLocale(payload: string) {
    const store = useGeneralStore()

    store.locale = payload
  }
}
