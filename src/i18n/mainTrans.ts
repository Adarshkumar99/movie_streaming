import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import hi from "./hi.json";
import de from "./de.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    hi: {
      translation: hi
    },
    de: {
      translation: de
    },
  },
  lng: localStorage.getItem("lang") || "hi", // default language
  fallbackLng: "hi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
