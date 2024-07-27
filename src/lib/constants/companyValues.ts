import { locale as language, translate } from "$lib/i18n/i18n";
import { get } from "svelte/store";

import locale from "./translation";

const companyValues: string[] = [
  translate(get(language), locale, "VALUE_ONE", {}),
  translate(get(language), locale, "VALUE_TWO", {}),
  translate(get(language), locale, "VALUE_THREE", {}),
  translate(get(language), locale, "VALUE_FOUR", {}),
  translate(get(language), locale, "VALUE_FIVE", {}),
  translate(get(language), locale, "VALUE_SIX", {}),
  translate(get(language), locale, "VALUE_SEVEN", {}),
  translate(get(language), locale, "VALUE_EIGHT", {}),
  translate(get(language), locale, "VALUE_NINE", {}),
];

export default companyValues;
