import { g as escape_html, c as pop, p as push, e as ensure_array_like, f as attr, k as attr_style, h as stringify, i as head } from "../../chunks/index.js";
import { D as DecorativeSVG, H as HOME_METADATA } from "../../chunks/DecorativeSVG.js";
import { S as Services, s as services } from "../../chunks/Services.js";
import { a as assets } from "../../chunks/assets.js";
import "clsx";
import { g as getLocale, t as trackMessageCall } from "../../chunks/runtime.js";
import { D as DecorativeIcons } from "../../chunks/DecorativeIcons.js";
const es_hero_content_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bienvenido a`;
  }
);
const en_hero_content_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Welcome to`;
  }
);
const hero_content_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("hero_content_title", locale);
  if (locale === "es") return es_hero_content_title();
  if (locale === "en") return en_hero_content_title();
  return "hero_content_title";
};
const es_hero_content_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Somos un intermediario de reaseguros y ayudamos a nuestros clientes a:`;
  }
);
const en_hero_content_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `We are an insurance intermediary and we help our clients to:`;
  }
);
const hero_content_subtitle = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("hero_content_subtitle", locale);
  if (locale === "es") return es_hero_content_subtitle();
  if (locale === "en") return en_hero_content_subtitle();
  return "hero_content_subtitle";
};
const es_hero_content_bullets_1 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Manejar sus riegos`;
  }
);
const en_hero_content_bullets_1 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Manage their risks`;
  }
);
const hero_content_bullets_1 = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("hero_content_bullets_1", locale);
  if (locale === "es") return es_hero_content_bullets_1();
  if (locale === "en") return en_hero_content_bullets_1();
  return "hero_content_bullets_1";
};
const es_hero_content_bullets_2 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Proteger sus Bienes y recuperar sus perdidas`;
  }
);
const en_hero_content_bullets_2 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Protect their assets and recover their losses`;
  }
);
const hero_content_bullets_2 = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("hero_content_bullets_2", locale);
  if (locale === "es") return es_hero_content_bullets_2();
  if (locale === "en") return en_hero_content_bullets_2();
  return "hero_content_bullets_2";
};
const es_hero_content_bullets_3 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mediante este servicio ayudamos a que los negocios e instituciones se mantengan operando y reconstruyendo sus activos`;
  }
);
const en_hero_content_bullets_3 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Through this service, we help businesses and institutions to remain operational and rebuild their assets`;
  }
);
const hero_content_bullets_3 = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("hero_content_bullets_3", locale);
  if (locale === "es") return es_hero_content_bullets_3();
  if (locale === "en") return en_hero_content_bullets_3();
  return "hero_content_bullets_3";
};
const es_company_values_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nuestros`;
  }
);
const en_company_values_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Our`;
  }
);
const company_values_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("company_values_title", locale);
  if (locale === "es") return es_company_values_title();
  if (locale === "en") return en_company_values_title();
  return "company_values_title";
};
const es_company_values_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `valores`;
  }
);
const en_company_values_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `values`;
  }
);
const company_values_subtitle = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("company_values_subtitle", locale);
  if (locale === "es") return es_company_values_subtitle();
  if (locale === "en") return en_company_values_subtitle();
  return "company_values_subtitle";
};
const es_company_values_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Estos valores fundamentales guían cada aspecto de nuestro trabajo y reflejan nuestro compromiso con la excelencia y el servicio al cliente.`;
  }
);
const en_company_values_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `These fundamental values guide every aspect of our work and reflect our commitment to excellence and customer service.`;
  }
);
const company_values_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("company_values_description", locale);
  if (locale === "es") return es_company_values_description();
  if (locale === "en") return en_company_values_description();
  return "company_values_description";
};
const es_about_us_content_title_1 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sobre`;
  }
);
const en_about_us_content_title_1 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `About`;
  }
);
const about_us_content_title_1 = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("about_us_content_title_1", locale);
  if (locale === "es") return es_about_us_content_title_1();
  if (locale === "en") return en_about_us_content_title_1();
  return "about_us_content_title_1";
};
const es_about_us_content_title_2 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nosotros`;
  }
);
const en_about_us_content_title_2 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Us`;
  }
);
const about_us_content_title_2 = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("about_us_content_title_2", locale);
  if (locale === "es") return es_about_us_content_title_2();
  if (locale === "en") return en_about_us_content_title_2();
  return "about_us_content_title_2";
};
const es_about_us_content_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Altiore Fiducia, en latín, significa "la confianza más alta" y es lo que queremos brindar a todos quienes lleguen a nosotros, mediante:`;
  }
);
const en_about_us_content_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Altiore Fiducia, in Latin, means "the highest trust" and is what we want to offer to all who come to us, through:`;
  }
);
const about_us_content_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("about_us_content_description", locale);
  if (locale === "es") return es_about_us_content_description();
  if (locale === "en") return en_about_us_content_description();
  return "about_us_content_description";
};
const es_about_us_content_bullets_1 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Coberturas de reaseguros con calidad de respaldo.`;
  }
);
const en_about_us_content_bullets_1 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Reinsurance coverages with quality backup.`;
  }
);
const about_us_content_bullets_1 = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("about_us_content_bullets_1", locale);
  if (locale === "es") return es_about_us_content_bullets_1();
  if (locale === "en") return en_about_us_content_bullets_1();
  return "about_us_content_bullets_1";
};
const es_about_us_content_bullets_2 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Security de excelente prestigio a nivel mundial.`;
  }
);
const en_about_us_content_bullets_2 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `World-class security.`;
  }
);
const about_us_content_bullets_2 = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("about_us_content_bullets_2", locale);
  if (locale === "es") return es_about_us_content_bullets_2();
  if (locale === "en") return en_about_us_content_bullets_2();
  return "about_us_content_bullets_2";
};
const es_about_us_content_bullets_3 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Eficiencia.`;
  }
);
const en_about_us_content_bullets_3 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Efficiency.`;
  }
);
const about_us_content_bullets_3 = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("about_us_content_bullets_3", locale);
  if (locale === "es") return es_about_us_content_bullets_3();
  if (locale === "en") return en_about_us_content_bullets_3();
  return "about_us_content_bullets_3";
};
const es_testimonials_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Lo que dicen`;
  }
);
const en_testimonials_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `What our`;
  }
);
const testimonials_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("testimonials_title", locale);
  if (locale === "es") return es_testimonials_title();
  if (locale === "en") return en_testimonials_title();
  return "testimonials_title";
};
const es_testimonials_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `nuestros clientes`;
  }
);
const en_testimonials_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `clients say`;
  }
);
const testimonials_subtitle = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("testimonials_subtitle", locale);
  if (locale === "es") return es_testimonials_subtitle();
  if (locale === "en") return en_testimonials_subtitle();
  return "testimonials_subtitle";
};
const es_service_button_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conoce todos nuestros servicios`;
  }
);
const en_service_button_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discover all our services`;
  }
);
const service_button_text = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("service_button_text", locale);
  if (locale === "es") return es_service_button_text();
  if (locale === "en") return en_service_button_text();
  return "service_button_text";
};
const es_service_content_title_1 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nuestros`;
  }
);
const en_service_content_title_1 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Our`;
  }
);
const service_content_title_1 = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("service_content_title_1", locale);
  if (locale === "es") return es_service_content_title_1();
  if (locale === "en") return en_service_content_title_1();
  return "service_content_title_1";
};
const es_service_content_title_2 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `servicios`;
  }
);
const en_service_content_title_2 = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `services`;
  }
);
const service_content_title_2 = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("service_content_title_2", locale);
  if (locale === "es") return es_service_content_title_2();
  if (locale === "en") return en_service_content_title_2();
  return "service_content_title_2";
};
const es_service_content_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nunca nos quedamos quietos y siempre estamos buscando nuevas formas de crecer y mejorar cómo hacer negocios. Ofrecemos varios servicios según tus necesidades.`;
  }
);
const en_service_content_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `We never stay still and are always looking for new ways to grow and improve how we do business. We offer various services depending on your needs.`;
  }
);
const service_content_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("service_content_description", locale);
  if (locale === "es") return es_service_content_description();
  if (locale === "en") return en_service_content_description();
  return "service_content_description";
};
const es_testimonial_1_name = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `María Fernanda Cárdenas`;
  }
);
const en_testimonial_1_name = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `María Fernanda Cárdenas`;
  }
);
const testimonial_1_name = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("testimonial_1_name", locale);
  if (locale === "es") return es_testimonial_1_name();
  if (locale === "en") return en_testimonial_1_name();
  return "testimonial_1_name";
};
const es_testimonial_1_quote = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Es muy grato trabajar con Altiore, su conocimiento del mercado y un servicio de calidad, generan una gran experiencia al momento de hacer negocios. Son un muy buen socio en colocaciones facultativas.`;
  }
);
const en_testimonial_1_quote = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `It is very pleasant to work with Altiore, their market knowledge and quality service generate a great experience when doing business. They are a very good partner in facultative placements.`;
  }
);
const testimonial_1_quote = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("testimonial_1_quote", locale);
  if (locale === "es") return es_testimonial_1_quote();
  if (locale === "en") return en_testimonial_1_quote();
  return "testimonial_1_quote";
};
const es_testimonial_1_company = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Gerente de Reaseguros, Seguros Constitución`;
  }
);
const en_testimonial_1_company = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Reinsurance Manager, Seguros Constitución`;
  }
);
const testimonial_1_company = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("testimonial_1_company", locale);
  if (locale === "es") return es_testimonial_1_company();
  if (locale === "en") return en_testimonial_1_company();
  return "testimonial_1_company";
};
const es_testimonial_2_name = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Anónimo`;
  }
);
const en_testimonial_2_name = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Anonymous`;
  }
);
const testimonial_2_name = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("testimonial_2_name", locale);
  if (locale === "es") return es_testimonial_2_name();
  if (locale === "en") return en_testimonial_2_name();
  return "testimonial_2_name";
};
const es_testimonial_2_quote = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Quiero expresar mi total satisfacción con los servicios de Altiore Fiducia. Desde el inicio, sus colaboradores han demostrado ser personas altamente responsables, comprometidas y profesionales en cada aspecto de su trabajo. Han cumplido con todos los plazos establecidos y han entregado resultados de alta calidad, superando mis expectativas. Definitivamente recomiendo a Altiore Fiducia para quienes busquen profesionales confiables y competentes. ¡Un excelente trabajo!`;
  }
);
const en_testimonial_2_quote = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `I want to express my total satisfaction with the services of Altiore Fiducia. From the beginning, their collaborators have demonstrated that they are highly responsible, committed and professional in every aspect of their work. They have met all the deadlines and have delivered high-quality results, exceeding my expectations. I definitely recommend Altiore Fiducia to those who seek reliable and competent professionals. ¡An excellent job!`;
  }
);
const testimonial_2_quote = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("testimonial_2_quote", locale);
  if (locale === "es") return es_testimonial_2_quote();
  if (locale === "en") return en_testimonial_2_quote();
  return "testimonial_2_quote";
};
const es_testimonial_2_company = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Analista de Reaseguros, Quito Tecnico y Reaseguros`;
  }
);
const en_testimonial_2_company = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Analyst of Reinsurance, Quito Technical and Reinsurance`;
  }
);
const testimonial_2_company = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("testimonial_2_company", locale);
  if (locale === "es") return es_testimonial_2_company();
  if (locale === "en") return en_testimonial_2_company();
  return "testimonial_2_company";
};
function renderListItem($$payload, icon, text) {
  $$payload.out += `<li class="flex items-start"><span class="text-secondary-500 mr-3 h-6 w-6 flex-shrink-0">`;
  DecorativeIcons($$payload, { name: icon });
  $$payload.out += `<!----></span> <span class="text-gray-700">${escape_html(text)}</span></li>`;
}
function AboutUsContent($$payload, $$props) {
  push();
  $$payload.out += `<div class="lg:w-1/2"><h2 class="font-heading text-primary-800 mb-8 -rotate-2 transform text-4xl font-bold md:text-5xl">${escape_html(/* @__PURE__ */ about_us_content_title_1())} <span class="text-secondary-500">${escape_html(/* @__PURE__ */ about_us_content_title_2())}</span></h2> <p class="mb-6 text-lg text-gray-700">${escape_html(/* @__PURE__ */ about_us_content_description())}</p> <ul class="space-y-4">`;
  renderListItem($$payload, "shield", /* @__PURE__ */ about_us_content_bullets_1());
  $$payload.out += `<!----> `;
  renderListItem($$payload, "globe", /* @__PURE__ */ about_us_content_bullets_2());
  $$payload.out += `<!----> `;
  renderListItem($$payload, "arrow", /* @__PURE__ */ about_us_content_bullets_3());
  $$payload.out += `<!----></ul></div>`;
  pop();
}
function ServiceContent($$payload, $$props) {
  push();
  $$payload.out += `<div><h2 class="font-heading mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">${escape_html(/* @__PURE__ */ service_content_title_1())} <span class="text-secondary-400">${escape_html(/* @__PURE__ */ service_content_title_2())}</span></h2> <p class="mx-auto max-w-3xl text-lg text-gray-300">${escape_html(/* @__PURE__ */ service_content_description())}</p></div>`;
  pop();
}
function CompanyValues($$payload, $$props) {
  push();
  let displayText = "";
  $$payload.out += `<div class="svelte-167zh87"><h2 class="font-heading text-primary-800 mb-12 text-4xl font-bold md:text-5xl svelte-167zh87">${escape_html(/* @__PURE__ */ company_values_title())} <span class="text-secondary-500 svelte-167zh87">${escape_html(/* @__PURE__ */ company_values_subtitle())}</span></h2> <div class="mx-auto max-w-3xl svelte-167zh87"><div class="flex h-20 items-center justify-center svelte-167zh87"><p class="text-primary-700 text-2xl font-semibold md:text-3xl lg:text-4xl svelte-167zh87">${escape_html(displayText)}<span class="text-secondary-500 animate-blink font-extralight svelte-167zh87">|</span></p></div> <p class="mt-8 text-lg text-gray-600 svelte-167zh87">${escape_html(/* @__PURE__ */ company_values_description())}</p></div></div>`;
  pop();
}
function ServiceButton($$payload, $$props) {
  push();
  $$payload.out += `<a href="/services" class="bg-secondary-500 hover:bg-secondary-600 text-primary-900 inline-block rounded-lg px-8 py-3 font-bold transition-colors duration-300">${escape_html(/* @__PURE__ */ service_button_text())}</a>`;
  pop();
}
const testimonials = [
  {
    name: /* @__PURE__ */ testimonial_1_name(),
    quote: /* @__PURE__ */ testimonial_1_quote(),
    company: /* @__PURE__ */ testimonial_1_company()
  },
  {
    name: /* @__PURE__ */ testimonial_2_name(),
    quote: /* @__PURE__ */ testimonial_2_quote(),
    company: /* @__PURE__ */ testimonial_2_company()
  }
];
function TestimonialCard($$payload, $$props) {
  push();
  const { testimonial } = $$props;
  const getNameInitials = (name) => name.split(" ").map((n) => n[0]).join("");
  $$payload.out += `<div class="relative flex h-full flex-col rounded-lg bg-white p-8 shadow-md"><div class="text-secondary-400 absolute -top-5 left-8 text-5xl opacity-25">`;
  DecorativeIcons($$payload, { name: "quote" });
  $$payload.out += `<!----></div> <div class="flex flex-grow flex-col justify-center"><blockquote class="my-auto text-gray-700 italic">"${escape_html(testimonial.quote)}"</blockquote></div> <div class="mt-6 flex items-center"><div class="bg-primary-100 flex h-12 w-12 items-center justify-center rounded-full"><span class="text-primary-700 text-lg font-bold">${escape_html(getNameInitials(testimonial.name))}</span></div> <div class="ml-4 flex flex-col items-start"><p class="text-primary-800 font-bold">${escape_html(testimonial.name)}</p> <p class="text-sm text-gray-600">${escape_html(testimonial.company)}</p></div></div></div>`;
  pop();
}
function Testimonials($$payload, $$props) {
  push();
  const each_array = ensure_array_like(testimonials);
  $$payload.out += `<h2 class="font-heading text-primary-800 mb-12 text-3xl font-bold md:text-4xl">${escape_html(/* @__PURE__ */ testimonials_title())} <span class="text-secondary-500">${escape_html(/* @__PURE__ */ testimonials_subtitle())}</span></h2> <div class="grid grid-cols-1 gap-8 md:grid-cols-2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let testimonial = each_array[$$index];
    TestimonialCard($$payload, { testimonial });
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function AboutUsImage($$payload, $$props) {
  let { image } = $$props;
  $$payload.out += `<div class="relative lg:w-1/2"><div class="relative z-10 overflow-hidden rounded-lg shadow-xl"><img${attr("src", image)} alt="Altiore Fiducia Team" class="h-auto w-full object-cover"></div> `;
  DecorativeSVG($$payload, {
    type: "image-accent",
    class: "text-primary-200"
  });
  $$payload.out += `<!----></div>`;
}
function HeroContent($$payload, $$props) {
  push();
  const bullets = [
    /* @__PURE__ */ hero_content_bullets_1(),
    /* @__PURE__ */ hero_content_bullets_2(),
    /* @__PURE__ */ hero_content_bullets_3()
  ];
  const each_array = ensure_array_like(bullets);
  $$payload.out += `<div class="max-w-3xl"><h1 class="font-heading hero-heading mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl svelte-1lqb42p">${escape_html(/* @__PURE__ */ hero_content_title())} <span class="text-secondary-400">Altiore Fiducia</span></h1> <p class="hero-subtitle mb-8 text-xl text-white md:text-2xl svelte-1lqb42p">${escape_html(/* @__PURE__ */ hero_content_subtitle())}</p> <ul class="space-y-4 text-lg text-white md:text-xl"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let item = each_array[index];
    $$payload.out += `<li class="hero-list-item flex list-disc items-start svelte-1lqb42p"${attr_style(`--index: ${stringify(index)}`)}><span class="text-secondary-400 mr-2">•</span> <span>${escape_html(item)}</span></li>`;
  }
  $$payload.out += `<!--]--></ul></div>`;
  pop();
}
function HeroVideo($$payload, $$props) {
  let { video } = $$props;
  $$payload.out += `<div class="absolute inset-0 z-0"><video class="h-full w-full object-cover" autoplay loop muted playsinline><source${attr("src", video)} type="video/mp4"> <div class="bg-primary-800 absolute inset-0"></div></video> <div class="from-primary-900/80 to-primary-800/50 absolute inset-0 bg-gradient-to-r"></div></div>`;
}
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(HOME_METADATA.title)}</title>`;
    $$payload2.out += `<meta name="description"${attr("content", HOME_METADATA.description)}> <meta property="og:title"${attr("content", HOME_METADATA.title)}> <meta property="og:description"${attr("content", HOME_METADATA.description)}> <meta property="og:image"${attr("content", assets.ALTIORE_LOGO)}> <meta property="og:type" content="website"> <meta name="keywords"${attr("content", HOME_METADATA.keywords.join(", "))}> <link rel="canonical" href="https://altiorefiducia.com">`;
  });
  $$payload.out += `<section id="hero" class="bg-primary-900 relative h-screen w-full overflow-hidden">`;
  HeroVideo($$payload, { video: assets.HOME_VIDEO });
  $$payload.out += `<!----> <div class="pointer-events-none absolute inset-0 z-[1] overflow-hidden">`;
  DecorativeSVG($$payload, {
    type: "diagonal-accent",
    class: "text-secondary-400"
  });
  $$payload.out += `<!----> `;
  DecorativeSVG($$payload, {
    type: "floating-geometric",
    class: "text-secondary-300"
  });
  $$payload.out += `<!----> `;
  DecorativeSVG($$payload, {
    type: "abstract-dots",
    class: "text-secondary-200"
  });
  $$payload.out += `<!----></div> <div class="relative z-10 flex h-full items-center px-6 sm:px-12 lg:px-24">`;
  HeroContent($$payload);
  $$payload.out += `<!----></div> <div class="absolute right-0 bottom-0 left-0 z-10 w-full overflow-hidden leading-[0] text-white">`;
  DecorativeSVG($$payload, { type: "wave-transition", class: "fill-white" });
  $$payload.out += `<!----></div></section> <section id="about-us" class="relative overflow-hidden bg-white px-6 py-20 sm:px-12 lg:px-24"><div class="pointer-events-none absolute inset-0 z-[1] overflow-hidden">`;
  DecorativeSVG($$payload, {
    type: "abstract-circles",
    class: "text-secondary-500 opacity-90"
  });
  $$payload.out += `<!----> `;
  DecorativeSVG($$payload, {
    type: "curved-lines",
    class: "text-primary-500 opacity-20 md:opacity-90"
  });
  $$payload.out += `<!----></div> <div class="relative z-10 container mx-auto"><div class="flex flex-col items-center gap-12 lg:flex-row">`;
  AboutUsContent($$payload);
  $$payload.out += `<!----> `;
  AboutUsImage($$payload, { image: assets.HOME_ABOUT_US });
  $$payload.out += `<!----></div></div></section> <section id="values" class="relative overflow-hidden bg-gray-100 px-6 py-20 sm:px-12 lg:px-24"><div class="absolute top-0 right-0 left-0 z-10 w-full rotate-180 overflow-hidden leading-[0] text-white">`;
  DecorativeSVG($$payload, { type: "wave-transition", class: "fill-white" });
  $$payload.out += `<!----></div> <div class="pointer-events-none absolute inset-0 z-[1] overflow-hidden">`;
  DecorativeSVG($$payload, {
    type: "diagonal-accent",
    class: "text-primary-200"
  });
  $$payload.out += `<!----> `;
  DecorativeSVG($$payload, {
    type: "floating-geometric",
    class: "text-secondary-200"
  });
  $$payload.out += `<!----></div> <div class="relative z-10 container mx-auto mt-12 text-center">`;
  CompanyValues($$payload);
  $$payload.out += `<!----> <div class="mt-24">`;
  Testimonials($$payload);
  $$payload.out += `<!----></div></div></section> <section id="services" class="bg-primary-800 relative overflow-hidden px-6 py-20 text-white sm:px-12 lg:px-24"><div class="absolute top-0 right-0 left-0 z-10 w-full rotate-180 overflow-hidden leading-[0] text-gray-50">`;
  DecorativeSVG($$payload, {
    type: "wave-transition",
    class: "fill-gray-100"
  });
  $$payload.out += `<!----></div> <div class="pointer-events-none absolute inset-0 z-[1] overflow-hidden">`;
  DecorativeSVG($$payload, {
    type: "abstract-dots",
    class: "text-primary-600 opacity-20"
  });
  $$payload.out += `<!----> `;
  DecorativeSVG($$payload, {
    type: "diagonal-accent",
    class: "text-secondary-300 opacity-10"
  });
  $$payload.out += `<!----> `;
  DecorativeSVG($$payload, {
    type: "floating-geometric",
    class: "text-secondary-400 absolute bottom-12 left-12 opacity-15"
  });
  $$payload.out += `<!----></div> <div class="relative z-10 container mx-auto my-16"><div class="mb-16 text-center">`;
  ServiceContent($$payload);
  $$payload.out += `<!----></div> `;
  Services($$payload, { services });
  $$payload.out += `<!----> <div class="mt-12 text-center">`;
  ServiceButton($$payload);
  $$payload.out += `<!----></div></div></section>`;
  pop();
}
export {
  _page as default
};
