import { initTranslations } from "../i18n/i18n";
import { handleForm } from "./helpers/handleForm";
import { navigation } from "./helpers/navigation";

export const init = () => {
  initTranslations();
  navigation();
  document.getElementById("googleForm").addEventListener("submit", handleForm);
};
