import { defineStore } from 'pinia'
import fortune from './fortune'
import general from './general'

export const useFortuneStore = defineStore('fortune', fortune)
export const useGeneralStore = defineStore('general', general)
