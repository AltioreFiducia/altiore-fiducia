// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_service_maritime_description = /** @type {(inputs: {}) => string} */ () => {
	return `Ampara las embarcaciones contra las pérdidas o daños que pueda sufrir en el ejercicio normal de sus operaciones de los diferentes tipos de embarcaciones.`
};

const en_service_maritime_description = /** @type {(inputs: {}) => string} */ () => {
	return `Protects vessels against losses or damages that may occur during their operation of different types of vessels.`
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
export const service_maritime_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.service_maritime_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("service_maritime_description", locale)
	if (locale === "es") return es_service_maritime_description(inputs)
	if (locale === "en") return en_service_maritime_description(inputs)
	return "service_maritime_description"
};