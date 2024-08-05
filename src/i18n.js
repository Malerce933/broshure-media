import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Використання файлового бекенду
import Backend from 'i18next-http-backend';

// Імпорт файлів перекладу безпосередньо
import translationEn from './locales/en/translation.json';
import translationUa from './locales/ua/translation.json';

// Конфігурація i18n
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEn
      },
      ua: {
        translation: translationUa
      }
    },
    lng: 'ua', // Мова за замовчуванням
    fallbackLng: 'ua',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
