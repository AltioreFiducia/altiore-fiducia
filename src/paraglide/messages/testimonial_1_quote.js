// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_testimonial_1_quote = /** @type {(inputs: {}) => string} */ () => {
	return `Es muy grato trabajar con Altiore, su conocimiento del mercado y un servicio de calidad, generan una gran experiencia al momento de hacer negocios. Son un muy buen socio en colocaciones facultativas.`
};

const en_testimonial_1_quote = /** @type {(inputs: {}) => string} */ () => {
	return `It is very pleasant to work with Altiore, their market knowledge and quality service generate a great experience when doing business. They are a very good partner in facultative placements.`
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
export const testimonial_1_quote = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.testimonial_1_quote(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("testimonial_1_quote", locale)
	if (locale === "es") return es_testimonial_1_quote(inputs)
	if (locale === "en") return en_testimonial_1_quote(inputs)
	return "testimonial_1_quote"
};