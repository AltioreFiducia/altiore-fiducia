import type { IObjective } from "$lib/interfaces/objective.interface";

import { locale as language, translate } from "$lib/i18n/i18n";
import { get } from "svelte/store";

import locale from "./translation";

const objectives: IObjective[] = [
  {
    index: 1,
    title: translate(get(language), locale, "OBJ_SHORT", {}),
    objectives: [
      translate(get(language), locale, "OBJ_SHORT_ONE", {}),
      translate(get(language), locale, "OBJ_SHORT_TWO", {}),
      translate(get(language), locale, "OBJ_SHORT_THREE", {}),
    ],
  },
  {
    index: 2,
    title: translate(get(language), locale, "OBJ_MED", {}),
    objectives: [
      translate(get(language), locale, "OBJ_MED_ONE", {}),
      translate(get(language), locale, "OBJ_MED_TWO", {}),
      translate(get(language), locale, "OBJ_MED_THREE", {}),
    ],
  },
  {
    index: 3,
    title: translate(get(language), locale, "OBJ_LAG", {}),
    objectives: [
      translate(get(language), locale, "OBJ_LAG_ONE", {}),
      translate(get(language), locale, "OBJ_LAG_TWO", {}),
    ],
  },
];

export default objectives;
