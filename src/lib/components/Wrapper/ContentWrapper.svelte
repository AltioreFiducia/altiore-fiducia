<script lang="ts">
	import type { DecorationStyle } from '$lib/types/decoratives';
	import type { Snippet } from 'svelte';

	import DecorativeSVG from '$lib/components/DecorativeSVG/DecorativeSVG.svelte';

	interface Props {
		withDecoration: boolean;
		decorationStyle: DecorationStyle;
		narrow: boolean;
		children: Snippet<[]>;
	}

	const { withDecoration, decorationStyle, narrow, children }: Props = $props();
</script>

<div class="relative overflow-hidden bg-white px-6 py-16 sm:px-12 md:py-24 lg:px-24">
	{#if withDecoration}
		<div class="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
			{#if decorationStyle === 'default'}
				<DecorativeSVG type="abstract-dots-and-circles" />
			{:else if decorationStyle === 'waves'}
				<DecorativeSVG type="waves" />
			{:else if decorationStyle === 'geometric'}
				<DecorativeSVG type="geometric" />
			{/if}
		</div>
	{/if}

	<div class="relative z-10 container mx-auto {narrow ? 'max-w-3xl' : ''}">
		{@render children()}
	</div>
</div>
