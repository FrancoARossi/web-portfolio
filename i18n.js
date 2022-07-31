import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './public/locales/en/translationEN.json';
import translationES from './public/locales/es/translationES.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  keySeparator: '.',
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
