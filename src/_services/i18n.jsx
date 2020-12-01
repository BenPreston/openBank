import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslations from './languageInputs/en'
import esTranslations from './languageInputs/es'

console.log(esTranslations)

const resources = {
  en: { translation: enTranslations },
  es: { translation: esTranslations }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'es',
    debug: true,
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true
    }
  })

export default i18n
