<script lang="ts">
	import { goals, missionVision } from '$lib/constants/goals';
	import { ABOUT_US_METADATA } from '$lib/constants/metadata';
	import { m } from '../../paraglide/messages';

	import ContentWrapper from '$lib/components/Wrapper/ContentWrapper.svelte';
	import AboutUsCard from '$lib/components/AboutUs/AboutUsCard.svelte';
	import PageHeader from '$lib/components/Wrapper/PageHeader.svelte';
	import Timeline from '$lib/components/Timeline/Timeline.svelte';

	import assets from '$lib/constants/assets';
</script>

<svelte:head>
	<title>{ABOUT_US_METADATA.title}</title>
	<meta name="description" content={ABOUT_US_METADATA.description} />

	<meta property="og:title" content={ABOUT_US_METADATA.title} />
	<meta property="og:description" content={ABOUT_US_METADATA.description} />
	<meta property="og:image" content={assets.HOME_ABOUT_US} />
	<meta property="og:type" content="website" />

	<meta name="keywords" content={ABOUT_US_METADATA.keywords.join(', ')} />
	<link rel="canonical" href="https://altiorefiducia.com/about-us" />
</svelte:head>

<PageHeader
	title={m.page_about_us_title()}
	highlightedText={m.page_about_us_highlighted_text()}
	subtitle={m.page_about_us_subtitle()}
	backgroundImage={assets.HOME_ABOUT_US}
/>

<ContentWrapper withDecoration={true} narrow={false} decorationStyle="geometric">
	<div class="g‰ap-16 mb-24 flex flex-col">
		<div class="flex flex-col">
			<h2 class="font-heading text-primary-800 mb-16 text-center text-3xl font-bold md:text-4xl">
				{m.page_about_us_esencia_title_1()}
				<span class="text-secondary-500">{m.page_about_us_esencia_title_2()}</span>
			</h2>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
				<AboutUsCard
					isPrimary={true}
					title={m.page_about_us_vision_title()}
					description={missionVision.vision}
				/>
				<AboutUsCard
					isPrimary={false}
					title={m.page_about_us_mission_title()}
					description={missionVision.mission}
				/>
			</div>
		</div>

		<div class="mt-16 flex flex-col">
			<h2 class="font-heading text-primary-800 mb-16 text-center text-3xl font-bold md:text-4xl">
				{m.page_about_us_goals_title()}
				<span class="text-secondary-500">{m.page_about_us_goals_title_2()}</span>
			</h2>

			<Timeline {goals} />
		</div>
	</div>
</ContentWrapper>
