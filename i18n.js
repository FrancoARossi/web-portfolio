import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

i18n.use(initReactI18next).init({
  resources: translations,
  keySeparator: '.',
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
