import type { Testimonial } from '$lib/interfaces/testimonial';

import { m } from '../../paraglide/messages';

export const testimonials: Testimonial[] = [
	{
		name: m.testimonial_1_name(),
		quote: m.testimonial_1_quote(),
		company: m.testimonial_1_company()
	},
	{
		name: m.testimonial_2_name(),
		quote: m.testimonial_2_quote(),
		company: m.testimonial_2_company()
	}
] as const;
