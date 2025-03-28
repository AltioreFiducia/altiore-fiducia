// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_service_maritime_bullets_4 = /** @type {(inputs: {}) => string} */ () => {
	return `STP`
};

const en_service_maritime_bullets_4 = /** @type {(inputs: {}) => string} */ () => {
	return `STP`
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
export const service_maritime_bullets_4 = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.service_maritime_bullets_4(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("service_maritime_bullets_4", locale)
	if (locale === "es") return es_service_maritime_bullets_4(inputs)
	if (locale === "en") return en_service_maritime_bullets_4(inputs)
	return "service_maritime_bullets_4"
};