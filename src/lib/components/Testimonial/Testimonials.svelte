<script lang="ts">
	import { generateRandomId } from '$lib/utils/generators';
	import { testimonials } from '$lib/constants/testimonials';
	import { m } from '../../../paraglide/messages';

	import TestimonialCard from '$lib/components/Testimonial/TestimonialCard.svelte';
</script>

<h2 class="font-heading text-primary-800 mb-12 text-3xl font-bold md:text-4xl">
	{m.testimonials_title()} <span class="text-secondary-500">{m.testimonials_subtitle()}</span>
</h2>

<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
	{#each testimonials as testimonial (generateRandomId().concat(String(testimonials.indexOf(testimonial))))}
		<TestimonialCard {testimonial} />
	{/each}
</div>
