// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_testimonials_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `nuestros clientes`
};

const en_testimonials_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `clients say`
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
export const testimonials_subtitle = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.testimonials_subtitle(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("testimonials_subtitle", locale)
	if (locale === "es") return es_testimonials_subtitle(inputs)
	if (locale === "en") return en_testimonials_subtitle(inputs)
	return "testimonials_subtitle"
};