// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_company_values_description = /** @type {(inputs: {}) => string} */ () => {
	return `Estos valores fundamentales guían cada aspecto de nuestro trabajo y reflejan nuestro compromiso con la excelencia y el servicio al cliente.`
};

const en_company_values_description = /** @type {(inputs: {}) => string} */ () => {
	return `These fundamental values guide every aspect of our work and reflect our commitment to excellence and customer service.`
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
export const company_values_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.company_values_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("company_values_description", locale)
	if (locale === "es") return es_company_values_description(inputs)
	if (locale === "en") return en_company_values_description(inputs)
	return "company_values_description"
};