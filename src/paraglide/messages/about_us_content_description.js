// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_about_us_content_description = /** @type {(inputs: {}) => string} */ () => {
	return `Altiore Fiducia, en latín, significa "la confianza más alta" y es lo que queremos brindar a todos quienes lleguen a nosotros, mediante:`
};

const en_about_us_content_description = /** @type {(inputs: {}) => string} */ () => {
	return `Altiore Fiducia, in Latin, means "the highest trust" and is what we want to offer to all who come to us, through:`
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
export const about_us_content_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.about_us_content_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("about_us_content_description", locale)
	if (locale === "es") return es_about_us_content_description(inputs)
	if (locale === "en") return en_about_us_content_description(inputs)
	return "about_us_content_description"
};