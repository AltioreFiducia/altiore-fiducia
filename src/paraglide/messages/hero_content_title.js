// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_hero_content_title = /** @type {(inputs: {}) => string} */ () => {
	return `Bienvenido a`
};

const en_hero_content_title = /** @type {(inputs: {}) => string} */ () => {
	return `Welcome to`
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
export const hero_content_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.hero_content_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("hero_content_title", locale)
	if (locale === "es") return es_hero_content_title(inputs)
	if (locale === "en") return en_hero_content_title(inputs)
	return "hero_content_title"
};