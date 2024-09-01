const translations = {};

function loadTranslations(language) {
  return fetch(`src/i18n/locales/${language}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      translations[language] = data;
      applyTranslations(); // Apply translations after loading
    })
    .catch((error) => {
      console.error("Error loading translations:", error);
    });
}

function translate(key) {
  const lang = document.documentElement.lang || "en";
  return translations[lang] && translations[lang][key] ? translations[lang][key] : key;
}

// Load default language
document.addEventListener("DOMContentLoaded", () => {
  const defaultLang = "en";
  document.documentElement.lang = defaultLang;
  loadTranslations(defaultLang);
});

// Handle language change

export const handleTranslate = () =>
  document.getElementById("language-selector").addEventListener("change", (event) => {
    const selectedLang = event.target.value;
    document.documentElement.lang = selectedLang; // Update the lang attribute
    loadTranslations(selectedLang);
  });

function applyTranslations() {
  document.querySelectorAll(".navigation__name").forEach((el) => {
    el.textContent = translate(el.id);
  });
  document.getElementById("welcome").textContent = translate("welcome_message");
  document.getElementById("contact").textContent = translate("contact_us");
}
