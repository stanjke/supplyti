import { LANGUAGE, TRANSLATIONS } from "../constants/globals";

export function translate(key) {
  const lang = document.documentElement.lang || LANGUAGE.EN;
  return TRANSLATIONS[lang] && TRANSLATIONS[lang][key] ? TRANSLATIONS[lang][key] : key;
}
