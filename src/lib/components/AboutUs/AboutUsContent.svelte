<script lang="ts">
	import { m } from '../../../paraglide/messages';

	import DecorativeIcon from '$lib/components/DecorativeSVG/DecorativeIcons.svelte';
</script>

{#snippet renderListItem(icon: string, text: string)}
	<li class="flex items-start">
		<span class="text-secondary-500 mr-3 h-6 w-6 flex-shrink-0">
			<DecorativeIcon name={icon} />
		</span>
		<span class="text-gray-700">{text}</span>
	</li>
{/snippet}

<div class="lg:w-1/2">
	<h2 class="font-heading text-primary-800 mb-8 -rotate-2 transform text-4xl font-bold md:text-5xl">
		{m.about_us_content_title_1()}
		<span class="text-secondary-500">{m.about_us_content_title_2()}</span>
	</h2>

	<p class="mb-6 text-lg text-gray-700">
		{m.about_us_content_description()}
	</p>

	<ul class="space-y-4">
		{@render renderListItem('shield', m.about_us_content_bullets_1())}
		{@render renderListItem('globe', m.about_us_content_bullets_2())}
		{@render renderListItem('arrow', m.about_us_content_bullets_3())}
	</ul>
</div>
