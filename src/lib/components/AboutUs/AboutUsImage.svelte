<script lang="ts">
	import DecorativeSvg from '$lib/components/DecorativeSVG/DecorativeSVG.svelte';

	interface Props {
		image: string;
	}

	let { image }: Props = $props();
</script>

<div class="relative lg:w-1/2">
	<div class="relative z-10 overflow-hidden rounded-lg shadow-xl">
		<img src={image} alt="Altiore Fiducia Team" class="h-auto w-full object-cover" />
	</div>
	<DecorativeSvg type="image-accent" class="text-primary-200" />
</div>
