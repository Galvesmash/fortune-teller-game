export interface FortuneOptions {
  id: number
  active: boolean
  value: string
}

export interface FortuneStore {
  fortune: string
  fortuneError: boolean
  fortuneOptions: FortuneOptions[]
  fortuneTranslated: string
}

export interface GeneralStore {
  availableLocales: string[]
  defaultLocale: string
  locale: string
  packageVersion: string
}
