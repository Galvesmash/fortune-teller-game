import { createI18n } from 'vue-i18n';
import { locales } from './locales';

export default createI18n({
  locale: process.env.VUE_APP_DEFAULT_LOCALE,
  fallbackLocale: process.env.VUE_APP_FALLBACK_LOCALE,
  legacy: false,
  messages: locales
});