<script lang="ts">
	import type { Testimonial } from '$lib/interfaces/testimonial';

	import DecorativeIcon from '$lib/components/DecorativeSVG/DecorativeIcons.svelte';

	interface Props {
		testimonial: Testimonial;
	}

	const { testimonial }: Props = $props();

	const getNameInitials = (name: string): string =>
		name
			.split(' ')
			.map((n) => n[0])
			.join('');
</script>

<div class="relative flex h-full flex-col rounded-lg bg-white p-8 shadow-md">
	<div class="text-secondary-400 absolute -top-5 left-8 text-5xl opacity-25">
		<DecorativeIcon name="quote" />
	</div>

	<div class="flex flex-grow flex-col justify-center">
		<blockquote class="my-auto text-gray-700 italic">
			"{testimonial.quote}"
		</blockquote>
	</div>

	<div class="mt-6 flex items-center">
		<div class="bg-primary-100 flex h-12 w-12 items-center justify-center rounded-full">
			<span class="text-primary-700 text-lg font-bold">{getNameInitials(testimonial.name)}</span>
		</div>
		<div class="ml-4 flex flex-col items-start">
			<p class="text-primary-800 font-bold">{testimonial.name}</p>
			<p class="text-sm text-gray-600">{testimonial.company}</p>
		</div>
	</div>
</div>
