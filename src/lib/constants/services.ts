import type { Service } from '$lib/interfaces/service';

import { m } from '../../paraglide/messages';

import assets from '$lib/constants/assets';

export const services: Service[] = [
	{
		id: 'serv-property',
		title: m.service_property_title(),
		description: m.service_property_description(),
		image: assets.SERVICE_PROPERTY
	},
	{
		id: 'serv-maritime',
		title: m.service_maritime_title(),
		description: m.service_maritime_description(),
		image: assets.SERVICE_MARITIME
	},
	{
		id: 'serv-air',
		title: m.service_air_title(),
		description: m.service_air_description(),
		image: assets.SERVICE_AVIATION
	}
];

export const availableServices: Service[] = [
	{
		id: 'serv-air',
		title: m.service_air_title(),
		description: m.service_air_description(),
		bullets: [
			m.service_air_bullets_1(),
			m.service_air_bullets_2(),
			m.service_air_bullets_3(),
			m.service_air_bullets_4(),
			m.service_air_bullets_5()
		],
		image: assets.SERVICE_AVIATION
	},
	{
		id: 'serv-energy',
		title: m.service_energy_title(),
		bullets: [m.service_energy_bullets_1(), m.service_energy_bullets_2()],
		image: assets.SERVICE_ENERGY
	},
	{
		id: 'serv-finance-lines',
		title: m.service_finance_lines_title(),
		bullets: [
			m.service_finance_lines_bullets_1(),
			m.service_finance_lines_bullets_2(),
			m.service_finance_lines_bullets_3(),
			m.service_finance_lines_bullets_4(),
			m.service_finance_lines_bullets_5()
		],
		image: assets.SERVICE_CYBER
	},
	{
		id: 'serv-technical-lines',
		title: m.service_technical_lines_title(),
		bullets: [
			m.service_technical_lines_bullets_1(),
			m.service_technical_lines_bullets_2(),
			m.service_technical_lines_bullets_3(),
			m.service_technical_lines_bullets_4(),
			m.service_technical_lines_bullets_5()
		],
		image: assets.SERVICE_CONSTRUCTION
	},
	{
		id: 'serv-maritime',
		title: m.service_maritime_title(),
		description: m.service_maritime_description(),
		bullets: [
			m.service_maritime_bullets_1(),
			m.service_maritime_bullets_2(),
			m.service_maritime_bullets_3(),
			m.service_maritime_bullets_4()
		],
		image: assets.SERVICE_MARITIME
	},
	{
		id: 'serv-property',
		title: m.service_property_title(),
		description: m.service_property_description(),
		image: assets.SERVICE_PROPERTY
	},
	{
		id: 'serv-civil-liability',
		title: m.service_civil_liability_title(),
		description: m.service_civil_liability_description(),
		image: assets.SERVICE_PERSONAL
	}
];
