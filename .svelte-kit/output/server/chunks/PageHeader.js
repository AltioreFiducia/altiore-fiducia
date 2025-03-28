import { d as attr_class, h as stringify, f as attr, c as pop, p as push } from "./index.js";
import { D as DecorativeSVG } from "./DecorativeSVG.js";
function ContentWrapper($$payload, $$props) {
  const {
    withDecoration,
    decorationStyle,
    narrow,
    children
  } = $$props;
  $$payload.out += `<div class="relative overflow-hidden bg-white px-6 py-16 sm:px-12 md:py-24 lg:px-24">`;
  if (withDecoration) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="pointer-events-none absolute inset-0 z-[1] overflow-hidden">`;
    if (decorationStyle === "default") {
      $$payload.out += "<!--[-->";
      DecorativeSVG($$payload, { type: "abstract-dots-and-circles" });
    } else if (decorationStyle === "waves") {
      $$payload.out += "<!--[1-->";
      DecorativeSVG($$payload, { type: "waves" });
    } else if (decorationStyle === "geometric") {
      $$payload.out += "<!--[2-->";
      DecorativeSVG($$payload, { type: "geometric" });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div${attr_class(`relative z-10 container mx-auto ${stringify(narrow ? "max-w-3xl" : "")}`)}>`;
  children($$payload);
  $$payload.out += `<!----></div></div>`;
}
function PageHeader($$payload, $$props) {
  push();
  const {
    title,
    highlightedText,
    subtitle,
    backgroundImage
  } = $$props;
  $$payload.out += `<section class="from-primary-900 to-primary-800 relative overflow-hidden bg-gradient-to-br px-6 py-16 sm:px-12 lg:px-24">`;
  if (backgroundImage) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="absolute inset-0 z-0 opacity-20"><img${attr("src", backgroundImage)} alt="" class="h-full w-full object-cover"> <div class="bg-primary-900/60 absolute inset-0"></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="pointer-events-none absolute inset-0 z-[1] overflow-hidden">`;
  DecorativeSVG($$payload, {
    type: "diagonal-accent",
    class: "text-primary-700 opacity-10"
  });
  $$payload.out += `<!----> `;
  DecorativeSVG($$payload, {
    type: "abstract-dots",
    class: "text-secondary-300 opacity-10"
  });
  $$payload.out += `<!----></div> <div class="relative z-10 container mx-auto my-16">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="absolute right-0 bottom-0 left-0 z-10 w-full overflow-hidden leading-[0] text-white">`;
  DecorativeSVG($$payload, { type: "wave-transition", class: "fill-white" });
  $$payload.out += `<!----></div></section>`;
  pop();
}
export {
  ContentWrapper as C,
  PageHeader as P
};
