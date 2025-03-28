// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_navbar_language = /** @type {(inputs: {}) => string} */ () => {
	return `Idioma:`
};

const en_navbar_language = /** @type {(inputs: {}) => string} */ () => {
	return `Language:`
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
export const navbar_language = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.navbar_language(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("navbar_language", locale)
	if (locale === "es") return es_navbar_language(inputs)
	if (locale === "en") return en_navbar_language(inputs)
	return "navbar_language"
};