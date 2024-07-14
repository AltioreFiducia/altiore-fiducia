<script lang="ts">
	export let words: string[];

	const duplicatedValues = [...words, ...words];
</script>

<div class="relative overflow-hidden whitespace-nowrap">
	<div class="scroll-container">
		{#each duplicatedValues as value}
			<div class="scroll-item">{value}</div>
		{/each}
	</div>
</div>

<style>
	.scroll-container {
		animation: scroll-left 30s linear infinite;
		@apply whitespace-nowrap inline-block;
	}

	.scroll-item {
		@apply whitespace-nowrap inline-block py-4 px-12 text-xl font-semibold text-primary-500 uppercase;
	}

	@keyframes scroll-left {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
