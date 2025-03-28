<script lang="ts">
	import { generateRandomId } from '$lib/utils/generators';
	import { m } from '../../../paraglide/messages';

	const bullets = [
		m.hero_content_bullets_1(),
		m.hero_content_bullets_2(),
		m.hero_content_bullets_3()
	];
</script>

<div class="max-w-3xl">
	<h1 class="font-heading hero-heading mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
		{m.hero_content_title()}
		<span class="text-secondary-400">Altiore Fiducia</span>
	</h1>

	<p class="hero-subtitle mb-8 text-xl text-white md:text-2xl">
		{m.hero_content_subtitle()}
	</p>

	<ul class="space-y-4 text-lg text-white md:text-xl">
		{#each bullets as item, index (generateRandomId().concat(String(index)))}
			<li class="hero-list-item flex list-disc items-start" style="--index: {index}">
				<span class="text-secondary-400 mr-2">•</span>
				<span>{item}</span>
			</li>
		{/each}
	</ul>
</div>

<style>
	@keyframes flyIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.hero-heading,
	.hero-subtitle,
	.hero-list-item {
		opacity: 0;
		animation: flyIn 0.5s ease-out forwards;
	}

	.hero-heading {
		animation-delay: 0s;
	}

	.hero-subtitle {
		animation-delay: 0.2s;
	}

	.hero-list-item {
		animation-delay: calc(0.4s + var(--index) * 0.1s);
	}
</style>
