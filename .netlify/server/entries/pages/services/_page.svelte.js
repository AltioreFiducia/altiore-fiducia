import { i as head, g as escape_html, c as pop, p as push, f as attr } from "../../../chunks/index.js";
import { S as SERVICES_METADATA } from "../../../chunks/DecorativeSVG.js";
import { S as Services, a as availableServices } from "../../../chunks/Services.js";
import { g as getLocale, t as trackMessageCall } from "../../../chunks/runtime.js";
import { a as assets } from "../../../chunks/assets.js";
import { P as PageHeader, C as ContentWrapper } from "../../../chunks/PageHeader.js";
const es_page_services_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nuestros Servicios`;
  }
);
const en_page_services_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Our Services`;
  }
);
const page_services_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("page_services_title", locale);
  if (locale === "es") return es_page_services_title();
  if (locale === "en") return en_page_services_title();
  return "page_services_title";
};
const es_page_services_highlighted_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Servicios`;
  }
);
const en_page_services_highlighted_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Services`;
  }
);
const page_services_highlighted_text = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("page_services_highlighted_text", locale);
  if (locale === "es") return es_page_services_highlighted_text();
  if (locale === "en") return en_page_services_highlighted_text();
  return "page_services_highlighted_text";
};
const es_page_services_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Descubre cómo podemos proteger tus activos y asegurar tu futuro.`;
  }
);
const en_page_services_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discover how we can protect your assets and secure your future.`;
  }
);
const page_services_subtitle = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("page_services_subtitle", locale);
  if (locale === "es") return es_page_services_subtitle();
  if (locale === "en") return en_page_services_subtitle();
  return "page_services_subtitle";
};
const es_page_services_text_1 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conoce nuestros`;
  }
);
const en_page_services_text_1 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discover our`;
  }
);
const page_services_text_1 = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("page_services_text_1", locale);
  if (locale === "es") return es_page_services_text_1();
  if (locale === "en") return en_page_services_text_1();
  return "page_services_text_1";
};
const es_page_services_text_2 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `servicios`;
  }
);
const en_page_services_text_2 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `services`;
  }
);
const page_services_text_2 = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("page_services_text_2", locale);
  if (locale === "es") return es_page_services_text_2();
  if (locale === "en") return en_page_services_text_2();
  return "page_services_text_2";
};
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(SERVICES_METADATA.title)}</title>`;
    $$payload2.out += `<meta name="description"${attr("content", SERVICES_METADATA.description)}> <meta property="og:title"${attr("content", SERVICES_METADATA.title)}> <meta property="og:description"${attr("content", SERVICES_METADATA.description)}> <meta property="og:image"${attr("content", assets.SERVICE_BACKGROUND)}> <meta property="og:type" content="website"> <meta name="keywords"${attr("content", SERVICES_METADATA.keywords.join(", "))}> <link rel="canonical" href="https://altiorefiducia.com/services">`;
  });
  PageHeader($$payload, {
    title: /* @__PURE__ */ page_services_title(),
    highlightedText: /* @__PURE__ */ page_services_highlighted_text(),
    subtitle: /* @__PURE__ */ page_services_subtitle(),
    backgroundImage: assets.SERVICE_BACKGROUND
  });
  $$payload.out += `<!----> `;
  ContentWrapper($$payload, {
    withDecoration: true,
    narrow: false,
    decorationStyle: "waves",
    children: ($$payload2) => {
      $$payload2.out += `<h2 class="font-heading text-primary-800 mb-16 text-center text-3xl font-bold md:text-4xl">${escape_html(/* @__PURE__ */ page_services_text_1())} <span class="text-secondary-500">${escape_html(/* @__PURE__ */ page_services_text_2())}</span></h2> `;
      Services($$payload2, { services: availableServices });
      $$payload2.out += `<!---->`;
    }
  });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
