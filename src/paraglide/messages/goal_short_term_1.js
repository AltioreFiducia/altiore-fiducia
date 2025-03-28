// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_goal_short_term_1 = /** @type {(inputs: {}) => string} */ () => {
	return `Generar confianza en las aseguradoras con el servicio que brindamos sobre la asesoría de excelentes coberturas ante los riesgos de los negocios u objeto a cubrir.`
};

const en_goal_short_term_1 = /** @type {(inputs: {}) => string} */ () => {
	return `Generate confidence in insurers with the service we provide on advice for excellent coverage against business risks.`
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
export const goal_short_term_1 = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.goal_short_term_1(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("goal_short_term_1", locale)
	if (locale === "es") return es_goal_short_term_1(inputs)
	if (locale === "en") return en_goal_short_term_1(inputs)
	return "goal_short_term_1"
};