import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      marketplace: "Marketplace",
      dashboard: "Dashboard",
      about: "About Us",
      signup: "Sign Up",
      welcome: "Welcome to ShreeAnna Platform",
    },
  },
  hi: {
    translation: {
      marketplace: "बाजार",
      dashboard: "डैशबोर्ड",
      about: "हमारे बारे में",
      signup: "साइन अप",
      welcome: "श्रीअन्न प्लेटफॉर्म में आपका स्वागत है",
    },
  },
};

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;