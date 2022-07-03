import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import enTranslation from './en';
import ruTranslation from './ru';
import uaTranslation from './ua';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
      ua: { translation: uaTranslation },
    },
    supportedLngs: ['en', 'ru', 'ua'],
    fallbackLng: 'en',
    detection: {
      order: [
        'localStorage',
        'cookie',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
