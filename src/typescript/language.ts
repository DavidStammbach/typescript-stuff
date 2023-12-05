export enum LanguageEnum {
  De = 'DE',
  En = 'EN',
  Fr = 'FR',
  It = 'IT',
}

export const languageEnum = (language: LanguageEnum) => {
  console.log(`enum: ${language}`)
}

export const Language = {
  De: 'DE',
  En: 'EN',
  Fr: 'FR',
  It: 'IT',
} as const

export type Language = typeof Language[keyof typeof Language]

export const logLanguage = (language: Language) => {
  console.log(language)
}
