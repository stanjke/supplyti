import { TRANSLATION_ELEMENT_CLASS, TRANSLATION_ELEMENT_ID } from "../../script/constants/globals";
import { translate } from "../../script/helpers/translate";

export const about = () => {
  document.querySelector(TRANSLATION_ELEMENT_CLASS.ABOUT.TITLE).textContent = translate(TRANSLATION_ELEMENT_ID.ABOUT.TITLE);
  document.querySelector(TRANSLATION_ELEMENT_CLASS.ABOUT.DESCRIPTION).textContent = translate(TRANSLATION_ELEMENT_ID.ABOUT.DESCRIPTION);
};
