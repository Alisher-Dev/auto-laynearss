import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import ru from "./locales/ru.json";
import uz from "./locales/uz.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      uz: { translation: uz },
    },
    lng: "uz", // 👉 Насильная установка языка
    fallbackLng: "uz",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
