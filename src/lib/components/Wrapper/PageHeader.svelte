<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import DecorativeSvg from '$lib/components/DecorativeSVG/DecorativeSVG.svelte';

	interface Props {
		title: string;
		highlightedText: string;
		subtitle: string;
		backgroundImage: string;
	}

	const { title, highlightedText, subtitle, backgroundImage }: Props = $props();

	let isVisible = $state(false);

	onMount(() => {
		isVisible = true;
	});
</script>

<section
	class="from-primary-900 to-primary-800 relative overflow-hidden bg-gradient-to-br px-6 py-16 sm:px-12 lg:px-24"
>
	{#if backgroundImage}
		<div class="absolute inset-0 z-0 opacity-20">
			<img src={backgroundImage} alt="" class="h-full w-full object-cover" />
			<div class="bg-primary-900/60 absolute inset-0"></div>
		</div>
	{/if}

	<div class="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
		<DecorativeSvg type="diagonal-accent" class="text-primary-700 opacity-10" />
		<DecorativeSvg type="abstract-dots" class="text-secondary-300 opacity-10" />
	</div>

	<div class="relative z-10 container mx-auto my-16">
		{#if isVisible}
			<h1
				class="font-heading mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
				in:fly={{ x: -200, duration: 500 }}
			>
				{title.replace(highlightedText, '')}
				{#if highlightedText}
					<span class="text-secondary-400">{highlightedText}</span>
				{/if}
			</h1>

			<p class="max-w-3xl text-xl text-gray-300" in:fly={{ x: -200, duration: 500, delay: 300 }}>
				{subtitle}
			</p>
		{/if}
	</div>

	<div class="absolute right-0 bottom-0 left-0 z-10 w-full overflow-hidden leading-[0] text-white">
		<DecorativeSvg type="wave-transition" class="fill-white" />
	</div>
</section>
