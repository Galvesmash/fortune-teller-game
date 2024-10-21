import { useFortuneStore } from '@/store'
import type { FortuneOptions } from '@/types'

export default {
  resetFortune() {
    const store = useFortuneStore()

    store.fortune = ''
    store.fortuneError = false
    store.fortuneTranslated = ''
  },

  setFortune(payload: string) {
    const store = useFortuneStore()

    store.fortune = payload
    store.fortuneError = false
  },

  setFortuneOptions(payload?: FortuneOptions[]) {
    const store = useFortuneStore()

    store.fortuneOptions = payload || []
  },

  // setFortuneRandomOption(payload: string) {
  //   const store = useFortuneStore()

  //   store.fortuneOptions = payload || []
  // },

  setFortuneError() {
    const store = useFortuneStore()

    store.fortune = ''
    store.fortuneError = true
    store.fortuneTranslated = ''
  },

  setFortuneTranslated(payload: string) {
    const store = useFortuneStore()

    store.fortuneError = false
    store.fortuneTranslated = payload
  }
}
