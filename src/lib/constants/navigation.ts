import type { INavigation } from "$lib/interfaces/navigation.interface";
import { goto } from "$app/navigation";
import smoothScroll from "$lib/utils/smoothScroll";

import { locale as language, translate } from "$lib/i18n/i18n";
import { get } from "svelte/store";

import locale from "./translation";

const navigation: INavigation[] = [
  {
    icon: "home",
    name: translate(get(language), locale, "NAV_ONE", {}),
    onClick: async () => {
      await goto("/");
      smoothScroll("landing-header");
    },
  },
  {
    icon: "services",
    name: translate(get(language), locale, "NAV_TWO", {}),
    onClick: async () => {
      await goto("/services");
      smoothScroll("service-header");
    },
  },
  {
    icon: "about",
    name: translate(get(language), locale, "NAV_THREE", {}),
    onClick: async () => {
      await goto("/about");
      smoothScroll("about-header");
    },
  },
  {
    icon: "contact",
    name: translate(get(language), locale, "NAV_FOUR", {}),
    onClick: () => smoothScroll("contact"),
  },
];

export default navigation;
