// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_goal_long_term_2 = /** @type {(inputs: {}) => string} */ () => {
	return `Ser una empresa reconocida por su constante crecimiento rentable y liderazgo en ciertos riesgos, con inspiración en la excelencia de servicio a sus clientes.`
};

const en_goal_long_term_2 = /** @type {(inputs: {}) => string} */ () => {
	return `Be a company recognized for its constant profitable growth and leadership in certain risks, with inspiration from the excellence of service to its clients.`
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
export const goal_long_term_2 = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.goal_long_term_2(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("goal_long_term_2", locale)
	if (locale === "es") return es_goal_long_term_2(inputs)
	if (locale === "en") return en_goal_long_term_2(inputs)
	return "goal_long_term_2"
};