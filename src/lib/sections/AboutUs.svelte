<script lang="ts">
	import { onMount } from 'svelte';
	import { aboutUsSectionStore } from '$lib/stores/section.store';
	import { OBSERVER_THRESHOLD } from '$lib/constants/observerThreshold';
	import { fade } from 'svelte/transition';
	import { t } from '$lib/i18n/i18n';

	import WordScroller from '$lib/components/WordScroller.svelte';
	import assets from '$lib/assets/assets';
	import translations from './translation';
	import companyValues from '$lib/constants/companyValues';

	let aboutUsSectionElement: HTMLElement;
	let aboutUsSectionVisible = false;
	let aboutUsSectionTrigger = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					aboutUsSectionStore.set(entry.isIntersecting);
				});
			},
			{ threshold: OBSERVER_THRESHOLD }
		);

		if (aboutUsSectionElement) {
			observer.observe(aboutUsSectionElement);
		}

		return () => {
			if (aboutUsSectionElement) {
				observer.unobserve(aboutUsSectionElement);
			}
		};
	});

	aboutUsSectionStore.subscribe((value) => {
		aboutUsSectionVisible = value;
		if (value) {
			aboutUsSectionTrigger = value;
		}
	});
</script>

<section
	id="about-us"
	class="section bg-surface-300 justify-center items-center space-y-16"
	bind:this={aboutUsSectionElement}
>
	<div class="flex max-w-full md:max-w-[60%] gap-4 justify-center items-center">
		<header class="flex flex-col h-full justify-between items-center space-y-4">
			<hr class="divider-vertical h-32" />
			<span class="text-sm font-medium text-surface-900 -rotate-90 md:text-xl"
				>{$t(translations, 'ABOUT_US_TITLE')}</span
			>
		</header>
		{#if aboutUsSectionTrigger}
			<div
				class="flex flex-col md:flex-row gap-4 items-start justify-center"
				class:visible={aboutUsSectionVisible}
				in:fade={{ duration: 1000 }}
			>
				<article class="text-surface-900 leading-relaxed text-left space-y-4">
					<p class="text-xl">
						{$t(translations, 'ABOUT_US_TEXT')}
					</p>
					<ul class="text-xl list-disc px-4 font-extralight space-y-4">
						<li>{$t(translations, 'ABOUT_US_ONE')}</li>
						<li>{$t(translations, 'ABOUT_US_TWO')}</li>
						<li>{$t(translations, 'ABOUT_US_THREE')}</li>
					</ul>
				</article>

				<img
					src={assets.PEOPLE_MEETING}
					alt="People Meeting"
					class="max-h-60 max-w-60 aspect-square object-cover hard-shadow"
					id="people-meeting"
				/>
			</div>
		{/if}
	</div>
	<div class="flex w-full justify-center items-center gap-4">
		<hr class="w-32" />
		<span class="font-medium text-surface-900 text-xl text-center"
			>{$t(translations, 'ABOUT_US_VALUES')}</span
		>
		<hr class="w-32" />
	</div>
	<div class="flex w-full">
		<WordScroller words={companyValues} />
	</div>
</section>

<style>
	.hard-shadow {
		box-shadow: 10px 10px 0px #d2d033;
	}
</style>
