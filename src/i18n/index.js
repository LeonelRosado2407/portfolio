import { createI18n } from 'vue-i18n'
import en from './lang/en.json'
import es from './lang/es.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, es }
})

export default i18n