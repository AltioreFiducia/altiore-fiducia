import type { IService } from '$lib/interfaces/service.interface';
import assets from '$lib/assets/assets';

import { locale as language, translate } from '$lib/i18n/i18n';
import { get } from 'svelte/store';

import locale from './translation';

const services: IService[] = [
	{
		image: assets.SERVICE_PROPERTY,
		title: translate(get(language), locale, 'SERVICE_PRO', {}),
		description: translate(get(language), locale, 'SERVICE_DESC', {})
	},
	{
		image: assets.SERVICE_PERSONAL,
		title: translate(get(language), locale, 'SERVICE_RES_CIV', {}),
		description: translate(get(language), locale, 'SERVICE_RES_CIV_DESC', {})
	},
	{
		image: assets.SERVICE_CONSTRUCTION,
		title: translate(get(language), locale, 'SERVICE_LIN_TEC', {}),
		list: [
			translate(get(language), locale, 'SERVICE_LIN_TEC_ONE', {}),
			translate(get(language), locale, 'SERVICE_LIN_TEC_TWO', {}),
			translate(get(language), locale, 'SERVICE_LIN_TEC_THREE', {}),
			translate(get(language), locale, 'SERVICE_LIN_TEC_FOUR', {}),
			translate(get(language), locale, 'SERVICE_LIN_TEC_FIVE', {})
		]
	},
	{
		image: assets.SERVICE_AVIATION,
		title: translate(get(language), locale, 'SERVICE_AVI', {}),
		description: translate(get(language), locale, 'SERVICE_AVI_DESC', {}),
		list: [
			translate(get(language), locale, 'SERVICE_AVI_ONE', {}),
			translate(get(language), locale, 'SERVICE_AVI_TWO', {}),
			translate(get(language), locale, 'SERVICE_AVI_THREE', {}),
			translate(get(language), locale, 'SERVICE_AVI_FOUR', {}),
			translate(get(language), locale, 'SERVICE_AVI_FIVE', {})
		]
	},
	{
		image: assets.SERVICE_MARITIME,
		title: translate(get(language), locale, 'SERVICE_MAR', {}),
		description: translate(get(language), locale, 'SERVICE_MAR_DESC', {}),
		list: [
			translate(get(language), locale, 'SERVICE_MAR_ONE', {}),
			translate(get(language), locale, 'SERVICE_MAR_TWO', {}),
			translate(get(language), locale, 'SERVICE_MAR_THREE', {}),
			translate(get(language), locale, 'SERVICE_MAR_FOUR', {})
		]
	},
	{
		image: assets.SERVICE_ENERGY,
		title: translate(get(language), locale, 'SERVICE_ENE', {}),
		list: [
			translate(get(language), locale, 'SERVICE_ENE_ONE', {}),
			translate(get(language), locale, 'SERVICE_ENE_TWO', {})
		]
	},
	{
		image: assets.SERVICE_CYBER,
		title: translate(get(language), locale, 'SERVICE_LIN_FIN', {}),
		list: [
			translate(get(language), locale, 'SERVICE_LIN_FIN_ONE', {}),
			translate(get(language), locale, 'SERVICE_LIN_FIN_TWO', {}),
			translate(get(language), locale, 'SERVICE_LIN_FIN_THREE', {}),
			translate(get(language), locale, 'SERVICE_LIN_FIN_FOUR', {}),
			translate(get(language), locale, 'SERVICE_LIN_FIN_FIVE', {})
		]
	}
];

export default services;
