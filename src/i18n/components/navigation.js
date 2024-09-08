import { TRANSLATION_ELEMENT_CLASS } from "../../script/constants/globals.js";
import { translate } from "../../script/helpers/translate.js";

export const navigation = () =>
  document.querySelectorAll(TRANSLATION_ELEMENT_CLASS.NAVIGATION).forEach((el) => {
    // console.log("navigation ID: ", el.id);
    el.textContent = translate(el.id);
  });
