export interface FortuneOptions {
  id: number
  active: boolean
  title: string
  value: string | null
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
