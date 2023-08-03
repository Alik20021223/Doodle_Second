import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from "./store/locales/en.json";
import ru from "./store/locales/ru.json";

const Languages = ['ru', 'en'];

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'ru',
  debug: true,
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie']
  },
  resources: {
    en: {
      translation: {
        ...en
      }
    },
    ru: {
      translation: {
        ...ru
      }
    }
  },
  whiteList: Languages,
  interpolation: {
    escapeValue: false
  }
})

export default i18n