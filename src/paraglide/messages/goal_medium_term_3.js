// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_goal_medium_term_3 = /** @type {(inputs: {}) => string} */ () => {
	return `Ofrecer soluciones personalizadas para cuidar el patrimonio de los clientes ante riesgos pre-contractuales, contractuales y post contractuales.`
};

const en_goal_medium_term_3 = /** @type {(inputs: {}) => string} */ () => {
	return `Offer customized solutions to protect the assets of our clients against pre-contractual, contractual and post-contractual risks.`
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
export const goal_medium_term_3 = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.goal_medium_term_3(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("goal_medium_term_3", locale)
	if (locale === "es") return es_goal_medium_term_3(inputs)
	if (locale === "en") return en_goal_medium_term_3(inputs)
	return "goal_medium_term_3"
};