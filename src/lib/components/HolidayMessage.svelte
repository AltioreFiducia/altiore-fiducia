<script lang="ts">
	import { locale } from '$lib/i18n/i18n';

	import Icon from '$lib/components/Icon.svelte';

	export let title: Record<string, string>;
	export let text: Record<string, string>;
	export let image: string;

	let displayBanner = true;

	const handleClose = (): void => {
		displayBanner = false;
	};
</script>

{#if displayBanner}
	<div
		class="flex w-full bg-gradient-to-b from-tertiary-800 to-tertiary-700 gap-4 relative z-30 shadow-xl justify-between items-center"
	>
		<div class="flex gap-4">
			<img src={image} alt={title.en} class="object-fit w-16 h-16" />
			<div class="flex flex-col p-2">
				<h5 class="font-bold text-xl">{$locale === 'en' ? title.en : title.es}</h5>
				<p class="text-xs">{$locale === 'en' ? text.en : text.es}</p>
			</div>
		</div>

		<button
			type="button"
			class="btn-icon variant-filled h-auto md:h-6 w-auto md:w-6 m-2"
			on:click={handleClose}
		>
			<Icon name="close" width="w-4" height="h-4" />
		</button>
	</div>
{/if}
