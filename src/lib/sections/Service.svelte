<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { serviceSectionStore } from '$lib/stores/section.store';
	import { OBSERVER_THRESHOLD } from '$lib/constants/observerThreshold';
	import { t } from '$lib/i18n/i18n';
	import assets from '$lib/assets/assets';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import { goto } from '$app/navigation';
	import smoothScroll from '$lib/utils/smoothScroll';

	import translations from './translation';

	let serviceSectionElement: HTMLElement;
	let serviceSectionVisible = false;
	let serviceSectionTrigger = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					serviceSectionStore.set(entry.isIntersecting);
				});
			},
			{ threshold: OBSERVER_THRESHOLD }
		);

		if (serviceSectionElement) {
			observer.observe(serviceSectionElement);
		}

		return () => {
			if (serviceSectionElement) {
				observer.unobserve(serviceSectionElement);
			}
		};
	});

	serviceSectionStore.subscribe((value) => {
		serviceSectionVisible = value;
		if (value) {
			serviceSectionTrigger = value;
		}
	});

	const handleClickButton = async (): Promise<void> => {
		await goto('/services');
		smoothScroll('service-header');
	};
</script>

<section id="services" class="section bg-surface-100" bind:this={serviceSectionElement}>
	<div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
		<div class="flex flex-col justify-start items-start text-surface-900 gap-8">
			<header>
				<h2 class="h2 text-primary-900">{$t(translations, 'SERVICE_TITLE')}</h2>
			</header>
			<article>
				<p class="leading-relaxed">
					{$t(translations, 'SERVICE_SUBTITLE')}
				</p>
			</article>
			<button class="btn variant-ringed-secondary text-xl" on:click={handleClickButton}
				>{$t(translations, 'SERVICE_BUTTON')}</button
			>
		</div>
		{#if serviceSectionTrigger}
			<div class:visible={serviceSectionVisible} in:fly={{ delay: 0, y: 100, duration: 1000 }}>
				<ServiceCard title={$t(translations, 'SERVICE_PRO')} imageSrc={assets.SERVICE_PROPERTY}>
					{$t(translations, 'SERVICE_ONE')}
				</ServiceCard>
			</div>
			<div class:visible={serviceSectionVisible} in:fly={{ delay: 500, y: 100, duration: 1000 }}>
				<ServiceCard title={$t(translations, 'SERVICE_MAR')} imageSrc={assets.SERVICE_MARITIME}>
					{$t(translations, 'SERVICE_TWO')}
				</ServiceCard>
			</div>
			<div class:visible={serviceSectionVisible} in:fly={{ delay: 1000, y: 100, duration: 1000 }}>
				<ServiceCard title={$t(translations, 'SERVICE_AVI')} imageSrc={assets.SERVICE_AVIATION}>
					{$t(translations, 'SERVICE_THREE')}
				</ServiceCard>
			</div>
		{/if}
	</div>
</section>
