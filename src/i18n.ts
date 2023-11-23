import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Backend from "i18next-http-backend"

import translationEN from "./locales/en/translation.json"

const resources = {
  en: {
    translation: translationEN,
  },
}

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: "en",
    debug: true,
    resources,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
