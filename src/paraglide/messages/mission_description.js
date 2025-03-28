// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_mission_description = /** @type {(inputs: {}) => string} */ () => {
	return `Juntos, tener un conocimiento profundo, información inteligente para ofrecer soluciones, asesoría y calidad para la colocación adecuada de reaseguros y manejo de los siniestros.`
};

const en_mission_description = /** @type {(inputs: {}) => string} */ () => {
	return `Together, having a deep knowledge, intelligent information to offer solutions, advice and quality for the appropriate placement of reinsurance and the management of claims.`
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
export const mission_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_description", locale)
	if (locale === "es") return es_mission_description(inputs)
	if (locale === "en") return en_mission_description(inputs)
	return "mission_description"
};