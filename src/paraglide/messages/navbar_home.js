// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_navbar_home = /** @type {(inputs: {}) => string} */ () => {
	return `Inicio`
};

const en_navbar_home = /** @type {(inputs: {}) => string} */ () => {
	return `Home`
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
export const navbar_home = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.navbar_home(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("navbar_home", locale)
	if (locale === "es") return es_navbar_home(inputs)
	if (locale === "en") return en_navbar_home(inputs)
	return "navbar_home"
};