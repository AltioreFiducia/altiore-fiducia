<script lang="ts">
	import { SERVICES_METADATA } from '$lib/constants/metadata';
	import { availableServices } from '$lib/constants/services';
	import { m } from '../../paraglide/messages';

	import assets from '$lib/constants/assets';

	import ContentWrapper from '$lib/components/Wrapper/ContentWrapper.svelte';
	import PageHeader from '$lib/components/Wrapper/PageHeader.svelte';
	import Services from '$lib/components/Service/Services.svelte';
</script>

<svelte:head>
	<title>{SERVICES_METADATA.title}</title>
	<meta name="description" content={SERVICES_METADATA.description} />

	<meta property="og:title" content={SERVICES_METADATA.title} />
	<meta property="og:description" content={SERVICES_METADATA.description} />
	<meta property="og:image" content={assets.SERVICE_BACKGROUND} />
	<meta property="og:type" content="website" />

	<meta name="keywords" content={SERVICES_METADATA.keywords.join(', ')} />
	<link rel="canonical" href="https://altiorefiducia.com/services" />
</svelte:head>

<PageHeader
	title={m.page_services_title()}
	highlightedText={m.page_services_highlighted_text()}
	subtitle={m.page_services_subtitle()}
	backgroundImage={assets.SERVICE_BACKGROUND}
/>

<ContentWrapper withDecoration={true} narrow={false} decorationStyle="waves">
	<h2 class="font-heading text-primary-800 mb-16 text-center text-3xl font-bold md:text-4xl">
		{m.page_services_text_1()} <span class="text-secondary-500">{m.page_services_text_2()}</span>
	</h2>
	<Services services={availableServices} />
</ContentWrapper>
