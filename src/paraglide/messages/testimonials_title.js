// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_testimonials_title = /** @type {(inputs: {}) => string} */ () => {
	return `Lo que dicen`
};

const en_testimonials_title = /** @type {(inputs: {}) => string} */ () => {
	return `What our`
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
export const testimonials_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.testimonials_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("testimonials_title", locale)
	if (locale === "es") return es_testimonials_title(inputs)
	if (locale === "en") return en_testimonials_title(inputs)
	return "testimonials_title"
};