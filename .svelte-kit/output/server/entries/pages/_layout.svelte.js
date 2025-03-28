import { e as ensure_array_like, d as attr_class, f as attr, g as escape_html, c as pop, h as stringify, p as push, i as head } from "../../chunks/index.js";
import { g as getLocale, t as trackMessageCall, l as locales, a as localizeHref } from "../../chunks/runtime.js";
import { p as page } from "../../chunks/index2.js";
import { D as DecorativeIcons } from "../../chunks/DecorativeIcons.js";
import { a as assets } from "../../chunks/assets.js";
const contact = {
  emails: ["andrea.guevara@altiorefiducia.com", "nicole.molina@altiorefiducia.com"],
  phone: ["+593 98 495 1662"],
  address: "Whymper E7 - 141 y Diego de Almagro, Edificio Millecento, Quito 170524",
  socialMedia: {
    instagram: "https://www.instagram.com/altiorefiducia/",
    facebook: "https://www.facebook.com/people/Altiore-Fiducia-Intermediaria-de-Reaseguros-SA/61559970053855/",
    linkedin: "https://www.linkedin.com/company/altiore-fiducia-intermediaria-de-reaseguros-s-a/"
  },
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7956715088285!2d-78.48630862503543!3d-0.19305639980504152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b000a6d1e47%3A0x8b13f918b028eecf!2sEdificio%20Millecento%20(Torre%20Whymper)!5e0!3m2!1sen!2sec!4v1718117539793!5m2!1sen!2sec"
};
const es_navbar_home = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Inicio`;
  }
);
const en_navbar_home = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Home`;
  }
);
const navbar_home = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("navbar_home", locale);
  if (locale === "es") return es_navbar_home();
  if (locale === "en") return en_navbar_home();
  return "navbar_home";
};
const es_navbar_about_us = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sobre Nosotros`;
  }
);
const en_navbar_about_us = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `About Us`;
  }
);
const navbar_about_us = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("navbar_about_us", locale);
  if (locale === "es") return es_navbar_about_us();
  if (locale === "en") return en_navbar_about_us();
  return "navbar_about_us";
};
const es_navbar_services = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Servicios`;
  }
);
const en_navbar_services = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Services`;
  }
);
const navbar_services = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("navbar_services", locale);
  if (locale === "es") return es_navbar_services();
  if (locale === "en") return en_navbar_services();
  return "navbar_services";
};
const es_navbar_language = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Idioma:`;
  }
);
const en_navbar_language = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Language:`;
  }
);
const navbar_language = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("navbar_language", locale);
  if (locale === "es") return es_navbar_language();
  if (locale === "en") return en_navbar_language();
  return "navbar_language";
};
const es_footer_address = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dirección`;
  }
);
const en_footer_address = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Address`;
  }
);
const footer_address = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("footer_address", locale);
  if (locale === "es") return es_footer_address();
  if (locale === "en") return en_footer_address();
  return "footer_address";
};
const es_footer_office = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nuestra Oficina`;
  }
);
const en_footer_office = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Our Office`;
  }
);
const footer_office = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("footer_office", locale);
  if (locale === "es") return es_footer_office();
  if (locale === "en") return en_footer_office();
  return "footer_office";
};
const es_footer_contact = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Contacto`;
  }
);
const en_footer_contact = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Contact`;
  }
);
const footer_contact = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("footer_contact", locale);
  if (locale === "es") return es_footer_contact();
  if (locale === "en") return en_footer_contact();
  return "footer_contact";
};
const es_footer_emails = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Emails:`;
  }
);
const en_footer_emails = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Emails:`;
  }
);
const footer_emails = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("footer_emails", locale);
  if (locale === "es") return es_footer_emails();
  if (locale === "en") return en_footer_emails();
  return "footer_emails";
};
const es_footer_social_media = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Redes Sociales:`;
  }
);
const en_footer_social_media = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Social Media:`;
  }
);
const footer_social_media = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("footer_social_media", locale);
  if (locale === "es") return es_footer_social_media();
  if (locale === "en") return en_footer_social_media();
  return "footer_social_media";
};
const es_footer_copyright = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Altiore Fiducia. Todos los derechos reservados. | Desarrollado por Pablo Beltran`;
  }
);
const en_footer_copyright = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Altiore Fiducia. All rights reserved. | Developed by Pablo Beltran`;
  }
);
const footer_copyright = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("footer_copyright", locale);
  if (locale === "es") return es_footer_copyright();
  if (locale === "en") return en_footer_copyright();
  return "footer_copyright";
};
const es_footer_services = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `1. Servicios`;
  }
);
const en_footer_services = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `1. Services`;
  }
);
const footer_services = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("footer_services", locale);
  if (locale === "es") return es_footer_services();
  if (locale === "en") return en_footer_services();
  return "footer_services";
};
const es_footer_about_us = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `2. Sobre Nosotros`;
  }
);
const en_footer_about_us = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `2. About Us`;
  }
);
const footer_about_us = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("footer_about_us", locale);
  if (locale === "es") return es_footer_about_us();
  if (locale === "en") return en_footer_about_us();
  return "footer_about_us";
};
function Navbar($$payload, $$props) {
  push();
  const getLocaleName = (locale) => {
    switch (locale) {
      case "es":
        return "Español";
      case "en":
        return "English";
      default:
        return locale;
    }
  };
  function renderLink($$payload2, href, text, mobile = false) {
    if (mobile) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<button${attr("aria-label", `${stringify(text)} Button`)} class="hover:text-secondary-300 hover:bg-primary-700 text-left font-medium text-white transition-colors">${escape_html(text)}</button>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<a${attr("href", href)} class="hover:text-secondary-300 font-medium text-white transition-colors">${escape_html(text)}</a>`;
    }
    $$payload2.out += `<!--]-->`;
  }
  const each_array = ensure_array_like(locales);
  const each_array_1 = ensure_array_like(locales);
  $$payload.out += `<header${attr_class(`${stringify("from-primary-900/80 absolute bg-gradient-to-b to-transparent")} top-0 right-0 left-0 z-50 transition-all duration-300`)}><div class="container mx-auto flex items-center justify-between px-6 py-4 sm:px-12 lg:px-24"><a href="/" class="flex items-center"><img${attr("src", assets.ALTIORE_LOGO)} alt="Altiore Fiducia" class="h-10 md:h-12"></a> <nav class="hidden items-center space-x-8 md:flex">`;
  renderLink($$payload, "/", /* @__PURE__ */ navbar_home());
  $$payload.out += `<!----> `;
  renderLink($$payload, "/services", /* @__PURE__ */ navbar_services());
  $$payload.out += `<!----> `;
  renderLink($$payload, "/about-us", /* @__PURE__ */ navbar_about_us());
  $$payload.out += `<!----></nav> <div class="flex items-center space-x-4"><div class="group relative hidden md:block"><button class="hover:text-secondary-300 flex items-center text-white transition-colors"><span class="uppercase">${escape_html(getLocale())}</span> <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <div class="bg-primary-700 absolute right-0 z-20 mt-2 w-24 scale-95 transform overflow-hidden rounded-md opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let locale = each_array[$$index];
    $$payload.out += `<button class="hover:bg-primary-600 block w-full px-4 py-2 text-sm text-white transition-colors"${attr("aria-label", `Change language to ${locale}`)}>${escape_html(getLocaleName(locale))}</button>`;
  }
  $$payload.out += `<!--]--></div></div> <button class="hover:text-secondary-300 text-white transition-colors md:hidden" aria-label="Toggle menu">`;
  DecorativeIcons($$payload, { name: "menu" });
  $$payload.out += `<!----></button></div></div> <div${attr_class(`bg-primary-800 fixed inset-y-0 right-0 w-64 transform shadow-lg transition-transform duration-300 ease-in-out md:hidden ${stringify("translate-x-full")}`)}><div class="flex justify-end p-4"><button class="hover:text-secondary-300 text-white transition-colors" aria-label="Close menu">`;
  DecorativeIcons($$payload, { name: "xmark" });
  $$payload.out += `<!----></button></div> <nav class="flex flex-col space-y-6 px-4 py-6">`;
  renderLink($$payload, "/", /* @__PURE__ */ navbar_home(), true);
  $$payload.out += `<!----> `;
  renderLink($$payload, "/services", /* @__PURE__ */ navbar_services(), true);
  $$payload.out += `<!----> `;
  renderLink($$payload, "/about-us", /* @__PURE__ */ navbar_about_us(), true);
  $$payload.out += `<!----> <div class="border-primary-700 border-t pt-6"><div class="mb-2 flex items-center"><span class="text-sm text-white">${escape_html(/* @__PURE__ */ navbar_language())}</span></div> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let locale = each_array_1[$$index_1];
    $$payload.out += `<button class="hover:text-secondary-300 block w-full py-2 text-left text-white transition-colors"${attr("aria-label", `Change language to ${locale}`)}>${escape_html(getLocaleName(locale))}</button>`;
  }
  $$payload.out += `<!--]--></div></nav></div></header>`;
  pop();
}
function FooterMap($$payload, $$props) {
  const { map, title } = $$props;
  $$payload.out += `<div class="h-64 w-full overflow-hidden rounded-lg"><iframe${attr("title", title)}${attr("src", map)} width="100%" height="100%" style="border:0;"${attr("allowfullscreen", true, true)} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;
}
function renderFooterLink($$payload, link, text) {
  $$payload.out += `<li><a${attr("href", link)} class="hover:text-secondary-300 text-secondary-300 transition-colors duration-300">${escape_html(text)}</a></li>`;
}
function renderFooterPhone($$payload, phone) {
  $$payload.out += `<p class="mb-4 flex items-center text-gray-300">`;
  DecorativeIcons($$payload, { name: "phone" });
  $$payload.out += `<!----> ${escape_html(phone)}</p>`;
}
function renderFooterEmail($$payload, email) {
  $$payload.out += `<a${attr("href", `mailto:${email}`)} class="hover:text-secondary-300 mb-2 flex items-center text-gray-300 transition-colors duration-300">`;
  DecorativeIcons($$payload, { name: "email" });
  $$payload.out += `<!----> ${escape_html(email)}</a>`;
}
function Footer($$payload, $$props) {
  push();
  const { contact: contact2 } = $$props;
  const each_array = ensure_array_like(contact2.phone);
  const each_array_1 = ensure_array_like(contact2.emails);
  $$payload.out += `<footer class="bg-primary-900 text-white"><div class="container mx-auto px-6 py-12 sm:px-12 lg:px-24"><div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"><div><h3 class="font-heading text-secondary-400 mb-6 text-xl font-bold">${escape_html(/* @__PURE__ */ footer_address())}</h3> <p class="mb-4 text-gray-300">${escape_html(contact2.address)}</p> <ul class="mt-6 space-y-2">`;
  renderFooterLink($$payload, "/services", /* @__PURE__ */ footer_services());
  $$payload.out += `<!----> `;
  renderFooterLink($$payload, "/about-us", /* @__PURE__ */ footer_about_us());
  $$payload.out += `<!----></ul></div> <div><h3 class="font-heading text-secondary-400 mb-6 text-xl font-bold">${escape_html(/* @__PURE__ */ footer_office())}</h3> `;
  FooterMap($$payload, {
    map: contact2.map,
    title: "Mapa de ubicación de Altiore Fiducia"
  });
  $$payload.out += `<!----></div> <div><h3 class="font-heading text-secondary-400 mb-6 text-xl font-bold">${escape_html(/* @__PURE__ */ footer_contact())}</h3> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let phone = each_array[$$index];
    renderFooterPhone($$payload, phone);
  }
  $$payload.out += `<!--]--> <div class="mb-6"><p class="mb-2 text-gray-300">${escape_html(/* @__PURE__ */ footer_emails())}</p> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let email = each_array_1[$$index_1];
    renderFooterEmail($$payload, email);
  }
  $$payload.out += `<!--]--></div> <div><p class="mb-2 text-gray-300">${escape_html(/* @__PURE__ */ footer_social_media())}</p> <div class="flex space-x-4"><a${attr("href", contact2.socialMedia.instagram)} class="hover:text-secondary-400 text-secondary-300 transition-colors duration-300" aria-label="Instagram" target="_blank">`;
  DecorativeIcons($$payload, { name: "instagram" });
  $$payload.out += `<!----></a> <a${attr("href", contact2.socialMedia.facebook)} class="hover:text-secondary-400 text-secondary-300 transition-colors duration-300" aria-label="Facebook" target="_blank">`;
  DecorativeIcons($$payload, { name: "facebook" });
  $$payload.out += `<!----></a> <a${attr("href", contact2.socialMedia.linkedin)} class="hover:text-secondary-400 text-secondary-300 transition-colors duration-300" aria-label="LinkedIn" target="_blank">`;
  DecorativeIcons($$payload, { name: "linkedin" });
  $$payload.out += `<!----></a></div></div></div></div> <div class="border-primary-700 mt-12 border-t pt-8 text-center"><p class="text-sm text-gray-400">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())}
				${escape_html(/* @__PURE__ */ footer_copyright())}</p></div></div></footer>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  const { children } = $$props;
  const each_array = ensure_array_like(locales);
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="canonical"${attr("href", `https://altiorefiducia.com${stringify(page.url.pathname)}`)}> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta name="robots" content="index, follow">`;
  });
  $$payload.out += `<div class="flex min-h-screen flex-col">`;
  Navbar($$payload);
  $$payload.out += `<!----> <main class="flex-1">`;
  children($$payload);
  $$payload.out += `<!----></main> `;
  Footer($$payload, { contact });
  $$payload.out += `<!----></div> <div style="display:none"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let locale = each_array[$$index];
    $$payload.out += `<a${attr("href", localizeHref(page.url.pathname, { locale }))}>${escape_html(locale)}</a>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _layout as default
};
