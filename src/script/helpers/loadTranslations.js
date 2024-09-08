import { TRANSLATIONS } from "../constants/globals.js";
import { applyTranslations } from "./applyTranslations.js";

export async function loadTranslations(language) {
  return fetch(`/i18n/locales/${language}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      TRANSLATIONS[language] = data;
      applyTranslations(); // Apply translations after loading
    })
    .catch((error) => {
      console.warn("Error loading translations:", error);
    });
}
