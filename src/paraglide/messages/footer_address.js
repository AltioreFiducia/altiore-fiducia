// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_footer_address = /** @type {(inputs: {}) => string} */ () => {
	return `Dirección`
};

const en_footer_address = /** @type {(inputs: {}) => string} */ () => {
	return `Address`
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
export const footer_address = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.footer_address(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("footer_address", locale)
	if (locale === "es") return es_footer_address(inputs)
	if (locale === "en") return en_footer_address(inputs)
	return "footer_address"
};