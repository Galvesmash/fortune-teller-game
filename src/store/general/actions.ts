import { useGeneralStore } from '@/store'

export default {
  reset() {
    const store = useGeneralStore()

    store.locale = ''
  },

  setLocale(payload: string) {
    const store = useGeneralStore()

    store.locale = payload
  }
}
