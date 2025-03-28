// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_service_civil_liability_title = /** @type {(inputs: {}) => string} */ () => {
	return `Responsabilidad Civil`
};

const en_service_civil_liability_title = /** @type {(inputs: {}) => string} */ () => {
	return `Civil Liability`
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
export const service_civil_liability_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.service_civil_liability_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("service_civil_liability_title", locale)
	if (locale === "es") return es_service_civil_liability_title(inputs)
	if (locale === "en") return en_service_civil_liability_title(inputs)
	return "service_civil_liability_title"
};