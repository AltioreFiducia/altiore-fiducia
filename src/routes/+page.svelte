<script lang="ts">
	import { t } from '$lib/i18n/i18n';

	import Landing from '$lib/sections/Landing.svelte';
	import AboutUs from '$lib/sections/AboutUs.svelte';
	import Service from '$lib/sections/Service.svelte';

	import translations from './translation';
</script>

<svelte:head>
	<title>Altiore Fiducia | {$t(translations, 'HOME')}</title>
</svelte:head>

<main>
	<Landing />
	<AboutUs />
	<Service />
</main>
