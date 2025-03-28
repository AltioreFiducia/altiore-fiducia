// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_navbar_services = /** @type {(inputs: {}) => string} */ () => {
	return `Servicios`
};

const en_navbar_services = /** @type {(inputs: {}) => string} */ () => {
	return `Services`
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
export const navbar_services = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.navbar_services(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("navbar_services", locale)
	if (locale === "es") return es_navbar_services(inputs)
	if (locale === "en") return en_navbar_services(inputs)
	return "navbar_services"
};