import type { FortuneStore } from '@/types'

export default {
  getFortune: (state: FortuneStore) => {
    return state.fortune
  },

  getFortuneError: (state: FortuneStore) => {
    return state.fortuneError
  },

  getFortuneOptions: (state: FortuneStore) => {
    return state.fortuneOptions
  },

  getFortuneTranslated: (state: FortuneStore) => {
    return state.fortuneTranslated
  }
}
