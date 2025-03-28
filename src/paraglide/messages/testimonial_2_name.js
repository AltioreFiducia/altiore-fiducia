// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_testimonial_2_name = /** @type {(inputs: {}) => string} */ () => {
	return `Anónimo`
};

const en_testimonial_2_name = /** @type {(inputs: {}) => string} */ () => {
	return `Anonymous`
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
export const testimonial_2_name = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.testimonial_2_name(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("testimonial_2_name", locale)
	if (locale === "es") return es_testimonial_2_name(inputs)
	if (locale === "en") return en_testimonial_2_name(inputs)
	return "testimonial_2_name"
};