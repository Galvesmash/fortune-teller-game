export interface FortuneStore {
  fortune: string
  fortuneError: boolean
  fortuneOptions: string[]
  fortuneTranslated: string
}

export interface GeneralStore {
  availableLocales: string[]
  defaultLocale: string
  locale: string
  packageVersion: string
}
