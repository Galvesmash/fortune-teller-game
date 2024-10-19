import getters from './getters'
import actions from './actions'
import type { FortuneStore } from '@/types'

const state = (): FortuneStore => ({
  fortune: '',
  fortuneError: false,
  fortuneOptions: [],
  fortuneTranslated: ''
})

export default {
  namespaced: true,
  state,
  getters,
  actions
}
