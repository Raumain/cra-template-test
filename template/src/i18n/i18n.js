import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import fr from './fr.json'

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
}

const options = {
  order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  lookupQuerystring: 'lng'
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: options, resources,
    fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    ns: ['translation'],
    defaultNS: 'translation',
  })

export default i18n
