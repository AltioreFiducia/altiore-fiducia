// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_testimonial_2_quote = /** @type {(inputs: {}) => string} */ () => {
	return `Quiero expresar mi total satisfacción con los servicios de Altiore Fiducia. Desde el inicio, sus colaboradores han demostrado ser personas altamente responsables, comprometidas y profesionales en cada aspecto de su trabajo. Han cumplido con todos los plazos establecidos y han entregado resultados de alta calidad, superando mis expectativas. Definitivamente recomiendo a Altiore Fiducia para quienes busquen profesionales confiables y competentes. ¡Un excelente trabajo!`
};

const en_testimonial_2_quote = /** @type {(inputs: {}) => string} */ () => {
	return `I want to express my total satisfaction with the services of Altiore Fiducia. From the beginning, their collaborators have demonstrated that they are highly responsible, committed and professional in every aspect of their work. They have met all the deadlines and have delivered high-quality results, exceeding my expectations. I definitely recommend Altiore Fiducia to those who seek reliable and competent professionals. ¡An excellent job!`
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "es" | "en" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const testimonial_2_quote = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.testimonial_2_quote(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("testimonial_2_quote", locale)
	if (locale === "es") return es_testimonial_2_quote(inputs)
	if (locale === "en") return en_testimonial_2_quote(inputs)
	return "testimonial_2_quote"
};