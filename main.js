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
      console.warn("Error loading translations:", error);
    });
}

function translate(key) {
  const lang = document.documentElement.lang || "en";
  return translations[lang] && translations[lang][key] ? translations[lang][key] : key;
}

// Load default language

function applyTranslations() {
  document.querySelectorAll(".navigation__name").forEach((el) => {
    el.textContent = translate(el.id);
  });
  document.getElementById("welcome").textContent = translate("welcome_message");
  document.getElementById("contact").textContent = translate("contact_us");
}

// Handle language change
function handleTranslate() {
  const toggle = document.querySelector("#language-toggle");
  if (toggle) {
    toggle.addEventListener("change", (event) => {
      const isChecked = event.target.checked;
      const selectedLang = isChecked ? "ua" : "en"; // 'en' if checked, 'ua' otherwise
      document.documentElement.lang = selectedLang; // Update the lang attribute
      loadTranslations(selectedLang);
    });
  } else {
    console.warn("Language toggle element not found.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const defaultLang = "en";
  document.documentElement.lang = defaultLang;
  loadTranslations(defaultLang);
  handleTranslate();
});
