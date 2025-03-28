// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_service_property_description = /** @type {(inputs: {}) => string} */ () => {
	return `Desde desastres naturales, como huracanes o terremotos, hasta interrupciones operativas y pérdidas económicas, las empresas deben encontrar soluciones de gestión de riesgos.`
};

const en_service_property_description = /** @type {(inputs: {}) => string} */ () => {
	return `From natural disasters such as hurricanes or earthquakes, to operational disruptions and economic losses, companies must find risk management solutions.`
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
export const service_property_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.service_property_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("service_property_description", locale)
	if (locale === "es") return es_service_property_description(inputs)
	if (locale === "en") return en_service_property_description(inputs)
	return "service_property_description"
};