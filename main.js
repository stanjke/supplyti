import { initTranslations } from "./src/i18n/i18n";
import { handleForm } from "./src/script/helpers/handleForm";

(function init() {
  initTranslations();
})();

document.getElementById("googleForm").addEventListener("submit", handleForm);
