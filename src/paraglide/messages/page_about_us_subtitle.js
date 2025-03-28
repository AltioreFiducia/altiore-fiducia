// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_page_about_us_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `Conoce nuestra historia, misión y visión para entender qué nos hace diferentes.`
};

const en_page_about_us_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `Discover our history, mission and vision to understand what makes us different.`
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
export const page_about_us_subtitle = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.page_about_us_subtitle(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("page_about_us_subtitle", locale)
	if (locale === "es") return es_page_about_us_subtitle(inputs)
	if (locale === "en") return en_page_about_us_subtitle(inputs)
	return "page_about_us_subtitle"
};