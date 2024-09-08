import { TRANSLATION_ELEMENT_CLASS, TRANSLATION_ELEMENT_ID } from "../../script/constants/globals";
import { translate } from "../../script/helpers/translate";

export const services = () => {
  //translate section title
  document.querySelector(TRANSLATION_ELEMENT_CLASS.SERVICES.TITLE).textContent = translate(TRANSLATION_ELEMENT_ID.SERVICES.SERVICE_TITLE);
  //translate services titles
  document.querySelectorAll(TRANSLATION_ELEMENT_CLASS.SERVICES.SUBTITLE).forEach((el) => (el.textContent = translate(el.id)));
  //translate services descriptions
  document.querySelectorAll(TRANSLATION_ELEMENT_CLASS.SERVICES.DESCRIPTION).forEach((el) => (el.textContent = translate(el.id)));
};
