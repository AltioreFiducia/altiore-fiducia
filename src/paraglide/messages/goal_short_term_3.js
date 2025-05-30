// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_goal_short_term_3 = /** @type {(inputs: {}) => string} */ () => {
	return `Fomentar entre los colaboradores una cultura de crecimiento, trabajo en equipo y liderazgo.`
};

const en_goal_short_term_3 = /** @type {(inputs: {}) => string} */ () => {
	return `Foster among collaborators a culture of growth, teamwork and leadership.`
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
export const goal_short_term_3 = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.goal_short_term_3(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("goal_short_term_3", locale)
	if (locale === "es") return es_goal_short_term_3(inputs)
	if (locale === "en") return en_goal_short_term_3(inputs)
	return "goal_short_term_3"
};