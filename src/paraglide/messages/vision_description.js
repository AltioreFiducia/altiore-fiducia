// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_vision_description = /** @type {(inputs: {}) => string} */ () => {
	return `Ser el intermediario de reaseguros con el mejor servicio para el cliente generando de esta manera confianza y resiliencia.`
};

const en_vision_description = /** @type {(inputs: {}) => string} */ () => {
	return `Be the insurance intermediary with the best service for the client, generating confidence and resilience.`
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
export const vision_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.vision_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("vision_description", locale)
	if (locale === "es") return es_vision_description(inputs)
	if (locale === "en") return en_vision_description(inputs)
	return "vision_description"
};