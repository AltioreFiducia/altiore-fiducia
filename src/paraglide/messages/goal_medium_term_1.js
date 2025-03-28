// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_goal_medium_term_1 = /** @type {(inputs: {}) => string} */ () => {
	return `Ser el bróker de reaseguros con el mejor servicio para nuestros clientes del mercado ecuatoriano.`
};

const en_goal_medium_term_1 = /** @type {(inputs: {}) => string} */ () => {
	return `Be the insurance broker with the best service for our clients in the Ecuadorian market.`
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
export const goal_medium_term_1 = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.goal_medium_term_1(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("goal_medium_term_1", locale)
	if (locale === "es") return es_goal_medium_term_1(inputs)
	if (locale === "en") return en_goal_medium_term_1(inputs)
	return "goal_medium_term_1"
};