<script lang="ts">
	import { isMobile } from '$lib/stores/mobile.store';
	import { t } from '$lib/i18n/i18n';
	import assets from '$lib/assets/assets';
	import Stepper from '$lib/components/Stepper.svelte';

	import objectives from '$lib/constants/objectives';
	import { aboutPageStore } from '$lib/stores/pages.store';
	import { onMount } from 'svelte';
	import { OBSERVER_THRESHOLD } from '$lib/constants/observerThreshold';
	import { fade } from 'svelte/transition';
	import translations from './translation';

	let aboutPageElement: HTMLElement;
	let aboutPageVisible = false;
	let aboutPageTrigger = false;

	$: polygonPoints = $isMobile ? '0,0 100,0 100,20' : '0,0 10,0 10,0 0,100';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					aboutPageStore.set(entry.isIntersecting);
				});
			},
			{ threshold: OBSERVER_THRESHOLD }
		);

		if (aboutPageElement) {
			observer.observe(aboutPageElement);
		}

		return () => {
			if (aboutPageElement) {
				observer.unobserve(aboutPageElement);
			}
		};
	});

	aboutPageStore.subscribe((value) => {
		aboutPageVisible = value;
		if (value) {
			aboutPageTrigger = value;
		}
	});
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-0 bg-primary-500 max-h-80" id="about-header">
	<header class="flex flex-col w-full h-full justify-center items-center">
		<h1 class="h1 font-bold text-4xl md:text-8xl text-center p-4">{$t(translations, 'TITLE')}</h1>
	</header>
	<div class="w-full h-full relative max-h-80">
		<svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
			<polygon points={polygonPoints} class="fill-primary-500 text-transparent"></polygon>
		</svg>
		<img src={assets.ABOUT_US} alt="About Us" class="object-fit" />
	</div>
</div>

<section class="section bg-surface-100">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8" bind:this={aboutPageElement}>
		{#if aboutPageTrigger}
			<div
				class="flex flex-col gap-4 items-start text-surface-900"
				class:visible={aboutPageVisible}
				in:fade={{ duration: 1000 }}
			>
				<header>
					<h3 class="text-2xl font-bold">{$t(translations, 'VISION_TITLE')}</h3>
				</header>
				<article>
					<p>{$t(translations, 'VISION_TEXT')}</p>
				</article>
			</div>
			<div
				class="flex flex-col gap-4 items-start text-surface-900"
				class:visible={aboutPageVisible}
				in:fade={{ duration: 2000 }}
			>
				<header>
					<h3 class="text-2xl font-bold">{$t(translations, 'MISSION_TITLE')}</h3>
				</header>
				<article>
					<p>{$t(translations, 'MISSION_TEXT')}</p>
				</article>
			</div>
		{/if}
	</div>
</section>

<section class="section bg-primary-100">
	<Stepper items={objectives} />
</section>
