import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import azTranslation from "./language/az.json";
import enTranslation from "./language/en.json";
import ruTranslation from "./language/ru.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  az: {
    translation: azTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
