// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';

const es_service_content_description = /** @type {(inputs: {}) => string} */ () => {
	return `Nunca nos quedamos quietos y siempre estamos buscando nuevas formas de crecer y mejorar cómo hacer negocios. Ofrecemos varios servicios según tus necesidades.`
};

const en_service_content_description = /** @type {(inputs: {}) => string} */ () => {
	return `We never stay still and are always looking for new ways to grow and improve how we do business. We offer various services depending on your needs.`
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
export const service_content_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.service_content_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("service_content_description", locale)
	if (locale === "es") return es_service_content_description(inputs)
	if (locale === "en") return en_service_content_description(inputs)
	return "service_content_description"
};