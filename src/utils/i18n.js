// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locales/en.json'
import idTranslation from '../locales/id.json'

// the translations
const resources = {
    en: {
        translation: enTranslation,
    },
    id: {
        translation: idTranslation,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // react already safe from xss
        },
    });

export default i18n;
