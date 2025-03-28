import type { Contact } from '$lib/interfaces/contact';

export const contact: Contact = {
	emails: ['andrea.guevara@altiorefiducia.com', 'nicole.molina@altiorefiducia.com'],
	phone: ['+593 98 495 1662'],
	address: 'Whymper E7 - 141 y Diego de Almagro, Edificio Millecento, Quito 170524',
	socialMedia: {
		instagram: 'https://www.instagram.com/altiorefiducia/',
		facebook:
			'https://www.facebook.com/people/Altiore-Fiducia-Intermediaria-de-Reaseguros-SA/61559970053855/',
		linkedin: 'https://www.linkedin.com/company/altiore-fiducia-intermediaria-de-reaseguros-s-a/'
	},
	map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7956715088285!2d-78.48630862503543!3d-0.19305639980504152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b000a6d1e47%3A0x8b13f918b028eecf!2sEdificio%20Millecento%20(Torre%20Whymper)!5e0!3m2!1sen!2sec!4v1718117539793!5m2!1sen!2sec'
} as const;
