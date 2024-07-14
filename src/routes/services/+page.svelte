<script lang="ts">
	import { servicePageStore } from '$lib/stores/pages.store';
	import { OBSERVER_THRESHOLD } from '$lib/constants/observerThreshold';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { isMobile } from '$lib/stores/mobile.store';
	import { t } from '$lib/i18n/i18n';

	import Service from '$lib/components/Service.svelte';
	import services from '$lib/constants/service';
	import assets from '$lib/assets/assets';
	import translations from './translation';

	let servicePageElement: HTMLElement;
	let servicePageVisible = false;
	let servicePageTrigger = false;

	$: polygonPoints = $isMobile ? '0,0 100,0 100,20' : '0,0 10,0 10,0 0,100';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					servicePageStore.set(entry.isIntersecting);
				});
			},
			{ threshold: OBSERVER_THRESHOLD }
		);

		if (servicePageElement) {
			observer.observe(servicePageElement);
		}

		return () => {
			if (servicePageElement) {
				observer.unobserve(servicePageElement);
			}
		};
	});

	servicePageStore.subscribe((value) => {
		servicePageVisible = value;
		if (value) {
			servicePageTrigger = value;
		}
	});
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-0 bg-primary-500 max-h-80" id="service-header">
	<header class="flex flex-col w-full h-full justify-center items-center">
		<h1 class="h1 font-bold text-4xl md:text-8xl text-center p-4">{$t(translations, 'TITLE')}</h1>
	</header>
	<div class="w-full h-full relative max-h-80">
		<svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
			<polygon points={polygonPoints} class="fill-primary-500 text-transparent"></polygon>
		</svg>
		<img src={assets.OUR_SERVICES} alt="About Us" class="object-fit" />
	</div>
</div>
<section class="section bg-surface-100">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4" bind:this={servicePageElement}>
		{#each services as service, i}
			{#if servicePageTrigger}
				<div class:visible={servicePageVisible} in:fly={{ delay: 500 * i, y: 100, duration: 1000 }}>
					<Service {service} />
				</div>
			{/if}
		{/each}
	</div>
</section>
