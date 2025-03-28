// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_goal_short_term_2 = /** @type {(inputs: {}) => string} */ () => {
	return `Asesorar en cada decisión, riesgo y consultoría de su negocio.`
};

const en_goal_short_term_2 = /** @type {(inputs: {}) => string} */ () => {
	return `Advise in each decision, risk and consulting of your business.`
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
export const goal_short_term_2 = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.goal_short_term_2(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("goal_short_term_2", locale)
	if (locale === "es") return es_goal_short_term_2(inputs)
	if (locale === "en") return en_goal_short_term_2(inputs)
	return "goal_short_term_2"
};