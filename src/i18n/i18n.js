import { LANGUAGE, LANGUAGE_TOGGLE } from "../script/constants/globals";
import { loadTranslations } from "../script/helpers/loadTranslations";

// Handle language change
function handleTranslate() {
  const toggle = document.querySelector(LANGUAGE_TOGGLE);
  if (toggle) {
    toggle.addEventListener("change", (event) => {
      const isChecked = event.target.checked;
      const selectedLang = isChecked ? LANGUAGE.UA : LANGUAGE.EN; // 'en' if checked, 'ua' otherwise
      document.documentElement.lang = selectedLang; // Update the lang attribute
      loadTranslations(selectedLang);
    });
  } else {
    console.warn("Language toggle element not found.");
  }
}

export const initTranslations = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const defaultLang = LANGUAGE.EN;
    document.documentElement.lang = defaultLang;
    loadTranslations(defaultLang);
    handleTranslate();
  });
};

//TODO:
// Revwork logic to work through localStorage
